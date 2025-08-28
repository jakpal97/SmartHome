'use client'

import ContactHeroSection from './ContactHeroSection'
import ContactFormSection from './ContactFormSection'
import MapSection from './MapSection'
import FAQSection from './FAQSection'

interface ContactPageData {
	title: string
	heroSection: {
		title: string
		subtitle?: string
		description?: string
	}
	contactInfo: {
		title?: string
		subtitle?: string
		description?: string
		office: {
			title: string
			address: string
		}
		phone: {
			title: string
			number: string
			hours: string
		}
		email: {
			title: string
			address: string
			responseTime: string
		}
		liveChat: {
			title: string
			description: string
			availability: string
		}
	}
	contactForm: {
		title?: string
		departments?: string[]
	}
	mapSection: {
		title?: string
		mapUrl?: string
	}
	faqSection: {
		title?: string
		subtitle?: string
		faqs: Array<{
			question: string
			answer: string
		}>
	}
}

interface ContactPageSectionProps {
	data: ContactPageData
}

const ContactPageSection = ({ data }: ContactPageSectionProps) => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<ContactHeroSection
				title={data.heroSection.title}
				subtitle={data.heroSection.subtitle}
				description={data.heroSection.description}
			/>

			{/* Contact Section */}
			<div className="py-12 contact-section-bg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="lg:text-center">
						{data.contactInfo.subtitle && (
							<h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
								{data.contactInfo.subtitle}
							</h2>
						)}
						{data.contactInfo.title && (
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
								{data.contactInfo.title}
							</p>
						)}
						{data.contactInfo.description && (
							<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">{data.contactInfo.description}</p>
						)}
					</div>

					<div className="mt-16">
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
							{/* Contact Cards - Left Column */}
							<div className="space-y-8">
								{/* Office Card */}
								{/* <div className="contact-card p-6 rounded-lg">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-blue-500/20 rounded-md p-3">
											<i className="fas fa-map-marker-alt text-blue-400 text-xl contact-icon"></i>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-white">{data.contactInfo.office.title}</h3>
											<p className="mt-1 text-gray-300 whitespace-pre-line">{data.contactInfo.office.address}</p>
										</div>
									</div>
								</div> */}

								{/* Phone Card */}
								<div className="contact-card p-6 rounded-lg">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-green-500/20 rounded-md p-3">
											<i className="fas fa-phone-alt text-green-400 text-xl contact-icon"></i>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-white">{data.contactInfo.phone.title}</h3>
											<p className="mt-1 text-gray-300">
												{data.contactInfo.phone.number}
												<br />
												{data.contactInfo.phone.hours}
											</p>
										</div>
									</div>
								</div>

								{/* Email Card */}
								<div className="contact-card p-6 rounded-lg">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-blue-500/20 rounded-md p-3">
											<i className="fas fa-envelope text-blue-400 text-xl contact-icon"></i>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-white">{data.contactInfo.email.title}</h3>
											<p className="mt-1 text-gray-300">
												{data.contactInfo.email.address}
												<br />
												{data.contactInfo.email.responseTime}
											</p>
										</div>
									</div>
								</div>

								{/* Live Chat Card */}
								{/* <div className="contact-card p-6 rounded-lg">
									<div className="flex items-center">
										<div className="flex-shrink-0 bg-yellow-500/20 rounded-md p-3">
											<i className="fas fa-headset text-yellow-400 text-xl contact-icon"></i>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-medium text-white">{data.contactInfo.liveChat.title}</h3>
											<p className="mt-1 text-gray-300">
												{data.contactInfo.liveChat.description}
												<br />
												{data.contactInfo.liveChat.availability}
											</p>
										</div>
									</div>
								</div> */}
							</div>

							{/* Contact Form - Right Columns */}
							<div className="lg:col-span-2">
								<ContactFormSection title={data.contactForm.title} departments={data.contactForm.departments} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section
			<MapSection title={data.mapSection.title} mapUrl={data.mapSection.mapUrl} /> */}

			{/* FAQ Section */}
			<FAQSection title={data.faqSection.title} subtitle={data.faqSection.subtitle} faqs={data.faqSection.faqs} />
		</div>
	)
}

export default ContactPageSection
