import { defineField, defineType } from 'sanity'

export const heroType = defineType({
	name: 'hero',
	title: 'Hero Section',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
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
			name: 'primaryButtonText',
			title: 'Primary Button Text',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'secondaryButtonText',
			title: 'Secondary Button Text',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'heroImage',
			title: 'Hero Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
})
