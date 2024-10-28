import { Metadata } from "next";

export function constructMetaData({
  title = " ContriEarn",
  description = "Secure your contributions, unlock the vault of developer rewards!",
  image = "/thumbnail.png", // put a thumbnail.png in public folder, resolution 1200x630
  authors = { name: "contriearn team", url: "https://contriearn.vercel.app/" },
  creator = "contriearn team",
  generator = "Next.js",
  publisher = "contriearn team",
  robots = "index, follow",
}: {
  title?: string;
  description?: string;
  image?: string;
  authors?: { name: string; url: string };
  creator?: string;
  generator?: string;
  publisher?: string;
  robots?: string;
} = {}): Metadata {
  return {
    title,
    description,
    authors,
    creator,
    generator,
    publisher,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Manice18heree",
      creator: "@Manice18heree",
      creatorId: "@Manice18heree",
      title,
      description,
      images: [image],
    },
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: "/assets/brand-icons/favicon.ico",
          href: "/assets/brand-icons/favicon.ico",
        },
        {
          media: "(prefers-color-scheme: dark)",
          url: "/assets/brand-icons/favicon.ico",
          href: "/assets/brand-icons/favicon.ico",
        },
      ],
    },
    metadataBase: new URL("https://contriearn.vercel.app/"),
    robots,
  };
}
