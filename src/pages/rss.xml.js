import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts")).filter(
    (post) => !import.meta.env.PROD || !post.data.draft,
  );
  return rss({
    title: "Moheshwar Amarnath Biswas Blog",
    description: "Posts by Moheshwar Amarnath Biswas",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
  });
}
