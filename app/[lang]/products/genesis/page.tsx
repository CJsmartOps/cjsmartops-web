import { generatePageMetadata } from "@/lib/metadata";
import { getDictionary, type Lang } from "@/lib/i18n";
import { Cpu, BarChart3, GitBranch, Zap, Shield, Network } from "lucide-react";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapability } from "@/components/products/product-capability";
import { GradientCard } from "@/components/ui/gradient-card";

const caps_es = [
  { icon: Cpu, title: "Orquestación multi-agente", description: "Coordinación centralizada de agentes AEGIS y Vigil con comunicación cifrada." },
  { icon: BarChart3, title: "Dashboard operacional", description: "Vista unificada de telemetría, alertas y estado de agentes en tiempo real." },
  { icon: GitBranch, title: "Correlación de eventos", description: "Motor de correlación que conecta señales entre agentes para revelar cadenas de ataque." },
  { icon: Zap, title: "Auto-remediación", description: "Respuesta automatizada basada en evidencia. Cada acción incluye justificación y trazabilidad." },
  { icon: Shield, title: "C2 Telegram", description: "Comando y control vía bot de Telegram con callbacks seguros y autenticación." },
  { icon: Network, title: "API Gateway", description: "Interfaz programática para integración con sistemas externos y automatización." },
];

const caps_en = [
  { icon: Cpu, title: "Multi-agent orchestration", description: "Centralized coordination of AEGIS and Vigil agents with encrypted communication." },
  { icon: BarChart3, title: "Operational dashboard", description: "Unified view of telemetry, alerts and agent status in real time." },
  { icon: GitBranch, title: "Event correlation", description: "Correlation engine connecting cross-agent signals to reveal attack chains." },
  { icon: Zap, title: "Auto-remediation", description: "Evidence-based automated response. Every action includes justification and traceability." },
  { icon: Shield, title: "C2 Telegram", description: "Command and control via Telegram bot with secure callbacks and authentication." },
  { icon: Network, title: "API Gateway", description: "Programmatic interface for integration with external systems and automation." },
];

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products/genesis", metaKey: "products" });
}

export default async function GenesisPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products.genesis;
  const caps = lang === "es" ? caps_es : caps_en;

  return (
    <div className="flex flex-col">
      <ProductHero product={p} color="text-violet-400" iconBg="bg-violet-500/15" />
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
