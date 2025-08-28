interface ContactInfo {
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

interface ContactInfoSectionProps {
	title?: string
	subtitle?: string
	description?: string
	contactInfo: ContactInfo
}

const ContactInfoSection = ({ title, subtitle, description, contactInfo }: ContactInfoSectionProps) => {
	return (
		<div className="py-12">
			{(title || subtitle || description) && (
				<div className="lg:text-center mb-16">
					{subtitle && <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">{subtitle}</h2>}
					{title && (
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
					)}
					{description && <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{description}</p>}
				</div>
			)}

			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{/* Office Card */}
				<div className="contact-card bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
					<div className="flex items-center">
						<div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
							<i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">{contactInfo.office.title}</h3>
							<p className="mt-1 text-gray-500 whitespace-pre-line">{contactInfo.office.address}</p>
						</div>
					</div>
				</div>

				{/* Phone Card */}
				<div className="contact-card bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
					<div className="flex items-center">
						<div className="flex-shrink-0 bg-green-100 rounded-md p-3">
							<i className="fas fa-phone-alt text-green-600 text-xl"></i>
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">{contactInfo.phone.title}</h3>
							<p className="mt-1 text-gray-500">
								{contactInfo.phone.number}
								<br />
								{contactInfo.phone.hours}
							</p>
						</div>
					</div>
				</div>

				{/* Email Card */}
				<div className="contact-card bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
					<div className="flex items-center">
						<div className="flex-shrink-0 bg-blue-500/20 rounded-md p-3">
							<i className="fas fa-envelope text-blue-500 text-xl"></i>
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">{contactInfo.email.title}</h3>
							<p className="mt-1 text-gray-500">
								{contactInfo.email.address}
								<br />
								{contactInfo.email.responseTime}
							</p>
						</div>
					</div>
				</div>

				{/* Live Chat Card */}
				<div className="contact-card bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
					<div className="flex items-center">
						<div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
							<i className="fas fa-headset text-yellow-600 text-xl"></i>
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">{contactInfo.liveChat.title}</h3>
							<p className="mt-1 text-gray-500">
								{contactInfo.liveChat.description}
								<br />
								{contactInfo.liveChat.availability}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactInfoSection
