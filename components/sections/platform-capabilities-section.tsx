"use client";

import { motion } from "framer-motion";
import {
  Shield, Activity, Wrench, Network, Brain, Eye,
  HardDrive, Lock, PackageOpen, Cpu,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const capabilities = [
  {
    group: "Runtime Governance",
    items: [
      { icon: Shield, label: "Agent-scoped enforcement boundaries", detail: "Strict isolation with reversible containment policies per agent" },
      { icon: Lock, label: "Fernet AES encryption at rest", detail: "All secrets, tokens, and client data encrypted with key rotation" },
      { icon: Cpu, label: "Process-level RAM guard", detail: "Fileless attack detection via memfd, LD_PRELOAD, and deleted binary analysis every 60s" },
    ],
  },
  {
    group: "Supply Chain Defense",
    items: [
      { icon: PackageOpen, label: "Mandatory supply chain validation", detail: "TRUSTED_SOURCES whitelist, SHA256 manifest verification, automated rollback" },
      { icon: Wrench, label: "8-layer YARA rule pipeline", detail: "566 external rules updated weekly with anti-tamper checks at every stage" },
      { icon: Network, label: "Static package pre-install inspection", detail: "npm and pip packages analyzed for suspicious patterns before installation" },
    ],
  },
  {
    group: "Observability & Telemetry",
    items: [
      { icon: Activity, label: "Multi-agent telemetry aggregation", detail: "6 independent agents emit structured telemetry to a central correlation pipeline" },
      { icon: Eye, label: "Drift detection and behavioral baselining", detail: "Statistical deviation analysis across weeks of longitudinal process data" },
      { icon: Brain, label: "Semantic network analysis (CIPHER)", detail: "TCP flow classification with 3 detectors: rare destination, process fan-out, repeated SYN" },
    ],
  },
  {
    group: "Trust & Forensic Readiness",
    items: [
      { icon: HardDrive, label: "Immutable audit logging", detail: "HMAC-SHA256 signed event chains with SOC2-compliant retention" },
      { icon: Lock, label: "Evidence-gated remediation", detail: "Every alert includes full evidence chain: correlation path, source telemetry, and decision rationale" },
      { icon: Shield, label: "Adaptive trust scoring", detail: "Trust scores decay toward neutrality unless reinforced by sustained behavioral evidence" },
    ],
  },
];

export function PlatformCapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="glow-orb glow-orb-blue -top-20 right-1/4" style={{ width: 500, height: 500 }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>Platform</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Platform{" "}
              <span className="text-glow">Capabilities</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Every listed capability is implemented and operational in our
              deployment environment. No aspirational features — just verified
              defensive infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {capabilities.map(({ group, items }, gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="rounded-2xl border border-border bg-surface/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-border-glow"
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                {group}
              </h3>
              <div className="space-y-5">
                {items.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="flex gap-4">
                    <div className="mt-0.5 shrink-0 rounded-lg bg-accent/10 p-2">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
