'use client'

import { motion } from 'framer-motion'

const SmartHomeIconsAnimation = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* WiFi Icon */}
			<motion.div
				className="absolute top-20 left-10 w-16 h-16 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.4, 0.8, 0.4],
					rotate: [0, 5, -5, 0],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-wifi text-3xl text-blue-400 drop-shadow-lg" />
			</motion.div>

			{/* Smart Bulb */}
			<motion.div
				className="absolute top-40 right-20 w-16 h-16 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.15, 1],
					opacity: [0.4, 0.9, 0.4],
					y: [0, -8, 0],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					delay: 1,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-lightbulb text-3xl text-yellow-400 drop-shadow-lg" />
			</motion.div>

			{/* Security Shield */}
			<motion.div
				className="absolute bottom-32 left-1/4 w-12 h-12 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.25, 1],
					opacity: [0.4, 0.7, 0.4],
					rotate: [0, -10, 10, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					delay: 2,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-shield-alt text-2xl text-green-400 drop-shadow-lg" />
			</motion.div>

			{/* Thermostat */}
			<motion.div
				className="absolute top-1/3 right-1/3 w-10 h-10 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.4, 0.8, 0.4],
					rotate: 360,
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					delay: 0.5,
					ease: 'linear',
					repeatType: 'loop',
				}}>
				<i className="fas fa-thermometer-half text-xl text-red-400 drop-shadow-lg" />
			</motion.div>

			{/* Smart Lock */}
			<motion.div
				className="absolute bottom-20 right-10 w-14 h-14 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.4, 0.7, 0.4],
					x: [0, 3, -3, 0],
				}}
				transition={{
					duration: 4.5,
					repeat: Infinity,
					delay: 1.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-lock text-2xl text-blue-500 drop-shadow-lg" />
			</motion.div>

			{/* Camera */}
			<motion.div
				className="absolute top-60 left-1/3 w-12 h-12 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.4, 0.8, 0.4],
					rotate: [0, -15, 15, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					delay: 3,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-video text-2xl text-blue-500 drop-shadow-lg" />
			</motion.div>

			{/* Smart Speaker */}
			<motion.div
				className="absolute bottom-40 left-20 w-10 h-10 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.25, 1],
					opacity: [0.4, 0.8, 0.4],
					y: [0, -6, 0],
				}}
				transition={{
					duration: 3.5,
					repeat: Infinity,
					delay: 2.5,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-volume-up text-xl text-cyan-400 drop-shadow-lg" />
			</motion.div>

			{/* Mobile Control */}
			<motion.div
				className="absolute top-80 right-1/4 w-12 h-12 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.15, 1],
					opacity: [0.4, 0.7, 0.4],
					rotate: [0, 3, -3, 0],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					delay: 4,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-mobile-alt text-2xl text-blue-300 drop-shadow-lg" />
			</motion.div>

			{/* Smart Plug */}
			<motion.div
				className="absolute bottom-60 right-1/3 w-10 h-10 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.4, 0.8, 0.4],
					x: [0, -5, 5, 0],
				}}
				transition={{
					duration: 5.5,
					repeat: Infinity,
					delay: 1,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-plug text-xl text-orange-400 drop-shadow-lg" />
			</motion.div>

			{/* Home Icon */}
			<motion.div
				className="absolute top-1/2 left-16 w-14 h-14 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.08, 1],
					opacity: [0.4, 0.9, 0.4],
					y: [0, -10, 0],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					delay: 0.8,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-home text-2xl text-emerald-400 drop-shadow-lg" />
			</motion.div>

			{/* Sensor */}
			<motion.div
				className="absolute top-32 left-1/2 w-8 h-8 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.4, 1],
					opacity: [0.4, 0.7, 0.4],
					rotate: 360,
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					delay: 3.5,
					ease: 'linear',
					repeatType: 'loop',
				}}>
				<i className="fas fa-satellite-dish text-lg text-pink-400 drop-shadow-lg" />
			</motion.div>

			{/* Smart TV */}
			<motion.div
				className="absolute bottom-80 left-2/3 w-12 h-12 flex items-center justify-center will-change-transform"
				animate={{
					scale: [1, 1.15, 1],
					opacity: [0.4, 0.8, 0.4],
					x: [0, 6, -6, 0],
				}}
				transition={{
					duration: 4.8,
					repeat: Infinity,
					delay: 2.2,
					ease: 'easeInOut',
					repeatType: 'loop',
				}}>
				<i className="fas fa-tv text-2xl text-blue-500 drop-shadow-lg" />
			</motion.div>
		</div>
	)
}

export default SmartHomeIconsAnimation
