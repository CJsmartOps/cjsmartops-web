"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, BarChart3, Clock, Users } from "lucide-react";

const metrics = [
  {
    icon: Activity,
    value: "8+",
    label: "Servicios activos y 32 monitores automáticos",
    detail: "8 systemd services + 32 timers en producción continua en el VPS de CJsmartOps",
  },
  {
    icon: ShieldCheck,
    value: "573",
    label: "Reglas YARA en pipeline de supply chain",
    detail: "523 reglas externas con validación de 8 capas + 50 reglas propias compiladas",
  },
  {
    icon: BarChart3,
    value: "9.3K+",
    label: "Eventos de telemetría procesados (30 días)",
    detail: "Vigil (4.8K reportes) + SIEM Genesis (4.4K correlaciones) — telemetría continua del ecosistema",
  },
  {
    icon: Clock,
    value: "90+",
    label: "Días sin fallos críticos en servicios core",
    detail: "Genesis C2, Sentinel, TR-Bot, Vigil Receiver y AEGIS Receiver operando sin interrupciones",
  },
  {
    icon: Users,
    value: "3",
    label: "Endpoints bajo observación activa",
    detail: "1 cliente productivo (AEGIS v2.0 + Vigil v1.1.0) + endpoints de evaluación internos",
  },
];

export function TrustMetricsSection() {
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
              Telemetría{" "}
              <span className="text-glow">Verificada</span> en Producción
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Métricas operacionales extraídas directamente del ecosistema
              CJsmartOps. Sin estimaciones — datos trazables al VPS.
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
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  {value}
                </div>
                <div className="mt-1.5 text-xs font-medium leading-tight text-secondary">
                  {label}
                </div>
                <div className="mt-2 text-[10px] leading-relaxed text-muted/70">
                  {detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
