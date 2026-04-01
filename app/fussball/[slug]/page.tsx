import { notFound } from "next/navigation";
import EventPageTemplate from "@/components/templates/EventPageTemplate";
import TeamPageTemplate from "@/components/templates/TeamPageTemplate";
import { siteContent } from "@/content/siteContent";
import { getFootballEvent, getFootballTeam } from "@/lib/contentHelpers";

type FootballDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function FootballDetailPage({ params }: FootballDetailPageProps) {
  const { slug } = await params;

  const team = getFootballTeam(slug);
  if (team) {
    return (
      <TeamPageTemplate
        page={team}
        labels={{
          trainingTimes: siteContent.ui.sectionTitles.trainingTimes,
          contacts: siteContent.ui.sectionTitles.contacts,
          results: siteContent.ui.sectionTitles.results,
          gallery: siteContent.ui.sectionTitles.gallery,
        }}
      />
    );
  }

  const event = getFootballEvent(slug);
  if (event) {
    return (
      <EventPageTemplate
        page={event}
        labels={{
          infoCards: siteContent.ui.sectionTitles.infoCards,
          program: siteContent.ui.sectionTitles.program,
          sponsors: siteContent.ui.sectionTitles.sponsors,
        }}
        fallbackSponsors={siteContent.sponsors}
      />
    );
  }

  notFound();
}
