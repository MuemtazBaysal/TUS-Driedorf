"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

type ThemeValue = (typeof options)[number]["value"];

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const ActiveIcon = useMemo(() => {
    if (theme === "light") return Sun;
    if (theme === "dark") return Moon;
    return resolvedTheme === "dark" ? Moon : Sun;
  }, [theme, resolvedTheme]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Theme auswählen"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:bg-gray-50"
      >
        <ActiveIcon size={16} />
        <ChevronDown size={14} />
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 min-w-40 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
          {options.map((option) => {
            const Icon = option.icon;
            const active = theme === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTheme(option.value as ThemeValue);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                <span className="inline-flex items-center gap-2">
                  <Icon size={15} />
                  {option.label}
                </span>
                {active ? <Check size={14} className="text-green-600" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
