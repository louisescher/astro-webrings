# astro-webrings

Add webring badges for astro-webrings.lou.gg to your Astro site with ease!

## Installation

You can install the package from the NPM:

```bash
# npm
npm install astro-webrings

# pnpm
pnpm add astro-webrings

# yarn
yarn add astro-webrings
```

Once installed, you can import the component to add a badge to your site:

```jsx
---
import WebringBadge from "astro-webrings/badge";
---

<WebringBadge site="example.com" ring="friends-of-houston" />
```

Make sure that the `site` prop matches the slug you chose in your PR to the [`astro-webrings`](https://github.com/louisescher/astro-webrings) repository and the `ring` prop matches the ring you added your site to. Otherwise, people will see errors when clicking on the badge!

### Animated Badges
If you can see an animated version of the badge you want to use in the [webrings list](https://astro-webrings.lou.gg/#available-webrings), you can set the `animated` prop to use that version instead.
