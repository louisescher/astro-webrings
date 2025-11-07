import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import type { webringSchema } from "@/content.config";
import type { z } from "astro:schema";

export const prerender = false;

export const GET: APIRoute = async (ctx) => {
	let currentSite = ctx.url.searchParams.get("site");

	if (!currentSite) return new Response("No `site` parameter has been provided.", {
		status: 400
	});

	currentSite = currentSite.replace(/https?:\/\//g, "");
	const webring = ctx.url.searchParams.get("ring");

	const knownRings = await getCollection("webrings");

	const activeRing = knownRings.find((ring) => ring.data.slug === webring);
	if (!activeRing) {
		return new Response("Unknown webring. Make sure the ring parameter is correct.", {
			status: 400,
		});
	}

	// biome-ignore lint/suspicious/noExplicitAny: Needed to work, TypeScript is mad otherwise
	const ringCollection = await getCollection(activeRing.data.collection as any) as Array<{ data: z.infer<typeof webringSchema> }>;

	const currentSiteIndex = ringCollection.findIndex((entry) => entry.data.id === currentSite);

	if (currentSiteIndex < 0) {
		return new Response("Unknown site. Please submit a PR to https://github.com/louisescher/astro-webrings to add it.", {
			status: 400,
		});
	}

	const prevSiteIdx = (currentSiteIndex - 1) < 0 ? ringCollection.length - 1 : currentSiteIndex - 1;
	const previousSite = ringCollection[prevSiteIdx];

	return new Response(null, {
		status: 302,
		headers: new Headers({
			"Location": previousSite.data.url
		})
	});
}
