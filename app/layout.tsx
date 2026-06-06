import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function buildJsonLd(lang: string) {
  const founderUrl = `https://cjsmartops.com.ar/${lang}/about`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "CJsmartOps",
        "url": "https://cjsmartops.com.ar",
        "logo": "https://cjsmartops.com.ar/og-image.png",
        "description": "AI-powered contextual observability and trust governance platform",
        "foundingDate": "2025",
        "founder": {
          "@type": "Person",
          "name": "Carlos Javier Suárez",
          "jobTitle": "Founder & CEO",
          "url": founderUrl
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@cjsmartops.com.ar",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "url": "https://cjsmartops.com.ar",
        "inLanguage": ["es", "en"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cjsmartops.com.ar/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "CJsmartOps Platform",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Cloud",
        "description": "AI-powered platform integrating contextual observability, runtime containment and semantic intelligence for modern cloud-native infrastructure.",
        "offers": {
          "@type": "Offer",
          "description": "Request Demo"
        }
      }
    ]
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "es";

  return (
    <html lang={lang} translate="no" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased notranslate`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang)) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
