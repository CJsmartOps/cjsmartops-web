import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { ProductCard } from "@/components/ui/product-card";
import { Shield, Activity, Cpu, Brain, Lock, FileSearch } from "lucide-react";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products", metaKey: "products" });
}

const products = [
  { key: "aegis", icon: Shield, color: "text-blue-400", iconBg: "bg-blue-500/15" },
  { key: "vigil", icon: Activity, color: "text-cyan-400", iconBg: "bg-cyan-500/15" },
  { key: "genesis", icon: Cpu, color: "text-violet-400", iconBg: "bg-violet-500/15" },
  { key: "cipher", icon: Brain, color: "text-emerald-400", iconBg: "bg-emerald-500/15" },
  { key: "citadel", icon: Lock, color: "text-amber-400", iconBg: "bg-amber-500/15" },
  { key: "sentinel", icon: FileSearch, color: "text-rose-400", iconBg: "bg-rose-500/15" },
];

export default async function ProductsPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products;

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={dict.nav.products} title={p.overview_title} subtitle={p.overview_subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ key, icon, color, iconBg }) => {
              const prod = (p as Record<string, { name: string; tagline: string; status: string; status_label: string }>)[key];
              return (
                <ProductCard
                  key={key}
                  name={prod.name}
                  icon={icon}
                  tagline={prod.tagline}
                  status={prod.status}
                  statusLabel={prod.status_label}
                  href={`/${lang}/products/${key}`}
                  color={color}
                  iconBg={iconBg}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
