"use client";

import { motion } from "framer-motion";
import { Microscope, Database, Network, TrendingUp, GitCompare } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientCard } from "@/components/ui/gradient-card";

const research = [
  {
    icon: Database,
    title: "Telemetría de Runtime",
    desc: "Recolección longitudinal de señales a nivel de proceso en entornos heterogéneos. Construcción de perfiles de comportamiento que evolucionan durante semanas y meses.",
  },
  {
    icon: Network,
    title: "Observabilidad Distribuida",
    desc: "Agregación de telemetría multi-agente con correlación semántica. Comprensión de patrones entre endpoints, redes y cargas cloud simultáneamente.",
  },
  {
    icon: GitCompare,
    title: "Análisis Semántico de Red",
    desc: "Mapeo de flujos de comunicación y clasificación de relaciones usando scoring de reputación contextual — no solo registros de conexión IP a IP.",
  },
  {
    icon: TrendingUp,
    title: "Líneas Base Operacionales",
    desc: "Modelado estadístico del comportamiento normal por carga de trabajo. Detección temprana de drift y distinción entre anomalías y amenazas genuinas con alta confianza.",
  },
  {
    icon: Microscope,
    title: "Correlación Contextual",
    desc: "Referencia cruzada de telemetría entre las capas AEGIS, Vigil y CIPHER. Revela cadenas de ataque ocultas que el monitoreo de fuente única pasaría por alto.",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="relative py-32 px-6 bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="glow-orb glow-orb-blue -bottom-32 left-1/3" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>Investigación</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Construido para{" "}
              <span className="text-glow">Investigación Longitudinal</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Nuestra plataforma es ante todo un ecosistema de investigación. Cada capacidad está diseñada para respaldar la investigación continua, el establecimiento de líneas base y el estudio científico de señales defensivas a escala.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {research.slice(0, 3).map(({ icon: Icon, title, desc }, i) => (
            <GradientCard key={title} delay={i * 0.1}>
              <div className="mb-4 inline-flex rounded-lg bg-glow/10 p-2.5">
                <Icon className="h-5 w-5 text-glow" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{desc}</p>
            </GradientCard>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {research.slice(3).map(({ icon: Icon, title, desc }, i) => (
            <GradientCard key={title} delay={(i + 3) * 0.1}>
              <div className="mb-4 inline-flex rounded-lg bg-glow/10 p-2.5">
                <Icon className="h-5 w-5 text-glow" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{desc}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
