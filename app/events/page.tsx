import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import CTA from "@/components/CTA";
import { siteContent } from "@/content/siteContent";

export default function EventsOverviewPage() {
  return (
    <SubpageLayout title={siteContent.events.overview.title} intro={siteContent.events.overview.intro}>
      <div className="grid gap-5 md:grid-cols-3">
        <GlassCard className="p-6">
          <p className="text-xl font-semibold text-mist">{siteContent.events.program.title}</p>
          <p className="mt-3 text-sm text-slate-200/85">{siteContent.events.program.intro}</p>
          <div className="mt-5">
            <CTA data={{ label: siteContent.events.program.title, href: "/events/program", variant: "secondary" }} />
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-xl font-semibold text-mist">{siteContent.events.tickets.title}</p>
          <p className="mt-3 text-sm text-slate-200/85">{siteContent.events.tickets.intro}</p>
          <div className="mt-5">
            <CTA data={{ label: siteContent.events.tickets.title, href: "/events/tickets", variant: "secondary" }} />
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-xl font-semibold text-mist">{siteContent.events.sponsors.title}</p>
          <p className="mt-3 text-sm text-slate-200/85">{siteContent.events.sponsors.intro}</p>
          <div className="mt-5">
            <CTA data={{ label: siteContent.events.sponsors.title, href: "/events/sponsors", variant: "secondary" }} />
          </div>
        </GlassCard>
      </div>
    </SubpageLayout>
  );
}