export interface Project {
  name: string;
  description: string;
  image: string;
  links: Array<{
    label: string;
    url: string;
    icon: string;
  }>;
}

export const projects: Project[] = [
  {
    name: "TauriWinTools",
    description:
      "A collection of handy tools and shortcuts that will make your Windows experience more efficient and fun. You can tweak your settings or access hidden features with ease.",
    image: "https://moheshwar.com/social_images/projects/tauriwintools.png",
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
  },
  {
    name: "Puja Bloom Visual Studio (Code) Theme",
    description:
      "Puja Bloom is a Visual Studio / Visual Studio Code Theme designed for programmers with accessibility and cuteness in mind.",
    image: "https://moheshwar.com/social_images/projects/pujaBloom.png",
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
  },
  {
    name: "OpenPeriods",
    description:
      "OpenPeriods is a Open Source Browser based Period (menstruation) Tracking System for women written in Svelte.",
    image: "https://moheshwar.com/social_images/projects/openperiods.png",
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
  },
  {
    name: "Amar Bangla Bhasha",
    description:
      "Amar Bangla Bhasha is a website that shows the history of the Bengali language and its evolution over time. It also provides information about the different softwares and tools that are available for learning and using the Bengali language.",
    image: "https://moheshwar.com/social_images/projects/amarbanglabhasha.png",
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
  },
  {
    name: "DSE Scraper",
    description:
      "DSE Scraper is a web scraping tool designed to extract data from the Dhaka Stock Exchange (DSE) website for analysis and research purposes.",
    image: "https://moheshwar.com/social_images/projects/dsescraper.png",
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
  },
];
