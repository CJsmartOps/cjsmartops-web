import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "technology", metaKey: "technology" });
}

export default async function TechnologyPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const t = dict.technology;
  const sections = Object.values(t.sections);

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={dict.nav.technology} title={t.title} subtitle={t.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          {sections.map((s) => (
            <GradientCard key={s.title}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="text-sm leading-relaxed text-secondary">{s.body}</p>
            </GradientCard>
          ))}
        </div>
      </section>
    </div>
  );
}
