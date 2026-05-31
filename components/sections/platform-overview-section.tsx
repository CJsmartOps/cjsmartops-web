"use client";

import { motion } from "framer-motion";
import { Shield, Activity, Cpu, Brain, Lock, FileSearch } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/section-badge";
import type { Dictionary, Lang } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  lang: Lang;
}

const pillars = [
  { icon: Shield, name: "AEGIS", color: "text-blue-400", bg: "bg-blue-500/15", desc_es: "Contención en runtime", desc_en: "Runtime Containment" },
  { icon: Activity, name: "Vigil", color: "text-cyan-400", bg: "bg-cyan-500/15", desc_es: "Telemetría y drift", desc_en: "Telemetry & Drift" },
  { icon: Cpu, name: "Genesis", color: "text-violet-400", bg: "bg-violet-500/15", desc_es: "Orquestación", desc_en: "Orchestration" },
  { icon: Brain, name: "CIPHER", color: "text-emerald-400", bg: "bg-emerald-500/15", desc_es: "Inteligencia semántica", desc_en: "Semantic Intelligence" },
  { icon: Lock, name: "Citadel", color: "text-amber-400", bg: "bg-amber-500/15", desc_es: "Custodia criptográfica", desc_en: "Cryptographic Custody" },
  { icon: FileSearch, name: "Sentinel", color: "text-rose-400", bg: "bg-rose-500/15", desc_es: "Auditoría forense", desc_en: "Forensic Auditing" },
];

export function PlatformOverviewSection({ dict, lang }: Props) {
  const p = dict.home.platform_overview;
  return (
    <section className="relative py-32 px-6 bg-surface/20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>{p.eyebrow}</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{p.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">{p.subtitle}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {pillars.map(({ icon: Icon, name, color, bg, desc_es, desc_en }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60 text-center"
            >
              <div className={`mx-auto mb-3 inline-flex rounded-xl ${bg} p-2.5`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div className="text-sm font-semibold text-foreground notranslate" translate="no">{name}</div>
              <div className="mt-1 text-xs text-muted">
                {lang === "es" ? desc_es : desc_en}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/products`}
            className="text-sm font-medium text-glow transition-colors hover:text-accent"
          >
            {dict.common.learn_more} →
          </Link>
        </div>
      </div>
    </section>
  );
}
