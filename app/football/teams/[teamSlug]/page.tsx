import { redirect } from "next/navigation";

type LegacyFootballTeamPageProps = {
  params: Promise<{ teamSlug: string }>;
};

export default async function LegacyFootballTeamPage({ params }: LegacyFootballTeamPageProps) {
  const { teamSlug } = await params;
  redirect(`/fussball/${teamSlug}`);
}