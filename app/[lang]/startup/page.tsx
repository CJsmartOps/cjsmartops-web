import { getDictionary, type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/page-header";
import { GradientCard } from "@/components/ui/gradient-card";
import Link from "next/link";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "startup", metaKey: "startup" });
}

const sectionIcons = ["text-glow", "text-accent", "text-cyan-400", "text-emerald-400", "text-violet-400", "text-amber-400", "text-rose-400"];

export default async function StartupPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const s = dict.startup as Record<string, { title: string; body?: string; problem?: string; solution?: string; email?: string }>;

  const sections = [
    { key: "oneliner", icon: "→" },
    { key: "problem_solution", icon: "⚡" },
    { key: "product", icon: "◆" },
    { key: "traction", icon: "↗" },
    { key: "team", icon: "👤" },
    { key: "business", icon: "◎" },
    { key: "cloud", icon: "☁" },
    { key: "vision", icon: "◈" },
  ];

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow="For Reviewers" title={s.title as unknown as string} subtitle={s.subtitle as unknown as string} />
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map(({ key, icon }, i) => {
            const item = s[key];
            if (!item) return null;
            return (
              <GradientCard key={key}>
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 text-lg ${sectionIcons[i % sectionIcons.length]}`}>{icon}</span>
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-foreground">{item.title}</h2>
                    {item.problem && (
                      <>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{item.problem}</p>
                        <p className="mt-2 text-sm leading-relaxed text-secondary">{item.solution}</p>
                      </>
                    )}
                    {item.body && (
                      <p className="mt-2 text-sm leading-relaxed text-secondary">{item.body}</p>
                    )}
                  </div>
                </div>
              </GradientCard>
            );
          })}

          <div className="rounded-2xl border border-border-glow bg-surface/30 p-8 backdrop-blur-sm text-center">
            <h2 className="text-xl font-bold text-foreground">{s.cta?.title}</h2>
            <p className="mt-2 text-sm text-muted">{s.cta?.body}</p>
            <a
              href={`mailto:${s.cta?.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_32px_rgba(37,99,235,0.35)]"
            >
              {s.cta?.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
