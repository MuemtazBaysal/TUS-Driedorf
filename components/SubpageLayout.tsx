import { ReactNode } from "react";
import GlassCard from "@/components/GlassCard";

type SubpageLayoutProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export default function SubpageLayout({ title, intro, children }: SubpageLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 md:px-10">
      <GlassCard className="p-8 md:p-12">
        <h1 className="text-balance text-4xl font-semibold text-mist md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base text-slate-200/85 md:text-lg">{intro}</p>
      </GlassCard>
      <div className="mt-8">{children}</div>
    </main>
  );
}