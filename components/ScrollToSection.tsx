'use client'

import { useEffect } from 'react'

const ScrollToSection = () => {
	useEffect(() => {
		// Enhanced smooth scroll function
		const smoothScrollTo = (element: Element, duration: number = 800) => {
			const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
			const startPosition = window.pageYOffset
			const distance = targetPosition - startPosition
			let startTime: number | null = null

			const animation = (currentTime: number) => {
				if (startTime === null) startTime = currentTime
				const timeElapsed = currentTime - startTime
				const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
				window.scrollTo(0, run)
				if (timeElapsed < duration) requestAnimationFrame(animation)
			}

			// Easing function for smooth animation
			const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
				t /= d / 2
				if (t < 1) return (c / 2) * t * t + b
				t--
				return (-c / 2) * (t * (t - 2) - 1) + b
			}

			requestAnimationFrame(animation)
		}

		// Handle click events for smooth scrolling
		const handleClick = (e: Event) => {
			const target = e.target as HTMLElement
			const href = target.getAttribute('href') || target.closest('a')?.getAttribute('href')

			if (href && href.startsWith('#')) {
				e.preventDefault()
				const element = document.querySelector(href)
				if (element) {
					smoothScrollTo(element, 800)
				}
			}
		}

		// Add event listeners to all anchor links
		const links = document.querySelectorAll('a[href^="#"]')
		links.forEach(link => {
			link.addEventListener('click', handleClick)
		})

		// Add event listeners to buttons with data-scroll-to attribute
		const scrollButtons = document.querySelectorAll('[data-scroll-to]')
		scrollButtons.forEach(button => {
			button.addEventListener('click', e => {
				const target = button.getAttribute('data-scroll-to')
				if (target) {
					const element = document.querySelector(target)
					if (element) {
						e.preventDefault()
						smoothScrollTo(element, 800)
					}
				}
			})
		})

		// Cleanup
		return () => {
			links.forEach(link => {
				link.removeEventListener('click', handleClick)
			})
			scrollButtons.forEach(button => {
				button.removeEventListener('click', handleClick)
			})
		}
	}, [])

	return null
}

export default ScrollToSection
