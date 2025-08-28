'use client'

import { useEffect } from 'react'

const ScrollToSection = () => {
	useEffect(() => {
		// Sprawdź czy jest hash w URL
		const hash = window.location.hash

		if (hash) {
			// Poczekaj chwilę, aż strona się załaduje
			setTimeout(() => {
				const element = document.querySelector(hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}
			}, 100)
		}
	}, [])

	return null // Ten komponent nie renderuje niczego
}

export default ScrollToSection
