"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Logo from "@/components/icons/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import type { NavItem } from "@/content/siteContent";

type NavbarProps = {
  siteName: string;
  items: NavItem[];
  openLabel: string;
  closeLabel: string;
};

export default function Navbar({ siteName, items, openLabel, closeLabel }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleDesktopEnter = (href: string) => {
    clearCloseTimer();
    setOpenDesktopDropdown(href);
  };

  const handleDesktopLeave = (href: string) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDesktopDropdown((current) => (current === href ? null : current));
    }, 180);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-sm px-4 py-4 shadow-sm md:px-8">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 lg:px-7">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={52} className="text-glow" />
            <span className="whitespace-nowrap text-base font-semibold uppercase tracking-[0.2em] text-mist md:text-lg">
              {siteName}
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {items.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => handleDesktopEnter(item.href)}
                onMouseLeave={() => handleDesktopLeave(item.href)}
              >
                <Link href={item.href} className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-base text-gray-700 transition hover:bg-green-50 hover:text-green-700">
                  <span>{item.label}</span>
                  {item.children?.length ? <ChevronDown size={14} /> : null}
                </Link>
                {item.children?.length ? (
                  <div
                    className={`absolute right-0 top-full mt-1 min-w-48 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition ${
                      openDesktopDropdown === item.href ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
                    }`}
                    onMouseEnter={() => handleDesktopEnter(item.href)}
                    onMouseLeave={() => handleDesktopLeave(item.href)}
                  >
                    {item.children.map((child) =>
                      child.children?.length ? (
                        <div key={child.label} className="group/sub relative">
                          <Link
                            href={child.href}
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                          >
                            <span>{child.label}</span>
                            <ChevronRight size={14} />
                          </Link>
                          <div className="invisible absolute left-full top-0 z-50 ml-1 min-w-48 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition group-hover/sub:visible group-hover/sub:opacity-100">
                            {child.children.map((grandChild) => (
                              <Link
                                key={grandChild.href}
                                href={grandChild.href}
                                className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                              >
                                {grandChild.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label={menuOpen ? closeLabel : openLabel}
            className="inline-flex rounded-full p-2 text-gray-700 transition hover:bg-green-50 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="glass mx-auto mt-3 w-full max-w-6xl rounded-3xl p-4 lg:hidden">
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.href} className="rounded-2xl border border-gray-200 p-3">
                <Link href={item.href} className="text-base font-medium text-gray-900" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="mt-2 space-y-1 pl-2">
                    {item.children.map((child) =>
                      child.children?.length ? (
                        <div key={child.label} className="py-1">
                          <Link
                            href={child.href}
                            className="text-sm font-semibold text-gray-900"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                          <div className="mt-1 space-y-1 pl-3">
                            {child.children.map((grandChild) => (
                              <Link
                                key={grandChild.href}
                                href={grandChild.href}
                                className="block text-sm text-gray-600"
                                onClick={() => setMenuOpen(false)}
                              >
                                {grandChild.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-sm text-gray-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
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
