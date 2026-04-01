"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({ title, description, children, className = "" }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mx-auto w-full max-w-6xl px-4 py-14 md:px-8 ${className}`}
    >
      {title ? <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{title}</h2> : null}
      {description ? <p className="mt-4 max-w-3xl text-base text-gray-600 md:text-lg">{description}</p> : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </motion.section>
  );
}
