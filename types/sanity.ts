export interface Hero {
	_id: string
	title: string
	subtitle: string
	description: string
	primaryButtonText: string
	secondaryButtonText: string
	heroImage: {
		asset: {
			_ref: string
			_type: 'reference'
		}
		hotspot?: {
			x: number
			y: number
			height: number
			width: number
		}
	}
}

export interface Feature {
	_id: string
	title: string
	description: string
	icon: string
	order: number
}

export interface Product {
	_id: string
	name: string
	description: string
	image: {
		asset: {
			_ref: string
			_type: 'reference'
		}
		hotspot?: {
			x: number
			y: number
			height: number
			width: number
		}
	}
	features: string[]
	category: 'hub' | 'security' | 'climate' | 'lighting' | 'entertainment'
	order: number
}

export interface Testimonial {
	_id: string
	name: string
	role: string
	location: string
	content: string
	rating: number
	avatar?: {
		asset: {
			_ref: string
			_type: 'reference'
		}
		hotspot?: {
			x: number
			y: number
			height: number
			width: number
		}
	}
	order: number
}

export interface Stats {
	_id: string
	homesAutomated: number
	energySaved: number
	countries: number
	satisfaction: number
}
