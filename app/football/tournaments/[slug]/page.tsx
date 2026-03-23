import { notFound } from "next/navigation";
import SubpageLayout from "@/components/SubpageLayout";
import Timeline from "@/components/Timeline";
import { siteContent } from "@/content/siteContent";

type TournamentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteContent.football.tournaments.map((event) => ({ slug: event.slug }));
}

export default async function TournamentPage({ params }: TournamentPageProps) {
  const { slug } = await params;
  const event = siteContent.football.tournaments.find((entry) => entry.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <SubpageLayout title={event.title} intro={event.intro}>
      <Timeline items={event.program} />
    </SubpageLayout>
  );
}