'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import { Hero } from '@/types/sanity'
import SmartHomeIconsAnimation from '@/components/ui/SmartHomeIconsAnimation'
import Magnet from '@/components/ui/Magnet'
// import LightAnimation from '@/components/ui/LightAnimation'
// import CircleAnimation from '@/components/ui/CircleAnimation' // Odkomentuj, żeby wrócić do kulek

interface HeroSectionProps {
	hero: Hero | null
}

const HeroSection = ({ hero }: HeroSectionProps) => {
	// Debug log - usuń po sprawdzeniu
	console.log('HeroSection received data:', hero)

	// Default hero data if none from Sanity
	const defaultHero = {
		title: 'Smart Living',
		subtitle: 'Redefined',
		description:
			'Experience the future of home automation with NexusHomes. Control, monitor, and optimize your living space with our cutting-edge smart home solutions.',
		primaryButtonText: 'Explore Products',
		secondaryButtonText: 'Learn More',
		heroImage: null,
	}

	const displayHero = hero || defaultHero

	return (
		<section id="home" className="hero-dark pb-16 md:pb-24 relative overflow-hidden min-h-screen flex items-center">
			{/* Animowane ikonki smart home w tle */}
			<SmartHomeIconsAnimation />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
					<motion.div
						className="text-center lg:text-left mb-12 lg:mb-0"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						{/* Hero Badge */}
						<motion.div
							className="inline-flex items-center gap-2 px-4 py-2 border-2
							border-blue-500 rounded-full text-sm mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<span>Nowa Era Inteligentnych Domów</span>
						</motion.div>

						<motion.h1
							className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6 leading-tight"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							{displayHero.title} <span className="text-blue-500">{displayHero.subtitle}</span>
						</motion.h1>
						<motion.p
							className="text-lg md:text-xl text-secondary-dark mb-8 max-w-lg mx-auto lg:mx-0"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}>
							{displayHero.description}
						</motion.p>
						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}>
							<Magnet padding={100} disabled={false} magnetStrength={2}>
								<motion.a
									href="#products"
									className="bg-blue-500 px-8 py-3 font-medium rounded-lg inline-flex items-center gap-2 text-white hover:bg-blue-600 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									{displayHero.primaryButtonText}
									<i className="fas fa-arrow-right"></i>
								</motion.a>
							</Magnet>
							<motion.a
								href="#features"
								className="btn-secondary-dark px-8 py-3 font-medium rounded-lg inline-flex items-center gap-2 hover:bg-gray-700 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								{displayHero.secondaryButtonText}
								<i className="fas fa-play"></i>
							</motion.a>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative flex justify-center items-center min-h-[400px]"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.3 }}>
						<div className="w-full flex justify-center">
							{displayHero.heroImage ? (
								<Image
									src={urlFor(displayHero.heroImage).width(900).height(900).url()}
									alt="Smart Home"
									width={800}
									height={600}
									className="rounded-2xl  max-w-full h-auto"
									priority
								/>
							) : (
								<Image
									src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									alt="Smart Home"
									className="rounded-2xl shadow-xl max-w-full h-auto object-contain"
									style={{ width: 'auto', height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
								/>
							)}
						</div>
						{/* Usunięto kulki z obrazka */}
					</motion.div>
				</div>
			</div>

			<motion.div
				className="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}>
				<motion.a
					href="#features"
					className="text-primary-dark hover:text-accent-dark transition-colors duration-300"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}>
					<i className="fas fa-chevron-down text-2xl"></i>
				</motion.a>
			</motion.div>
		</section>
	)
}

export default HeroSection
