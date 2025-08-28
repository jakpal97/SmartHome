import { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { productsPageQuery, productsQuery } from '@/sanity/lib/queries'
import Footer from '@/components/sections/Footer'
import ProductsPageHero from '@/components/sections/ProductsPageHero'
import ProductsGrid from '@/components/sections/ProductsGrid'
import ProductCategories from '@/components/sections/ProductCategories'
import ProductsCTA from '@/components/sections/ProductsCTA'

export async function generateMetadata(): Promise<Metadata> {
	try {
		const { data } = await sanityFetch({
			query: productsPageQuery,
		})

		return {
			title: data?.seo?.metaTitle || 'Produkty i Usługi | Smart Home Solutions',
			description:
				data?.seo?.metaDescription ||
				'Odkryj naszą pełną gamę inteligentnych rozwiązań dla domu. Produkty i usługi smart home najwyższej jakości.',
		}
	} catch {
		return {
			title: 'Produkty i Usługi | Smart Home Solutions',
			description:
				'Odkryj naszą pełną gamę inteligentnych rozwiązań dla domu. Produkty i usługi smart home najwyższej jakości.',
		}
	}
}

// Domyślne dane na wypadek braku danych z Sanity
const defaultPageData = {
	title: 'Produkty i Usługi',
	heroSection: {
		title: 'Nasze Produkty',
		subtitle: 'i Usługi',
		description:
			'Odkryj pełną gamę inteligentnych rozwiązań dla Twojego domu. Od automatyki po bezpieczeństwo - wszystko w jednym miejscu.',
	},
	featuredProducts: {
		title: 'Wyróżnione Produkty',
		subtitle: 'Najlepsze rozwiązania',
		description: 'Poznaj nasze najpopularniejsze produkty, które zmieniły życie tysięcy klientów.',
	},
	categories: [
		{
			name: 'Oświetlenie Inteligentne',
			slug: { current: 'oswietlenie' },
			description: 'Steruj oświetleniem z dowolnego miejsca. Oszczędzaj energię i twórz idealne nastroje.',
			icon: 'fas fa-lightbulb',
		},
		{
			name: 'Bezpieczeństwo',
			slug: { current: 'bezpieczenstwo' },
			description: 'Kamery, alarmy, czujniki. Pełna kontrola nad bezpieczeństwem Twojego domu.',
			icon: 'fas fa-shield-alt',
		},
		{
			name: 'Klimatyzacja',
			slug: { current: 'klimatyzacja' },
			description: 'Inteligentne termostaty i systemy HVAC. Komfort i oszczędności energii.',
			icon: 'fas fa-thermometer-half',
		},
		{
			name: 'Audio & Video',
			slug: { current: 'audio-video' },
			description: 'Systemy multiroom, kina domowe, inteligentne głośniki.',
			icon: 'fas fa-music',
		},
		{
			name: 'Automatyka Domowa',
			slug: { current: 'automatyka' },
			description: 'Centralne sterowanie wszystkimi urządzeniami w domu.',
			icon: 'fas fa-cogs',
		},
		{
			name: 'Energia',
			slug: { current: 'energia' },
			description: 'Panele słoneczne, magazyny energii, inteligentne zarządzanie energią.',
			icon: 'fas fa-solar-panel',
		},
	],
	ctaSection: {
		title: 'Gotowy na transformację swojego domu?',
		description:
			'Skontaktuj się z naszymi ekspertami i otrzymaj bezpłatną konsultację. Pomożemy Ci wybrać idealne rozwiązania.',
		buttonText: 'Bezpłatna Konsultacja',
		buttonLink: '/kontakt',
	},
}

interface Product {
	_id: string
	name: string
	description: string
	price: string
	image?: {
		asset: {
			_ref: string
		}
		hotspot?: {
			x: number
			y: number
		}
	}
	features?: string[]
	category?: string
}

export default async function ProductsPage() {
	let pageData = defaultPageData
	let products: Product[] = []

	try {
		const [pageResult, productsResult] = await Promise.all([
			sanityFetch({ query: productsPageQuery }),
			sanityFetch({ query: productsQuery }),
		])

		if (pageResult.data) {
			pageData = pageResult.data
		}
		if (productsResult.data) {
			products = productsResult.data
		}
	} catch (error) {
		console.error('Błąd podczas pobierania danych strony produktów:', error)
	}

	return (
		<div className="section-dark pt-20">
			<main>
				<ProductsPageHero data={pageData.heroSection} />
				<ProductCategories categories={pageData.categories} />
				<ProductsGrid
					products={products}
					title={pageData.featuredProducts?.title}
					subtitle={pageData.featuredProducts?.subtitle}
					description={pageData.featuredProducts?.description}
				/>
				<ProductsCTA data={pageData.ctaSection || defaultPageData.ctaSection} />
			</main>
			<Footer />
		</div>
	)
}
