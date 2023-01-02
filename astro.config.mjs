import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

/**
 * @description Determina si la página debe aparecer en el sitemap o no.
 * @param {string} page Página que se recibe del filter-sitemap.
 */
const isExcludedInSitemap = (page) => {
  return [
    "https://angelguerra.me/no-cookies/",
    "https://angelguerra.me/en/cv/",
    "https://angelguerra.me/herir-al-ser-humano/",
    "https://angelguerra.me/ignorar-las-ordenes-del-ser-humano/",
    "https://angelguerra.me/herirse-a-uno-mismo/",
  ].includes(page);
};

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default defineConfig({
  site: "https://angelguerra.me",
  integrations: [
    sitemap({ filter: (page) => !isExcludedInSitemap(page) }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    tailwind(),
  ],
});
