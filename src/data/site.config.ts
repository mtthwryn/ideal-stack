interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	googleAnalyticsId?: string // Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)
}

export const siteConfig: SiteConfig = {
	site: 'https://ideal-stack.netlify.app/', // Write here your website url
	author: 'ideal-stack', // Site author
	title: 'Dev Articles', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6, // Number of posts per page
	googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || undefined // Set via PUBLIC_GA_ID environment variable
}
