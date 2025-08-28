'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Product } from '@/types/sanity'

interface ProductsSectionProps {
	products: Product[]
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
	const goToProductsPage = () => {
		window.location.href = '/produkty'
	}

	// Default products if none from Sanity
	const defaultProducts = [
		{
			_id: '1',
			name: 'Nexus Hub Pro',
			description: 'The brain of your smart home with AI-powered automation',
			price: 299,
			image:
				'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			features: ['AI Learning', 'Voice Control', '100+ Device Support', 'Energy Monitoring'],
			category: 'hub' as const,
			order: 1,
		},
		{
			_id: '2',
			name: 'Climate Controller',
			description: 'Intelligent thermostat that learns your schedule',
			price: 199,
			image:
				'https://images.unsplash.com/photo-1590664863585-a0c5277f9d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			features: ['Auto-Scheduling', 'Energy Reports', 'Geofencing', 'Air Quality Monitoring'],
			category: 'climate' as const,
			order: 2,
		},
		{
			_id: '3',
			name: 'VisionCam 360',
			description: '4K security camera with AI recognition',
			price: 249,
			image:
				'https://images.unsplash.com/photo-1592155931584-901a157b0607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			features: ['4K Resolution', 'Person Detection', 'Night Vision', 'Two-Way Audio'],
			category: 'security' as const,
			order: 3,
		},
	]

	const displayProducts = products.length > 0 ? products : defaultProducts

	return (
		<section id="products" className="section-dark py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
						Nasze <span className="text-blue-500"> Usługi</span>
					</h2>
					<p className="text-lg text-secondary-dark max-w-2xl mx-auto">
						Poznaj naszą ofertę inteligentnych urządzeń domowych zaprojektowanych z myślą o bezproblemowej integracji.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayProducts.map(product => (
						<div key={product._id} className="card-dark device-card rounded-xl overflow-hidden h-96 relative">
							<div className="device-inner w-full h-full">
								<div className="device-front p-6 flex flex-col h-full">
									<div className="flex-grow flex items-center justify-center">
										{product.image && typeof product.image === 'object' && 'asset' in product.image ? (
											<Image
												src={urlFor(product.image).width(400).height(300).url()}
												alt={product.name}
												width={400}
												height={300}
												className="w-full h-48 object-contain"
											/>
										) : (
											<img
												src={typeof product.image === 'string' ? product.image : ''}
												alt={product.name}
												className="w-full h-48 object-contain"
											/>
										)}
									</div>
									<div>
										<h3 className="text-xl font-semibold text-primary-dark mb-2">{product.name}</h3>
										<p className="text-secondary-dark mb-4">{product.description}</p>
										<div className="flex justify-between items-center">
											<span className="text-blue-500font-bold">${product.price}</span>
											<button className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300">
												Dowiedź się więcej
											</button>
										</div>
									</div>
								</div>
								<div className="device-back bg-blue-500 text-white p-6 flex flex-col justify-center">
									<h3 className="text-xl font-semibold mb-4">{product.name}  </h3>
									<ul className="space-y-2">
										{product.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center">
												<i className="fas fa-check mr-2"></i>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<button
						onClick={goToProductsPage}
						className="bg-blue-500 inline-flex items-center px-6 py-3 text-base font-medium rounded-md">
						Zobacz wszystkie produkty
						<i className="fas fa-arrow-right ml-2"></i>
					</button>
				</div>
			</div>
		</section>
	)
}

export default ProductsSection
