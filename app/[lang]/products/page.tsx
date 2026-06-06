import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Shield, Activity, Cpu, Brain, Lock, FileSearch } from "lucide-react";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products", metaKey: "products" });
}

export default async function ProductsPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products;

  return (
    <div className="flex flex-col pt-32 pb-16 px-6 text-center">
      <h1 className="text-4xl font-bold">{p.overview_title}</h1>
      <p className="mt-4 text-secondary max-w-2xl mx-auto">{p.overview_subtitle}</p>
      <div className="mt-8 grid gap-4 max-w-4xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {[
          { key: "aegis", name: p.aegis.name, icon: Shield, desc: p.aegis.tagline },
          { key: "vigil", name: p.vigil.name, icon: Activity, desc: p.vigil.tagline },
          { key: "genesis", name: p.genesis.name, icon: Cpu, desc: p.genesis.tagline },
          { key: "cipher", name: p.cipher.name, icon: Brain, desc: p.cipher.tagline },
          { key: "citadel", name: p.citadel.name, icon: Lock, desc: p.citadel.tagline },
          { key: "sentinel", name: p.sentinel.name, icon: FileSearch, desc: p.sentinel.tagline },
        ].map(({ key: k, name, icon: Icon, desc }) => (
          <Link key={k} href={`/${lang}/products/${k}`} className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm hover:border-border-glow hover:bg-surface/60 transition-all">
            <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="text-lg font-bold" translate="no">{name}</h3>
            <p className="text-sm text-secondary mt-1">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
