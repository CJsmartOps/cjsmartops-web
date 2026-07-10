"use client";

import { motion } from "framer-motion";
import { Cloud, Layers, Building2, MonitorPlay } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  lang: Lang;
}

const icons = [Cloud, Layers, Building2, MonitorPlay];

export function TrustMetricsSection({ dict, lang }: Props) {
  const t = dict.home.trust;

  return (
    <section className="relative py-24 px-6 bg-surface/20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-glow">{t.title}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {t.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(t.items as { title: string; body: string }[]).map((item, i) => {
            const Icon = icons[i] || Cloud;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-2.5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">{item.title}</div>
                  <div className="mt-2 text-xs leading-relaxed text-muted">{item.body}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
