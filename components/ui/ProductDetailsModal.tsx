'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Product {
	_id: string
	name: string
	description: string
	price: string
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

interface ProductDetailsModalProps {
	isOpen: boolean
	onClose: () => void
	product: Product | null
}

const ProductDetailsModal = ({ isOpen, onClose, product }: ProductDetailsModalProps) => {
	if (!product) return null

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={handleBackdropClick}>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-opacity-60 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>

					{/* Modal Content */}
					<motion.div
						className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
						initial={{ scale: 0.8, opacity: 0, y: 50 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.8, opacity: 0, y: 50 }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
							<i className="fas fa-times text-gray-300 text-lg" />
						</button>

						{/* Product Image */}
						<div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
							{product.image ? (
								<Image src={urlFor(product.image).url()} alt={product.name} fill className="object-cover" />
							) : (
								<div className="flex items-center justify-center h-full">
									<i className="fas fa-cube text-8xl text-gray-400" />
								</div>
							)}

							

							
						</div>

						{/* Content Section */}
						<div className="p-8">
							<motion.h2
								className="text-3xl font-bold text-white mb-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}>
								{product.name}
							</motion.h2>

							<motion.p
								className="text-gray-300 text-lg leading-relaxed mb-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}>
								{product.description}
							</motion.p>

							{/* Features List */}
							{product.features && product.features.length > 0 && (
								<motion.div
									className="mb-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}>
									<h3 className="text-xl font-semibold text-white mb-4">Kluczowe funkcje:</h3>
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
										{product.features.map((feature, index) => (
											<motion.li
												key={index}
												className="flex items-center text-gray-300"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.4 + index * 0.1 }}>
												<i className="fas fa-check-circle text-green-400 mr-3" />
												{feature}
											</motion.li>
										))}
									</ul>
								</motion.div>
							)}

							{/* Product Benefits */}
							{/* <motion.div
								className="mb-8 bg-gray-800 rounded-lg p-6 border border-gray-700"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}>
								<h3 className="text-xl font-semibold text-white mb-4">Dlaczego warto wybrać ten produkt?</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="flex items-center">
										<i className="fas fa-award text-blue-400 mr-3 text-lg" />
										<span className="text-gray-300">Najwyższa jakość</span>
									</div>
									<div className="flex items-center">
										<i className="fas fa-tools text-blue-400 mr-3 text-lg" />
										<span className="text-gray-300">Profesjonalna instalacja</span>
									</div>
									<div className="flex items-center">
										<i className="fas fa-shield-alt text-blue-400 mr-3 text-lg" />
										<span className="text-gray-300">Gwarancja producenta</span>
									</div>
									<div className="flex items-center">
										<i className="fas fa-headset text-blue-400 mr-3 text-lg" />
										<span className="text-gray-300">Wsparcie 24/7</span>
									</div>
								</div>
							</motion.div> */}

							{/* Action Buttons */}
							<motion.div
								className="flex flex-col sm:flex-row gap-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}>
								<button
									onClick={() => {
										window.location.href = '/kontakt'
									}}
									className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
									<i className="fas fa-shopping-cart mr-2" />
									Zamów teraz
								</button>
								<button
									onClick={() => {
										window.location.href = '/kontakt'
									}}
									className="flex-1 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white py-4 px-6 rounded-lg font-medium transition-all duration-300">
									<i className="fas fa-comments mr-2" />
									Zapytaj o szczegóły
								</button>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ProductDetailsModal
