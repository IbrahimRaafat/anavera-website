import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageLayout } from "@/components/templates/PageLayout";
import { UseCaseDetail } from "./_components/UseCaseDetail";
import { useCases, getUseCaseBySlug } from "@/data/useCases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return {};
  
  const title = `${uc.title} | IoT Applications`;
  const description = `${uc.tagline}. ${uc.overview.slice(0, 130)}...`;
  
  return {
    title,
    description,
    keywords: [
      uc.title,
      `${uc.title} IoT`,
      uc.industry,
      "IoT monitoring",
      "LoRaWAN sensors",
      "predictive maintenance",
      "industrial automation",
      ...uc.hardware,
    ],
    openGraph: {
      title: `${title} | Anavera`,
      description,
      type: "article",
      images: [
        {
          url: uc.heroImage || "/images/hero-bg.jpg",
          width: 1200,
          height: 630,
          alt: uc.title,
        },
      ],
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${useCase.title} - Anavera IoT Platform`,
    "description": useCase.overview,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-Based",
    "featureList": useCase.features,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "description": "Enterprise software platform license, contact for quotation",
    },
    "provider": {
      "@type": "Organization",
      "name": "Anavera",
      "url": "https://www.anavera.com",
    },
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UseCaseDetail useCase={useCase} />
    </PageLayout>
  );
}

