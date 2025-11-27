import { Metadata } from 'next'
import ContactPageSection from '@/components/sections/ContactPageSection'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
	title: 'Kontakt | Smart Home Solutions',
	description: 'Skontaktuj się z nami w sprawie inteligentnych rozwiązań dla Twojego domu. Jesteśmy tutaj, aby pomóc!',
}

export default function ContactPage() {
	return (
		<div className="section-dark pt-20">
			<main>
				<ContactPageSection />
			</main>
			<Footer />
		</div>
	)
}
