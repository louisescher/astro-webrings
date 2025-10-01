![A buoy besides the text "Astro Webrings" in big, white letters, with some pink decoration in the corners.](https://raw.githubusercontent.com/louisescher/astro-webrings/refs/heads/master/packages/web/public/og.png)

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
  "id": "a-unique-id",
  "url": "https://example.com"
}
```
The `name` can be anything you want it to be. The `id` should be a unique identifier for your site and should only contain lowercase letters from a-z, numbers, dots, hyphens and underscores. The `url` should be the URL to your site! This is where people will get linked to.

Once your pull request is approved and merged, you can install the [`astro-webrings`](https://www.npmjs.com/package/astro-webrings) package, which allows you to add a badge for the ring to your site. Start by installing the package from the NPM:

```bash
# npm
npm install astro-webrings

# pnpm
pnpm add astro-webrings

# yarn
yarn add astro-webrings
```

After installing, you can import and use the badge like this:

```jsx
---
import WebringBadge from "astro-webrings/badge";
---
<WebringBadge site="example.com" ring="friends-of-houston" />
```

Remember to swap out the `site` and `ring` props to the `slug` you chose when submitting your PR, and the `ring` you want to link to.

Additionally, if there is an animated image for the ring you want to link to, you can use the `animated` prop:

```jsx
<WebringBadge site="example.com" ring="friends-of-houston" animated />
```

That's it! Welcome on the ring.

### Overriding the Image
If you want to use a different image, you can use the `imageOverride` prop on the component to pass in either the URL of an image (local or remote) or an imported `ImageMetadata` object:

```jsx
---
import WebringBadge from "astro-webrings/badge";
import MyCustomBadge from "./my-custom-badge.png";
---
<WebringBadge site="example.com" ring="friends-of-houston" imageOverride={MyCustomBadge} />
<WebringBadge site="example.com" ring="friends-of-houston" imageOverride={"/path/inside/public/to/my-custom-badge.png"} />
<WebringBadge site="example.com" ring="friends-of-houston" imageOverride={"https://example.com/my-custom-badge.png"} />
```

## Available Webrings
A list of all webrings is available [on the webpage](https://astro-webrings.lou.gg/#available-webrings)!
