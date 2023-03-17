import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

function isExcludedInSitemap(page) {
  return [
    "https://angelguerra.me/no-cookies/",
    "https://angelguerra.me/harming-humans/",
    "https://angelguerra.me/ignoring-human-orders/",
    "https://angelguerra.me/harm-to-self/",
  ].includes(page);
}

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default defineConfig({
  site: "https://angelguerra.me/",
  experimental: { assets: true },
  integrations: [
    sitemap({ filter: (page) => !isExcludedInSitemap(page) }),
    tailwind(),
  ],
});
