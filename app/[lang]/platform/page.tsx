import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "platform", metaKey: "platform" });
}

export default async function PlatformPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.platform;

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={dict.nav.platform} title={p.title} subtitle={p.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <GradientCard>
            <h2 className="mb-4 text-xl font-semibold text-foreground">{p.what.title}</h2>
            <p className="text-sm leading-relaxed text-secondary">{p.what.body}</p>
          </GradientCard>
          <GradientCard>
            <h2 className="mb-4 text-xl font-semibold text-foreground">{p.how.title}</h2>
            <p className="text-sm leading-relaxed text-secondary">{p.how.body}</p>
          </GradientCard>
          <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-semibold text-foreground">{p.differentiation.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-muted font-medium"></th>
                    <th className="text-left py-3 pr-4 text-muted font-medium">{p.differentiation.traditional}</th>
                    <th className="text-left py-3 pr-4 text-glow font-medium">{p.differentiation.cjsmartops}</th>
                  </tr>
                </thead>
                <tbody>
                  {p.differentiation.rows.map((row) => (
                    <tr key={row.label} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.label}</td>
                      <td className="py-3 pr-4 text-secondary">{row.traditional}</td>
                      <td className="py-3 pr-4 text-glow">{row.cjsmartops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
