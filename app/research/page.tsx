import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";
import { Shield, Activity, Cpu, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Platform",
  description:
    "Observability-driven research platform for contextual runtime defense. Longitudinal telemetry, semantic analysis, and adaptive trust systems.",
};

const methodology = [
  {
    title: "Longitudinal Telemetry",
    body: "We collect process-level signals over extended time windows — weeks and months, not minutes. This enables statistical baselining with high confidence and early drift detection that threshold-based rules would miss.",
  },
  {
    title: "Runtime Behavioral Analysis",
    body: "Rather than relying on static signatures, our agents analyze runtime behavior: memory allocation patterns, process tree evolution, network communication flows, and filesystem interactions.",
  },
  {
    title: "Semantic Contextualization",
    body: "CIPHER enriches raw telemetry with contextual reputation scoring. Relationships between processes, network endpoints, and workloads are mapped and classified — not just logged.",
  },
  {
    title: "Distributed Observability",
    body: "Multi-agent deployment across heterogeneous environments enables cross-endpoint correlation. Patterns that appear benign in isolation are surfaced when viewed across the fleet.",
  },
  {
    title: "Adaptive Trust Systems",
    body: "Trust is not binary. Our scoring models evolve continuously based on behavioral evidence. Scores decay over time, requiring sustained positive behavior to maintain high-trust classification.",
  },
];

const modules = [
  { icon: Shield, name: "AEGIS", desc: "Runtime enforcement and quarantine engine. Reversible containment with full audit trail.", color: "text-blue-400", bg: "bg-blue-500/15" },
  { icon: Activity, name: "Vigil", desc: "Telemetry collection and drift detection. Non-blocking, low-footprint, forensic-ready.", color: "text-cyan-400", bg: "bg-cyan-500/15" },
  { icon: Cpu, name: "Genesis", desc: "Orchestration, dashboards, and event correlation. Central nervous system of the platform.", color: "text-violet-400", bg: "bg-violet-500/15" },
  { icon: Brain, name: "CIPHER", desc: "Semantic intelligence. Network behavior mapping, contextual reputation, and pattern analysis.", color: "text-emerald-400", bg: "bg-emerald-500/15" },
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Research"
        title="Research Platform"
        subtitle="CJsmartOps is a research-driven platform. Every capability supports longitudinal investigation, applied defensive analysis, and the scientific study of runtime behavior."
      />

      {/* Methodology */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Research Methodology
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {methodology.slice(0, 3).map(({ title, body }, i) => (
              <GradientCard key={title} delay={i * 0.08}>
                <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{body}</p>
              </GradientCard>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {methodology.slice(3).map(({ title, body }, i) => (
              <GradientCard key={title} delay={(i + 3) * 0.08}>
                <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{body}</p>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-6 bg-surface/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">
            Platform Modules
          </h2>
          <div className="grid gap-6 lg:grid-cols-4">
            {modules.map(({ icon: Icon, name, desc, color, bg }) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60"
              >
                <div className={`mb-4 inline-flex rounded-lg ${bg} p-2.5`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{name}</h3>
                <p className="text-sm leading-relaxed text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Observe Before You Automate
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Our research philosophy prioritizes understanding over action.
            Informed decisions — grounded in empirical observation and
            longitudinal context — are always better than fast ones.
          </p>
        </div>
      </section>
    </div>
  );
}
