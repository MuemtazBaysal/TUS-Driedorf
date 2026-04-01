import Image from "next/image";
import type { TeamMember } from "@/content/siteContent";
import GlassCard from "@/components/GlassCard";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <GlassCard className="overflow-hidden p-4">
      <div className="relative h-52 overflow-hidden rounded-2xl">
        <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="pt-4">
        <p className="text-xl font-semibold text-gray-900">{member.name}</p>
        <p className="mt-1 text-sm text-green-700">{member.role}</p>
        <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
      </div>
    </GlassCard>
  );
}