import { browserslistToTargets } from "lightningcss";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fluentmoheshwar.pages.dev",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
    css: {
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
    image: {
      // Used for all Markdown images; not configurable per-image
      // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
      experimentalLayout: "responsive",
    },
    experimental: {
      responsiveImages: true,
    },
  },
});
