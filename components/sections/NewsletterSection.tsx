'use client'

import { useState } from 'react'

const NewsletterSection = () => {
	const [email, setEmail] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would normally send the email to your newsletter service
		alert('Dziękujemy za subskrypcję!')
		setEmail('')
	}

	return (
		<section className="py-12 bg-blue-500 text-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h3 className="text-2xl font-bold mb-4">Stay Updated with Smart Home Trends</h3>
				<p className="mb-6 max-w-2xl mx-auto">
					Subscribe to our newsletter for the latest in home automation technology and exclusive offers.
				</p>
				<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
					<input
						type="email"
						placeholder="Your email address"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
						required
					/>
					<button
						type="submit"
						className="px-6 py-3 bg-white text-blue-500 font-medium rounded-lg shadow hover:bg-gray-100 transition duration-300">
						Subscribe
					</button>
				</form>
			</div>
		</section>
	)
}

export default NewsletterSection
