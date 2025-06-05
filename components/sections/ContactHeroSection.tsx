'use client'

import { motion } from 'framer-motion'

interface ContactHeroSectionProps {
	title: string
	subtitle?: string
	description?: string
}

const ContactHeroSection = ({ title, subtitle, description }: ContactHeroSectionProps) => {
	return (
		<div className="relative hero-dark overflow-hidden min-h-[60vh] flex items-center">
			<div className="max-w-7xl mx-auto w-full">
				<div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
					<div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
						<div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="text-center">
								<motion.h1
									className="text-4xl tracking-tight font-extrabold text-primary-dark sm:text-5xl md:text-6xl"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}>
									<span className="block">{title}</span>
									{subtitle && <span className="block text-blue-500">{subtitle}</span>}
								</motion.h1>
								{description && (
									<motion.p
										className="mt-3 text-base text-secondary-dark sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: 0.2 }}>
										{description}
									</motion.p>
								)}

								{/* Animowana ikona w centrum */}
								<motion.div
									className="mt-8 flex justify-center"
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 1, delay: 0.5 }}>
									<motion.div
										className="relative"
										animate={{
											y: [0, -10, 0],
											rotate: [0, 5, -5, 0],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: 'easeInOut',
										}}>
										<i className="fas fa-envelope-open-text text-blue-500 text-6xl sm:text-7xl md:text-8xl"></i>

										{/* Efekt świecenia */}
										<motion.div
											className="absolute inset-0 bg-blue-300 rounded-full opacity-20 blur-xl"
											animate={{
												scale: [1, 1.2, 1],
												opacity: [0.2, 0.4, 0.2],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
										/>
									</motion.div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Dekoracyjne elementy w tle */}
			<motion.div
				className="absolute top-10 left-10 opacity-30"
				animate={{
					rotate: 360,
					scale: [1, 1.1, 1],
				}}
				transition={{
					rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
					scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
				}}>
				<i className="fas fa-phone text-accent-dark text-3xl"></i>
			</motion.div>

			<motion.div
				className="absolute top-20 right-20 opacity-30"
				animate={{
					y: [0, -15, 0],
					rotate: [0, 10, -10, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: 'easeInOut',
				}}>
				<i className="fas fa-comments text-accent-dark text-4xl"></i>
			</motion.div>

			<motion.div
				className="absolute bottom-10 left-20 opacity-30"
				animate={{
					x: [0, 10, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
				}}>
				<i className="fas fa-map-marker-alt text-accent-dark text-3xl"></i>
			</motion.div>
		</div>
	)
}

export default ContactHeroSection
