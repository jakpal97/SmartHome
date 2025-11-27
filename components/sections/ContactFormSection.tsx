'use client'

import { useState } from 'react'

interface ContactFormSectionProps {
	title?: string
	departments?: string[]
}

const ContactFormSection = ({ title = 'Wyślij nam wiadomość', departments = [] }: ContactFormSectionProps) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		department: '',
		message: '',
		agree: false,
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
		type: null,
		message: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value, type } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
		}))
		// Reset status przy zmianie pola
		if (submitStatus.type) {
			setSubmitStatus({ type: null, message: '' })
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Walidacja
		if (!formData.name || !formData.email || !formData.subject || !formData.message) {
			setSubmitStatus({
				type: 'error',
				message: 'Proszę wypełnić wszystkie wymagane pola.',
			})
			return
		}

		if (!formData.agree) {
			setSubmitStatus({
				type: 'error',
				message: 'Proszę zaakceptować politykę prywatności.',
			})
			return
		}

		setIsSubmitting(true)
		setSubmitStatus({ type: null, message: '' })

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					department: formData.department,
					message: formData.message,
					formType: 'contact',
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
				subject: '',
				department: '',
				message: '',
				agree: false,
			})

			// Automatyczne ukrycie komunikatu sukcesu po 5 sekundach
			setTimeout(() => {
				setSubmitStatus({ type: null, message: '' })
			}, 5000)
		} catch (error) {
			setSubmitStatus({
				type: 'error',
				message: error instanceof Error ? error.message : 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="form-container-dark shadow rounded-lg overflow-hidden">
			<div className="px-6 py-5 form-header-dark">
				<h3 className="text-lg font-medium text-primary-dark">{title}</h3>
			</div>
			<div className="px-6 py-5">
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{/* Name Field */}
						<div className="relative">
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								className="input-dark block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none transition-all duration-300"
								placeholder=" "
							/>
							<label
								htmlFor="name"
								className="form-label-floating absolute left-4 transition-all duration-300 pointer-events-none top-1/2 -translate-y-1/2 text-base">
								Imię i nazwisko *
							</label>
						</div>

						{/* Email Field */}
						<div className="relative">
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="input-dark block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none transition-all duration-300"
								placeholder=" "
							/>
							<label
								htmlFor="email"
								className="form-label-floating absolute left-4 transition-all duration-300 pointer-events-none top-1/2 -translate-y-1/2 text-base">
								Adres email *
							</label>
						</div>
					</div>

					{/* Subject Field */}
					<div className="relative">
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleInputChange}
							className="input-dark block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none transition-all duration-300"
							placeholder=" "
						/>
						<label
							htmlFor="subject"
							className="form-label-floating absolute left-4 transition-all duration-300 pointer-events-none top-1/2 -translate-y-1/2 text-base">
							Temat *
						</label>
					</div>

					{/* Department Select */}
					{departments.length > 0 && (
						<div className="relative">
							<label htmlFor="department" className="form-label-dark block text-sm font-medium mb-2">
								Wybierz dział
							</label>
							<select
								id="department"
								name="department"
								value={formData.department}
								onChange={handleInputChange}
								className="select-dark block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-dark focus:border-accent-dark transition-all duration-300">
								<option value="">Wybierz dział</option>
								{departments.map((dept, index) => (
									<option key={index} value={dept}>
										{dept}
									</option>
								))}
							</select>
						</div>
					)}

					{/* Message Field */}
					<div className="relative">
						<textarea
							id="message"
							name="message"
							rows={5}
							value={formData.message}
							onChange={handleInputChange}
							className="input-dark block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none transition-all duration-300 resize-none"
							placeholder=" "
						/>
						<label
							htmlFor="message"
							className="form-label-floating absolute left-4 transition-all duration-300 pointer-events-none top-6 text-base">
							Twoja wiadomość *
						</label>
					</div>

					{/* Privacy Policy Checkbox */}
					<div className="flex items-start space-x-3">
						<input
							id="agree"
							name="agree"
							type="checkbox"
							checked={formData.agree}
							onChange={handleInputChange}
							className="checkbox-dark h-5 w-5 mt-0.5 rounded focus:ring-2 focus:ring-accent-dark"
						/>
						<label htmlFor="agree" className="text-sm text-secondary-dark leading-relaxed">
							Zgadzam się z{' '}
							<a href="#" className="text-accent-dark hover:text-blue-400 underline font-medium">
								polityką prywatności
							</a>{' '}
							i wyrażam zgodę na przetwarzanie moich danych osobowych *
						</label>
					</div>

					{/* Status Message */}
					{submitStatus.type && (
						<div
							className={`p-4 rounded-lg ${
								submitStatus.type === 'success'
									? 'bg-green-500/20 text-green-400 border border-green-500/30'
									: 'bg-red-500/20 text-red-400 border border-red-500/30'
							}`}>
							{submitStatus.message}
						</div>
					)}

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							className={`btn-primary-dark w-full flex justify-center items-center py-3 px-4 rounded-md shadow-sm text-sm font-medium transition-all duration-300 ${
								isSubmitting
									? 'opacity-50 cursor-not-allowed'
									: 'transform hover:scale-105'
							}`}>
							{isSubmitting ? (
								<>
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
								</>
							) : (
								<>
									<i className="fas fa-paper-plane mr-2"></i>
									Wyślij wiadomość
								</>
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactFormSection
