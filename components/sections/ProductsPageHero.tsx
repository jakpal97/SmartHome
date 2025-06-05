'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface ProductsPageHeroProps {
	data: {
		title: string
		subtitle?: string
		description?: string
		backgroundImage?: {
			asset: {
				_ref: string
			}
			hotspot?: {
				x: number
				y: number
			}
		}
	}
}

const ProductsPageHero = ({ data }: ProductsPageHeroProps) => {
	return (
		<div className="relative hero-dark overflow-hidden min-h-[70vh] flex items-center">
			{/* Background Image */}
			{data.backgroundImage && (
				<div className="absolute inset-0 z-0">
					<Image
						src={urlFor(data.backgroundImage).url()}
						alt="Products Background"
						fill
						className="object-cover opacity-20"
						priority
					/>
				</div>
			)}

			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-10">
				<motion.div
					className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20"
					animate={{
						y: [0, -20, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20"
					animate={{
						y: [0, 20, 0],
						x: [0, -10, 0],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20"
					animate={{
						rotate: [0, 360],
						scale: [1, 1.3, 1],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="mb-8">
						<motion.h1
							className="text-5xl md:text-7xl font-bold text-primary-dark mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}>
							{data.title}
							{data.subtitle && (
								<span className="block text-blue-500 text-4xl md:text-6xl mt-2">{data.subtitle}</span>
							)}
						</motion.h1>

						{data.description && (
							<motion.p
								className="text-xl md:text-2xl text-secondary-dark max-w-3xl mx-auto leading-relaxed"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}>
								{data.description}
							</motion.p>
						)}
					</motion.div>

					{/* Animated Icons */}
					<motion.div
						className="flex justify-center space-x-8 mt-12"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}>
						{[
							{ icon: 'fas fa-home', delay: 0 },
							{ icon: 'fas fa-lightbulb', delay: 0.1 },
							{ icon: 'fas fa-shield-alt', delay: 0.2 },
							{ icon: 'fas fa-thermometer-half', delay: 0.3 },
							{ icon: 'fas fa-music', delay: 0.4 },
						].map((item, index) => (
							<motion.div
								key={index}
								className="text-primary-dark text-3xl md:text-4xl"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.5,
									delay: 0.8 + item.delay,
									type: 'spring',
									stiffness: 200,
								}}
								whileHover={{
									scale: 1.2,
									color: '#6366f1',
								}}>
								<i className={item.icon}></i>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.2 }}>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="text-primary-dark text-2xl">
					<i className="fas fa-chevron-down"></i>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default ProductsPageHero
