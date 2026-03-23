import SubpageLayout from "@/components/SubpageLayout";
import Timeline from "@/components/Timeline";
import { siteContent } from "@/content/siteContent";

export default function EventProgramPage() {
  return (
    <SubpageLayout title={siteContent.events.program.title} intro={siteContent.events.program.intro}>
      <Timeline items={siteContent.events.program.timeline} />
    </SubpageLayout>
  );
}