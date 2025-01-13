import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    keywords: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
