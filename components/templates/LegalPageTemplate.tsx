import GlassCard from "@/components/GlassCard";
import SubpageLayout from "@/components/SubpageLayout";
import type { LegalPage } from "@/content/siteContent";

type LegalPageTemplateProps = {
  page: LegalPage;
};

export default function LegalPageTemplate({ page }: LegalPageTemplateProps) {
  return (
    <SubpageLayout title={page.title} intro={page.intro}>
      <div className="space-y-4">
        {page.blocks.map((block) => (
          <GlassCard key={`${page.slug}-${block.slice(0, 20)}`} className="p-6 text-sm text-gray-600 md:text-base">
            {block}
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}