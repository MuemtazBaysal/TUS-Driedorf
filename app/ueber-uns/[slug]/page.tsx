import { notFound } from "next/navigation";
import SubpageLayout from "@/components/SubpageLayout";
import TeamCard from "@/components/TeamCard";
import DownloadPageTemplate from "@/components/templates/DownloadPageTemplate";
import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { siteContent } from "@/content/siteContent";
import { getAboutLegalPage, getAboutPage } from "@/lib/contentHelpers";

type AboutDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AboutDetailPage({ params }: AboutDetailPageProps) {
  const { slug } = await params;

  const standardPage = getAboutPage(slug);
  if (standardPage) {
    return <StandardPageTemplate page={standardPage} />;
  }

  const legalPage = getAboutLegalPage(slug);
  if (legalPage) {
    return <LegalPageTemplate page={legalPage} />;
  }

  if (slug === siteContent.about.downloads.slug) {
    return <DownloadPageTemplate page={siteContent.about.downloads} sectionTitle={siteContent.ui.sectionTitles.downloads} />;
  }

  if (slug === siteContent.about.board.slug) {
    return (
      <SubpageLayout title={siteContent.about.board.title} intro={siteContent.about.board.intro}>
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.about.board.members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </SubpageLayout>
    );
  }

  notFound();
}
