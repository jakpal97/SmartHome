'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProductsCTAProps {
	data?: {
		title?: string
		description?: string
		buttonText?: string
		buttonLink?: string
	} | null
}

const ProductsCTA = ({ data }: ProductsCTAProps) => {
	// Zabezpieczenie na wypadek gdy data jest null lub undefined
	const safeData = data || {}

	return (
		<section className="py-20 bg-accent-dark relative overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"
					animate={{
						y: [0, -30, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10"
					animate={{
						y: [0, 20, 0],
						x: [0, -15, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-10"
					animate={{
						rotate: [0, 360],
						scale: [1, 1.5, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						{safeData.title || 'Gotowy na transformację swojego domu?'}
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
						{safeData.description ||
							'Skontaktuj się z naszymi ekspertami i otrzymaj bezpłatną konsultację. Pomożemy Ci wybrać idealne rozwiązania.'}
					</p>

					{/* Action Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}>
						<Link
							href={safeData.buttonLink || '/kontakt'}
							className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
							<i className="fas fa-calendar-check mr-3"></i>
							{safeData.buttonText || 'Bezpłatna Konsultacja'}
						</Link>

						<Link
							href="tel:+48123456789"
							className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
							<i className="fas fa-phone mr-3"></i>
							Zadzwoń teraz
						</Link>
					</motion.div>

					{/* Features */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 "
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}>
						{[
							{
								icon: 'fas fa-user-tie',
								title: 'Eksperci',
								description: 'Doświadczony zespół specjalistów',
							},
							{
								icon: 'fas fa-clock',
								title: '24/7 Wsparcie',
								description: 'Pomoc techniczna przez całą dobę',
							},
							{
								icon: 'fas fa-shield-check',
								title: 'Gwarancja',
								description: 'Pełna gwarancja na wszystkie produkty',
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								className="text-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
								viewport={{ once: true }}>
								<motion.div
									className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4"
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ type: 'spring', stiffness: 300 }}>
									<i className={`${feature.icon} text-2xl text-white`}></i>
								</motion.div>
								<h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
								<p className="text-blue-100 text-sm">{feature.description}</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default ProductsCTA
