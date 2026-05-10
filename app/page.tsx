import { HeroSection } from "@/components/sections/hero-section";
import { TrustMetricsSection } from "@/components/sections/trust-metrics-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { PlatformCapabilitiesSection } from "@/components/sections/platform-capabilities-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ResearchSection } from "@/components/sections/research-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustMetricsSection />
      <ProblemSection />
      <ArchitectureSection />
      <PlatformCapabilitiesSection />
      <PhilosophySection />
      <ResearchSection />
    </>
  );
}
