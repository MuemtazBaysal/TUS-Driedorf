import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import CTA from "@/components/CTA";
import { siteContent } from "@/content/siteContent";

export default function FootballOverviewPage() {
  return (
    <SubpageLayout title={siteContent.football.intro.title} intro={siteContent.football.intro.description}>
      <div className="grid gap-5 md:grid-cols-3">
        {siteContent.football.teams.map((team) => (
          <GlassCard key={team.slug} className="p-6">
            <p className="text-xl font-semibold text-mist">{team.name}</p>
            <p className="mt-3 text-sm text-slate-200/85">{team.summary}</p>
            <div className="mt-5">
              <CTA data={{ label: team.name, href: `/football/teams/${team.slug}`, variant: "secondary" }} />
            </div>
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}