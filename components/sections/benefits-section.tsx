"use client";

import { motion } from "framer-motion";
import { BellOff, Eye, GitBranch, Layers, Zap, ShieldCheck } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  lang: "es" | "en";
}

const benefits = [
  { icon: BellOff, key: "noise_reduction", es: "Reducción de Ruido", en: "Noise Reduction", desc_es: "Filtrado contextual que elimina falsos positivos. Las alertas incluyen cadena de evidencia completa.", desc_en: "Contextual filtering that eliminates false positives. Alerts include full evidence chains." },
  { icon: ShieldCheck, key: "reversible", es: "Contención Reversible", en: "Reversible Containment", desc_es: "Toda acción de contención admite reversión. Seguridad sin comprometer estabilidad operativa.", desc_en: "Every containment action supports rollback. Security without compromising operational stability." },
  { icon: Eye, key: "explainable", es: "Explicabilidad Total", en: "Full Explainability", desc_es: "Cada correlación incluye trazabilidad completa. Sin decisiones de caja negra.", desc_en: "Every correlation includes full traceability. No black-box decisions." },
  { icon: Layers, key: "impact", es: "Bajo Impacto", en: "Low Footprint", desc_es: "Agentes ultraligeros. Telemetría no bloqueante. Diseñado para producción.", desc_en: "Ultra-light agents. Non-blocking telemetry. Production-ready." },
  { icon: Zap, key: "longitudinal", es: "Telemetría Longitudinal", en: "Longitudinal Telemetry", desc_es: "Semanas de datos para líneas base. Detección de drift temprano.", desc_en: "Weeks of data for baselines. Early drift detection." },
  { icon: GitBranch, key: "adaptive", es: "Confianza Adaptativa", en: "Adaptive Trust", desc_es: "Scores que evolucionan con el comportamiento. Sin confianza binaria.", desc_en: "Scores that evolve with behavior. No binary trust." },
];

export function BenefitsSection({ dict, lang }: Props) {
  const b = dict.home.benefits;
  return (
    <section className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="glow-orb glow-orb-cyan -bottom-32 right-1/3" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>{b.eyebrow}</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{b.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">{b.subtitle}</p>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, desc_es, desc_en, es, en }, i) => (
            <motion.div
              key={es}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface/20 p-7 transition-all duration-300 hover:border-border-glow hover:bg-surface/40"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {lang === "es" ? es : en}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">
                {lang === "es" ? desc_es : desc_en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
