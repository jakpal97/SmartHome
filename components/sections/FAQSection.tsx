'use client'

import { useState } from 'react'

interface FAQ {
	question: string
	answer: string
}

interface FAQSectionProps {
	title?: string
	subtitle?: string
	faqs: FAQ[]
}

const FAQSection = ({ title = 'Często zadawane pytania', subtitle, faqs }: FAQSectionProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className="py-12 section-alt-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center mb-10">
					{subtitle && <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">{subtitle}</h2>}
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-dark sm:text-4xl">{title}</p>
				</div>

				<div className="mt-10">
					<div className="space-y-8">
						{faqs.map((faq, index) => (
							<div key={index} className="card-dark shadow overflow-hidden sm:rounded-lg">
								<div className="px-4 py-5 sm:p-6">
									<div className="accordion-item">
										<button
											onClick={() => toggleAccordion(index)}
											className="accordion-btn flex justify-between items-center w-full text-left font-medium text-primary-dark hover:text-accent-dark focus:outline-none focus:text-accent-dark transition-colors duration-300">
											<span className="text-lg">{faq.question}</span>
											<i
												className={`fas fa-chevron-down text-secondary-dark transform transition-transform duration-300 ${
													openIndex === index ? 'rotate-180' : ''
												}`}
											/>
										</button>
										<div
											className={`accordion-content mt-2 text-secondary-dark transition-all duration-300 overflow-hidden ${
												openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
											}`}>
											<p className="pt-2 pb-1 whitespace-pre-line">{faq.answer}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FAQSection
