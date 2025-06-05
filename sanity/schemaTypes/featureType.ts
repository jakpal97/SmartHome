import { defineField, defineType } from 'sanity'

export const featureType = defineType({
	name: 'feature',
	title: 'Feature',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
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
			name: 'icon',
			title: 'Icon Name',
			type: 'string',
			description: 'FontAwesome icon name (e.g., lightbulb, temperature-low)',
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
