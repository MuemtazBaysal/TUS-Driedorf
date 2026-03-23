import SubpageLayout from "@/components/SubpageLayout";
import CTA from "@/components/CTA";
import { siteContent, type CTAData } from "@/content/siteContent";

export default function DonationsPage() {
  return (
    <SubpageLayout title={siteContent.donations.title} intro={siteContent.donations.intro}>
      <CTA data={siteContent.donations.cta as CTAData} />
    </SubpageLayout>
  );
}
