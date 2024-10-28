import type { MetadataRoute } from "next";

// To tell search engine crawlers which URLs they can access on contriearn.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://contriearn.vercel.app/sitemap.xml",
  };
}

// Output:

// User-Agent: *
// Allow: /
// Sitemap: https://contriearn.vercel.app/sitemap.xml
