import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("posts");
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
