'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Category {
	name: string
	slug: { current: string }
	description: string
	icon?: string
	image?: {
		asset: {
			_ref: string
		}
		hotspot?: {
			x: number
			y: number
		}
	}
}

interface ProductModalProps {
	isOpen: boolean
	onClose: () => void
	category: Category | null
}

const ProductModal = ({ isOpen, onClose, category }: ProductModalProps) => {
	if (!category) return null

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
						className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>

					{/* Modal Content */}
					<motion.div
						className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
						initial={{ scale: 0.8, opacity: 0, y: 50 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.8, opacity: 0, y: 50 }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
							<i className="fas fa-times text-gray-600 text-lg" />
						</button>

						{/* Image Section */}
						<div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-500 overflow-hidden">
							{category.image ? (
								<Image src={urlFor(category.image).url()} alt={category.name} fill className="object-cover" />
							) : (
								<div className="flex items-center justify-center h-full">
									<motion.i
										className={`${category.icon || 'fas fa-cube'} text-8xl text-white`}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
									/>
								</div>
							)}
							<div className="absolute inset-0 bg-black bg-opacity-20" />
						</div>

						{/* Content Section */}
						<div className="p-8">
							<motion.h2
								className="text-3xl font-bold text-gray-900 mb-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}>
								{category.name}
							</motion.h2>

							<motion.p
								className="text-gray-600 text-lg leading-relaxed mb-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}>
								{category.description}
							</motion.p>

							{/* Features List */}
							<motion.div
								className="mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}>
								<h3 className="text-xl font-semibold text-gray-800 mb-4">Kluczowe funkcje:</h3>
								<ul className="space-y-3">
									{getCategoryFeatures(category.name).map((feature, index) => (
										<motion.li
											key={index}
											className="flex items-center text-gray-600"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.4 + index * 0.1 }}>
											<i className="fas fa-check-circle text-green-500 mr-3" />
											{feature}
										</motion.li>
									))}
								</ul>
							</motion.div>

							{/* Action Buttons */}
							<motion.div
								className="flex flex-col sm:flex-row gap-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}>
								<button
									onClick={() => {
										window.location.href = `/produkty/${category.slug.current}`
									}}
									className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
									<i className="fas fa-eye mr-2" />
									Zobacz wszystkie produkty
								</button>
								<button
									onClick={() => {
										window.location.href = '/kontakt'
									}}
									className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
									<i className="fas fa-comments mr-2" />
									Skontaktuj się
								</button>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

// Helper function to get features based on category
const getCategoryFeatures = (categoryName: string): string[] => {
	const features: { [key: string]: string[] } = {
		'Oświetlenie Inteligentne': [
			'Zdalne sterowanie przez aplikację mobilną',
			'Automatyczne dostosowanie do pory dnia',
			'Oszczędność energii do 80%',
			'Integracja z asystentami głosowymi',
			'Scenariusze oświetleniowe',
		],
		Bezpieczeństwo: [
			'Monitoring 24/7 w jakości 4K',
			'Wykrywanie ruchu z powiadomieniami',
			'Dostęp zdalny przez aplikację',
			'Nagrywanie w chmurze',
			'Integracja z systemami alarmowymi',
		],
		Klimatyzacja: [
			'Inteligentne termostaty',
			'Automatyczne dostosowanie temperatury',
			'Oszczędność energii do 30%',
			'Sterowanie strefowe',
			'Harmonogramy grzania/chłodzenia',
		],
		'Audio & Video': [
			'Systemy multiroom',
			'Streaming wysokiej jakości',
			'Sterowanie głosowe',
			'Synchronizacja między pomieszczeniami',
			'Integracja z platformami muzycznymi',
		],
		'Automatyka Domowa': [
			'Centralne sterowanie wszystkimi urządzeniami',
			'Scenariusze automatyczne',
			'Integracja z czujnikami',
			'Aplikacja mobilna',
			'Harmonogramy i timery',
		],
		Energia: [
			'Panele słoneczne najnowszej generacji',
			'Magazyny energii',
			'Inteligentne zarządzanie energią',
			'Monitoring zużycia w czasie rzeczywistym',
			'Optymalizacja kosztów energii',
		],
	}

	return (
		features[categoryName] || [
			'Wysokiej jakości komponenty',
			'Profesjonalna instalacja',
			'Gwarancja producenta',
			'Wsparcie techniczne 24/7',
		]
	)
}

export default ProductModal
