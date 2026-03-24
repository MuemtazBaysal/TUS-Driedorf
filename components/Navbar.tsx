"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/icons/Logo";
import type { NavItem } from "@/content/siteContent";

type NavbarProps = {
  siteName: string;
  items: NavItem[];
  openLabel: string;
  closeLabel: string;
};

export default function Navbar({ siteName, items, openLabel, closeLabel }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="glass mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={36} className="text-glow" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-mist md:text-base">
            {siteName}
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-slate-100/90 transition hover:bg-white/10">
                <span>{item.label}</span>
                {item.children?.length ? <ChevronDown size={14} /> : null}
              </Link>
              {item.children?.length ? (
                <div className="invisible absolute right-0 top-12 min-w-48 rounded-2xl border border-white/15 bg-slate-950/90 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-100/90 transition hover:bg-white/10"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? closeLabel : openLabel}
          className="inline-flex rounded-full p-2 text-mist transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="glass mx-auto mt-3 w-full max-w-6xl rounded-3xl p-4 md:hidden">
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.href} className="rounded-2xl border border-white/10 p-3">
                <Link href={item.href} className="text-base font-medium text-mist" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="mt-2 space-y-1 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-slate-200/85"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}