import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/posts" }),
  schema: z.object({
    lang: z.string(),
    title: z.string(),
    description: z.string(),
    socialImage: z.string(),
    publishDate: z.date(),
    keywords: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
