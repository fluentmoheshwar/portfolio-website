/**
 * Schema.org JSON-LD schemas for Google Rich Results
 */

export interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  image: string;
  description: string;
  sameAs: string[];
  birthPlace?: string;
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
  datePublished: string;
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
    url: "https://moheshwar.com",
    image: "https://moheshwar.com/social_images/home.png",
    description:
      "Software developer specializing in Tailwind CSS and TypeScript, with expertise in full-stack web development using Node.js and Express.js.",
    sameAs: [
      "https://github.com/fluentmoheshwar",
      "https://twitter.com/fluentmoheshwar",
      "https://linkedin.com/in/fluentmoheshwar",
    ],
    birthPlace: "Satkhira, Bangladesh",
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
    url: "https://moheshwar.com",
    description:
      "Portfolio of Moheshwar Amarnath Biswas showcasing projects, skills, and blog posts on web development, AI, and software engineering.",
    image: "https://moheshwar.com/social_images/home.png",
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
  canonicalUrl: string
): BlogPostingSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: socialImage,
    datePublished: publishDate.toISOString(),
    author: {
      "@type": "Person",
      name: "Moheshwar Amarnath Biswas",
      url: "https://moheshwar.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Moheshwar Amarnath Biswas",
      logo: {
        "@type": "ImageObject",
        url: "https://moheshwar.com/social_images/home.png",
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
  applicationCategory: string = "DeveloperApplication"
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
  items: Array<{ name: string; url?: string }>
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
  }>
): CollectionPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Moheshwar Amarnath Biswas",
    description: "A collection of software projects and applications",
    url: "https://moheshwar.com",
    mainEntity: items.map((item) => ({
      "@type": "CreativeWork" as const,
      ...item,
    })),
  };
}
