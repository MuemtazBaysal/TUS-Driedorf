import Link from "next/link";
import Logo from "@/components/icons/Logo";
import type { SiteContent } from "@/content/siteContent";

type FooterProps = {
  content: SiteContent["footer"];
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-white/10 px-6 pb-10 pt-12 md:px-10">
      <div className="glass mx-auto grid w-full max-w-6xl gap-8 rounded-3xl p-8 md:grid-cols-4">
        <div>
          <Logo size={48} className="mb-3 text-glow" />
          <p className="text-xl font-semibold text-mist">{content.slogan}</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-calm">{content.contact.title}</p>
          <p className="mt-3 text-sm text-slate-200/85">{content.contact.address}</p>
          <p className="mt-2 text-sm text-slate-200/85">{content.contact.phone}</p>
          <p className="mt-2 text-sm text-slate-200/85">{content.contact.email}</p>
        </div>

        {content.linkGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm uppercase tracking-[0.22em] text-calm">{group.title}</p>
            <div className="mt-3 space-y-2 text-sm text-slate-200/85">
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} className="block transition hover:text-mist">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-slate-300/80">
        <p>{content.copyright}</p>
        <div className="flex flex-wrap items-center gap-4">
          {content.social.map((social) => (
            <Link key={social.label} href={social.href} className="transition hover:text-mist">
              {social.label}
            </Link>
          ))}
          {content.legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-mist">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}