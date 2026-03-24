import SubpageLayout from "@/components/SubpageLayout";
import CTA from "@/components/CTA";
import { siteContent, type CTAData } from "@/content/siteContent";

export default function ShopPage() {
  return (
    <SubpageLayout title={siteContent.shop.title} intro={siteContent.shop.intro}>
      <CTA data={siteContent.shop.cta as CTAData} />
    </SubpageLayout>
  );
}