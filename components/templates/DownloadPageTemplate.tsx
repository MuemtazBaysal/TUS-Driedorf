import SubpageLayout from "@/components/SubpageLayout";
import GlassCard from "@/components/GlassCard";
import type { DownloadPage } from "@/content/siteContent";

type DownloadPageTemplateProps = {
  page: DownloadPage;
  sectionTitle: string;
};

export default function DownloadPageTemplate({ page, sectionTitle }: DownloadPageTemplateProps) {
  return (
    <SubpageLayout title={page.title} intro={page.intro}>
      <h2 className="mb-4 text-2xl font-semibold text-mist">{sectionTitle}</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {page.downloads.map((file) => (
          <GlassCard key={`${page.slug}-${file.title}`} className="p-6">
            <p className="text-lg font-semibold text-mist">{file.title}</p>
            <p className="mt-3 text-sm text-slate-200/85">{file.description}</p>
            <a href={file.href} className="mt-4 inline-block text-sm text-glow" target="_blank" rel="noreferrer">
              {file.href}
            </a>
          </GlassCard>
        ))}
      </div>
    </SubpageLayout>
  );
}