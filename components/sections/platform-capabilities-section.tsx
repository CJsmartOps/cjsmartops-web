"use client";

import { motion } from "framer-motion";
import {
  Shield, Activity, Wrench, Network, Brain, Eye,
  HardDrive, Lock, PackageOpen, Cpu,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const capabilities = [
  {
    group: "Gobernanza de Runtime",
    items: [
      { icon: Shield, label: "Perímetros de contención por agente", detail: "Aislamiento estricto con políticas de contención reversible por agente" },
      { icon: Lock, label: "Cifrado Fernet AES en reposo", detail: "Todos los secretos, tokens y datos de clientes cifrados con rotación de claves" },
      { icon: Cpu, label: "RAM Guard a nivel de proceso", detail: "Detección de ataques fileless vía memfd, LD_PRELOAD y análisis de binarios eliminados cada 60s" },
    ],
  },
  {
    group: "Defensa de Supply Chain",
    items: [
      { icon: PackageOpen, label: "Validación obligatoria de supply chain", detail: "Whitelist TRUSTED_SOURCES, verificación de manifiesto SHA256, rollback automático" },
      { icon: Wrench, label: "Pipeline YARA de 8 capas", detail: "566 reglas externas actualizadas semanalmente con verificación anti-manipulación en cada etapa" },
      { icon: Network, label: "Inspección estática pre-instalación", detail: "Paquetes npm y pip analizados en busca de patrones sospechosos antes de la instalación" },
    ],
  },
  {
    group: "Observabilidad y Telemetría",
    items: [
      { icon: Activity, label: "Agregación de telemetría multi-agente", detail: "6 agentes independientes emiten telemetría estructurada hacia un pipeline central de correlación" },
      { icon: Eye, label: "Detección de drift y líneas base de comportamiento", detail: "Análisis de desviación estadística sobre semanas de datos longitudinales de procesos" },
      { icon: Brain, label: "Análisis semántico de red (CIPHER)", detail: "Clasificación de flujos TCP con 3 detectores: destino inusual, fan-out de procesos, SYN repetidos" },
    ],
  },
  {
    group: "Confianza y Preparación Forense",
    items: [
      { icon: HardDrive, label: "Registro de auditoría inmutable", detail: "Cadenas de eventos firmadas con HMAC-SHA256 con retención compatible SOC2" },
      { icon: Lock, label: "Remediación basada en evidencia", detail: "Cada alerta incluye cadena de evidencia completa: ruta de correlación, telemetría de origen y justificación de la decisión" },
      { icon: Shield, label: "Scoring de confianza adaptativo", detail: "Los puntajes de confianza decaen hacia neutralidad a menos que sean reforzados por evidencia de comportamiento sostenida" },
    ],
  },
];

export function PlatformCapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="glow-orb glow-orb-blue -top-20 right-1/4" style={{ width: 500, height: 500 }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>Plataforma</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Capacidades de la{" "}
              <span className="text-glow">Plataforma</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              Cada capacidad listada está implementada y operativa en nuestro entorno de despliegue. Sin funcionalidades aspiracionales — solo infraestructura defensiva verificada.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {capabilities.map(({ group, items }, gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="rounded-2xl border border-border bg-surface/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-border-glow"
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                {group}
              </h3>
              <div className="space-y-5">
                {items.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="flex gap-4">
                    <div className="mt-0.5 shrink-0 rounded-lg bg-accent/10 p-2">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
