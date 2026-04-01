import type { ScheduleItem } from "@/content/siteContent";
import GlassCard from "@/components/GlassCard";

type ScheduleProps = {
  items: ScheduleItem[];
};

export default function Schedule({ items }: ScheduleProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <GlassCard key={`${item.day}-${item.slot}`} className="p-5">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <p className="text-lg font-semibold text-gray-900">{item.day}</p>
            <p className="text-sm text-green-700">{item.slot}</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">{item.info}</p>
        </GlassCard>
      ))}
    </div>
  );
}