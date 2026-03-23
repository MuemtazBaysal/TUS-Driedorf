import SubpageLayout from "@/components/SubpageLayout";
import SponsorGrid from "@/components/SponsorGrid";
import { siteContent } from "@/content/siteContent";

export default function EventSponsorsPage() {
  return (
    <SubpageLayout title={siteContent.events.sponsors.title} intro={siteContent.events.sponsors.intro}>
      <SponsorGrid sponsors={siteContent.sponsors} />
    </SubpageLayout>
  );
}