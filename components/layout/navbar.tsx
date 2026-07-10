"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageSelector } from "@/components/ui/language-selector";
import type { Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

const navLabels = {
  es: {
    home: "Inicio",
    platform: "Plataforma",
    products: "Capacidades",
    technology: "Tecnología",
    roadmap: "Roadmap",
    about: "Nosotros",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    platform: "Platform",
    products: "Capabilities",
    technology: "Technology",
    roadmap: "Roadmap",
    about: "About",
    contact: "Contact",
  },
};

export function Navbar({ lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const t = navLabels[lang];

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 group">
          <Image
            src="/logo-cjsmartops.png"
            alt="CJsmartOps"
            width={40}
            height={40}
            className="h-8 w-auto transition-opacity group-hover:opacity-90"
          />
          <span className="text-lg font-semibold tracking-tight text-foreground notranslate" translate="no">
            CJsmart<span className="text-accent">Ops</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link href={`/${lang}`} className="text-secondary transition-colors hover:text-foreground">
            {t.home}
          </Link>
          <Link href={`/${lang}/platform`} className="text-secondary transition-colors hover:text-foreground">
            {t.platform}
          </Link>
          <Link href={`/${lang}/products`} className="text-secondary transition-colors hover:text-foreground">
            {t.products}
          </Link>
          <Link href={`/${lang}/technology`} className="text-secondary transition-colors hover:text-foreground">
            {t.technology}
          </Link>
          <Link href={`/${lang}/roadmap`} className="text-secondary transition-colors hover:text-foreground">
            {t.roadmap}
          </Link>
          <Link href={`/${lang}/about`} className="text-secondary transition-colors hover:text-foreground">
            {t.about}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            {t.contact}
          </Link>
          <LanguageSelector lang={lang} />
        </div>
      </nav>
    </header>
  );
}
