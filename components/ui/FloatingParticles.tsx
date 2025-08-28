'use client'

import { useEffect, useState } from 'react'

const FloatingParticles = () => {
	const [particles, setParticles] = useState<Array<{ left: string; delay: string }>>([])

	useEffect(() => {
		const particleArray = Array.from({ length: 20 }, () => ({
			left: `${Math.random() * 100}%`,
			delay: `${Math.random() * 20}s`,
		}))
		setParticles(particleArray)
	}, [])

	return (
		<div className="floating-particles">
			{particles.map((particle, i) => (
				<div
					key={i}
					className="particle"
					style={{
						left: particle.left,
						animationDelay: particle.delay,
					}}></div>
			))}
		</div>
	)
}

export default FloatingParticles
