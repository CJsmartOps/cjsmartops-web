"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon: LucideIcon;
  tagline: string;
  status: string;
  statusLabel: string;
  href: string;
  color: string;
  iconBg: string;
}

export function ProductCard({ name, icon: Icon, tagline, status, statusLabel, href, color, iconBg }: Props) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-7 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60 h-full"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className={`mb-4 inline-flex rounded-xl ${iconBg} p-3`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <h3 className="text-lg font-bold text-foreground notranslate" translate="no">{name}</h3>
        <p className="mt-1.5 text-sm text-secondary">{tagline}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            status === "production" ? "bg-emerald-500/15 text-emerald-400" :
            status === "beta" ? "bg-cyan-500/15 text-cyan-400" :
            "bg-amber-500/15 text-amber-400"
          }`}>
            {statusLabel}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
