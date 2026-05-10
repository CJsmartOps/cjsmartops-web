import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

export const metadata: Metadata = {
  title: "Privacidad y Principios de Datos",
  description:
    "Principios de privacidad y transparencia operacional. Cómo CJsmartOps gestiona la telemetría, minimiza la recolección de datos y respeta la privacidad.",
};

const principles = [
  {
    title: "Minimización de Datos",
    body: "Recolectamos únicamente las señales de telemetría necesarias para el análisis de runtime. Los identificadores personales se eliminan a nivel de agente antes de la transmisión. No se ingiere contenido generado por usuarios.",
  },
  {
    title: "Observabilidad Contextual",
    body: "La telemetría se recolecta con fines operativos y de investigación — no para perfilado, publicidad ni reventa. Cada señal ingerida cumple una función defensiva específica: detección de drift, correlación de amenazas o establecimiento de líneas base de comportamiento.",
  },
  {
    title: "Sin Monetización de Telemetría",
    body: "CJsmartOps no vende, comparte ni monetiza la telemetría operacional. Los datos se utilizan exclusivamente para mejorar las capacidades de detección y avanzar en la investigación defensiva aplicada.",
  },
  {
    title: "Enfoque Orientado a la Investigación",
    body: "Los conjuntos de datos longitudinales se conservan para modelado de líneas base e investigación de detección de anomalías. El acceso está restringido al equipo de investigación y se rige por políticas internas de gestión de datos.",
  },
  {
    title: "Transparencia Operacional",
    body: "Publicamos nuestra arquitectura, metodología y hallazgos. El comportamiento de la plataforma está documentado y es explicable. Las consultas sobre gestión de datos pueden dirigirse a nuestro equipo de investigación.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Privacidad"
        title="Privacidad y Principios de Datos"
        subtitle="Cómo gestionamos la telemetría, minimizamos la exposición de datos y mantenemos la transparencia operacional."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {principles.map(({ title, body }, i) => (
            <GradientCard key={title} delay={i * 0.08}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
              <p className="text-sm leading-relaxed text-secondary">{body}</p>
            </GradientCard>
          ))}

          <div className="mt-12 rounded-2xl border border-border-glow bg-surface/20 p-8 text-center">
            <p className="text-sm text-secondary">
              Para consultas sobre gestión de datos o acceso a investigación, contactanos en{" "}
              <a
                href="mailto:info@cjsmartops.com.ar"
                className="font-medium text-glow transition-colors hover:text-accent"
              >
                info@cjsmartops.com.ar
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
