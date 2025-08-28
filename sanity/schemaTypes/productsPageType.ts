import { defineField, defineType } from 'sanity'

export const productsPageType = defineType({
	name: 'productsPage',
	title: 'Strona Produktów',
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
				defineField({
					name: 'backgroundImage',
					title: 'Obraz tła',
					type: 'image',
					options: {
						hotspot: true,
					},
				}),
			],
		}),
		defineField({
			name: 'featuredProducts',
			title: 'Wyróżnione produkty',
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
			],
		}),
		defineField({
			name: 'categories',
			title: 'Kategorie produktów',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'name',
							title: 'Nazwa kategorii',
							type: 'string',
							validation: Rule => Rule.required(),
						}),
						defineField({
							name: 'slug',
							title: 'Slug kategorii',
							type: 'slug',
							options: {
								source: 'name',
								maxLength: 96,
							},
							validation: Rule => Rule.required(),
						}),
						defineField({
							name: 'description',
							title: 'Opis kategorii',
							type: 'text',
						}),
						defineField({
							name: 'icon',
							title: 'Ikona (Font Awesome class)',
							type: 'string',
							description: 'np. "fas fa-lightbulb"',
						}),
						defineField({
							name: 'image',
							title: 'Obraz kategorii',
							type: 'image',
							options: {
								hotspot: true,
							},
						}),
					],
					preview: {
						select: {
							title: 'name',
							subtitle: 'description',
							media: 'image',
						},
					},
				},
			],
		}),
		defineField({
			name: 'ctaSection',
			title: 'Sekcja Call to Action',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Tytuł',
					type: 'string',
				}),
				defineField({
					name: 'description',
					title: 'Opis',
					type: 'text',
				}),
				defineField({
					name: 'buttonText',
					title: 'Tekst przycisku',
					type: 'string',
				}),
				defineField({
					name: 'buttonLink',
					title: 'Link przycisku',
					type: 'string',
				}),
			],
		}),
		defineField({
			name: 'seo',
			title: 'SEO',
			type: 'object',
			fields: [
				defineField({
					name: 'metaTitle',
					title: 'Meta tytuł',
					type: 'string',
				}),
				defineField({
					name: 'metaDescription',
					title: 'Meta opis',
					type: 'text',
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
