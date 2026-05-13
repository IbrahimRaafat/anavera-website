import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HomeSections } from "./_home/HomeSections";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <HomeSections />
    </PageLayout>
  );
}
