import { generatePageMetadata } from "@/lib/metadata";
import { getDictionary, type Lang } from "@/lib/i18n";
import { Brain, Globe, GitCompare, BarChart3, Shield, TrendingUp } from "lucide-react";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapability } from "@/components/products/product-capability";
import { GradientCard } from "@/components/ui/gradient-card";

const caps_es = [
  { Icon: Globe, title: "Mapeo de flujos TCP", description: "Clasificación de conexiones con 3 detectores: destino inusual, fan-out de procesos, SYN repetidos." },
  { Icon: GitCompare, title: "Reputación contextual", description: "Scoring dinámico de endpoints según comportamiento histórico y patrones de comunicación." },
  { Icon: BarChart3, title: "Análisis de patrones", description: "Detección de patrones de comunicación anómalos que el análisis IP a IP no revelaría." },
  { Icon: Brain, title: "Enriquecimiento semántico", description: "Transformación de logs crudos en inteligencia accionable con contexto operacional." },
  { Icon: TrendingUp, title: "Aprendizaje longitudinal", description: "Modelos que mejoran con semanas de datos, refinando la precisión de detección." },
  { Icon: Shield, title: "Correlación con AEGIS y Vigil", description: "Integración con la telemetría de runtime para validación cruzada de hallazgos." },
];

const caps_en = [
  { Icon: Globe, title: "TCP flow mapping", description: "Connection classification with 3 detectors: unusual destination, process fan-out, repeated SYN." },
  { Icon: GitCompare, title: "Contextual reputation", description: "Dynamic endpoint scoring based on historical behavior and communication patterns." },
  { Icon: BarChart3, title: "Pattern analysis", description: "Detection of anomalous communication patterns that IP-to-IP analysis would miss." },
  { Icon: Brain, title: "Semantic enrichment", description: "Transformation of raw logs into actionable intelligence with operational context." },
  { Icon: TrendingUp, title: "Longitudinal learning", description: "Models that improve with weeks of data, refining detection precision." },
  { Icon: Shield, title: "AEGIS & Vigil correlation", description: "Integration with runtime telemetry for cross-validation of findings." },
];

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products/cipher", metaKey: "products" });
}

export default async function CipherPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products.cipher;
  const caps = lang === "es" ? caps_es : caps_en;

  return (
    <div className="flex flex-col">
      <ProductHero product={p} color="text-emerald-400" iconBg="bg-emerald-500/15" />
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
