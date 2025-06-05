import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './dark-theme.css'
import { SanityLive } from '@/sanity/lib/live'
import ClientLayout from '@/components/ClientLayout'

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Synetiq | Nowa definicja inteligentnego życia',
	description:
		'Doświadcz przyszłości automatyki domowej z Synetiq. Kontroluj, monitoruj i optymalizuj swoją przestrzeń życiową dzięki naszym nowoczesnym rozwiązaniom smart home.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pl">
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
			</head>
			<body className={`${poppins.variable} font-poppins antialiased`}>
				<ClientLayout>{children}</ClientLayout>
				<SanityLive />
			</body>
		</html>
	)
}
