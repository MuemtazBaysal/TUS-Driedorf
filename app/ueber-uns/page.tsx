import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

export default function AboutOverviewPage() {
  const cards = [
    ...siteContent.about.pages.map((page) => ({ title: page.title, intro: page.intro, href: `/ueber-uns/${page.slug}` })),
    {
      title: siteContent.about.board.title,
      intro: siteContent.about.board.intro,
      href: `/ueber-uns/${siteContent.about.board.slug}`,
    },
    {
      title: siteContent.about.downloads.title,
      intro: siteContent.about.downloads.intro,
      href: `/ueber-uns/${siteContent.about.downloads.slug}`,
    },
    ...siteContent.about.legal.map((page) => ({ title: page.title, intro: page.intro, href: `/ueber-uns/${page.slug}` })),
  ];

  return (
    <SubpageLayout title={siteContent.about.intro.title} intro={siteContent.about.intro.description}>
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <GlassCard key={card.href} className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900">{card.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{card.intro}</p>
            <Link href={card.href} className="mt-4 inline-flex text-sm font-semibold text-green-600 hover:text-green-700">
              {siteContent.ui.overviewCardCta}
            </Link>
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}
