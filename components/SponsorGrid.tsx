import type { Sponsor } from "@/content/siteContent";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import Link from "next/link";

type SponsorGridProps = {
  sponsors: Sponsor[];
};

export default function SponsorGrid({ sponsors }: SponsorGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sponsors.map((sponsor) => (
        <GlassCard key={sponsor.name} className="p-5">
          <div className="relative h-28 overflow-hidden rounded-2xl bg-gray-100">
            <Image src={sponsor.logo} alt={sponsor.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-green-700">{sponsor.tier}</p>
          <p className="mt-2 text-xl font-semibold text-gray-900">{sponsor.name}</p>
          <p className="mt-2 text-sm text-gray-600">{sponsor.description}</p>
          <Link href={sponsor.website} className="mt-4 inline-block text-sm text-green-600 transition hover:text-green-700">
            {sponsor.website}
          </Link>
        </GlassCard>
      ))}
    </div>
  );
}