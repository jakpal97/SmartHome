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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would normally send the form data to your server
		alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.')
		setFormData({
			name: '',
			email: '',
			phone: '',
			message: '',
		})
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
							<button
								type="submit"
								className="bg-blue-500 cursor-pointer w-full px-6 py-3 font-medium rounded-lg transition duration-300">
								Wyślij wiadomość
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
