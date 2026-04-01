import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

export default function BroadSportsOverviewPage() {
  return (
    <SubpageLayout title={siteContent.broadSports.intro.title} intro={siteContent.broadSports.intro.description}>
      <div className="grid gap-5 md:grid-cols-2">
        {siteContent.broadSports.pages.map((page) => (
          <GlassCard key={page.slug} className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900">{page.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{page.intro}</p>
            <Link href={`/breitensport/${page.slug}`} className="mt-4 inline-flex text-sm font-semibold text-green-600 hover:text-green-700">
              {siteContent.ui.overviewCardCta}
            </Link>
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}
