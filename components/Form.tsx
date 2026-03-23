"use client";

import type { FormField } from "@/content/siteContent";
import GlassCard from "@/components/GlassCard";

type FormProps = {
  title: string;
  description: string;
  fields: FormField[];
  submitLabel: string;
  note: string;
  id?: string;
};

export default function Form({ title, description, fields, submitLabel, note, id }: FormProps) {
  return (
    <GlassCard className="p-6 md:p-8" >
      <form id={id} className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-mist">{title}</h3>
          <p className="mt-2 text-sm text-slate-200/85">{description}</p>
        </div>
        {fields.map((field) => (
          <label key={field.name} className="block text-sm text-slate-100">
            <span className="mb-2 block text-calm">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                className="h-28 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-glow"
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-sm outline-none transition focus:border-glow"
              />
            )}
          </label>
        ))}
        <button type="button" className="rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-mist">
          {submitLabel}
        </button>
        <p className="text-xs text-slate-300/80">{note}</p>
      </form>
    </GlassCard>
  );
}