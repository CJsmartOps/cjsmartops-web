"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="glow-orb glow-orb-blue -top-20 left-1/2 -translate-x-1/2" style={{ width: 400, height: 400 }} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border-medium bg-glass px-3 py-1 text-[11px] font-medium tracking-widest text-glow uppercase backdrop-blur-md">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
