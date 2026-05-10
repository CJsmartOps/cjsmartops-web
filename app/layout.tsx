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
    default: "CJsmartOps — Contextual Runtime Defense",
    template: "%s — CJsmartOps",
  },
  description:
    "Observability-driven security platform focused on runtime governance, semantic telemetry and contextual defense for modern infrastructure.",
  keywords: [
    "runtime defense",
    "observability",
    "security platform",
    "contextual telemetry",
    "semantic analysis",
    "trust governance",
    "infrastructure security",
  ],
  openGraph: {
    siteName: "CJsmartOps",
    title: "CJsmartOps — Contextual Runtime Defense",
    description:
      "Observability-driven security platform. Runtime governance, semantic telemetry, and contextual defense.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
