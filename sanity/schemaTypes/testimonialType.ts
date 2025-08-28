import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
	name: 'testimonial',
	title: 'Testimonial',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Customer Name',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'role',
			title: 'Role/Title',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'content',
			title: 'Testimonial Content',
			type: 'text',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'rating',
			title: 'Rating',
			type: 'number',
			validation: rule => rule.required().min(1).max(5),
			options: {
				list: [
					{ title: '1 Star', value: 1 },
					{ title: '2 Stars', value: 2 },
					{ title: '3 Stars', value: 3 },
					{ title: '4 Stars', value: 4 },
					{ title: '5 Stars', value: 5 },
				],
			},
		}),
		defineField({
			name: 'avatar',
			title: 'Customer Avatar',
			type: 'image',
			options: {
				hotspot: true,
			},
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
