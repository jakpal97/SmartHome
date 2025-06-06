'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const Navigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const pathname = usePathname()
	const router = useRouter()

	const navLinks = [
		{ href: '/', label: 'Home', isExternal: true },
		{ href: '#features', label: 'Funkcje', isExternal: false },
		{ href: '/products', label: 'Usługi', isExternal: true },
		{ href: '#testimonials', label: 'Opinie', isExternal: false },
		{ href: '/kontakt', label: 'Kontakt', isExternal: true },
	]

	useEffect(() => {
		let ticking = false

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const scrollY = window.scrollY
					setIsScrolled(scrollY > 50)
					ticking = false
				})
				ticking = true
			}
		}

		// Set initial state
		setIsScrolled(window.scrollY > 50)

		// Add scroll listener
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleNavigation = (href: string) => {
		setIsMobileMenuOpen(false)

		// Jeśli to link do sekcji (zaczyna się od #)
		if (href.startsWith('#')) {
			// Jeśli jesteśmy na stronie głównej, przewiń do sekcji
			if (pathname === '/') {
				const element = document.querySelector(href)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}
			} else {
				// Jeśli nie jesteśmy na stronie głównej, przekieruj do strony głównej z hashem
				router.push(`/${href}`)
			}
		}
	}

	return (
		<>
			<style jsx>{`
				@keyframes gradientShift {
					0%,
					100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}
			`}</style>
			<nav
				className={`navbar-sticky transition-all duration-300 ${
					isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
				}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center">
							<Link href="/" className="flex items-center">
								<Image
									src="/Logo.png"
									alt="Logo firmy"
									width={120}
									height={40}
									className="h-10 w-auto object-contain"
									priority
								/>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-center space-x-8">
								{navLinks.map(link => (
									<div key={link.href}>
										{link.isExternal ? (
											<Link
												href={link.href}
												className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
												{link.label}
											</Link>
										) : (
											<button
												onClick={() => handleNavigation(link.href)}
												className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
												{link.label}
											</button>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Get Started Button */}
						<div className="hidden md:block">
							<Link
								href="/kontakt"
								className="ml-8 inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition duration-300">
								Skontaktuj się
							</Link>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="text-white hover:text-blue-300 p-2 rounded-md transition-colors duration-300 focus:outline-none">
								<i className="fas fa-bars text-xl"></i>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				{isMobileMenuOpen && (
					<div
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0.95)',
							backdropFilter: 'blur(20px)',
							borderTop: '1px solid rgba(255, 255, 255, 0.1)',
						}}
						className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navLinks.map(link => (
								<div key={link.href}>
									{link.isExternal ? (
										<Link
											href={link.href}
											onClick={() => setIsMobileMenuOpen(false)}
											className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300 hover:bg-white/10 transition-colors duration-300">
											{link.label}
										</Link>
									) : (
										<button
											onClick={() => handleNavigation(link.href)}
											className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300 hover:bg-white/10 transition-colors duration-300">
											{link.label}
										</button>
									)}
								</div>
							))}
							<Link
								href="/kontakt"
								onClick={() => setIsMobileMenuOpen(false)}
								className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
								Skontaktuj się
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	)
}

export default Navigation
