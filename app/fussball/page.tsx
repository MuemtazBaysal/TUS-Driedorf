import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

export default function FootballOverviewPage() {
  const items = [
    { title: "Schiedsrichter", href: "/fussball/schiedsrichter" },
    { title: "Mannschaft", href: "/fussball/mannschaften" },
    ...siteContent.football.events.map((event) => ({ title: event.title, href: `/fussball/${event.slug}` })),
    { title: siteContent.football.hallTimes.title, href: "/fussball/hallenzeiten" },
  ];

  return (
    <SubpageLayout title={siteContent.football.intro.title} intro={siteContent.football.intro.description}>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <GlassCard key={item.href} className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
            <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-green-600 hover:text-green-700">
              {siteContent.ui.overviewCardCta}
            </Link>
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}
