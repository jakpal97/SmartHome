'use client'

import { motion } from 'framer-motion'

const LightAnimation = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Główne promienie światła */}
			<motion.div
				className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-400/30 via-blue-500/20 to-transparent will-change-transform"
				initial={{ opacity: 0, scaleY: 0 }}
				animate={{
					opacity: [0, 0.8, 0.4, 0.9, 0],
					scaleY: [0.5, 1, 0.8, 1, 0.5],
					x: [-10, 0, 5, -3, 10],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-transparent will-change-transform"
				initial={{ opacity: 0, scaleY: 0 }}
				animate={{
					opacity: [0, 0.6, 0.5, 0.8, 0],
					scaleY: [0.5, 1, 0.9, 1, 0.5],
					x: [8, -3, 0, 5, -8],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					delay: 1,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-cyan-400/30 via-cyan-500/20 to-transparent will-change-transform"
				initial={{ opacity: 0, scaleY: 0 }}
				animate={{
					opacity: [0, 0.7, 0.3, 0.9, 0],
					scaleY: [0.5, 1, 0.7, 1, 0.5],
					x: [5, -5, 3, -8, 10],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					delay: 2,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			{/* Poziome promienie */}
			<motion.div
				className="absolute left-0 top-1/4 h-1 w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent will-change-transform"
				initial={{ opacity: 0, scaleX: 0 }}
				animate={{
					opacity: [0, 0.6, 0.4, 0.8, 0],
					scaleX: [0.3, 1, 0.8, 1, 0.3],
					y: [-5, 3, -3, 5, -5],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					delay: 0.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute left-0 bottom-1/3 h-1 w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent will-change-transform"
				initial={{ opacity: 0, scaleX: 0 }}
				animate={{
					opacity: [0, 0.5, 0.5, 0.7, 0],
					scaleX: [0.3, 1, 0.9, 1, 0.3],
					y: [8, -5, 0, 3, 8],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					delay: 2.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			{/* Świetlne punkty/gwiazdy */}
			<motion.div
				className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 will-change-transform"
				animate={{
					scale: [0.5, 1.5, 0.8, 1.8, 0.5],
					opacity: [0.3, 1, 0.4, 0.8, 0.3],
					x: [0, 20, -15, 25, 0],
					y: [0, -10, 15, -20, 0],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute top-40 right-32 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 will-change-transform"
				animate={{
					scale: [0.5, 1.2, 0.9, 1.6, 0.5],
					opacity: [0.3, 0.8, 0.5, 1, 0.3],
					x: [0, -18, 10, -25, 0],
					y: [0, 15, -8, 18, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					delay: 1,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute bottom-32 left-1/3 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 will-change-transform"
				animate={{
					scale: [0.5, 1.6, 0.4, 1.3, 0.5],
					opacity: [0.3, 1, 0.3, 0.9, 0.3],
					x: [0, 15, -20, 18, 0],
					y: [0, -18, 8, -15, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					delay: 2,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute top-1/2 right-20 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 will-change-transform"
				animate={{
					scale: [0.5, 1.3, 0.7, 1.9, 0.5],
					opacity: [0.3, 0.9, 0.4, 1, 0.3],
					x: [0, -25, 15, -20, 0],
					y: [0, 10, -15, 20, 0],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					delay: 3,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute bottom-20 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 will-change-transform"
				animate={{
					scale: [0.5, 1.4, 0.5, 1.7, 0.5],
					opacity: [0.3, 0.7, 0.6, 0.8, 0.3],
					x: [0, 25, -10, 30, 0],
					y: [0, -20, 15, -18, 0],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					delay: 1.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			{/* Efekt blasku w centrum */}
			<motion.div
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full will-change-transform"
				animate={{
					scale: [0.8, 1.2, 0.9, 1.3, 0.8],
					opacity: [0.3, 0.6, 0.3, 0.7, 0.3],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			{/* Dodatkowe efekty świetlne */}
			<motion.div
				className="absolute top-10 left-1/2 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full will-change-transform"
				animate={{
					scale: [0.3, 1.5, 0.6, 1.8, 0.3],
					opacity: [0.2, 0.8, 0.4, 0.9, 0.2],
					x: [-30, 30, -20, 40, -30],
					y: [0, 25, -15, 30, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>

			<motion.div
				className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-radial from-blue-500/20 to-transparent rounded-full will-change-transform"
				animate={{
					scale: [0.3, 1.6, 0.5, 1.4, 0.3],
					opacity: [0.2, 0.7, 0.5, 0.8, 0.2],
					x: [25, -25, 15, -35, 25],
					y: [-20, 20, -8, 25, -20],
				}}
				transition={{
					duration: 9,
					repeat: Infinity,
					delay: 4,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>
		</div>
	)
}

export default LightAnimation
