import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              CJsmartOps
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Plataforma de seguridad basada en observabilidad, enfocada en defensa contextual de runtime, telemetría semántica y análisis de confianza adaptativa.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Plataforma
            </h3>
            <ul className="space-y-2.5 text-sm text-muted notranslate">
              <li translate="no">AEGIS — Contención</li>
              <li translate="no">Vigil — Telemetría</li>
              <li translate="no">Genesis — Orquestación</li>
              <li translate="no">CIPHER — Inteligencia</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Empresa
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/research" className="text-muted transition-colors hover:text-foreground">
                  Investigación
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted transition-colors hover:text-foreground">
                  Seguridad
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted transition-colors hover:text-foreground">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted transition-colors hover:text-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center text-xs text-muted">
          &copy; {year} CJsmartOps. Todos los derechos reservados.
          Desarrollado sobre la Plataforma CJsmartOps.
        </div>
      </div>
    </footer>
  );
}
