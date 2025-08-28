import { client } from '@/sanity/lib/client'
import { heroQuery, featuresQuery, productsQuery, testimonialsQuery, statsQuery } from '@/sanity/lib/queries'
import { Hero, Feature, Product, Testimonial, Stats } from '@/types/sanity'

import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProductsSection from '@/components/sections/ProductsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollToSection from '@/components/ScrollToSection'

import Footer from '@/components/sections/Footer'

async function getPageData() {
	try {
		const [hero, features, products, testimonials, stats] = await Promise.all([
			client.fetch<Hero>(heroQuery),
			client.fetch<Feature[]>(featuresQuery),
			client.fetch<Product[]>(productsQuery),
			client.fetch<Testimonial[]>(testimonialsQuery),
			client.fetch<Stats>(statsQuery),
		])

		console.log('Fetched data from Sanity:')
		console.log('Hero:', hero)
		console.log('Features:', features)
		console.log('Products:', products)
		console.log('Testimonials:', testimonials)
		console.log('Stats:', stats)

		return { hero, features, products, testimonials, stats }
	} catch (error) {
		console.error('Error fetching data:', error)
		return {
			hero: null,
			features: [],
			products: [],
			testimonials: [],
			stats: null,
		}
	}
}

export default async function Home() {
	const { hero, features, products, testimonials, stats } = await getPageData()

	return (
		<div className="min-h-screen">
			<ScrollToSection />
			<div className="section-dark overflow-x-hidden pt-20">
				<HeroSection hero={hero} />
				<FeaturesSection features={features} />
				<ProductsSection products={products} />
				<TestimonialsSection testimonials={testimonials} />
				<StatsSection stats={stats} />
				<ContactSection />
				<Footer />
			</div>
		</div>
	)
}
