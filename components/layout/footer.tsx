import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

export async function Footer({ lang }: Props) {
  const dict = await getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="inline-block mb-3">
              <Image
                src="/logo-cjsmartops.png"
                alt="CJsmartOps"
                width={120}
                height={120}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {dict.footer.platform}
            </h3>
            <ul className="space-y-2.5 text-sm text-muted notranslate">
              <li translate="no">{dict.footer.products.aegis}</li>
              <li translate="no">{dict.footer.products.vigil}</li>
              <li translate="no">{dict.footer.products.genesis}</li>
              <li translate="no">{dict.footer.products.cipher}</li>
              <li translate="no">{dict.footer.products.citadel}</li>
              <li translate="no">{dict.footer.products.sentinel}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {dict.footer.company}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${lang}/platform`} className="text-muted transition-colors hover:text-foreground">
                  {dict.nav.platform}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="text-muted transition-colors hover:text-foreground">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/technology`} className="text-muted transition-colors hover:text-foreground">
                  {dict.nav.technology}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/roadmap`} className="text-muted transition-colors hover:text-foreground">
                  {dict.nav.roadmap}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-muted transition-colors hover:text-foreground">
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {dict.footer.contact}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${lang}/contact`} className="text-muted transition-colors hover:text-foreground">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <a href="mailto:info@cjsmartops.com.ar" className="text-muted transition-colors hover:text-foreground">
                  info@cjsmartops.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center text-xs text-muted">
          &copy; {year} {dict.footer.copyright}
          {" — "}
          {dict.footer.developed}
        </div>
      </div>
    </footer>
  );
}
