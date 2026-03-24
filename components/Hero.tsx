"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import CTA from "@/components/CTA";
import type { HeroData } from "@/content/siteContent";

type HeroProps = {
  data: HeroData;
};

export default function Hero({ data }: HeroProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section className="relative mx-auto grid min-h-[80vh] w-full max-w-6xl items-end px-4 pb-16 pt-36 md:px-8">
      <motion.div style={{ y, scale }} className="pointer-events-none absolute inset-0 -z-20 overflow-hidden rounded-[2.5rem]">
        <Image src={data.image} alt={data.title} fill priority className="object-cover opacity-45" sizes="100vw" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-black/20 via-black/45 to-shell" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass max-w-3xl rounded-3xl p-8 md:p-12"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-calm">{data.eyebrow}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-mist md:text-6xl">{data.title}</h1>
        <p className="mt-6 max-w-2xl text-base text-slate-100/90 md:text-lg">{data.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA data={data.primaryCta} />
          <CTA data={data.secondaryCta} />
        </div>
      </motion.div>
    </section>
  );
}
