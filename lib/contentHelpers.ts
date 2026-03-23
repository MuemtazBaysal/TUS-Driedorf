import { siteContent } from "@/content/siteContent";

export function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function getAboutPage(slug: string) {
  return siteContent.about.pages.find((page) => page.slug === slug);
}

export function getAboutLegalPage(slug: string) {
  return siteContent.about.legal.find((page) => page.slug === slug);
}

export function getFootballTeam(slug: string) {
  return siteContent.football.teams.find((team) => team.slug === slug);
}

export function getFootballEvent(slug: string) {
  return siteContent.football.events.find((event) => event.slug === slug);
}

export function getBroadSportPage(slug: string) {
  return siteContent.broadSports.pages.find((page) => page.slug === slug);
}

export function getKirmesPage(slug: string) {
  return siteContent.kirmes.pages.find((page) => page.slug === slug);
}