"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="glow-orb glow-orb-blue -top-40 left-1/2 -translate-x-1/2 animate-glow-breath" />
      <div className="glow-orb glow-orb-cyan top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-orb glow-orb-blue -bottom-32 right-1/4 translate-x-1/2 animate-glow-breath" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-medium bg-glass px-4 py-1.5 text-xs font-medium tracking-widest text-glow uppercase backdrop-blur-md notranslate" translate="no">
              <Activity className="h-3 w-3" />
              Contextual Runtime Defense
            </span>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Seguridad Basada en{" "}
            <span className="bg-gradient-to-r from-accent via-glow to-accent bg-clip-text text-transparent">
              Observabilidad
            </span>{" "}
            para Infraestructura Moderna
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-secondary sm:text-lg">
            CJsmartOps combina gobernanza de runtime, telemetría semántica y análisis de confianza adaptativa para reducir el ruido operacional y mejorar la explicabilidad defensiva.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="#architecture"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(37,99,235,0.35)]"
            >
              Arquitectura
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#research"
              className="rounded-full border border-border-medium bg-surface/40 px-7 py-3 text-sm font-medium text-secondary backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60 hover:text-foreground"
            >
              Plataforma de Investigación
            </Link>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
