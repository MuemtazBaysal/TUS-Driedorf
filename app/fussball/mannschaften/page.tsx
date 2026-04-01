import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

export default function FootballTeamsOverviewPage() {
  return (
    <SubpageLayout title="Mannschaft" intro="Alle Teams und Jugendmannschaften im Überblick.">
      <div className="grid gap-5 md:grid-cols-2">
        {siteContent.football.teams.map((team) => (
          <GlassCard key={team.slug} className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-green-700">{team.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">{team.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{team.intro}</p>
            <Link href={`/fussball/${team.slug}`} className="mt-4 inline-flex text-sm font-semibold text-green-600 hover:text-green-700">
              {siteContent.ui.overviewCardCta}
            </Link>
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}
