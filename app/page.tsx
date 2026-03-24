import Hero from "@/components/Hero";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import SponsorGrid from "@/components/SponsorGrid";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import { siteContent, type CTAData } from "@/content/siteContent";

export default function HomePage() {
  return (
    <main>
      <Hero data={siteContent.home.hero} />

      <Section title={siteContent.home.intro.title} description={siteContent.home.intro.description} />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.home.highlights.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <h3 className="text-xl font-semibold text-mist">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-200/85">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section title={siteContent.home.sponsorsSection.title} description={siteContent.home.sponsorsSection.description}>
        <SponsorGrid sponsors={siteContent.sponsors} />
      </Section>

      <Section>
        <GlassCard className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-mist">{siteContent.home.cta.title}</h2>
            <p className="mt-3 text-sm text-slate-200/85 md:text-base">{siteContent.home.cta.description}</p>
          </div>
          <CTA data={siteContent.home.cta.button as CTAData} />
        </GlassCard>
      </Section>

      <Section>
        <Form {...siteContent.forms.contact} id="contact-form" />
      </Section>
    </main>
  );
}