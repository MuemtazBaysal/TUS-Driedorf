import { notFound } from "next/navigation";
import SubpageLayout from "@/components/SubpageLayout";
import Schedule from "@/components/Schedule";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

type TeamPageProps = {
  params: Promise<{ teamSlug: string }>;
};

export function generateStaticParams() {
  return siteContent.football.teams.map((team) => ({ teamSlug: team.slug }));
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { teamSlug } = await params;
  const team = siteContent.football.teams.find((entry) => entry.slug === teamSlug);

  if (!team) {
    notFound();
  }

  return (
    <SubpageLayout title={team.name} intro={team.summary}>
      <GlassCard className="mb-5 p-6">
        <p className="text-sm uppercase tracking-[0.22em] text-calm">{team.coach}</p>
      </GlassCard>
      <Schedule items={team.schedule} />
    </SubpageLayout>
  );
}