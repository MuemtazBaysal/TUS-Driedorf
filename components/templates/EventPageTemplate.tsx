import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import SponsorGrid from "@/components/SponsorGrid";
import type { EventPage, Sponsor } from "@/content/siteContent";

type EventPageTemplateProps = {
  page: EventPage;
  labels: {
    infoCards: string;
    program: string;
    sponsors: string;
  };
  fallbackSponsors: Sponsor[];
};

export default function EventPageTemplate({ page, labels, fallbackSponsors }: EventPageTemplateProps) {
  const sponsors = page.sponsors.length ? page.sponsors : fallbackSponsors;

  return (
    <SubpageLayout title={page.title} intro={page.intro}>
      <p className="mb-5 text-xs uppercase tracking-[0.24em] text-green-700">{page.eyebrow}</p>

      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{labels.infoCards}</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {page.infoCards.map((card) => (
          <GlassCard key={`${page.slug}-${card.title}`} className="p-6">
            <p className="text-lg font-semibold text-gray-900">{card.title}</p>
            <p className="mt-3 text-sm text-gray-600">{card.description}</p>
          </GlassCard>
        ))}
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">{labels.program}</h2>
      <Timeline items={page.program} />

      <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">{labels.sponsors}</h2>
      <SponsorGrid sponsors={sponsors} />

      <GlassCard className="mt-8 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-semibold text-gray-900">{page.cta.title}</p>
          <p className="mt-2 text-sm text-gray-600">{page.cta.description}</p>
        </div>
        <CTA data={page.cta.button} />
      </GlassCard>
    </SubpageLayout>
  );
}