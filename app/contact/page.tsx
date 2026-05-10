import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá al equipo de CJsmartOps para consultas sobre defensa en runtime, observabilidad y capacidades de la plataforma.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Contacto"
        title="Iniciá la Conversación"
        subtitle="Ya sea que estés explorando defensa en runtime, evaluando plataformas de observabilidad o investigando seguridad adaptativa — queremos escucharte."
      />

      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Email</h2>
              <p className="text-sm leading-relaxed text-secondary">
                Para consultas generales, colaboración en investigación o evaluación de la plataforma, escribinos a:
              </p>
              <a
                href="mailto:info@cjsmartops.com.ar"
                className="mt-3 inline-block text-base font-medium text-glow transition-colors hover:text-accent"
              >
                info@cjsmartops.com.ar
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Ubicación</h2>
              <p className="text-sm leading-relaxed text-secondary">
                CJsmartOps opera desde Argentina, con infraestructura de investigación distribuida en entornos cloud.
              </p>
              <p className="mt-3 text-sm text-muted">
                Laboulaye, Córdoba — Argentina
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">GitHub</h2>
              <p className="text-sm leading-relaxed text-secondary">
                El código fuente de la plataforma y los artefactos de investigación están disponibles en nuestra organización pública de GitHub.
              </p>
              <a
                href="https://github.com/CJsmartOps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-base font-medium text-glow transition-colors hover:text-accent"
              >
                github.com/CJsmartOps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
