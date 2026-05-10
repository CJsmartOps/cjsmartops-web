import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cjsmartops.com"),
  title: {
    default: "CJsmartOps — Defensa Contextual en Runtime",
    template: "%s — CJsmartOps",
  },
  description:
    "Plataforma de seguridad basada en observabilidad, enfocada en gobernanza de runtime, telemetría semántica y defensa contextual para infraestructura moderna.",
  keywords: [
    "defensa en runtime",
    "observabilidad",
    "plataforma de seguridad",
    "telemetría contextual",
    "análisis semántico",
    "gobernanza de confianza",
    "seguridad de infraestructura",
  ],
  openGraph: {
    siteName: "CJsmartOps",
    title: "CJsmartOps — Defensa Contextual en Runtime",
    description:
      "Plataforma de seguridad basada en observabilidad. Gobernanza de runtime, telemetría semántica y defensa contextual.",
    type: "website",
  },
  robots: "index, follow",
  other: {
    "google": "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased notranslate`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
