import { generatePageMetadata } from "@/lib/metadata";
import { getDictionary, type Lang } from "@/lib/i18n";
import { Shield, Bug, Zap, PackageOpen, FileText, Globe } from "lucide-react";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapability } from "@/components/products/product-capability";
import { GradientCard } from "@/components/ui/gradient-card";

const caps_es = [
  { Icon: Shield, title: "Contención a nivel proceso", description: "Aislamiento de procesos sospechosos con políticas reversibles y registro de auditoría completo." },
  { Icon: Zap, title: "Detección de amenazas fileless", description: "Identificación de ataques en memoria sin dependencia de firmas de archivos. Análisis de patrones anómalos en tiempo real." },
  { Icon: Shield, title: "Perímetros de contención", description: "Aislamiento de procesos sospechosos con políticas reversibles y registro de auditoría completo." },
  { Icon: Globe, title: "Monitoreo de memoria", description: "Observación continua de la actividad en memoria para detectar manipulaciones no autorizadas." },
  { Icon: Bug, title: "Clasificación inteligente", description: "Gestión automática de cuarentena con reducción de falsos positivos y aprendizaje continuo." },
  { Icon: FileText, title: "Registro de auditoría inmutable", description: "Cadenas de eventos con firma criptográfica. Total trazabilidad de cada acción." },
  { Icon: PackageOpen, title: "Gobernanza de confianza adaptativa", description: "Scores que evolucionan con el comportamiento. Sin confianza binaria ni permanente." },
];

const caps_en = [
  { Icon: Shield, title: "Process-level containment", description: "Suspicious process isolation with reversible policies and complete audit logging." },
  { Icon: Zap, title: "Fileless threat detection", description: "In-memory attack identification without file signature dependency. Real-time anomalous pattern analysis." },
  { Icon: Shield, title: "Containment perimeters", description: "Suspicious process isolation with reversible policies and complete audit logging." },
  { Icon: Globe, title: "Memory monitoring", description: "Continuous memory activity observation to detect unauthorized manipulations." },
  { Icon: Bug, title: "Intelligent classification", description: "Automatic quarantine management with false positive reduction and continuous learning." },
  { Icon: FileText, title: "Immutable audit logging", description: "Cryptographically signed event chains. Full traceability for every action." },
  { Icon: PackageOpen, title: "Adaptive trust governance", description: "Scores that evolve with behavior. No binary or permanent trust." },
];

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products/aegis", metaKey: "products" });
}

export default async function AegisPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products.aegis;
  const caps = lang === "es" ? caps_es : caps_en;

  return (
    <div className="flex flex-col">
      <ProductHero product={p} color="text-blue-400" iconBg="bg-blue-500/15" />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <GradientCard>
            <h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.purpose_label}</h2>
            <p className="text-sm leading-relaxed text-secondary">{p.purpose}</p>
          </GradientCard>
          <GradientCard>
            <h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.problem_label}</h2>
            <p className="text-sm leading-relaxed text-secondary">{p.problem}</p>
          </GradientCard>
          <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-lg font-semibold text-foreground">{dict.products.capabilities}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {caps.map(({ Icon, title, description }, i) => (
                <ProductCapability
                  key={title}
                  icon={<Icon className="h-4 w-4 text-accent" />}
                  title={title}
                  description={description}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
