import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CTAData } from "@/content/siteContent";

type CTAProps = {
  data: CTAData;
};

export default function CTA({ data }: CTAProps) {
  const variant = data.variant === "secondary" ? "bg-white/5 text-mist hover:bg-white/15" : "bg-glow/90 text-slate-950 hover:bg-glow";

  return (
    <Link
      href={data.href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${variant}`}
    >
      <span>{data.label}</span>
      <ArrowRight size={16} />
    </Link>
  );
}