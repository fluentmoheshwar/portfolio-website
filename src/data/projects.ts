export interface ProjectApplication {
  /** Canonical URL of the application (homepage or repository). */
  url: string;
  /** Required by Google's software app rich result, e.g. "Windows" or "Web". */
  operatingSystem: string;
  /** One of Google's supported app types, e.g. "UtilitiesApplication". */
  applicationCategory: string;
  /** Optional Google-supported subtype for browser-based apps. */
  type?: "WebApplication" | "MobileApplication";
  /** Optional host software requirement, e.g. "Visual Studio or Visual Studio Code". */
  softwareRequirements?: string;
}

export interface Project {
  name: string;
  description: string;
  links: Array<{
    label: string;
    url: string;
    icon: string;
  }>;
  /**
   * Software app metadata; when present, the home page emits a schema.org
   * SoftwareApplication/WebApplication for Google's software app rich result.
   */
  application?: ProjectApplication;
}

export const projects: Project[] = [
  {
    name: "TauriWinTools",
    description:
      "A collection of handy tools and shortcuts that will make your Windows experience more efficient and fun. You can tweak your settings or access hidden features with ease.",
    links: [
      {
        label: "Download",
        url: "https://github.com/fluentmoheshwar/TauriWinTools/releases",
        icon: "FaDownload",
      },
      {
        label: "GitHub",
        url: "https://github.com/fluentmoheshwar/TauriWinTools",
        icon: "FaGithub",
      },
    ],
    application: {
      url: "https://github.com/fluentmoheshwar/TauriWinTools",
      operatingSystem: "Windows",
      applicationCategory: "UtilitiesApplication",
    },
  },
  {
    name: "Puja Bloom Visual Studio (Code) Theme",
    description:
      "Puja Bloom is a Visual Studio / Visual Studio Code Theme designed for programmers with accessibility and cuteness in mind.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/fluentmoheshwar/puja-bloom",
        icon: "FaGithub",
      },
      {
        label: "Visual Studio",
        url: "https://marketplace.visualstudio.com/items?itemName=fluentmoheshwar.PujaBloom",
        icon: "BiLogoVisualStudio",
      },
      {
        label: "Visual Studio Code",
        url: "https://marketplace.visualstudio.com/items?itemName=fluentmoheshwar.puja-bloom",
        icon: "BiLogoVisualStudio",
      },
      {
        label: "OpenVSX",
        url: "https://open-vsx.org/extension/fluentmoheshwar/puja-bloom",
        icon: "BiLogoVisualStudio",
      },
    ],
    application: {
      url: "https://github.com/fluentmoheshwar/puja-bloom",
      operatingSystem: "Windows, macOS, Linux",
      applicationCategory: "DeveloperApplication",
      softwareRequirements: "Visual Studio or Visual Studio Code",
    },
  },
  {
    name: "OpenPeriods",
    description:
      "OpenPeriods is a Open Source Browser based Period (menstruation) Tracking System for women written in Svelte.",
    links: [
      {
        label: "Visit",
        url: "https://openperiods.moheshwar.com/",
        icon: "GoLinkExternal",
      },
      {
        label: "GitHub",
        url: "https://github.com/fluentmoheshwar/openperiods",
        icon: "FaGithub",
      },
    ],
    application: {
      url: "https://openperiods.moheshwar.com/",
      operatingSystem: "Web",
      applicationCategory: "HealthApplication",
      type: "WebApplication",
    },
  },
  {
    name: "Amar Bangla Bhasha",
    description:
      "Amar Bangla Bhasha is a website that shows the history of the Bengali language and its evolution over time. It also provides information about the different softwares and tools that are available for learning and using the Bengali language.",
    links: [
      {
        label: "Visit",
        url: "https://bangla.moheshwar.com/",
        icon: "GoLinkExternal",
      },
      {
        label: "GitHub",
        url: "https://github.com/fluentmoheshwar/amarbanglabhasa",
        icon: "FaGithub",
      },
    ],
    // No `application` metadata: this is an informational website, not a
    // software application, so it stays a CreativeWork in the CollectionPage.
  },
  {
    name: "DSE Scraper",
    description:
      "DSE Scraper is a web scraping tool designed to extract data from the Dhaka Stock Exchange (DSE) website for analysis and research purposes.",
    links: [
      {
        label: "Visit",
        url: "https://dsescraper.moheshwar.com/",
        icon: "GoLinkExternal",
      },
      {
        label: "GitHub",
        url: "https://github.com/fluentmoheshwar/dse-scraper",
        icon: "FaGithub",
      },
    ],
    application: {
      url: "https://dsescraper.moheshwar.com/",
      operatingSystem: "Web",
      applicationCategory: "FinanceApplication",
      type: "WebApplication",
    },
  },
];
