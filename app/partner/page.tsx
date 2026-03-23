import SubpageLayout from "@/components/SubpageLayout";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import { siteContent } from "@/content/siteContent";

export default function PartnerPage() {
  return (
    <SubpageLayout title={siteContent.partner.title} intro={siteContent.partner.intro}>
      <div className="mb-6">
        <CTA data={siteContent.partner.cta} />
      </div>
      <Form {...siteContent.forms.partnerRequest} id="partner-form" />
    </SubpageLayout>
  );
}