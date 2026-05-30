import type { Metadata } from "next";
import { getDictionary, type Lang } from "./i18n";

interface PageMetaOpts {
  lang: Lang;
  slug: string;
  metaKey: string;
  ogImage?: string;
}

export async function generatePageMetadata({
  lang,
  slug,
  metaKey,
  ogImage = "/og-image.png",
}: PageMetaOpts): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const t = (dict.meta as Record<string, { title: string; description: string }>)[metaKey];
  const baseUrl = "https://cjsmartops.com.ar";
  const path = slug ? `/${lang}/${slug}` : `/${lang}`;

  const alternates: Record<string, string> = {};
  if (lang === "es") {
    alternates.en = `${baseUrl}/en/${slug}`;
    alternates["x-default"] = `${baseUrl}/es/${slug}`;
  } else {
    alternates.es = `${baseUrl}/es/${slug}`;
    alternates["x-default"] = `${baseUrl}/es/${slug}`;
  }

  return {
    title: t?.title ?? "CJsmartOps",
    description: t?.description ?? "",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      siteName: "CJsmartOps",
      title: t?.title ?? "CJsmartOps",
      description: t?.description ?? "",
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: t?.title ?? "CJsmartOps",
      description: t?.description ?? "",
    },
    robots: "index, follow",
    other: {
      google: "notranslate",
    },
  };
}
