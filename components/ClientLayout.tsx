'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/sections/Navigation'
import FloatingParticles from '@/components/ui/FloatingParticles'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const isStudioPage = pathname?.startsWith('/studio')

	return (
		<>
			{!isStudioPage && (
				<>
					{/* Global animated background */}
					<div className="page-background"></div>
					<div className="floating-orbs">
						<div className="floating-orb"></div>
						<div className="floating-orb"></div>
						<div className="floating-orb"></div>
						<div className="floating-orb"></div>
						<div className="floating-orb"></div>
						<div className="floating-orb"></div>
					</div>
					<FloatingParticles />
					<Navigation />
				</>
			)}
			{children}
		</>
	)
}
