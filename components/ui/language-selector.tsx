"use client";

import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export function LanguageSelector({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLang: Lang) => {
    if (newLang === lang) return;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLang;
    router.push("/" + segments.join("/"));
  };

  return (
    <div className="relative inline-flex items-center gap-1.5 text-sm">
      <Globe className="h-4 w-4 text-muted" />
      <button
        onClick={() => switchLang(lang === "es" ? "en" : "es")}
        className="rounded-md px-2 py-1 text-xs font-medium text-secondary transition-colors hover:text-foreground hover:bg-surface/40"
        title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
}
