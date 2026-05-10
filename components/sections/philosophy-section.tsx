"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Box,
  GitBranch,
  Layers,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const principles = [
  {
    icon: ShieldCheck,
    title: "Contención Reversible",
    desc: "Cada acción de contención admite reversión. Mecanismos de seguridad garantizan estabilidad operativa durante la respuesta automatizada.",
  },
  {
    icon: Eye,
    title: "Análisis Contextual",
    desc: "Las decisiones se basan en contexto de runtime — no solo en firmas estáticas. Memoria, árboles de procesos y comportamiento de red informan cada acción.",
  },
  {
    icon: Box,
    title: "Arquitectura Explicable",
    desc: "La transparencia está incorporada. Cada correlación, cada cuarentena y cada alerta incluye una cadena de evidencia completa para auditoría.",
  },
  {
    icon: GitBranch,
    title: "Confianza Adaptativa",
    desc: "Los puntajes de confianza evolucionan con el comportamiento. Las líneas base se adaptan continuamente, eliminando la falsa elección entre seguridad y disponibilidad.",
  },
  {
    icon: Layers,
    title: "Bajo Impacto Operacional",
    desc: "Huella del agente inferior a 40MB. Recolección de telemetría no bloqueante. Diseñado para ejecutarse silenciosamente junto a cargas de producción.",
  },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>Filosofía</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Observar Antes de{" "}
              <span className="text-glow">Automatizar</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
              La automatización de seguridad debe construirse sobre una base de visibilidad. Nuestra filosofía prioriza la comprensión sobre la acción — porque las decisiones informadas siempre son mejores que las rápidas.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.slice(0, 3).map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-surface/20 p-8 transition-all duration-300 hover:border-border-glow hover:bg-surface/40"
            >
              <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-2.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {principles.slice(3).map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 3) * 0.1 }}
              className="group rounded-2xl border border-border bg-surface/20 p-8 transition-all duration-300 hover:border-border-glow hover:bg-surface/40"
            >
              <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-2.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
