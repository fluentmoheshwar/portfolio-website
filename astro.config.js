import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  site: `https://${domain}`,
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [sitemap(), react(), showTailwindcssBreakpoint()],
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
