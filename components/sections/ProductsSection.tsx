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
			name: 'Standardowa bezpieczna instalacja elektryczna',
			description:
				'Sprawdzone rozwiązanie dla każdego domu to klasyczna instalacja elektryczna, która zapewnia bezpieczne i funkcjonalne zasilanie całego budynku.',
			image:
				'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			features: [
				'Profesjonalna instalacja zgodna z normami',
				'Bezpieczeństwo użytkowników na pierwszym miejscu',
				'Długoterminowa gwarancja i wsparcie',
				'Optymalizacja kosztów eksploatacji',
			],
			category: 'hub' as const,
			order: 1,
		},
		{
			_id: '2',
			name: 'Instalacja typu Smart Dom',
			description:
				'Nowoczesny dom – pełna automatyzacja i wygoda! Kompleksowa instalacja inteligentnego domu oparta na przewodowej lub bezprzewodowej technologii.',
			image:
				'https://images.unsplash.com/photo-1590664863585-a0c5277f9d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			features: [
				'Sterowanie oświetleniem, roletami, ogrzewaniem',
				'Aplikacja mobilna do zdalnego zarządzania',
				'Automatyczne scenariusze i harmonogramy',
				'Oszczędność energii do 30%',
			],
			category: 'climate' as const,
			order: 2,
		},
		{
			_id: '3',
			name: 'Niezależna instalacja dla sieci LAN',
			description:
				'Szybki internet i niezawodna komunikacja w całym domu! Oddzielna instalacja strukturalna pod przewodową sieć komputerową i multimedia.',
			image:
				'https://images.unsplash.com/photo-1592155931584-901a157b0607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			features: [
				'Gniazda LAN w każdym pomieszczeniu',
				'Centralne zarządzanie siecią (szafa RACK)',
				'Przygotowanie pod systemy monitoringu IP',
				'Stabilne połączenie dla pracy zdalnej',
			],
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
						<div key={product._id} className="card-dark service-card rounded-xl p-6 flex flex-col">
							<div className="flex-shrink-0 flex items-center justify-center mb-4">
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
							<div className="flex-grow flex flex-col">
								<h3 className="text-xl font-semibold text-primary-dark mb-3">{product.name}</h3>
								<p className="text-secondary-dark mb-4 leading-relaxed">{product.description}</p>
								<div className="flex justify-center mt-auto">
									<button
										onClick={goToProductsPage}
										className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300">
										Dowiedź się więcej
									</button>
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
