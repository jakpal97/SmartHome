'use client'

import { Feature } from '@/types/sanity'

interface FeaturesSectionProps {
	features: Feature[]
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
	// Default features if none from Sanity
	const defaultFeatures = [
		{
			_id: '1',
			title: 'Smart Lighting',
			description: 'Automated lighting that adapts to your daily routine and preferences',
			icon: 'lightbulb',
			order: 1,
		},
		{
			_id: '2',
			title: 'Climate Control',
			description: 'Intelligent temperature management for optimal comfort and energy efficiency',
			icon: 'temperature-low',
			order: 2,
		},
		{
			_id: '3',
			title: 'Security System',
			description: 'Advanced security monitoring with real-time alerts and remote access',
			icon: 'shield-alt',
			order: 3,
		},
		{
			_id: '4',
			title: 'Voice Assistant',
			description: 'Control your entire home with simple voice commands',
			icon: 'robot',
			order: 4,
		},
		{
			_id: '5',
			title: 'Energy Management',
			description: 'Monitor and optimize your home energy consumption',
			icon: 'bolt',
			order: 5,
		},
		{
			_id: '6',
			title: 'Smart Automation',
			description: 'Create custom scenarios and automate daily routines',
			icon: 'cog',
			order: 6,
		},
	]

	const displayFeatures = features.length > 0 ? features : defaultFeatures

	const getIconClass = (iconName: string) => {
		const iconMap: { [key: string]: string } = {
			lightbulb: 'fas fa-lightbulb',
			'temperature-low': 'fas fa-temperature-low',
			'shield-alt': 'fas fa-shield-alt',
			robot: 'fas fa-robot',
			bolt: 'fas fa-bolt',
			scroll: 'fas fa-scroll',
			home: 'fas fa-home',
			wifi: 'fas fa-wifi',
			'mobile-alt': 'fas fa-mobile-alt',
			cog: 'fas fa-cog',
		}
		return iconMap[iconName] || 'fas fa-star'
	}

	return (
		<section id="features" className="section-alt-dark py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
					Funkcje <span className="text-blue-500">Smart Home</span>
					</h2>
					<p className="text-lg text-secondary-dark max-w-2xl mx-auto">
					Dowiedz się, jak NexusHomes może odmienić Twoje codzienne życie dzięki tym innowacyjnym funkcjom:
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayFeatures.map(feature => (
						<div
							key={feature._id}
							className="card-dark feature-card rounded-xl p-8 hover:shadow-xl transition duration-300 relative overflow-hidden">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
								<i className={`feature-icon ${getIconClass(feature.icon)} text-blue-500 text-2xl`}></i>
							</div>
							<h3 className="text-xl font-semibold text-primary-dark mb-3 text-center">{feature.title}</h3>
							<p className="text-secondary-dark text-center">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
