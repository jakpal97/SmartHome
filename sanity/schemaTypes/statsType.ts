import { defineField, defineType } from 'sanity'

export const statsType = defineType({
	name: 'stats',
	title: 'Company Stats',
	type: 'document',
	fields: [
		defineField({
			name: 'homesAutomated',
			title: 'Homes Automated',
			type: 'number',
			validation: rule => rule.required().min(0),
		}),
		defineField({
			name: 'energySaved',
			title: 'Energy Saved (%)',
			type: 'number',
			validation: rule => rule.required().min(0).max(100),
		}),
		defineField({
			name: 'countries',
			title: 'Countries',
			type: 'number',
			validation: rule => rule.required().min(0),
		}),
		defineField({
			name: 'satisfaction',
			title: 'Customer Satisfaction (%)',
			type: 'number',
			validation: rule => rule.required().min(0).max(100),
		}),
	],
})
