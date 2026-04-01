import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import Schedule from "@/components/Schedule";
import CTA from "@/components/CTA";
import type { TeamPage } from "@/content/siteContent";

type TeamPageTemplateProps = {
  page: TeamPage;
  labels: {
    trainingTimes: string;
    contacts: string;
    results: string;
    gallery: string;
  };
};

export default function TeamPageTemplate({ page, labels }: TeamPageTemplateProps) {
  return (
    <SubpageLayout title={page.title} intro={page.intro}>
      <p className="mb-5 text-xs uppercase tracking-[0.24em] text-green-700">{page.eyebrow}</p>

      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{labels.trainingTimes}</h2>
      <Schedule items={page.trainingTimes} />

      <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">{labels.contacts}</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {page.contacts.map((contact) => (
          <GlassCard key={`${page.slug}-${contact.email}`} className="p-6">
            <p className="text-lg font-semibold text-gray-900">{contact.name}</p>
            <p className="mt-1 text-sm text-green-700">{contact.role}</p>
            <p className="mt-3 text-sm text-gray-600">{contact.email}</p>
            <p className="mt-1 text-sm text-gray-600">{contact.phone}</p>
          </GlassCard>
        ))}
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">{labels.results}</h2>
      <GlassCard className="p-6 text-sm text-gray-600">{page.resultsPlaceholder}</GlassCard>

      <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">{labels.gallery}</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {page.gallery.map((image, index) => (
          <GlassCard key={`${page.slug}-${image}`} className="p-2">
            <div className="relative h-56 overflow-hidden rounded-2xl">
              <Image src={image} alt={`${page.title}-${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </GlassCard>
        ))}
      </div>

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