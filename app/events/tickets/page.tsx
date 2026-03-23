import SubpageLayout from "@/components/SubpageLayout";
import CTA from "@/components/CTA";
import { siteContent } from "@/content/siteContent";

export default function EventTicketsPage() {
  return (
    <SubpageLayout title={siteContent.events.tickets.title} intro={siteContent.events.tickets.intro}>
      <CTA data={siteContent.events.tickets.cta} />
    </SubpageLayout>
  );
}