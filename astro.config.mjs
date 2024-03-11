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

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  site: "https://angelguerra.me/",
  integrations: [
    sitemap({ filter: (page) => !isExcludedInSitemap(page) }),
    tailwind(),
  ],
});
