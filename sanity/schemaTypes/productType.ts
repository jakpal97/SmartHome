import { defineField, defineType } from 'sanity'

export const productType = defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Product Name',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: rule => rule.required(),
		}),

		defineField({
			name: 'image',
			title: 'Product Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'features',
			title: 'Product Features',
			type: 'array',
			of: [{ type: 'string' }],
			validation: rule => rule.required().min(1),
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'string',
			options: {
				list: [
					{ title: 'Hub', value: 'hub' },
					{ title: 'Bezpieczeństwo', value: 'Bezpieczeństwo' },
					{ title: 'Klimatyzacja', value: 'Klimatyzacja' },
					{ title: 'Inteligentne Oświetlenie', value: 'Inteligentne Oświetlenie' },
					{ title: 'Rozrywka', value: 'Rozrywka' },
				],
			},
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'order',
			title: 'Display Order',
			type: 'number',
			validation: rule => rule.required().min(1),
		}),
	],
	orderings: [
		{
			title: 'Order',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
})
