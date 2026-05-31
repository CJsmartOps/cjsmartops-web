import { generatePageMetadata } from "@/lib/metadata";
import { getDictionary, type Lang } from "@/lib/i18n";
import { FileSearch, FileText, Shield, CheckCircle, Clock, BarChart3 } from "lucide-react";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapability } from "@/components/products/product-capability";
import { GradientCard } from "@/components/ui/gradient-card";

const caps_es = [
  { icon: FileText, title: "Informes de auditoría", description: "Generación automatizada de informes con evidencia trazable para cumplimiento normativo." },
  { icon: CheckCircle, title: "Verificación de cumplimiento", description: "Chequeo continuo de políticas de seguridad contra estándares de la industria." },
  { icon: Clock, title: "Análisis post-incidente", description: "Herramientas forenses para reconstruir la línea de tiempo completa de un incidente." },
  { icon: Shield, title: "Registros inmutables", description: "Cadenas de eventos firmadas criptográficamente que garantizan integridad de la evidencia." },
  { icon: BarChart3, title: "Métricas de cumplimiento", description: "Dashboards con indicadores clave de seguridad y estado de conformidad." },
  { icon: FileSearch, title: "Búsqueda forense avanzada", description: "Consultas complejas sobre datos históricos para investigaciones detalladas." },
];

const caps_en = [
  { icon: FileText, title: "Audit reports", description: "Automated report generation with traceable evidence for regulatory compliance." },
  { icon: CheckCircle, title: "Compliance verification", description: "Continuous security policy checking against industry standards." },
  { icon: Clock, title: "Post-incident analysis", description: "Forensic tools to reconstruct the complete timeline of an incident." },
  { icon: Shield, title: "Immutable records", description: "Cryptographically signed event chains guaranteeing evidence integrity." },
  { icon: BarChart3, title: "Compliance metrics", description: "Dashboards with key security indicators and compliance status." },
  { icon: FileSearch, title: "Advanced forensic search", description: "Complex queries over historical data for detailed investigations." },
];

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products/sentinel", metaKey: "products" });
}

export default async function SentinelPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products.sentinel;
  const caps = lang === "es" ? caps_es : caps_en;

  return (
    <div className="flex flex-col">
      <ProductHero product={p} color="text-rose-400" iconBg="bg-rose-500/15" />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <GradientCard><h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.purpose_label}</h2><p className="text-sm leading-relaxed text-secondary">{p.purpose}</p></GradientCard>
          <GradientCard><h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.problem_label}</h2><p className="text-sm leading-relaxed text-secondary">{p.problem}</p></GradientCard>
          <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-lg font-semibold text-foreground">{dict.products.capabilities}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {caps.map((c, i) => <ProductCapability key={c.title} icon={c.icon} title={c.title} description={c.description} delay={i * 0.08} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
