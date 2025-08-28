// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from 'next-sanity'
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({
	client: client.withConfig({
		// Używamy stabilnej wersji API zamiast eksperymentalnej
		apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-25',
	}),
	// Opcjonalne tokeny dla live content
	serverToken: process.env.SANITY_API_READ_TOKEN,
	browserToken: process.env.NEXT_PUBLIC_SANITY_VIEWER_TOKEN,
})
