interface MapSectionProps {
	title?: string
	mapUrl?: string
}

const MapSection = ({ title = 'Znajdź nas na mapie', mapUrl }: MapSectionProps) => {
	// Domyślny URL mapy (Empire State Building jako przykład)
	const defaultMapUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018526!2d-73.98784492401696!3d40.7484409713888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689876543210'

	return (
		<div className="bg-gray-100 py-12 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
				<div
					className="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full animate-bounce"
					style={{ animationDelay: '1s' }}></div>
				<div
					className="absolute bottom-20 left-32 w-12 h-12 bg-blue-600 rounded-full animate-pulse"
					style={{ animationDelay: '2s' }}></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
				<div className="map-container h-96 md:h-[400px] rounded-xl overflow-hidden shadow-lg relative group">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
					<iframe
						src={mapUrl || defaultMapUrl}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-full transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			</div>
		</div>
	)
}

export default MapSection
