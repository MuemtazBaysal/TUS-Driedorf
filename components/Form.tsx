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
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
        {fields.map((field) => (
          <label key={field.name} className="block text-sm text-gray-900">
            <span className="mb-2 block text-green-700">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                className="h-28 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            )}
          </label>
        ))}
        <button type="button" className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700">
          {submitLabel}
        </button>
        <p className="text-xs text-gray-500">{note}</p>
      </form>
    </GlassCard>
  );
}