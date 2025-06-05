'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Testimonial } from '@/types/sanity'

interface TestimonialsSectionProps {
	testimonials: Testimonial[]
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0)

	useEffect(() => {
		const testimonialCards = document.querySelectorAll('.testimonial-card')
		const dots = document.querySelectorAll('.testimonial-dot')

		function showTestimonial(index: number) {
			testimonialCards.forEach((testimonial, i) => {
				if (i === index) {
					testimonial.classList.add('active')
					if (dots[i]) {
						dots[i].classList.remove('bg-gray-300')
						dots[i].classList.add('bg-accent-dark')
					}
				} else {
					testimonial.classList.remove('active')
					if (dots[i]) {
						dots[i].classList.remove('bg-accent-dark')
						dots[i].classList.add('bg-gray-300')
					}
				}
			})
		}

		// Show first testimonial by default
		if (testimonialCards.length > 0) {
			showTestimonial(0)
		}

		// Auto-rotate testimonials
		const interval = setInterval(() => {
			setCurrentTestimonial(prev => {
				const next = (prev + 1) % testimonialCards.length
				showTestimonial(next)
				return next
			})
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	const handleDotClick = (index: number) => {
		setCurrentTestimonial(index)
		const testimonialCards = document.querySelectorAll('.testimonial-card')
		const dots = document.querySelectorAll('.testimonial-dot')

		testimonialCards.forEach((testimonial, i) => {
			if (i === index) {
				testimonial.classList.add('active')
				if (dots[i]) {
					dots[i].classList.remove('bg-gray-300')
					dots[i].classList.add('bg-accent-dark')
				}
			} else {
				testimonial.classList.remove('active')
				if (dots[i]) {
					dots[i].classList.remove('bg-accent-dark')
					dots[i].classList.add('bg-gray-300')
				}
			}
		})
	}

	const renderStars = (rating: number) => {
		const stars = []
		const fullStars = Math.floor(rating)
		const hasHalfStar = rating % 1 !== 0

		for (let i = 0; i < fullStars; i++) {
			stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>)
		}

		if (hasHalfStar) {
			stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>)
		}

		const remainingStars = 5 - Math.ceil(rating)
		for (let i = 0; i < remainingStars; i++) {
			stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>)
		}

		return stars
	}

	// Default testimonials if none from Sanity
	const defaultTestimonials = [
		{
			_id: '1',
			name: 'Sarah Johnson',
			role: 'Homeowner',
			location: 'Seattle',
			content:
				'The NexusHomes system has completely transformed how we live. Being able to control everything from my phone while saving on energy bills is incredible. Installation was seamless and their support team is fantastic.',
			rating: 5,
			avatar: { asset: { _ref: '', _type: 'reference' as const } },
			order: 1,
		},
		{
			_id: '2',
			name: 'Michael Chen',
			role: 'Tech Enthusiast',
			location: 'Austin',
			content:
				"As someone who loves technology, I'm blown away by how intuitive and powerful the Nexus system is. The AI learning features actually work - it knows when I'm about to get home and adjusts the temperature perfectly.",
			rating: 5,
			avatar: { asset: { _ref: '', _type: 'reference' as const } },
			order: 2,
		},
		{
			_id: '3',
			name: 'Emily Rodriguez',
			role: 'Busy Parent',
			location: 'Chicago',
			content:
				'With two kids and a full-time job, NexusHomes has been a lifesaver. I can check if doors are locked from work, set the AC to turn on before we get home, and even get alerts if the kids open the fridge after bedtime!',
			rating: 4.5,
			avatar: { asset: { _ref: '', _type: 'reference' as const } },
			order: 3,
		},
	]

	const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

	const getDefaultAvatar = (name: string) => {
		const avatarMap: { [key: string]: string } = {
			'Sarah Johnson': 'https://randomuser.me/api/portraits/women/43.jpg',
			'Michael Chen': 'https://randomuser.me/api/portraits/men/32.jpg',
			'Emily Rodriguez': 'https://randomuser.me/api/portraits/women/65.jpg',
		}
		return avatarMap[name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3b82f6&color=fff`
	}

	return (
		<section id="testimonials" className="section-alt-dark py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
						What Our <span className="text-blue-500">Clients Say</span>
					</h2>
					<p className="text-lg text-secondary-dark max-w-2xl mx-auto">
						Hear from homeowners who have transformed their living experience
					</p>
				</div>

				<div className="relative">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
						{displayTestimonials.map(testimonial => (
							<div key={testimonial._id} className="testimonial-card card-dark rounded-xl p-8">
								<div className="flex items-center mb-6">
									{testimonial.avatar && testimonial.avatar.asset && testimonial.avatar.asset._ref ? (
										<Image
											src={urlFor(testimonial.avatar).width(48).height(48).url()}
											alt={testimonial.name}
											width={48}
											height={48}
											className="w-12 h-12 rounded-full object-cover"
										/>
									) : (
										<img
											src={getDefaultAvatar(testimonial.name)}
											alt={testimonial.name}
											className="w-12 h-12 rounded-full object-cover"
										/>
									)}
									<div className="ml-4">
										<h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
										<p className="text-secondary-dark text-sm">
											{testimonial.role}, {testimonial.location}
										</p>
									</div>
								</div>
								<p className="text-secondary-dark italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
								<div className="flex">{renderStars(testimonial.rating)}</div>
							</div>
						))}
					</div>

					{displayTestimonials.length > 3 && (
						<div className="flex justify-center space-x-2 mt-8">
							{displayTestimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => handleDotClick(index)}
									className={`w-3 h-3 rounded-full transition-colors duration-300 testimonial-dot ${
										currentTestimonial === index ? 'bg-accent-dark' : 'bg-gray-300'
									}`}
								/>
							))}
						</div>
					)}
				</div>
			</div>

			<style jsx>{`
				.testimonial-card {
					transition: all 0.5s ease;
				}
			`}</style>
		</section>
	)
}

export default TestimonialsSection
