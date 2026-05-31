import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";

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
    <div className="flex flex-col pt-32 pb-16 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-foreground">{c.title}</h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">{c.subtitle}</p>
        <div className="mt-12 space-y-6 text-left max-w-xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <h2 className="text-lg font-semibold">{c.email.title}</h2>
            <p className="mt-1 text-sm text-secondary">{c.email.body}</p>
            <a href="mailto:info@cjsmartops.com.ar" className="mt-2 inline-block text-glow">{c.email.address}</a>
          </div>
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <h2 className="text-lg font-semibold">{c.location.title}</h2>
            <p className="mt-1 text-sm text-secondary">{c.location.body}</p>
            <p className="mt-2 text-sm text-muted">{c.location.address}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <h2 className="text-lg font-semibold">{c.github.title}</h2>
            <p className="mt-1 text-sm text-secondary">{c.github.body}</p>
            <a href="https://github.com/CJsmartOps" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-glow">{c.github.url}</a>
          </div>
          <div className="rounded-2xl border border-border-glow bg-surface/20 p-6 text-center">
            <h2 className="text-lg font-semibold">{c.partners.title}</h2>
            <p className="mt-2 text-sm text-secondary">{c.partners.body}</p>
            <a href="mailto:info@cjsmartops.com.ar" className="mt-3 inline-block text-glow">{c.partners.cta}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
