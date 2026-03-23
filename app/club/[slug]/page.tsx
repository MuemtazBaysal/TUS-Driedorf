import { notFound } from "next/navigation";
import SubpageLayout from "@/components/SubpageLayout";
import Timeline from "@/components/Timeline";
import TeamCard from "@/components/TeamCard";
import GlassCard from "@/components/GlassCard";
import { siteContent } from "@/content/siteContent";

type ClubPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(siteContent.club.pages).map((slug) => ({ slug }));
}

export default async function ClubPage({ params }: ClubPageProps) {
  const { slug } = await params;
  const page = siteContent.club.pages[slug as keyof typeof siteContent.club.pages];

  if (!page) {
    notFound();
  }

  return (
    <SubpageLayout title={page.title} intro={page.intro}>
      {"body" in page ? (
        <div className="space-y-4">
          {page.body.map((paragraph) => (
            <GlassCard key={paragraph.slice(0, 24)} className="p-6 text-sm text-slate-200/85 md:text-base">
              {paragraph}
            </GlassCard>
          ))}
        </div>
      ) : null}

      {"timeline" in page ? <Timeline items={page.timeline} /> : null}

      {"team" in page ? (
        <div className="grid gap-5 md:grid-cols-3">
          {page.team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      ) : null}

      {"files" in page ? (
        <div className="grid gap-5 md:grid-cols-3">
          {page.files.map((file) => (
            <GlassCard key={file.title} className="p-6">
              <p className="text-lg font-semibold text-mist">{file.title}</p>
              <p className="mt-3 text-sm text-slate-200/85">{file.description}</p>
              <a href={file.href} className="mt-4 inline-block text-sm text-glow">
                {file.href}
              </a>
            </GlassCard>
          ))}
        </div>
      ) : null}
    </SubpageLayout>
  );
}