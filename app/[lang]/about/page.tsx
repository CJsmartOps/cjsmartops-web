import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";
import Image from "next/image";

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

          <div className="rounded-2xl border border-border-glow bg-surface/30 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-lg font-semibold text-foreground">{a.leadership.title}</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/founder-ceo.jpg"
                alt={a.leadership.name}
                width={100}
                height={133}
                className="shrink-0 h-24 w-24 rounded-full object-cover ring-2 ring-border-glow"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground notranslate" translate="no">
                  {a.leadership.name}
                </h3>
                <span className="inline-block mt-1 rounded-full bg-glow/10 px-3 py-0.5 text-xs font-medium text-glow">
                  {a.leadership.role}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {a.leadership.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
