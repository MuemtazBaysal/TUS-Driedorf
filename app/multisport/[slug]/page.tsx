import { notFound } from "next/navigation";
import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

type MultiSportPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteContent.multisport.sections.map((section) => ({ slug: section.slug }));
}

export default async function MultiSportPage({ params }: MultiSportPageProps) {
  const { slug } = await params;
  const section = siteContent.multisport.sections.find((entry) => entry.slug === slug);

  if (!section) {
    notFound();
  }

  return (
    <SubpageLayout title={section.title} intro={section.intro}>
      <GlassCard className="p-6 text-sm text-slate-200/85 md:text-base">{section.body}</GlassCard>
    </SubpageLayout>
  );
}