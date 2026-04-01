import { notFound } from "next/navigation";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { getBroadSportPage } from "@/lib/contentHelpers";

type BroadSportsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BroadSportsDetailPage({ params }: BroadSportsDetailPageProps) {
  const { slug } = await params;
  const page = getBroadSportPage(slug);

  if (!page) {
    notFound();
  }

  return <StandardPageTemplate page={page} />;
}
