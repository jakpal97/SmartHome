import { defineField, defineType } from 'sanity'

export const contactPageType = defineType({
	name: 'contactPage',
	title: 'Strona Kontaktowa',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł strony',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'heroSection',
			title: 'Sekcja Hero',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Tytuł główny',
					type: 'string',
					validation: Rule => Rule.required(),
				}),
				defineField({
					name: 'subtitle',
					title: 'Podtytuł',
					type: 'string',
				}),
				defineField({
					name: 'description',
					title: 'Opis',
					type: 'text',
				}),
			],
		}),
		defineField({
			name: 'contactInfo',
			title: 'Informacje kontaktowe',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Tytuł sekcji',
					type: 'string',
				}),
				defineField({
					name: 'subtitle',
					title: 'Podtytuł sekcji',
					type: 'string',
				}),
				defineField({
					name: 'description',
					title: 'Opis sekcji',
					type: 'text',
				}),
				defineField({
					name: 'office',
					title: 'Biuro',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Tytuł',
							type: 'string',
							initialValue: 'Nasze Biuro',
						}),
						defineField({
							name: 'address',
							title: 'Adres',
							type: 'text',
						}),
					],
				}),
				defineField({
					name: 'phone',
					title: 'Telefon',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Tytuł',
							type: 'string',
							initialValue: 'Telefon',
						}),
						defineField({
							name: 'number',
							title: 'Numer telefonu',
							type: 'string',
						}),
						defineField({
							name: 'hours',
							title: 'Godziny dostępności',
							type: 'string',
						}),
					],
				}),
				defineField({
					name: 'email',
					title: 'Email',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Tytuł',
							type: 'string',
							initialValue: 'Email',
						}),
						defineField({
							name: 'address',
							title: 'Adres email',
							type: 'string',
						}),
						defineField({
							name: 'responseTime',
							title: 'Czas odpowiedzi',
							type: 'string',
						}),
					],
				}),
				defineField({
					name: 'liveChat',
					title: 'Live Chat',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Tytuł',
							type: 'string',
							initialValue: 'Live Chat',
						}),
						defineField({
							name: 'description',
							title: 'Opis',
							type: 'string',
						}),
						defineField({
							name: 'availability',
							title: 'Dostępność',
							type: 'string',
						}),
					],
				}),
			],
		}),
		defineField({
			name: 'contactForm',
			title: 'Formularz kontaktowy',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Tytuł formularza',
					type: 'string',
				}),
				defineField({
					name: 'departments',
					title: 'Działy',
					type: 'array',
					of: [{ type: 'string' }],
					description: 'Lista działów do wyboru w formularzu',
				}),
			],
		}),
		defineField({
			name: 'mapSection',
			title: 'Sekcja mapy',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Tytuł sekcji',
					type: 'string',
				}),
				defineField({
					name: 'mapUrl',
					title: 'URL mapy Google',
					type: 'url',
					description: 'Link do osadzenia mapy Google',
				}),
			],
		}),
		defineField({
			name: 'faqSection',
			title: 'Sekcja FAQ',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Tytuł sekcji',
					type: 'string',
				}),
				defineField({
					name: 'subtitle',
					title: 'Podtytuł sekcji',
					type: 'string',
				}),
				defineField({
					name: 'faqs',
					title: 'Pytania i odpowiedzi',
					type: 'array',
					of: [
						{
							type: 'object',
							fields: [
								defineField({
									name: 'question',
									title: 'Pytanie',
									type: 'string',
								}),
								defineField({
									name: 'answer',
									title: 'Odpowiedź',
									type: 'text',
								}),
							],
						},
					],
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
	},
})
