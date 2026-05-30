import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";
import { Mail, MapPin, Github } from "lucide-react";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "contact", metaKey: "contact" });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const c = dict.contact;

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={dict.nav.contact} title={c.title} subtitle={c.subtitle} />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <GradientCard>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 rounded-lg bg-accent/10 p-2.5">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{c.email.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{c.email.body}</p>
                <a href="mailto:info@cjsmartops.com.ar" className="mt-2 inline-block text-base font-medium text-glow transition-colors hover:text-accent">
                  {c.email.address}
                </a>
              </div>
            </div>
          </GradientCard>

          <GradientCard>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 rounded-lg bg-accent/10 p-2.5">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{c.location.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{c.location.body}</p>
                <p className="mt-2 text-sm text-muted">{c.location.address}</p>
              </div>
            </div>
          </GradientCard>

          <GradientCard>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 rounded-lg bg-accent/10 p-2.5">
                <Github className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{c.github.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{c.github.body}</p>
                <a href="https://github.com/CJsmartOps" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-base font-medium text-glow transition-colors hover:text-accent">
                  {c.github.url}
                </a>
              </div>
            </div>
          </GradientCard>

          <div className="rounded-2xl border border-border-glow bg-surface/20 p-8 text-center">
            <h2 className="text-lg font-semibold text-foreground">{c.partners.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{c.partners.body}</p>
            <a href="mailto:info@cjsmartops.com.ar" className="mt-4 inline-block text-base font-medium text-glow transition-colors hover:text-accent">
              {c.partners.cta}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm text-center">
            <p className="text-sm text-muted">
              {lang === "es" ? c.form.disclaimer : c.demo.disclaimer}{" "}
              <a href="mailto:info@cjsmartops.com.ar" className="text-glow font-medium">info@cjsmartops.com.ar</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
