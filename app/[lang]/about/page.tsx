import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "about", metaKey: "about" });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const a = dict.about;

  const items = [
    a.mission, a.vision, a.approach, a.innovation, a.security, a.origin
  ];

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={dict.nav.about} title={a.title} subtitle={a.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {items.map((item) => (
            <GradientCard key={item.title}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="text-sm leading-relaxed text-secondary">{item.body}</p>
            </GradientCard>
          ))}
        </div>
      </section>
    </div>
  );
}
