'use client'

import { useEffect, useRef, useState } from 'react'
import { Stats } from '@/types/sanity'

interface StatsSectionProps {
	stats: Stats | null
}

const StatsSection = ({ stats }: StatsSectionProps) => {
	const [hasAnimated, setHasAnimated] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	// Default stats if none from Sanity
	const defaultStats = {
		homesAutomated: 50,
		energySaved: 100,
		countries: 45,
		satisfaction: 99,
	}

	const displayStats = stats || defaultStats

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !hasAnimated) {
						setHasAnimated(true)
						animateCountUp()
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [hasAnimated])

	const animateCountUp = () => {
		const countElements = document.querySelectorAll('.count-up')
		const speed = 200

		countElements.forEach(element => {
			const target = parseInt(element.getAttribute('data-target') || '0')
			const duration = Math.floor(speed / target)
			let currentCount = 0

			const counter = setInterval(() => {
				currentCount += 1
				element.textContent = currentCount.toString()

				if (currentCount >= target) {
					clearInterval(counter)
				}
			}, duration)
		})
	}

	return (
		<section ref={sectionRef} className="py-16 stats-gradient-bg text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div className="stats-card p-6 rounded-lg">
						<div className="text-4xl font-bold mb-2 count-up stats-number" data-target={displayStats.homesAutomated}>
							0
						</div>
						<div className="text-sm uppercase tracking-wider text-blue-100">Homes Automated</div>
					</div>
					<div className="stats-card p-6 rounded-lg">
						<div className="text-4xl font-bold mb-2 count-up stats-number" data-target={displayStats.energySaved}>
							0
						</div>
						<div className="text-sm uppercase tracking-wider text-blue-100">Energy Saved (%)</div>
					</div>
					<div className="stats-card p-6 rounded-lg">
						<div className="text-4xl font-bold mb-2 count-up stats-number" data-target={displayStats.countries}>
							0
						</div>
						<div className="text-sm uppercase tracking-wider text-blue-100">Countries</div>
					</div>
					<div className="stats-card p-6 rounded-lg">
						<div className="text-4xl font-bold mb-2 count-up stats-number" data-target={displayStats.satisfaction}>
							0
						</div>
						<div className="text-sm uppercase tracking-wider text-blue-100">Satisfaction (%)</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StatsSection
