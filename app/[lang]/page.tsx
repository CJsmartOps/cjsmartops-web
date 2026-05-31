import { getDictionary } from "@/lib/i18n";
import { type Lang } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { PlatformOverviewSection } from "@/components/sections/platform-overview-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { ArchitectureDiagramSection } from "@/components/sections/architecture-diagram-section";
import { TrustMetricsSection } from "@/components/sections/trust-metrics-section";
import { CTASection } from "@/components/sections/cta-section";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "", metaKey: "home" });
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  return (
    <>
      <HeroSection dict={dict} lang={lang as Lang} />
      <PlatformOverviewSection dict={dict} lang={lang as Lang} />
      <BenefitsSection dict={dict} lang={lang as Lang} />
      <UseCasesSection dict={dict} lang={lang as Lang} />
      <ArchitectureDiagramSection dict={dict} />
      <TrustMetricsSection dict={dict} lang={lang as Lang} />
      <CTASection dict={dict} lang={lang as Lang} />
    </>
  );
}
