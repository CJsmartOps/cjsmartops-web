"use client";

import { motion } from "framer-motion";
import { Shield, Activity, Cpu, Brain } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

const nodes = [
  { icon: Shield, name: "AEGIS", label: "Containment Engine", color: "border-blue-500/30", glow: "bg-blue-500/20", text: "text-blue-300" },
  { icon: Activity, name: "Vigil", label: "Telemetry Collector", color: "border-cyan-500/30", glow: "bg-cyan-500/20", text: "text-cyan-300" },
  { icon: Cpu, name: "Genesis", label: "Orchestration Hub", color: "border-violet-500/30", glow: "bg-violet-500/20", text: "text-violet-300" },
  { icon: Brain, name: "CIPHER", label: "Semantic Engine", color: "border-emerald-500/30", glow: "bg-emerald-500/20", text: "text-emerald-300" },
];

export function ArchitectureDiagramSection({ dict }: Props) {
  const a = dict.home.architecture;
  return (
    <section className="relative py-32 px-6 bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>{a.eyebrow}</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{a.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">{a.subtitle}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {nodes.map(({ icon: Icon, name, label, color, glow, text }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className={`h-24 w-24 rounded-2xl border ${color} ${glow} flex items-center justify-center backdrop-blur-sm`}>
                  <Icon className={`h-8 w-8 ${text}`} />
                </div>
                <div className="mt-3 text-sm font-semibold notranslate text-foreground" translate="no">{name}</div>
                <div className="text-xs text-muted">{label}</div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px -z-10">
            <div className="mx-auto h-full w-4/5 bg-gradient-to-r from-transparent via-border-glow to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
