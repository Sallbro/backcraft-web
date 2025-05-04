// import { generateId } from "@/mdx-components";
import type { Metadata } from "next";

export const siteConfig = {
  name: "BackCraft",
  url: "https://backcraft.vercel.app/",
  bgImage:
    "https://res.cloudinary.com/di0av3xly/image/upload/v1744919181/Aether-ui/landing-img_gafup9.avif",
  description:
    "Breathe life into your backend with modular scaffolding. Backcraft CLI empowers developers with beautifully structured registry and plug-and-play components.",
  links: {
    twitter: "#",
    github: "https://github.com/Sallbro/backcraft-cli",
    linkedin:"https://www.linkedin.com/in/salman-asu-36820a230/",
  },
};

const formatName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/_/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export interface MetaConfigProps {
  title: string;
  description: string;
}

const fallbackURL = "https://backcraft.vercel.app";

/**
 * @param title: Metadata["title"];
 * @param description: Metadata["description"];
 */
export const metaConfig = ({
  title = siteConfig.name,
  description = siteConfig.description,
}: MetaConfigProps): Metadata => ({
  title,
  description,
  category: "Web Development",
  keywords: ["Next.js", "React", "Tailwind CSS", "Motion", "JavaScript", "TypeScript"],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: "sallbro - salman asu", url: siteConfig.url }],
  publisher: "BackCraft",
  alternates: { canonical: fallbackURL },
  twitter: {
    creator: "@sallbro",
    title,
    description,
    card: "summary_large_image",
    images: [
      {
        url: `/meta?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        width: 1200,
        height: 630,
        alt: title + " Banner",
      },
    ],
  },
  openGraph: {
    type: "article",
    title,
    description,
    siteName: siteConfig.name,
    url: `${siteConfig.url}/docs/${formatName(title)}`,
    locale: "en_US",
    images: [
      {
        url: `/meta?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        width: 1200,
        height: 630,
        alt: title + " Banner",
      },
    ],
  },
});

export const rootSiteConfig = {
  title: {
    default: siteConfig.name,
    template: "%s | BackCraft",
  },
  description: siteConfig.description,
  url: siteConfig.url,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  category: "Web Development",
  keywords: ["Next.js", "React", "Tailwind CSS", "Motion", "JavaScript", "TypeScript"],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: "sallbro - salman asu", url: siteConfig.url }],
  publisher: "BackCraft",
  alternates: { canonical: fallbackURL },
  twitter: {
    creator: "@sallbro",
    title: siteConfig.name,
    description: siteConfig.description,
    card: "summary_large_image",
    images: [
      {
        url: siteConfig.bgImage,
        width: 1200,
        height: 630,
        alt: "BackCraft Banner",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: siteConfig.bgImage,
        width: 1200,
        height: 630,
        alt: "BackCraft Banner",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
