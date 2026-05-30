"use client";

import { motion } from "framer-motion";
import { Bug, Network, FileSearch, PackageOpen } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  lang: "es" | "en";
}

const cases = [
  {
    icon: Bug,
    es: "Detección de Amenazas Fileless",
    en: "Fileless Threat Detection",
    desc_es: "Identificación de ataques en memoria sin dependencia de firmas de archivos. Análisis de memfd, LD_PRELOAD y binarios eliminados.",
    desc_en: "In-memory attack identification without file signature dependency. Analysis of memfd, LD_PRELOAD and deleted binaries."
  },
  {
    icon: Network,
    es: "Gobernanza Multi-Agente",
    en: "Multi-Agent Governance",
    desc_es: "Coordinación de agentes independientes con perímetros de contención estrictos. Correlación entre endpoints sin perder aislamiento.",
    desc_en: "Coordination of independent agents with strict containment perimeters. Cross-endpoint correlation without losing isolation."
  },
  {
    icon: FileSearch,
    es: "Forensia Post-Incidente",
    en: "Post-Incident Forensics",
    desc_es: "Registros inmutables con HMAC-SHA256. Cadenas de eventos trazables para auditoría y cumplimiento.",
    desc_en: "Immutable logs with HMAC-SHA256. Traceable event chains for audit and compliance."
  },
  {
    icon: PackageOpen,
    es: "Monitoreo de Supply Chain",
    en: "Supply Chain Monitoring",
    desc_es: "Validación de integridad de dependencias con whitelist y verificación SHA256. Rollback automático ante anomalías.",
    desc_en: "Dependency integrity validation with whitelist and SHA256 verification. Automatic rollback on anomalies."
  }
];

export function UseCasesSection({ dict, lang }: Props) {
  const u = dict.home.use_cases;
  return (
    <section className="relative py-32 px-6 bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>{u.eyebrow}</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{u.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">{u.subtitle}</p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cases.map(({ icon: Icon, es, en, desc_es, desc_en }, i) => (
            <motion.div
              key={es}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-glow/10 p-3">
                  <Icon className="h-6 w-6 text-glow" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {lang === "es" ? es : en}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">
                  {lang === "es" ? desc_es : desc_en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
