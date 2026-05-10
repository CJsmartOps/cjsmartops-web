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
    title: "Reversible Containment",
    desc: "Every enforcement action supports rollback. Safety mechanisms guarantee operational stability during automated response.",
  },
  {
    icon: Eye,
    title: "Contextual Analysis",
    desc: "Decisions are driven by runtime context — not just static signatures. Memory, process trees, and network behavior inform every action.",
  },
  {
    icon: Box,
    title: "Explainable Architecture",
    desc: "Transparency is built in. Every correlation, every quarantine, and every alert includes a full evidence chain for audit.",
  },
  {
    icon: GitBranch,
    title: "Adaptive Trust",
    desc: "Trust scores evolve with behavior. Baselines adapt continuously, eliminating the false choice between security and availability.",
  },
  {
    icon: Layers,
    title: "Low Operational Impact",
    desc: "Agent footprint under 40MB. Non-blocking telemetry collection. Designed to run silently alongside production workloads.",
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
            <SectionBadge>Philosophy</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Observe Before{" "}
              <span className="text-glow">You Automate</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
              Security automation must be built on a foundation of visibility.
              Our philosophy prioritizes understanding over action — because
              informed decisions are always better than fast ones.
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
