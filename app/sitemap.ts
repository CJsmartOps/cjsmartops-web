import type { MetadataRoute } from "next";

const baseUrl = "https://cjsmartops.com.ar";

const slugs = [
  "",
  "platform",
  "products",
  "products/genesis",
  "products/aegis",
  "products/vigil",
  "products/cipher",
  "products/citadel",
  "products/sentinel",
  "technology",
  "roadmap",
  "about",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of slugs) {
    const path = slug ? `/${slug}` : "";
    entries.push({
      url: `${baseUrl}/es${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: slug === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          es: `${baseUrl}/es${path}`,
        },
      },
    });
    entries.push({
      url: `${baseUrl}/en${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: slug === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          es: `${baseUrl}/es${path}`,
        },
      },
    });
  }

  return entries;
}
