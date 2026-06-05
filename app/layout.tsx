import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const jsonLd = {
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
        "url": "https://cjsmartops.com.ar/es/about"
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" translate="no" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased notranslate`}>
      <head>
        <link rel="alternate" hreflang="es" href="https://cjsmartops.com.ar/es" />
        <link rel="alternate" hreflang="en" href="https://cjsmartops.com.ar/en" />
        <link rel="alternate" hreflang="x-default" href="https://cjsmartops.com.ar/es" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
