"use client";

import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ProductCapability({ icon, title, description, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex gap-4 group"
    >
      <div className="mt-0.5 shrink-0 rounded-lg bg-accent/10 p-2 transition-colors group-hover:bg-accent/20">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
