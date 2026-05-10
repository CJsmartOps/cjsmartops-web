import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";
import { Shield, Activity, Cpu, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Plataforma de Investigación",
  description:
    "Plataforma de investigación basada en observabilidad para defensa contextual en runtime. Telemetría longitudinal, análisis semántico y sistemas de confianza adaptativa.",
};

const methodology = [
  {
    title: "Telemetría Longitudinal",
    body: "Recolectamos señales a nivel de proceso durante ventanas de tiempo extendidas — semanas y meses, no minutos. Esto permite establecer líneas base estadísticas con alta confianza y detectar drift temprano que las reglas basadas en umbrales no detectarían.",
  },
  {
    title: "Análisis de Comportamiento en Runtime",
    body: "En lugar de depender de firmas estáticas, nuestros agentes analizan el comportamiento en runtime: patrones de asignación de memoria, evolución del árbol de procesos, flujos de comunicación de red e interacciones con el sistema de archivos.",
  },
  {
    title: "Contextualización Semántica",
    body: "CIPHER enriquece la telemetría cruda con scoring de reputación contextual. Las relaciones entre procesos, endpoints de red y cargas de trabajo se mapean y clasifican — no solo se registran.",
  },
  {
    title: "Observabilidad Distribuida",
    body: "El despliegue multi-agente en entornos heterogéneos permite la correlación entre endpoints. Los patrones que parecen inocuos de forma aislada se revelan cuando se observan en toda la flota.",
  },
  {
    title: "Sistemas de Confianza Adaptativa",
    body: "La confianza no es binaria. Nuestros modelos de scoring evolucionan continuamente según la evidencia de comportamiento. Los puntajes decaen con el tiempo, requiriendo comportamiento positivo sostenido para mantener una clasificación de alta confianza.",
  },
];

const modules = [
  { icon: Shield, name: "AEGIS", desc: "Motor de contención en runtime y cuarentena. Contención reversible con registro de auditoría completo.", color: "text-blue-400", bg: "bg-blue-500/15" },
  { icon: Activity, name: "Vigil", desc: "Recolección de telemetría y detección de drift. No bloqueante, huella mínima, preparado para forensia.", color: "text-cyan-400", bg: "bg-cyan-500/15" },
  { icon: Cpu, name: "Genesis", desc: "Orquestación, dashboards y correlación de eventos. Sistema nervioso central de la plataforma.", color: "text-violet-400", bg: "bg-violet-500/15" },
  { icon: Brain, name: "CIPHER", desc: "Inteligencia semántica. Mapeo de comportamiento de red, reputación contextual y análisis de patrones.", color: "text-emerald-400", bg: "bg-emerald-500/15" },
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Investigación"
        title="Plataforma de Investigación"
        subtitle="CJsmartOps es una plataforma orientada a la investigación. Cada capacidad respalda la investigación longitudinal, el análisis defensivo aplicado y el estudio científico del comportamiento en runtime."
      />

      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Metodología de Investigación
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {methodology.slice(0, 3).map(({ title, body }, i) => (
              <GradientCard key={title} delay={i * 0.08}>
                <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{body}</p>
              </GradientCard>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {methodology.slice(3).map(({ title, body }, i) => (
              <GradientCard key={title} delay={(i + 3) * 0.08}>
                <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{body}</p>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Módulos de la Plataforma
          </h2>
          <div className="grid gap-6 lg:grid-cols-4">
            {modules.map(({ icon: Icon, name, desc, color, bg }) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60"
              >
                <div className={`mb-4 inline-flex rounded-lg ${bg} p-2.5`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground notranslate" translate="no">{name}</h3>
                <p className="text-sm leading-relaxed text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Observar Antes de Automatizar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Nuestra filosofía de investigación prioriza la comprensión sobre la acción. Las decisiones informadas — basadas en observación empírica y contexto longitudinal — siempre son mejores que las rápidas.
          </p>
        </div>
      </section>
    </div>
  );
}
