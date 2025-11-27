import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { name, email, phone, subject, department, message, formType } = body

		// Walidacja podstawowych pól
		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Proszę wypełnić wszystkie wymagane pola.' }, { status: 400 })
		}

		// Walidacja emaila
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: 'Nieprawidłowy adres email.' }, { status: 400 })
		}

		// Określenie odbiorcy na podstawie typu formularza
		const recipientEmail = process.env.CONTACT_EMAIL || 'biuro@synetiq.pl'

		// Budowanie treści emaila
		const emailSubject = subject || department || `Nowa wiadomość z formularza kontaktowego`
		const emailHtml = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<style>
						body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
						.container { max-width: 600px; margin: 0 auto; padding: 20px; }
						.header { background-color: #3b82f6; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
						.content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; }
						.field { margin-bottom: 15px; }
						.label { font-weight: bold; color: #1f2937; }
						.value { margin-top: 5px; color: #4b5563; }
						.message-box { background-color: white; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px; }
					</style>
				</head>
				<body>
					<div class="container">
						<div class="header">
							<h2>Nowa wiadomość z formularza kontaktowego</h2>
						</div>
						<div class="content">
							<div class="field">
								<div class="label">Imię i nazwisko:</div>
								<div class="value">${name}</div>
							</div>
							<div class="field">
								<div class="label">Email:</div>
								<div class="value">${email}</div>
							</div>
							${phone ? `
							<div class="field">
								<div class="label">Telefon:</div>
								<div class="value">${phone}</div>
							</div>
							` : ''}
							${subject ? `
							<div class="field">
								<div class="label">Temat:</div>
								<div class="value">${subject}</div>
							</div>
							` : ''}
							${department ? `
							<div class="field">
								<div class="label">Dział:</div>
								<div class="value">${department}</div>
							</div>
							` : ''}
							${formType ? `
							<div class="field">
								<div class="label">Typ formularza:</div>
								<div class="value">${formType === 'main' ? 'Strona główna' : 'Strona kontaktowa'}</div>
							</div>
							` : ''}
							<div class="field">
								<div class="label">Wiadomość:</div>
								<div class="message-box">
									${message.replace(/\n/g, '<br>')}
								</div>
							</div>
						</div>
					</div>
				</body>
			</html>
		`

		// Wysyłanie emaila przez Resend
		const { data, error } = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL || 'SmartHome <noreply@smarthome.pl>',
			to: [recipientEmail],
			replyTo: email,
			subject: emailSubject,
			html: emailHtml,
		})

		if (error) {
			console.error('Błąd Resend:', error)
			return NextResponse.json({ error: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.' }, { status: 500 })
		}

		return NextResponse.json({ success: true, message: 'Wiadomość została wysłana pomyślnie!', id: data?.id }, { status: 200 })
	} catch (error) {
		console.error('Błąd API:', error)
		return NextResponse.json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' }, { status: 500 })
	}
}

