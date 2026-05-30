"use client";

import { Shield, Activity, Cpu, Brain, Lock, FileSearch } from "lucide-react";

interface Props {
  product: {
    name: string;
    tagline: string;
    status: string;
    status_label: string;
  };
  color: string;
  iconBg: string;
}

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  genesis: Cpu,
  aegis: Shield,
  vigil: Activity,
  cipher: Brain,
  citadel: Lock,
  sentinel: FileSearch,
};

export function ProductHero({ product, color, iconBg }: Props) {
  const Icon = icons[product.name.toLowerCase()] || Shield;
  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="glow-orb glow-orb-blue -top-20 left-1/2 -translate-x-1/2" style={{ width: 400, height: 400 }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className={`mx-auto mb-6 inline-flex rounded-2xl ${iconBg} p-4`}>
          <Icon className={`h-10 w-10 ${color}`} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl notranslate" translate="no">
          {product.name}
        </h1>
        <p className="mt-4 text-xl text-secondary">{product.tagline}</p>
        <span className={`mt-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
          product.status === "production" ? "bg-emerald-500/15 text-emerald-400" :
          product.status === "beta" ? "bg-cyan-500/15 text-cyan-400" :
          "bg-amber-500/15 text-amber-400"
        }`}>
          {product.status_label}
        </span>
      </div>
    </section>
  );
}
