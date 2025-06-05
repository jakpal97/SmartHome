import { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { contactPageQuery } from '@/sanity/lib/queries'
import ContactPageSection from '@/components/sections/ContactPageSection'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
	title: 'Kontakt | Smart Home Solutions',
	description: 'Skontaktuj się z nami w sprawie inteligentnych rozwiązań dla Twojego domu. Jesteśmy tutaj, aby pomóc!',
}

// Domyślne dane na wypadek braku danych z Sanity
const defaultContactData = {
	title: 'Kontakt',
	heroSection: {
		title: 'Skontaktuj się',
		subtitle: 'z naszym zespołem',
		description: 'Jesteśmy tutaj, aby pomóc i odpowiedzieć na wszelkie pytania. Czekamy na kontakt z Tobą.',
	},
	contactInfo: {
		title: 'Jak możemy pomóc?',
		subtitle: 'Skontaktuj się z nami',
		description:
			'Niezależnie od tego, czy masz pytania, czy po prostu chcesz się przywitać, nasz zespół jest gotowy do pomocy.',
		office: {
			title: 'Nasze Biuro',
			address: 'ul. Technologiczna 123\n00-001 Warszawa\nPolska',
		},
		phone: {
			title: 'Telefon',
			number: '+48 123 456 789',
			hours: 'Pon-Pt, 9:00-17:00',
		},
		email: {
			title: 'Email',
			address: 'kontakt@smarthome.pl',
			responseTime: 'Odpowiadamy w ciągu 24h',
		},
		liveChat: {
			title: 'Live Chat',
			description: 'Czat z naszym zespołem',
			availability: 'Dostępny 24/7',
		},
	},
	contactForm: {
		title: 'Wyślij nam wiadomość',
		departments: ['Sprzedaż', 'Wsparcie techniczne', 'Rozliczenia', 'Inne'],
	},
	mapSection: {
		title: 'Znajdź nas na mapie',
		mapUrl:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8158208545!2d21.01178931568!3d52.22967797975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a65674de2!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1689876543210',
	},
	faqSection: {
		title: 'Często zadawane pytania',
		subtitle: 'FAQ',
		faqs: [
			{
				question: 'Jak szybko mogę spodziewać się odpowiedzi na moje zapytanie?',
				answer:
					'Zazwyczaj odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze (poniedziałek-piątek). W przypadku pilnych spraw prosimy o kontakt telefoniczny w celu uzyskania natychmiastowej pomocy.',
			},
			{
				question: 'Jakie są Wasze godziny pracy?',
				answer:
					'Nasze standardowe godziny pracy to 9:00-17:00, od poniedziałku do piątku. Jednak nasz zespół wsparcia klienta jest dostępny 24/7 poprzez live chat i awaryjną linię telefoniczną.',
			},
			{
				question: 'Czy oferujecie wsparcie dla klientów międzynarodowych?',
				answer:
					'Tak, obsługujemy klientów na całym świecie. Nasz zespół może dostosować się do różnych stref czasowych i oferujemy wsparcie wielojęzyczne w języku polskim, angielskim i niemieckim.',
			},
			{
				question: 'Czy oferujecie bezpłatną konsultację?',
				answer:
					'Tak! Oferujemy bezpłatną konsultację dla wszystkich nowych klientów. Podczas konsultacji omówimy Twoje potrzeby i zaproponujemy najlepsze rozwiązania dla Twojego domu.',
			},
		],
	},
}

export default async function ContactPage() {
	let contactData = defaultContactData

	try {
		const { data } = await sanityFetch({
			query: contactPageQuery,
		})

		if (data) {
			contactData = data
		}
	} catch (error) {
		console.error('Błąd podczas pobierania danych strony kontaktowej:', error)
		// Używamy domyślnych danych w przypadku błędu
	}

	return (
		<div className="section-dark pt-20">
			<main>
				<ContactPageSection data={contactData} />
			</main>
			<Footer />
		</div>
	)
}
