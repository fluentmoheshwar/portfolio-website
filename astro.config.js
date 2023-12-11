import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  site: "https://fluentmoheshwar.pages.dev",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    css: {
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
