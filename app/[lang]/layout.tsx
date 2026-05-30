import { getDictionary, type Lang, locales } from "@/lib/i18n";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const baseUrl = "https://cjsmartops.com.ar";
  return {
    title: {
      default: "CJsmartOps — " + (lang === "es"
        ? "Plataforma de Observabilidad Contextual Impulsada por IA"
        : "AI-Powered Contextual Observability Platform"),
      template: `%s — CJsmartOps`,
    },
    description: lang === "es"
      ? "CJsmartOps es una plataforma cloud-native de operaciones, observabilidad y gobernanza de confianza impulsada por IA."
      : "CJsmartOps is a cloud-native operations, observability and trust governance platform powered by AI.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/es`,
      },
    },
    openGraph: {
      siteName: "CJsmartOps",
      type: "website",
      images: [{ url: "/og-image.png" }],
    },
    robots: "index, follow",
    other: {
      google: "notranslate",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CJsmartOps",
    "url": "https://cjsmartops.com.ar",
    "description": lang === "es"
      ? "Plataforma cloud-native de operaciones, observabilidad y gobernanza de confianza impulsada por IA."
      : "Cloud-native operations, observability and trust governance platform powered by AI.",
    "sameAs": ["https://github.com/CJsmartOps"],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@cjsmartops.com.ar",
      "contactType": "sales",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Laboulaye",
      "addressRegion": "Córdoba",
      "addressCountry": "AR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navbar lang={lang as Lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Lang} />
    </>
  );
}
