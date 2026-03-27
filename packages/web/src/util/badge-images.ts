import type { badges } from 'astro-webrings/badges';

import friendsOfHoustonStatic from 'astro-webrings/images/friends-of-houston.webp';
import friendsOfHoustonAnimated from 'astro-webrings/images/friends-of-houston.gif';

import builtWithAstroStatic from 'astro-webrings/images/built-with-astro.webp';

type BadgeImageData = {
	static: ImageMetadata;
	animated?: ImageMetadata;
};

const badgeImages: Record<keyof typeof badges, BadgeImageData> = {
	'friends-of-houston': {
		static: friendsOfHoustonStatic,
		animated: friendsOfHoustonAnimated,
	},
	'built-with-astro': {
		static: builtWithAstroStatic,
	},
};

export { badgeImages };
