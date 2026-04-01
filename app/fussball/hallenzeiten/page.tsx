import SubpageLayout from "@/components/SubpageLayout";
import Schedule from "@/components/Schedule";
import { siteContent } from "@/content/siteContent";

export default function HallTimesPage() {
  return (
    <SubpageLayout title={siteContent.football.hallTimes.title} intro={siteContent.football.hallTimes.intro}>
      <Schedule items={siteContent.football.hallTimes.schedule} />
    </SubpageLayout>
  );
}
