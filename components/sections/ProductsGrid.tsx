'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import ProductDetailsModal from '@/components/ui/ProductDetailsModal'

interface Product {
	_id: string
	name: string
	description: string
	image?: {
		asset: {
			_ref: string
		}
		hotspot?: {
			x: number
			y: number
		}
	}
	features?: string[]
	category?: string
}

interface ProductsGridProps {
	products: Product[]
	title?: string
	subtitle?: string
	description?: string
}

const ProductsGrid = ({ products, title, subtitle, description }: ProductsGridProps) => {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleProductClick = (product: Product) => {
		setSelectedProduct(product)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setSelectedProduct(null)
	}

	return (
		<section className="py-20 section-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				{(title || subtitle || description) && (
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}>
						{subtitle && <p className="text-blue-500 font-semibold text-lg mb-2 uppercase tracking-wide">{subtitle}</p>}
						{title && <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">{title}</h2>}
						{description && <p className="text-xl text-secondary-dark max-w-3xl mx-auto">{description}</p>}
					</motion.div>
				)}

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product, index) => (
						<motion.div
							key={product._id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								type: 'spring',
								stiffness: 100,
							}}
							viewport={{ once: true }}
							whileHover={{ y: -5 }}
							className="group">
							<div className="card-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
								{/* Product Image */}
								<div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
									{product.image ? (
										<Image
											src={urlFor(product.image).url()}
											alt={product.name}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-300"
										/>
									) : (
										<div className="flex items-center justify-center h-full">
											<i className="fas fa-cube text-4xl text-gray-400" />
										</div>
									)}
									Category Badge
									{/* {product.category && ( */}
									{/* <div className="absolute top-4 left-4"> */}
									{/* <span className="bg-blue-500text-white px-3 py-1 rounded-full text-sm font-medium"> */}
									{/* {product.category} */}
									{/* </span> */}
									{/* </div> */}
									{/* // )} */}
								</div>

								{/* Product Content */}
								<div className="p-6">
									<h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent-dark transition-colors duration-300">
										{product.name}
									</h3>
									<p className="text-secondary-dark leading-relaxed mb-4 line-clamp-3">{product.description}</p>

									{/* Features */}
									{product.features && product.features.length > 0 && (
										<div className="mb-4">
											<h4 className="text-sm font-semibold text-primary-dark mb-2">Kluczowe funkcje:</h4>
											<ul className="space-y-1">
												{product.features.slice(0, 3).map((feature, idx) => (
													<li key={idx} className="flex items-center text-sm text-secondary-dark">
														<i className="fas fa-check text-green-400 mr-2 text-xs" />
														{feature}
													</li>
												))}
											</ul>
										</div>
									)}

									{/* Action Buttons */}
									<div className="flex space-x-3">
										<button
											onClick={() => handleProductClick(product)}
											className="flex-1 bg-blue-500 text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer">
											Szczegóły
										</button>
										<Link
											href="/kontakt"
											className="flex-1 btn-secondary-dark text-center py-3 px-4 rounded-lg font-medium transition-all duration-300">
											Zapytaj
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* No Products Message */}
				{products.length === 0 && (
					<motion.div
						className="text-center py-16"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}>
						<i className="fas fa-box-open text-6xl text-secondary-dark mb-4" />
						<h3 className="text-2xl font-bold text-primary-dark mb-2">Brak produktów</h3>
						<p className="text-secondary-dark mb-6">Obecnie nie ma dostępnych produktów w tej kategorii.</p>
						<Link
							href="/kontakt"
							className="btn-primary-dark inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors duration-300">
							<i className="fas fa-comments mr-2" />
							Skontaktuj się z nami
						</Link>
					</motion.div>
				)}
			</div>

			{/* Product Details Modal */}
			<ProductDetailsModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
		</section>
	)
}

export default ProductsGrid
