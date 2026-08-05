/**
 * Schema.org JSON-LD schemas for Google Rich Results
 */

import domain from "./domain.ts";
const username = "fluentmoheshwar";

export interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  image: string;
  description: string;
  sameAs: string[];
  jobTitle?: string;
  worksFor?: {
    "@type": string;
    name: string;
  };
}

export interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  image: string;
  creator: {
    "@type": string;
    name: string;
  };
}

export interface BlogPostingSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
  articleBody?: string;
  author: {
    "@type": string;
    name: string;
    url: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
}

export interface SoftwareApplicationSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  image?: string;
  author: {
    "@type": string;
    name: string;
  };
  applicationCategory: string;
  operatingSystem?: string;
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface CollectionPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    description: string;
    url?: string;
    image?: string;
  }>;
}

/**
 * Creates a Person schema for the portfolio owner
 */
export function createPersonSchema(): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moheshwar Amarnath Biswas",
    url: `https://${domain}`,
    image: `https://${domain}/social_images/home.png`,
    description:
      "Software developer specializing in Tailwind CSS and TypeScript, with expertise in full-stack web development using Node.js and Express.js.",
    sameAs: [
      `https://github.com/${username}`,
      `https://x.com/${username}`,
      `https://codeberg.org/${username}/`,
      `https://facebook.com/${username}/`,
      `https://x.com/${username}`,
      `https://www.instagram.com/${username}/`,
      `https://www.threads.com/@${username}/`,
      `https://bsky.app/profile/moheshwar.com`,
      `https://www.youtube.com/@${username}/`,
      `https://mastodon.social/@${username}/`,
      "https://weibo.com/u/4011497514",
    ],
    jobTitle: "Software Developer",
  };
}

/**
 * Creates a WebSite schema
 */
export function createWebsiteSchema(): WebsiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moheshwar Amarnath Biswas Portfolio",
    url: `https://${domain}`,
    description:
      "Portfolio of Moheshwar Amarnath Biswas showcasing projects, skills, and blog posts on web development, AI, and software engineering.",
    image: `https://${domain}/social_images/home.png`,
    creator: {
      "@type": "Person",
      name: "Moheshwar Amarnath Biswas",
    },
  };
}

/**
 * Creates a BlogPosting schema
 */
export function createBlogPostingSchema(
  title: string,
  description: string,
  socialImage: string,
  publishDate: Date,
  canonicalUrl: string,
  lastModified?: Date,
  articleBody?: string,
): BlogPostingSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: socialImage,
    url: canonicalUrl,
    datePublished: publishDate.toISOString(),
    dateModified: (lastModified || publishDate).toISOString(),
    ...(articleBody && { articleBody }),
    author: {
      "@type": "Person",
      name: "Moheshwar Amarnath Biswas",
      url: `https://${domain}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Moheshwar Amarnath Biswas",
      logo: {
        "@type": "ImageObject",
        url: `https://${domain}/social_images/home.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };
}

/**
 * Creates a SoftwareApplication schema for projects
 */
export function createSoftwareApplicationSchema(
  name: string,
  description: string,
  url: string,
  image?: string,
  applicationCategory: string = "DeveloperApplication",
): SoftwareApplicationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    url: url,
    image: image,
    author: {
      "@type": "Person",
      name: "Moheshwar Amarnath Biswas",
    },
    applicationCategory: applicationCategory,
  };
}

/**
 * Creates a Breadcrumb schema for navigation
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/**
 * Creates a CollectionPage schema for project listings
 */
export function createCollectionPageSchema(
  items: Array<{
    name: string;
    description: string;
    url?: string;
    image?: string;
  }>,
): CollectionPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Moheshwar Amarnath Biswas",
    description: "A collection of software projects and applications",
    url: `https://${domain}`,
    mainEntity: items.map((item) => ({
      "@type": "CreativeWork" as const,
      ...item,
    })),
  };
}
