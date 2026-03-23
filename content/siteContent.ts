export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type CTAData = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: CTAData;
  secondaryCta: CTAData;
  image: string;
};

export type SectionData = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type TeamContact = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export type Sponsor = {
  name: string;
  tier: string;
  description: string;
  logo: string;
  website: string;
};

export type TimelineItem = {
  title: string;
  date: string;
  text: string;
};

export type ScheduleItem = {
  day: string;
  slot: string;
  info: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
};

export type StandardPage = {
  slug: string;
  title: string;
  intro: string;
  body: string[];
  cta?: CTAData;
};

export type LegalPage = {
  slug: string;
  title: string;
  intro: string;
  blocks: string[];
};

export type DownloadPage = {
  slug: string;
  title: string;
  intro: string;
  downloads: DownloadItem[];
};

export type TeamPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  trainingTimes: ScheduleItem[];
  contacts: TeamContact[];
  resultsPlaceholder: string;
  gallery: string[];
  cta: {
    title: string;
    description: string;
    button: CTAData;
  };
};

export type EventPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  infoCards: SectionData[];
  program: TimelineItem[];
  sponsors: Sponsor[];
  cta: {
    title: string;
    description: string;
    button: CTAData;
  };
};

const defaultTeamCopy = {
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ctaTitle: "Teamkontakt aufnehmen",
  ctaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const teamSeed = [
  { slug: "1-mannschaft", title: "1. Mannschaft", eyebrow: "Fußballteam", coach: "Coach Lorem", image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80" },
  { slug: "sg-beilstein-driedorf-2", title: "SG Beilstein/Driedorf 2", eyebrow: "Fußballteam", coach: "Coach Ipsum", image: "https://images.unsplash.com/photo-1508098682722-e99c643e7485?auto=format&fit=crop&w=1200&q=80" },
  { slug: "damenmannschaft", title: "Damenmannschaft", eyebrow: "Fußballteam", coach: "Coach Dolor", image: "https://images.unsplash.com/photo-1598887142487-9a94d441c9a6?auto=format&fit=crop&w=1200&q=80" },
  { slug: "a-jugend", title: "A Jugend", eyebrow: "Jugendteam", coach: "A Youth", image: "https://images.unsplash.com/photo-1543322748-33df6d3db806?auto=format&fit=crop&w=1200&q=80" },
  { slug: "b-jugend", title: "B Jugend", eyebrow: "Jugendteam", coach: "B Youth", image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "c-jugend", title: "C Jugend", eyebrow: "Jugendteam", coach: "C Youth", image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=1200&q=80" },
  { slug: "d-jugend", title: "D Jugend", eyebrow: "Jugendteam", coach: "D Youth", image: "https://images.unsplash.com/photo-1495298599282-1c39f9cf2ea5?auto=format&fit=crop&w=1200&q=80" },
  { slug: "e1-jugend", title: "E1 Jugend", eyebrow: "Jugendteam", coach: "E1 Youth", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80" },
  { slug: "e2-jugend", title: "E2 Jugend", eyebrow: "Jugendteam", coach: "E2 Youth", image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80" },
  { slug: "f-jugend", title: "F Jugend", eyebrow: "Jugendteam", coach: "F Youth", image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?auto=format&fit=crop&w=1200&q=80" },
  { slug: "g-jugend", title: "G Jugend", eyebrow: "Jugendteam", coach: "G Youth", image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80" },
  { slug: "alte-herren", title: "Alte Herren", eyebrow: "Fußballteam", coach: "AH Coach", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80" },
] as const;

const teamPages: TeamPage[] = teamSeed.map((team, index) => ({
  slug: team.slug,
  title: team.title,
  eyebrow: team.eyebrow,
  intro: defaultTeamCopy.intro,
  trainingTimes: [
    { day: "Montag", slot: `${17 + (index % 3)}:00 - ${19 + (index % 3)}:00`, info: "Lorem ipsum training block" },
    { day: "Donnerstag", slot: `${18 + (index % 2)}:00 - ${20 + (index % 2)}:00`, info: "Sed do eiusmod tactical unit" },
  ],
  contacts: [
    {
      name: team.coach,
      role: "Trainer",
      email: `${team.slug}@example.com`,
      phone: `+49 0000 0000${String(index + 1).padStart(2, "0")}`,
    },
  ],
  resultsPlaceholder: defaultTeamCopy.results,
  gallery: [team.image, "https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&w=1200&q=80"],
  cta: {
    title: defaultTeamCopy.ctaTitle,
    description: defaultTeamCopy.ctaDescription,
    button: { label: "Partner werden", href: "/partner-werden", variant: index % 2 === 0 ? "primary" : "secondary" },
  },
}));

export const siteContent = {
  meta: {
    siteName: "TuS Driedorf",
    siteTagline: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  ui: {
    openMenu: "Navigation öffnen",
    closeMenu: "Navigation schließen",
    notFoundTitle: "Inhalt nicht gefunden",
    notFoundText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backHome: "Zur Startseite",
    navigationToggle: "Untermenü umschalten",
    sectionTitles: {
      trainingTimes: "Trainingszeiten",
      contacts: "Trainer und Teamkontakte",
      results: "Ergebnisse",
      gallery: "Galerie",
      program: "Programm",
      sponsors: "Partner und Sponsoren",
      downloads: "Downloads",
      subpages: "Unterseiten",
      teams: "Teams",
      infoCards: "Informationen",
    },
    overviewCardCta: "Zur Seite",
  },
  navigation: [
    { label: "Start", href: "/" },
    { label: "Shop", href: "/shop" },
    {
      label: "Über uns",
      href: "/ueber-uns",
      children: [
        { label: "Leitbild", href: "/ueber-uns/leitbild" },
        { label: "Agenda 27", href: "/ueber-uns/agenda-27" },
        { label: "Vorstand", href: "/ueber-uns/vorstand" },
        { label: "Downloads", href: "/ueber-uns/downloads" },
        { label: "Impressum", href: "/ueber-uns/impressum" },
        { label: "Datenschutz", href: "/ueber-uns/datenschutz" },
      ],
    },
    {
      label: "Fußball",
      href: "/fussball",
      children: [
        { label: "Schiedsrichter", href: "/fussball/schiedsrichter" },
        ...teamSeed.map((team) => ({ label: team.title, href: `/fussball/${team.slug}` })),
        { label: "Westerwald Indoor Cup", href: "/fussball/westerwald-indoor-cup" },
        { label: "Westerwald Jugend Indoor Cup", href: "/fussball/westerwald-jugend-indoor-cup" },
        { label: "Hallenzeiten", href: "/fussball/hallenzeiten" },
      ],
    },
    {
      label: "Breitensport",
      href: "/breitensport",
      children: [
        { label: "Kinderturnen", href: "/breitensport/kinderturnen" },
        { label: "Wandern", href: "/breitensport/wandern" },
        { label: "Badminton", href: "/breitensport/badminton" },
        { label: "Gymnastik", href: "/breitensport/gymnastik" },
      ],
    },
    {
      label: "Westerwaldkirmes",
      href: "/westerwaldkirmes",
      children: [
        { label: "Programm", href: "/westerwaldkirmes/programm" },
        { label: "Tickets", href: "/westerwaldkirmes/tickets" },
        { label: "Partner und Sponsoren", href: "/westerwaldkirmes/partner-und-sponsoren" },
      ],
    },
    { label: "Spenden", href: "/spenden" },
    { label: "Partner werden", href: "/partner-werden" },
  ] as NavItem[],
  home: {
    hero: {
      eyebrow: "Lorem Ipsum Sportverein",
      title: "Moderne Vereinskultur mit Haltung, Bewegung und Gemeinschaft.",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      primaryCta: { label: "Zur Westerwaldkirmes", href: "/westerwaldkirmes", variant: "primary" },
      secondaryCta: { label: "Jetzt spenden", href: "/spenden", variant: "secondary" },
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=80",
    } as HeroData,
    intro: {
      title: "Tradition und Zukunft in einer klaren Vereinsstruktur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    } as SectionData,
    highlights: [
      { title: "Vereinsleben", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
      { title: "Nachwuchsarbeit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
      { title: "Sportliche Vielfalt", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    ],
    sponsorsSection: {
      title: "Partner und Sponsoren",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    cta: {
      title: "Jetzt Teil des Vereinsnetzwerks werden",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      button: { label: "Partner werden", href: "/partner-werden", variant: "primary" },
    },
  },
  shop: {
    title: "Shop",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    cta: { label: "Partneranfrage senden", href: "/partner-werden", variant: "primary" },
  },
  about: {
    intro: {
      title: "Über uns",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    pages: [
      {
        slug: "leitbild",
        title: "Leitbild",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        body: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
      {
        slug: "agenda-27",
        title: "Agenda 27",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        body: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ],
      },
    ] as StandardPage[],
    board: {
      slug: "vorstand",
      title: "Vorstand",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      members: [
        { name: "Alex Lorem", role: "1. Vorsitz", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80" },
        { name: "Sam Ipsum", role: "2. Vorsitz", bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80" },
        { name: "Jamie Dolor", role: "Kassenwart", bio: "Ut enim ad minim veniam quis nostrud exercitation ullamco.", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80" },
      ] as TeamMember[],
    },
    downloads: {
      slug: "downloads",
      title: "Downloads",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      downloads: [
        { title: "Aufnahmeantrag", description: "Lorem ipsum dolor sit amet.", href: "https://example.com/aufnahme.pdf" },
        { title: "Satzung", description: "Sed do eiusmod tempor incididunt.", href: "https://example.com/satzung.pdf" },
        { title: "Beitragsordnung", description: "Ut labore et dolore magna aliqua.", href: "https://example.com/beitrag.pdf" },
      ],
    } as DownloadPage,
    legal: [
      {
        slug: "impressum",
        title: "Impressum",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        blocks: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
      {
        slug: "datenschutz",
        title: "Datenschutz",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        blocks: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ],
      },
    ] as LegalPage[],
  },
  football: {
    intro: {
      title: "Fußball",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    teams: teamPages,
    referees: {
      slug: "schiedsrichter",
      title: "Schiedsrichter",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      members: [
        { name: "Robin Lorem", role: "Schiedsrichter", bio: "Lorem ipsum dolor sit amet.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80" },
        { name: "Taylor Ipsum", role: "Schiedsrichter", bio: "Sed do eiusmod tempor incididunt.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80" },
      ] as TeamMember[],
    },
    hallTimes: {
      slug: "hallenzeiten",
      title: "Hallenzeiten",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      schedule: [
        { day: "Montag", slot: "20:00 - 22:00", info: "Halle A" },
        { day: "Mittwoch", slot: "20:00 - 22:00", info: "Halle B" },
        { day: "Freitag", slot: "19:00 - 21:00", info: "Halle A" },
      ] as ScheduleItem[],
    },
    events: [
      {
        slug: "westerwald-indoor-cup",
        title: "Westerwald Indoor Cup",
        eyebrow: "Fußballevent",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        infoCards: [
          { title: "Ort", description: "Lorem ipsum dolor sit amet." },
          { title: "Datum", description: "Lorem ipsum dolor sit amet." },
          { title: "Format", description: "Lorem ipsum dolor sit amet." },
        ],
        program: [
          { title: "Eröffnung", date: "09:00", text: "Lorem ipsum dolor sit amet." },
          { title: "Gruppenphase", date: "11:00", text: "Sed do eiusmod tempor incididunt." },
          { title: "Finale", date: "18:00", text: "Ut labore et dolore magna aliqua." },
        ],
        sponsors: [],
        cta: {
          title: "Jetzt als Team anfragen",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: { label: "Partner werden", href: "/partner-werden", variant: "primary" },
        },
      },
      {
        slug: "westerwald-jugend-indoor-cup",
        title: "Westerwald Jugend Indoor Cup",
        eyebrow: "Fußballevent",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        infoCards: [
          { title: "Ort", description: "Lorem ipsum dolor sit amet." },
          { title: "Datum", description: "Lorem ipsum dolor sit amet." },
          { title: "Jugendklassen", description: "Lorem ipsum dolor sit amet." },
        ],
        program: [
          { title: "Anmeldung", date: "08:30", text: "Lorem ipsum dolor sit amet." },
          { title: "Turnierstart", date: "10:00", text: "Sed do eiusmod tempor incididunt." },
          { title: "Siegerehrung", date: "17:00", text: "Ut labore et dolore magna aliqua." },
        ],
        sponsors: [],
        cta: {
          title: "Jugendturnier unterstützen",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: { label: "Spenden", href: "/spenden", variant: "secondary" },
        },
      },
    ] as EventPage[],
  },
  broadSports: {
    intro: {
      title: "Breitensport",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    pages: [
      { slug: "kinderturnen", title: "Kinderturnen", intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."], cta: { label: "Partner werden", href: "/partner-werden", variant: "secondary" } },
      { slug: "wandern", title: "Wandern", intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."], cta: { label: "Spenden", href: "/spenden", variant: "primary" } },
      { slug: "badminton", title: "Badminton", intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."], cta: { label: "Partner werden", href: "/partner-werden", variant: "secondary" } },
      { slug: "gymnastik", title: "Gymnastik", intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."], cta: { label: "Spenden", href: "/spenden", variant: "primary" } },
    ] as StandardPage[],
  },
  kirmes: {
    overview: {
      title: "Westerwaldkirmes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    pages: [
      {
        slug: "programm",
        title: "Programm",
        eyebrow: "Westerwaldkirmes",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoCards: [{ title: "Freitag", description: "Lorem ipsum dolor sit amet." }, { title: "Samstag", description: "Lorem ipsum dolor sit amet." }, { title: "Sonntag", description: "Lorem ipsum dolor sit amet." }],
        program: [{ title: "Eröffnung", date: "18:00", text: "Lorem ipsum dolor sit amet." }, { title: "Bühnenprogramm", date: "20:00", text: "Sed do eiusmod tempor incididunt." }, { title: "Abschluss", date: "22:30", text: "Ut labore et dolore magna aliqua." }],
        sponsors: [],
        cta: { title: "Programm-Highlights nicht verpassen", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: { label: "Tickets", href: "/westerwaldkirmes/tickets", variant: "primary" } },
      },
      {
        slug: "tickets",
        title: "Tickets",
        eyebrow: "Westerwaldkirmes",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoCards: [{ title: "Ticketarten", description: "Lorem ipsum dolor sit amet." }, { title: "Vorverkauf", description: "Lorem ipsum dolor sit amet." }, { title: "Abendkasse", description: "Lorem ipsum dolor sit amet." }],
        program: [{ title: "Online-Reservierung", date: "ab sofort", text: "Lorem ipsum dolor sit amet." }, { title: "Abholung", date: "laufend", text: "Sed do eiusmod tempor incididunt." }],
        sponsors: [],
        cta: { title: "Ticketanfrage senden", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: { label: "Partner werden", href: "/partner-werden", variant: "secondary" } },
      },
      {
        slug: "partner-und-sponsoren",
        title: "Partner und Sponsoren",
        eyebrow: "Westerwaldkirmes",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoCards: [{ title: "Platin", description: "Lorem ipsum dolor sit amet." }, { title: "Gold", description: "Lorem ipsum dolor sit amet." }, { title: "Silber", description: "Lorem ipsum dolor sit amet." }],
        program: [{ title: "Partnerforum", date: "14:00", text: "Lorem ipsum dolor sit amet." }, { title: "Netzwerkabend", date: "18:00", text: "Sed do eiusmod tempor incididunt." }],
        sponsors: [],
        cta: { title: "Als Sponsor einsteigen", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: { label: "Partner werden", href: "/partner-werden", variant: "primary" } },
      },
    ] as EventPage[],
  },
  donations: {
    title: "Spenden",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    cta: { label: "Partner werden", href: "/partner-werden", variant: "primary" },
  },
  partner: {
    title: "Partner werden",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cta: { label: "Partneranfrage senden", href: "#partner-form", variant: "primary" },
  },
  sponsors: [
    { name: "Lorem Group", tier: "Platin", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", logo: "https://dummyimage.com/260x140/e8ecff/253055&text=Lorem+Group", website: "https://example.com" },
    { name: "Ipsum Works", tier: "Gold", description: "Sed do eiusmod tempor incididunt ut labore et dolore.", logo: "https://dummyimage.com/260x140/e6fff4/154734&text=Ipsum+Works", website: "https://example.com" },
    { name: "Dolor Labs", tier: "Silber", description: "Ut enim ad minim veniam quis nostrud exercitation.", logo: "https://dummyimage.com/260x140/fff4e6/6b4f1d&text=Dolor+Labs", website: "https://example.com" },
    { name: "Sit Amet Co", tier: "Support", description: "Duis aute irure dolor in reprehenderit in voluptate.", logo: "https://dummyimage.com/260x140/f2ecff/33204d&text=Sit+Amet+Co", website: "https://example.com" },
  ] as Sponsor[],
  forms: {
    contact: {
      title: "Kontaktformular",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fields: [
        { name: "name", label: "Name", type: "text", placeholder: "Lorem ipsum" },
        { name: "email", label: "E-Mail", type: "email", placeholder: "lorem@ipsum.com" },
        { name: "message", label: "Nachricht", type: "textarea", placeholder: "Lorem ipsum dolor sit amet" },
      ] as FormField[],
      submitLabel: "Nachricht senden",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    partnerRequest: {
      title: "Partneranfrage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fields: [
        { name: "company", label: "Unternehmen", type: "text", placeholder: "Lorem GmbH" },
        { name: "contact", label: "Kontaktperson", type: "text", placeholder: "Alex Ipsum" },
        { name: "phone", label: "Telefon", type: "tel", placeholder: "+49 0000 000000" },
        { name: "email", label: "E-Mail", type: "email", placeholder: "contact@lorem.com" },
        { name: "details", label: "Details", type: "textarea", placeholder: "Lorem ipsum dolor sit amet" },
      ] as FormField[],
      submitLabel: "Anfrage absenden",
      note: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  footer: {
    slogan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact: {
      title: "Kontakt",
      address: "Lorem Straße 12, 00000 Ipsumstadt",
      phone: "+49 0000 000000",
      email: "info@lorem-club.test",
    },
    social: [
      { label: "Instagram", href: "https://example.com" },
      { label: "Facebook", href: "https://example.com" },
      { label: "YouTube", href: "https://example.com" },
    ],
    legalLinks: [
      { label: "Impressum", href: "/ueber-uns/impressum" },
      { label: "Datenschutz", href: "/ueber-uns/datenschutz" },
    ],
    linkGroups: [
      { title: "Verein", links: [{ label: "Start", href: "/" }, { label: "Über uns", href: "/ueber-uns" }, { label: "Partner werden", href: "/partner-werden" }] },
      { title: "Sport", links: [{ label: "Fußball", href: "/fussball" }, { label: "Breitensport", href: "/breitensport" }, { label: "Westerwaldkirmes", href: "/westerwaldkirmes" }] },
    ],
    copyright: "Lorem ipsum club. Alle Rechte vorbehalten.",
  },
  images: {
    backgroundTop: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1600&q=80",
    backgroundBottom: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80",
  },
};

export type SiteContent = typeof siteContent;
