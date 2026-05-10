"use client";

import { motion } from "framer-motion";
import { Microscope, Database, Network, TrendingUp, GitCompare } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientCard } from "@/components/ui/gradient-card";

const research = [
  {
    icon: Database,
    title: "Runtime Telemetry",
    desc: "Longitudinal collection of process-level signals across heterogeneous environments. Build behavioral profiles that evolve over weeks and months.",
  },
  {
    icon: Network,
    title: "Distributed Observability",
    desc: "Multi-agent telemetry aggregation with semantic correlation. Understand patterns across endpoints, networks, and cloud workloads simultaneously.",
  },
  {
    icon: GitCompare,
    title: "Semantic Network Analysis",
    desc: "Map communication flows and classify relationships using contextual reputation scoring — not just IP-to-IP connection logs.",
  },
  {
    icon: TrendingUp,
    title: "Operational Baselining",
    desc: "Statistical modeling of normal behavior per workload. Detect drift early and distinguish anomalies from genuine threats with confidence.",
  },
  {
    icon: Microscope,
    title: "Contextual Correlation",
    desc: "Cross-reference telemetry across AEGIS, Vigil, and CIPHER layers. Surface hidden attack chains that single-source monitoring would miss.",
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
            <SectionBadge>Research</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Built for{" "}
              <span className="text-glow">Longitudinal Research</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Our platform is a research ecosystem first. Every capability is
              designed to support ongoing investigation, continuous baselining,
              and the scientific study of defensive signals at scale.
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
