export type BadgeName = (
	'friends-of-houston'
	| 'built-with-astro'
)

export type BadgeData = {
	name: string;
	static: string;
	animated?: string;
}

export const badges: Record<BadgeName, BadgeData> = {
	'friends-of-houston': {
		name: 'Friends of Houston',
		static: 'friends-of-houston.webp',
		animated: 'friends-of-houston.gif'
	},
	'built-with-astro': {
		name: "Built with Astro",
		static: 'built-with-astro.webp'
	}
}
