import GlassCard from "@/components/GlassCard";
import SubpageLayout from "@/components/SubpageLayout";
import CTA from "@/components/CTA";
import type { StandardPage } from "@/content/siteContent";

type StandardPageTemplateProps = {
  page: StandardPage;
};

export default function StandardPageTemplate({ page }: StandardPageTemplateProps) {
  return (
    <SubpageLayout title={page.title} intro={page.intro}>
      <div className="space-y-4">
        {page.body.map((paragraph) => (
          <GlassCard key={`${page.slug}-${paragraph.slice(0, 20)}`} className="p-6 text-sm text-gray-600 md:text-base">
            {paragraph}
          </GlassCard>
        ))}
      </div>
      {page.cta ? (
        <div className="mt-6">
          <CTA data={page.cta} />
        </div>
      ) : null}
    </SubpageLayout>
  );
}