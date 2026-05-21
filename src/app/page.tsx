import type { Metadata } from "next";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HomeSections } from "./_home/HomeSections";

export const metadata: Metadata = {
  title: "Industrial IoT Platform & Enterprise Automation | Anavera",
  description:
    "Anavera delivers an enterprise-grade IoT platform providing real-time data visibility, multi-application analysis, and predictive industrial automation solutions.",
  openGraph: {
    title: "Industrial IoT Platform & Enterprise Automation | Anavera",
    description:
      "Transform raw sensor telemetry into actionable operational clarity. Scalable, standards-based IIoT platform deployable in cloud or on-premises.",
  },
};

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <HomeSections />
    </PageLayout>
  );
}
