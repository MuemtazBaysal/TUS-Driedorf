import type { TimelineItem } from "@/content/siteContent";
import GlassCard from "@/components/GlassCard";

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-5 before:absolute before:left-2 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-calm/30">
      {items.map((item) => (
        <GlassCard key={`${item.title}-${item.date}`} className="relative ml-6 p-5">
          <span className="absolute -left-7 top-7 h-3 w-3 rounded-full bg-glow" />
          <p className="text-xs uppercase tracking-[0.2em] text-calm">{item.date}</p>
          <p className="mt-2 text-lg font-semibold text-mist">{item.title}</p>
          <p className="mt-2 text-sm text-slate-200/85">{item.text}</p>
        </GlassCard>
      ))}
    </div>
  );
}