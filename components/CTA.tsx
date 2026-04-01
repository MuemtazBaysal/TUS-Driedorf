import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CTAData } from "@/content/siteContent";

type CTAProps = {
  data: CTAData;
};

export default function CTA({ data }: CTAProps) {
  const variant = data.variant === "secondary" ? "bg-white text-gray-900 hover:bg-gray-50 border-2 border-green-600" : "bg-green-600 text-white hover:bg-green-700 shadow-lg";

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