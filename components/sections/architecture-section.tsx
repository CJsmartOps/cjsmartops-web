"use client";

import { motion } from "framer-motion";
import { Shield, Activity, Cpu, Brain } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const modules = [
  {
    icon: Shield,
    name: "AEGIS",
    gradient: "from-blue-500/20 to-transparent",
    border: "border-blue-500/20",
    text: "text-blue-400",
    iconBg: "bg-blue-500/15",
    badge: "Enforcement Layer",
    items: ["Runtime containment", "Quarantine engine", "Trust governance"],
  },
  {
    icon: Activity,
    name: "Vigil",
    gradient: "from-cyan-400/20 to-transparent",
    border: "border-cyan-400/20",
    text: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    badge: "Telemetry Layer",
    items: ["Drift detection", "Forensic context", "Behavioral baselines"],
  },
  {
    icon: Cpu,
    name: "Genesis",
    gradient: "from-violet-400/20 to-transparent",
    border: "border-violet-400/20",
    text: "text-violet-400",
    iconBg: "bg-violet-500/15",
    badge: "Orchestration Layer",
    items: ["Dashboard engine", "Event correlation", "Auto-remediation"],
  },
  {
    icon: Brain,
    name: "CIPHER",
    gradient: "from-emerald-400/20 to-transparent",
    border: "border-emerald-400/20",
    text: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    badge: "Semantic Intelligence",
    items: ["Network behavior", "Contextual reputation", "Pattern analysis"],
  },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-32 px-6 bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="glow-orb glow-orb-cyan top-1/3 right-1/3" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>Architecture</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              A Platform Built On{" "}
              <span className="text-glow">Four Pillars</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Every component is designed to operate independently yet correlate
              seamlessly. From runtime enforcement to semantic analysis, the
              stack forms a complete defensive surface.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {modules.map(({ icon: Icon, name, gradient, border, text, iconBg, badge, items }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border ${border} bg-gradient-to-b ${gradient} bg-surface/50 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]`}
            >
              <div className={`mb-4 inline-flex rounded-xl ${iconBg} p-3`}>
                <Icon className={`h-6 w-6 ${text}`} />
              </div>
              <span className="mb-1 inline-block rounded-full bg-surface/80 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase backdrop-blur-sm">
                {badge}
              </span>
              <h3 className="mt-2 text-xl font-bold text-foreground">{name}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glow/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Connector line */}
        <div className="mt-12 hidden items-center justify-center gap-1 lg:flex">
          {[...Array(48)].map((_, i) => (
            <div
              key={i}
              className="h-px w-2 bg-border-glow"
              style={{ opacity: 1 - Math.abs(i - 24) * 0.04 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
