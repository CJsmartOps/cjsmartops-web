"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, BarChart3, Clock, Users } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  lang: Lang;
}

interface Metric {
  icon: typeof Activity;
  value: string;
  label: string;
  detail: string;
}

const metrics_es: Metric[] = [
  { icon: Activity, value: "6", label: "Módulos de plataforma", detail: "AEGIS, Vigil, Genesis, CIPHER, Citadel y Sentinel en desarrollo continuo" },
  { icon: ShieldCheck, value: "500+", label: "Reglas YARA en pipeline", detail: "Reglas externas con validación de integridad + reglas propias compiladas" },
  { icon: BarChart3, value: "10K+", label: "Eventos de telemetría", detail: "Señales de múltiples agentes correlacionadas en tiempo real" },
  { icon: Clock, value: "90+", label: "Días de estabilidad operativa", detail: "Servicios core operando sin interrupciones en entorno de producción" },
  { icon: Users, value: "< 10", label: "Endpoints bajo observación", detail: "Clientes productivos y endpoints de evaluación internos" },
];

const metrics_en: Metric[] = [
  { icon: Activity, value: "6", label: "Platform modules", detail: "AEGIS, Vigil, Genesis, CIPHER, Citadel and Sentinel in continuous development" },
  { icon: ShieldCheck, value: "500+", label: "YARA rules in pipeline", detail: "External rules with integrity validation + compiled proprietary rules" },
  { icon: BarChart3, value: "10K+", label: "Telemetry events", detail: "Multi-agent signals correlated in real time" },
  { icon: Clock, value: "90+", label: "Days of operational stability", detail: "Core services operating without interruptions in production environment" },
  { icon: Users, value: "< 10", label: "Endpoints under observation", detail: "Production clients and internal evaluation endpoints" },
];

export function TrustMetricsSection({ dict, lang }: Props) {
  const metrics = lang === "es" ? metrics_es : metrics_en;
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

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map(({ icon: Icon, value, label, detail }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-glow hover:bg-surface/60"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-accent/10 p-2.5">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-3xl font-bold tracking-tight text-foreground">{value}</div>
                <div className="mt-1.5 text-xs font-medium leading-tight text-secondary">{label}</div>
                <div className="mt-2 text-[10px] leading-relaxed text-muted/70">{detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
