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
              Observability-driven security platform focused on contextual runtime
              defense, semantic telemetry, and adaptive trust analysis.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm text-muted notranslate">
              <li translate="no">AEGIS — Enforcement</li>
              <li translate="no">Vigil — Telemetry</li>
              <li translate="no">Genesis — Orchestration</li>
              <li translate="no">CIPHER — Intelligence</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/research" className="text-muted transition-colors hover:text-foreground">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted transition-colors hover:text-foreground">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted transition-colors hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center text-xs text-muted">
          &copy; {year} CJsmartOps. All rights reserved.
          Powered by the CJsmartOps Platform.
        </div>
      </div>
    </footer>
  );
}
