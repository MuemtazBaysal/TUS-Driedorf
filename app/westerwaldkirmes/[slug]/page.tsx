import { notFound } from "next/navigation";
import EventPageTemplate from "@/components/templates/EventPageTemplate";
import { siteContent } from "@/content/siteContent";
import { getKirmesPage } from "@/lib/contentHelpers";

type KirmesDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function KirmesDetailPage({ params }: KirmesDetailPageProps) {
  const { slug } = await params;
  const page = getKirmesPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <EventPageTemplate
      page={page}
      labels={{
        infoCards: siteContent.ui.sectionTitles.infoCards,
        program: siteContent.ui.sectionTitles.program,
        sponsors: siteContent.ui.sectionTitles.sponsors,
      }}
      fallbackSponsors={siteContent.sponsors}
    />
  );
}
