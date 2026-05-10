import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

export const metadata: Metadata = {
  title: "Seguridad e Integridad de Plataforma",
  description:
    "Gobernanza de runtime y arquitectura de defensa contextual. Conocé cómo CJsmartOps aborda la seguridad, contención e integridad operacional.",
};

const sections = [
  {
    title: "Gobernanza de Runtime",
    body: "Nuestros agentes operan con límites de alcance estrictos. AEGIS impone políticas de contención a nivel de proceso. Vigil recolecta telemetría sin interrumpir las cargas de trabajo. Cada acción de contención se registra, es reversible y auditable.",
  },
  {
    title: "Arquitectura de Observabilidad",
    body: "La observabilidad no es un complemento — es la base. Nuestra plataforma ingiere señales a nivel de proceso, correlaciona entre agentes y muestra perspectivas contextuales mediante dashboards y APIs programáticas. Ninguna alerta se genera sin una cadena de evidencia.",
  },
  {
    title: "Contención Reversible",
    body: "La respuesta automatizada nunca debe comprometer la estabilidad operativa. Todas las acciones de contención admiten reversión. Los estados de cuarentena tienen límite temporal. Los puntajes de confianza decaen hacia la neutralidad a menos que sean reforzados por evidencia de comportamiento sostenida.",
  },
  {
    title: "Impacto Operacional Mínimo",
    body: "La huella del agente se mantiene por debajo de 40MB en memoria. La recolección de telemetría es no bloqueante y con límite de frecuencia. La plataforma está diseñada para ejecutarse junto a cargas de producción — no para interferir con ellas.",
  },
  {
    title: "Filosofía de Investigación Responsable",
    body: "CJsmartOps es una plataforma orientada a la investigación. Las posturas de seguridad se derivan de la observación empírica, no de afirmaciones de proveedores. Estudiamos el comportamiento en runtime, construimos líneas base longitudinales y compartimos hallazgos con la comunidad cuando es operacionalmente seguro hacerlo.",
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Seguridad"
        title="Seguridad e Integridad de Plataforma"
        subtitle="Cómo CJsmartOps aborda la defensa en runtime, la contención, la observabilidad y la responsabilidad operacional."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map(({ title, body }, i) => (
            <GradientCard key={title} delay={i * 0.08}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
              <p className="text-sm leading-relaxed text-secondary">{body}</p>
            </GradientCard>
          ))}
        </div>
      </section>
    </div>
  );
}
