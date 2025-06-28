// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react'
// import { urlFor } from '@/sanity/lib/image'
// import ProductModal from '@/components/ui/ProductModal'

// interface Category {
// 	name: string
// 	slug: { current: string }
// 	description: string
// 	icon?: string
// 	image?: {
// 		asset: {
// 			_ref: string
// 		}
// 		hotspot?: {
// 			x: number
// 			y: number
// 		}
// 	}
// }

// interface ProductCategoriesProps {
// 	categories: Category[]
// }

// const ProductCategories = ({ categories }: ProductCategoriesProps) => {
// 	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
// 	const [isModalOpen, setIsModalOpen] = useState(false)

// 	const handleCategoryClick = (category: Category) => {
// 		setSelectedCategory(category)
// 		setIsModalOpen(true)
// 	}

// 	const closeModal = () => {
// 		setIsModalOpen(false)
// 		setSelectedCategory(null)
// 	}

// 	return (
// 		<section className="py-20 section-alt-dark">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<motion.div
// 					className="text-center mb-16"
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 					viewport={{ once: true }}>
// 					<h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
// 						Nasze <span className="text-blue-500">usługi</span>
// 					</h2>
// 					<p className="text-xl text-secondary-dark max-w-3xl mx-auto">
// 						Odkryj nasze rozwiązania podzielone na kategorie. Każda z nich oferuje innowacyjne produkty dostosowane do
// 						Twoich potrzeb.
// 					</p>
// 				</motion.div>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{categories.map((category, index) => (
// 						<motion.div
// 							key={category.slug.current}
// 							initial={{ opacity: 0, y: 50 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							transition={{
// 								duration: 0.6,
// 								delay: index * 0.1,
// 								type: 'spring',
// 								stiffness: 100,
// 							}}
// 							viewport={{ once: true }}
// 							whileHover={{ y: -10 }}
// 							className="group">
// 							<button onClick={() => handleCategoryClick(category)} className="w-full text-left">
// 								<div className="card-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
// 									{/* Image or Icon */}
// 									<div className="relative h-48 bg-gray-800 overflow-hidden">
// 										{category.image ? (
// 											<Image
// 												src={urlFor(category.image).url()}
// 												alt={category.name}
// 												fill
// 												className="object-cover group-hover:scale-110 transition-transform duration-300"
// 											/>
// 										) : (
// 											<div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-blue-500">
// 												<motion.i
// 													className={`${category.icon || 'fas fa-cube'} text-6xl text-white`}
// 													whileHover={{
// 														scale: 1.2,
// 														rotate: 10,
// 													}}
// 													transition={{ type: 'spring', stiffness: 300 }}
// 												/>
// 											</div>
// 										)}

// 										{/* Overlay */}
// 										<div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300" />
// 									</div>

// 									{/* Content */}
// 									<div className="p-6">
// 										<h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent-dark transition-colors duration-300">
// 											{category.name}
// 										</h3>
// 										<p className="text-secondary-dark leading-relaxed mb-4">{category.description}</p>

// 										{/* Arrow */}
// 										<div className="flex items-center text-blue-500font-medium group-hover:text-blue-400">
// 											<span className="mr-2">Sprawdź produkt</span>
// 											<motion.i
// 												className="fas fa-arrow-right"
// 												initial={{ x: 0 }}
// 												whileHover={{ x: 5 }}
// 												transition={{ type: 'spring', stiffness: 300 }}
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</button>
// 						</motion.div>
// 					))}
// 				</div>

// 				{/* Bottom CTA */}
// 				<motion.div
// 					className="text-center mt-16"
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8, delay: 0.3 }}
// 					viewport={{ once: true }}>
// 					<p className="text-lg text-secondary-dark mb-6">Nie możesz znaleźć tego, czego szukasz?</p>
// 					<Link
// 						href="/kontakt"
// 						className="bg-blue-500 inline-flex items-center px-8 py-4 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
// 						<i className="fas fa-comments mr-3"></i>
// 						Skontaktuj się z ekspertem
// 					</Link>
// 				</motion.div>
// 			</div>

// 			{/* Product Modal */}
// 			<ProductModal isOpen={isModalOpen} onClose={closeModal} category={selectedCategory} />
// 		</section>
// 	)
// }

// export default ProductCategories
