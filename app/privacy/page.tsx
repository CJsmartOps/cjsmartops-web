import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

export const metadata: Metadata = {
  title: "Privacy & Data Principles",
  description:
    "Privacy principles and operational transparency. How CJsmartOps handles telemetry, minimizes data collection, and respects user privacy.",
};

const principles = [
  {
    title: "Data Minimization",
    body: "We collect only the telemetry signals necessary for runtime analysis. Personal identifiers are stripped at the agent level before transmission. No user-generated content is ingested.",
  },
  {
    title: "Contextual Observability",
    body: "Telemetry is collected for operational and research purposes — not for profiling, advertising, or resale. Every signal ingested serves a specific defensive function: drift detection, threat correlation, or behavioral baselining.",
  },
  {
    title: "No Telemetry Monetization",
    body: "CJsmartOps does not sell, share, or monetize operational telemetry. Data is used exclusively for improving detection capabilities and advancing applied defensive research.",
  },
  {
    title: "Research-Oriented Approach",
    body: "Longitudinal datasets are retained for baseline modeling and anomaly detection research. Access is restricted to the research team and governed by internal data handling policies.",
  },
  {
    title: "Operational Transparency",
    body: "We publish our architecture, methodology, and findings. Platform behavior is documented and explainable. Questions about data handling can be directed to our research team.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Privacy"
        title="Privacy & Data Principles"
        subtitle="How we handle telemetry, minimize data exposure, and maintain operational transparency."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {principles.map(({ title, body }, i) => (
            <GradientCard key={title} delay={i * 0.08}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
              <p className="text-sm leading-relaxed text-secondary">{body}</p>
            </GradientCard>
          ))}

          <div className="mt-12 rounded-2xl border border-border-glow bg-surface/20 p-8 text-center">
            <p className="text-sm text-secondary">
              For questions about data handling or research access, contact{" "}
              <a
                href="mailto:contacto.cjsmartops@gmail.com"
                className="font-medium text-glow transition-colors hover:text-accent"
              >
                contacto.cjsmartops@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
