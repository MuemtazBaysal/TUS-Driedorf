import SubpageLayout from "@/components/SubpageLayout";
import TeamCard from "@/components/TeamCard";
import { siteContent } from "@/content/siteContent";

export default function RefereesPage() {
  return (
    <SubpageLayout title={siteContent.football.referees.title} intro={siteContent.football.referees.intro}>
      <div className="grid gap-5 md:grid-cols-2">
        {siteContent.football.referees.members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </SubpageLayout>
  );
}
