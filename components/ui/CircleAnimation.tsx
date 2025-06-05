'use client'

import { motion } from 'framer-motion'

const CircleAnimation = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Animowane kulki w tle */}
			<motion.div
				className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 will-change-transform"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>
			<motion.div
				className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 will-change-transform"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.2, 0.3, 0.2],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					delay: 1,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>
			<motion.div
				className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-20 will-change-transform"
				animate={{
					scale: [1, 1.4, 1],
					opacity: [0.2, 0.5, 0.2],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					delay: 2,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>
			<motion.div
				className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-500 rounded-full opacity-20 will-change-transform"
				animate={{
					scale: [1, 1.5, 1],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 3.5,
					repeat: Infinity,
					delay: 0.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>
			<motion.div
				className="absolute bottom-20 right-10 w-14 h-14 bg-blue-300 rounded-full opacity-20 will-change-transform"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.2, 0.3, 0.2],
				}}
				transition={{
					duration: 4.5,
					repeat: Infinity,
					delay: 1.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}
			/>
		</div>
	)
}

export default CircleAnimation
