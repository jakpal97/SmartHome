import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { heroType } from './heroType'
import { featureType } from './featureType'
import { productType } from './productType'
import { testimonialType } from './testimonialType'
import { statsType } from './statsType'
import { contactPageType } from './contactPageType'
import { productsPageType } from './productsPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		postType,
		authorType,
		heroType,
		featureType,
		productType,
		testimonialType,
		statsType,
		contactPageType,
		productsPageType,
	],
}
