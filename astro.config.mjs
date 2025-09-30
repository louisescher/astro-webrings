// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-webrings.lou.gg",

  experimental: {
      fonts: [{
          cssVariable: "--font-inter",
          name: "Inter",
          provider: fontProviders.google(),
          fallbacks: ["Helvetica", "sans-serif"],
          display: "swap",
          subsets: ["latin"]
      }]
	},

  adapter: node({
    mode: "standalone"
  })
});