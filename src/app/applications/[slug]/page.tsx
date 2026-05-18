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
  return {
    title: uc.title,
    description: uc.overview.slice(0, 160),
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) notFound();

  return (
    <PageLayout>
      <UseCaseDetail useCase={useCase} />
    </PageLayout>
  );
}
