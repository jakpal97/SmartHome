import { client } from '@/sanity/lib/client'
import { heroQuery, featuresQuery, productsQuery, testimonialsQuery, statsQuery } from '@/sanity/lib/queries'
import { Hero, Feature, Product, Testimonial, Stats } from '@/types/sanity'

import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProductsSection from '@/components/sections/ProductsSection'

import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollToSection from '@/components/ScrollToSection'

import Footer from '@/components/sections/Footer'

// Revalidate data every 60 seconds
export const revalidate = 60

async function getPageData() {
	try {
		const [hero, features, products, testimonials, stats] = await Promise.all([
			client.fetch<Hero>(heroQuery, {}, { cache: 'no-store' }),
			client.fetch<Feature[]>(featuresQuery, {}, { cache: 'no-store' }),
			client.fetch<Product[]>(productsQuery, {}, { cache: 'no-store' }),
			client.fetch<Testimonial[]>(testimonialsQuery, {}, { cache: 'no-store' }),
			client.fetch<Stats>(statsQuery, {}, { cache: 'no-store' }),
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
	const { hero, features, products, stats } = await getPageData()

	return (
		<div className="min-h-screen">
			<ScrollToSection />
			<div className="section-dark overflow-x-hidden pt-20">
				<HeroSection hero={hero} />
				<FeaturesSection features={features} />
				<ProductsSection products={products} />
				{/* <TestimonialsSection testimonials={testimonials} /> */}
				<StatsSection stats={stats} />
				<ContactSection />
				<Footer />
			</div>
		</div>
	)
}
