"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  lang: Lang;
}

export function CTASection({ dict, lang }: Props) {
  const c = dict.home.cta;
  return (
    <section className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="glow-orb glow-orb-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-breath" style={{ width: 500, height: 500 }} />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary">
            {c.subtitle}
          </p>
          <div className="mt-10">
            <Link
              href={`/${lang}/contact`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(37,99,235,0.35)]"
            >
              {c.button}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
