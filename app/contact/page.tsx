import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the CJsmartOps research team for inquiries about runtime defense, observability, and platform capabilities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Contact"
        title="Start the Conversation"
        subtitle="Whether you are exploring runtime defense, evaluating observability platforms, or researching adaptive security — we would like to hear from you."
      />

      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Email</h2>
              <p className="text-sm leading-relaxed text-secondary">
                For general inquiries, research collaboration, or platform
                evaluation, reach us at:
              </p>
              <a
                href="mailto:info@cjsmartops.com.ar"
                className="mt-3 inline-block text-base font-medium text-glow transition-colors hover:text-accent"
              >
                info@cjsmartops.com.ar
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Location</h2>
              <p className="text-sm leading-relaxed text-secondary">
                CJsmartOps operates from Argentina, with distributed research
                infrastructure across cloud environments.
              </p>
              <p className="mt-3 text-sm text-muted">
                Laboulaye, Córdoba — Argentina
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">GitHub</h2>
              <p className="text-sm leading-relaxed text-secondary">
                Platform source and research artifacts are available on our
                public GitHub organization.
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
