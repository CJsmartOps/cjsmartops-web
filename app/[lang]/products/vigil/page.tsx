import { generatePageMetadata } from "@/lib/metadata";
import { getDictionary, type Lang } from "@/lib/i18n";
import { Activity, BarChart3, Clock, Database, TrendingUp, Eye } from "lucide-react";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapability } from "@/components/products/product-capability";
import { GradientCard } from "@/components/ui/gradient-card";

const caps_es = [
  { Icon: Activity, title: "Telemetría a nivel proceso", description: "Señales no bloqueantes con huella mínima (< 40MB RAM). Recolección con límite de frecuencia." },
  { Icon: BarChart3, title: "Líneas base de comportamiento", description: "Modelado estadístico sobre semanas de datos. Detección de desviaciones tempranas." },
  { Icon: Clock, title: "Detección de drift", description: "Identificación de cambios graduales en el comportamiento que las reglas estáticas no capturarían." },
  { Icon: Database, title: "Datos longitudinales", description: "Conservación de datos durante semanas para establecer patrones y detectar anomalías sutiles." },
  { Icon: TrendingUp, title: "Correlación entre endpoints", description: "Agregación de señales de múltiples agentes para revelar patrones de ataque distribuido." },
  { Icon: Eye, title: "Preparación forense", description: "Contexto completo para análisis post-incidente. Cada señal incluye metadata de origen." },
];

const caps_en = [
  { Icon: Activity, title: "Process-level telemetry", description: "Non-blocking signals with minimal footprint (< 40MB RAM). Rate-limited collection." },
  { Icon: BarChart3, title: "Behavioral baselines", description: "Statistical modeling over weeks of data. Early deviation detection." },
  { Icon: Clock, title: "Drift detection", description: "Identification of gradual behavioral changes that static rules would miss." },
  { Icon: Database, title: "Longitudinal data", description: "Data retention for weeks to establish patterns and detect subtle anomalies." },
  { Icon: TrendingUp, title: "Cross-endpoint correlation", description: "Multi-agent signal aggregation to reveal distributed attack patterns." },
  { Icon: Eye, title: "Forensic readiness", description: "Complete context for post-incident analysis. Every signal includes origin metadata." },
];

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products/vigil", metaKey: "products" });
}

export default async function VigilPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products.vigil;
  const caps = lang === "es" ? caps_es : caps_en;

  return (
    <div className="flex flex-col">
      <ProductHero product={p} color="text-cyan-400" iconBg="bg-cyan-500/15" />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <GradientCard><h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.purpose_label}</h2><p className="text-sm leading-relaxed text-secondary">{p.purpose}</p></GradientCard>
          <GradientCard><h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.problem_label}</h2><p className="text-sm leading-relaxed text-secondary">{p.problem}</p></GradientCard>
          <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-lg font-semibold text-foreground">{dict.products.capabilities}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {caps.map(({ Icon, title, description }, i) => (
                <ProductCapability key={title} icon={<Icon className="h-4 w-4 text-accent" />} title={title} description={description} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
