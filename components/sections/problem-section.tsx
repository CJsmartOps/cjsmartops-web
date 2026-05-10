"use client";

import { motion } from "framer-motion";
import { BellOff, AlertTriangle, Zap, Layers, EyeOff } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientCard } from "@/components/ui/gradient-card";

const problems = [
  {
    icon: BellOff,
    title: "Fatiga de Alertas",
    desc: "Los equipos de seguridad reciben miles de alertas diarias. La mayoría son ruido generado por reglas basadas en umbrales sin contexto de runtime.",
  },
  {
    icon: AlertTriangle,
    title: "Falsos Positivos",
    desc: "Los SIEM tradicionales carecen de líneas base de comportamiento. Anomalías inocuas disparan escalaciones que consumen tiempo y erosionan la confianza.",
  },
  {
    icon: Zap,
    title: "Automatización Ciega",
    desc: "La respuesta automatizada sin explicabilidad genera riesgo. Entender por qué se tomó una decisión es más importante que la velocidad.",
  },
  {
    icon: Layers,
    title: "Complejidad Operativa",
    desc: "Agentes dispersos, registros fragmentados y dashboards desconectados hacen imposible mantener una postura de seguridad unificada.",
  },
  {
    icon: EyeOff,
    title: "Falta de Contexto de Runtime",
    desc: "Las firmas estáticas no capturan los matices de las cargas de trabajo activas. La forensia de memoria y la telemetría de comportamiento son capas ausentes.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>El Desafío</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              El Problema de la{" "}
              <span className="text-glow">Seguridad Tradicional</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              La infraestructura moderna exige observabilidad. Los enfoques tradicionales dependen de reglas estáticas, datos aislados y triage reactivo — generando fatiga, riesgo y puntos ciegos operativos.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.slice(0, 3).map(({ icon: Icon, title, desc }, i) => (
            <GradientCard key={title} delay={i * 0.1}>
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{desc}</p>
            </GradientCard>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {problems.slice(3).map(({ icon: Icon, title, desc }, i) => (
            <GradientCard key={title} delay={(i + 3) * 0.1}>
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5">
                <Icon className="h-5 w-5 text-accent" />
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
