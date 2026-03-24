import { redirect } from "next/navigation";

type LegacyTournamentPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyTournamentPage({ params }: LegacyTournamentPageProps) {
  const { slug } = await params;
  redirect(`/fussball/${slug}`);
}