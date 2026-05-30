"use client";

import { motion } from "framer-motion";

interface Phase {
  period: string;
  title: string;
  items: string[];
}

interface Props {
  phases: Phase[];
}

export function Timeline({ phases }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border-glow hidden sm:block" />
      <div className="space-y-12">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.period}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12 sm:pl-16"
          >
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-glow bg-background hidden sm:flex">
              <div className="h-2 w-2 rounded-full bg-glow" />
            </div>
            <div className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60">
              <span className="inline-block rounded-full bg-glow/10 px-3 py-1 text-xs font-medium text-glow">
                {phase.period}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{phase.title}</h3>
              <ul className="mt-3 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glow/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
