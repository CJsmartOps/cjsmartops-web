import type { MetadataRoute } from "next";

const baseUrl = "https://cjsmartops.com.ar";

const slugs = [
  "", "platform", "products",
  "products/genesis", "products/aegis", "products/vigil",
  "products/cipher", "products/citadel", "products/sentinel",
  "technology", "roadmap", "about", "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of ["es", "en"]) {
    for (const slug of slugs) {
      const path = slug ? `${slug}` : "";
      entries.push({
        url: `${baseUrl}/${lang}${path ? "/" + path : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: slug === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
