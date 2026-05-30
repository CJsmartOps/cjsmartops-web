import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { Timeline } from "@/components/ui/timeline";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "roadmap", metaKey: "roadmap" });
}

export default async function RoadmapPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const r = dict.roadmap;

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={dict.nav.roadmap} title={r.title} subtitle={r.subtitle} />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Timeline phases={r.phases} />
          <p className="mt-12 text-center text-xs text-muted">{r.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
