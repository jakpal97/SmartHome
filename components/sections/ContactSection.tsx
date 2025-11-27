'use client'

import { useState } from 'react'
import Link from 'next/link'

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
		type: null,
		message: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
		// Reset status przy zmianie pola
		if (submitStatus.type) {
			setSubmitStatus({ type: null, message: '' })
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus({ type: null, message: '' })

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					formType: 'main',
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error || 'Wystąpił błąd podczas wysyłania wiadomości.')
			}

			setSubmitStatus({
				type: 'success',
				message: 'Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.',
			})

			// Reset formularza po sukcesie
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: '',
			})

			// Automatyczne ukrycie komunikatu sukcesu po 5 sekundach
			setTimeout(() => {
				setSubmitStatus({ type: null, message: '' })
			}, 5000)
		} catch (error) {
			setSubmitStatus({
				type: 'error',
				message:
					error instanceof Error
						? error.message
						: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section id="contact" className="section-alt-dark py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
						Gotowy <span className="text-blue-500">na transoformację</span> Swojego domu?
					</h2>
					<p className="text-lg text-secondary-dark max-w-2xl mx-auto">
						Jesteśmy tutaj, aby pomóc i odpowiedzieć na wszelkie pytania. Czekamy na kontakt z Tobą.
					</p>
				</div>

				<div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
					<div className="mb-12 lg:mb-0">
						<div className="space-y-6">
							<div className="flex items-start">
								<div className="flex-shrink-0">
									<i className="fas fa-phone-alt text-blue-500 text-xl"></i>
								</div>
								<div className="ml-3">
									<p className="text-secondary-dark">Telefon</p>
									<p className="text-lg font-medium text-primary-dark">+48 731 385 479</p>
								</div>
							</div>
							<div className="flex items-start">
								<div className="flex-shrink-0">
									<i className="fas fa-envelope text-blue-500 text-xl"></i>
								</div>
								<div className="ml-3">
									<p className="text-secondary-dark">Email</p>
									<p className="text-lg font-medium text-primary-dark">biuro@synetiq.pl</p>
								</div>
							</div>
						</div>
					</div>
					<div className="card-dark rounded-xl p-8">
						<h3 className="text-2xl font-semibold text-primary-dark mb-6">Napisz do nas ! </h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
									Imię
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									className="input-dark w-full px-4 py-3 rounded-lg focus:outline-none"
									placeholder="Your name"
									required
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="input-dark w-full px-4 py-3 rounded-lg focus:outline-none"
									placeholder="your@email.com"
									required
								/>
							</div>
							<div>
								<label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
									Numer Telefonu
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									className="input-dark w-full px-4 py-3 rounded-lg focus:outline-none"
									placeholder="Your phone number"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
									Wiadomość
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									value={formData.message}
									onChange={handleInputChange}
									className="input-dark w-full px-4 py-3 rounded-lg focus:outline-none resize-none"
									placeholder="Tell us about your smart home needs..."
									required
								/>
							</div>
							{submitStatus.type && (
								<div
									className={`p-4 rounded-lg mb-4 ${
										submitStatus.type === 'success'
											? 'bg-green-500/20 text-green-400 border border-green-500/30'
											: 'bg-red-500/20 text-red-400 border border-red-500/30'
									}`}>
									{submitStatus.message}
								</div>
							)}
							<button
								type="submit"
								disabled={isSubmitting}
								className={`bg-blue-500 w-full px-6 py-3 font-medium rounded-lg transition duration-300 ${
									isSubmitting
										? 'opacity-50 cursor-not-allowed'
										: 'cursor-pointer hover:bg-blue-600 transform hover:scale-105'
								}`}>
								{isSubmitting ? (
									<span className="flex items-center justify-center">
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Wysyłanie...
									</span>
								) : (
									'Wyślij wiadomość'
								)}
							</button>
						</form>
						<div className="text-center mt-4">
							<Link
								href="/kontakt"
								className="text-blue-500 hover:text-blue-400 text-sm font-medium underline transition duration-300">
								Przejdź do pełnej strony kontaktowej →
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
