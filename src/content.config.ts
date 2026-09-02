import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/posts" }),
  schema: z.object({
    lang: z.string(),
    title: z.string(),
    description: z.string(),
    socialImage: z.string(),
    publishDate: z.date(),
    draft: z.boolean().default(false),
    keywords: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
