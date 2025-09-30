import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

export const webringSchema = z.object({
	name: z.string().min(1, { message: "Site name has to be at least one character long!" }),
	id: z.string().min(1, { message: "Site slug has to be at least one character long!" }).refine((slug) => {
		const slugMatcher = /[a-z0-9-_.]/;

		if (slugMatcher.test(slug)) return true;

		return "Slug must be in all lowercase and include only numbers, letters from a-z, hyphens, dots and underscores.";
	}),
	url: z.string().url({ message: "Site url must be valid" })
});

const webring_friendsOfHouston = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/rings/friends-of-houston" }),
	schema: webringSchema
});

const webring_builtWithAstro = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/rings/built-with-astro" }),
	schema: webringSchema
});

const webrings = defineCollection({
	loader: file("src/content/rings/rings.json"),
	schema: z.object({
		collection: z.string().min(1, { message: "Webring collection name needs to be at least one character long!" }),
		slug: z.string().min(1, { message: "Webring slug needs to be at least one character long!" }),
		animated: z.boolean(),
		images: z.array(z.string().min(1, { message: "Webring image can't be empty!" })),
		name: z.string().min(1, { message: "Webring name needs to be at least one character long!" }),
	})
});

export const collections = {
	webring_builtWithAstro,
	webring_friendsOfHouston,
	webrings
};
