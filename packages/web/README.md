# Astro Webrings
Add your site to an Astro webring!

## What is this?

A webring, [according to Wikipedia](https://en.wikipedia.org/wiki/Webring), is a collection of websites linked together in a circular structure, usually organized around a specific theme, and often educational or social. This one is about [Astro](https://astro.build)!

## Great! How do I join?

Start by making a pull request on this repository to add your site. You will need to create a file in the `packages/web/src/content/rings/RING_YOU_WANT_TO_JOIN` directory,
preferrably using the origin of your site as the filename: `example.com.json`

Inside of this file, place the following information:

```json
{
  "name": "Example Site",
  "id": "a-unique-slug",
  "url": "https://example.com"
}
```
The `name` can be anything you want it to be. The `id` should be a unique identifier for your site and should only contain lowercase letters from a-z, numbers, dots, hyphens and underscores. The `url` should be the URL to your site! This is where people will get linked to.

Once your pull request is approved and merged, you can use the code below to add a badge to your site:

```html
<a href="https://astro-webrings.lou.gg/next?site=YOUR_SITE_ID&ring=YOUR_RING">
  <img src="BADGE_URL" alt="Astro webring badge" width="88" height="31" />
</a>
```

Don't forget to swap out `YOUR_SITE_ID`, `YOUR_RING` and `BADGE_URL` with the id of your site you specified in the PR, the slug of the webring you joined and the badge image link (which you can copy from the images in the table below).

That's it! Welcome on the ring.

> In the near future, this webring will publish an Astro component to simplify this for you! Check back on this site in a few days for an updated guide.

## Available Webrings
A list of all webrings is available [on the webpage](https://astro-webrings.lou.gg/#available-webrings)!
