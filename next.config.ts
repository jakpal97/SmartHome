import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'ui-avatars.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
