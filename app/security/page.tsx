import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

export const metadata: Metadata = {
  title: "Security & Platform Integrity",
  description:
    "Runtime governance and contextual defense architecture. Understand how CJsmartOps approaches security, containment, and operational integrity.",
};

const sections = [
  {
    title: "Runtime Governance",
    body: "Our agents operate with strict scope boundaries. AEGIS enforces containment policies at the process level. Vigil collects telemetry without disrupting workloads. Every enforcement action is logged, reversible, and auditable.",
  },
  {
    title: "Observability Architecture",
    body: "Observability is not an add-on — it is the foundation. Our platform ingests process-level signals, correlates across agents, and surfaces contextual insights through dashboards and programmatic APIs. No alert is generated without an evidence chain.",
  },
  {
    title: "Reversible Containment",
    body: "Automated response must never compromise operational stability. All containment actions support rollback. Quarantine states are time-bounded. Trust scores decay towards neutrality unless reinforced by sustained behavioral evidence.",
  },
  {
    title: "Minimal Operational Impact",
    body: "Agent footprint is kept under 40MB in memory. Telemetry collection is non-blocking and rate-limited. The platform is designed to run alongside production workloads — not interfere with them.",
  },
  {
    title: "Responsible Research Philosophy",
    body: "CJsmartOps is a research-driven platform. Security postures are derived from empirical observation, not vendor claims. We study runtime behavior, build longitudinal baselines, and share findings with the community when operationally safe to do so.",
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Security"
        title="Security & Platform Integrity"
        subtitle="How CJsmartOps approaches runtime defense, containment, observability, and operational responsibility."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map(({ title, body }, i) => (
            <GradientCard key={title} delay={i * 0.08}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
              <p className="text-sm leading-relaxed text-secondary">{body}</p>
            </GradientCard>
          ))}
        </div>
      </section>
    </div>
  );
}
