/**
 * Central, typed content and destination data for the Echoid website.
 *
 * Approved home/About copy, destinations, and compact link descriptors.
 */
export interface EchoidSiteData {
  identity: {
    name: string;
    language: "tr";
  };
  publicUrls: {
    youtube: string;
    x: string;
    projects: string;
  };
  contact: {
    email: string;
    keywords: string;
  };
  /** Approved home copy plus its display line break and emphasized word. */
  home: {
    kicker: string;
    tagline: string;
    taglineLineBreakAfter: string;
    taglineEmphasis: string;
    description: string;
  };
  /** User-approved About copy. */
  about: {
    title: string;
    paragraphs: readonly [string];
    footer: string;
  };
  /** Exactly one entry is required for each external destination. */
  links: readonly [YouTubeLink, ProjectsLink, XLink];
}

interface YouTubeLink {
  id: "youtube";
  label: "YouTube";
  accessibleName: "Echoid'in YouTube kanalı";
  keywords: "teknoloji · yapay zekâ · merak";
  href: string;
}

interface ProjectsLink {
  id: "projects";
  label: "Projeler";
  accessibleName: "Echoid'in GitHub projeleri";
  keywords: "deneyler · araçlar · üretim";
  href: string;
}

interface XLink {
  id: "x";
  label: "X";
  accessibleName: "Echoid'in X profili";
  keywords: "notlar · keşifler · gündem";
  href: string;
}

const publicUrls = {
  youtube: "https://www.youtube.com/@Echoid00",
  x: "https://x.com/Echoid00",
  projects: "https://github.com/RootKiddo13",
} as const;

export const siteData = {
  identity: {
    name: "Echoid",
    language: "tr",
  },
  publicUrls,
  contact: {
    // Keep this as plain email data; do not infer mailto behavior here.
    email: "rootkiddo00@gmail.com",
    keywords: "soru · öneri · iş birliği",
  },
  home: {
    kicker: "TEKNOLOJİYE MERAKLI MISIN?",
    tagline: "Teknolojiye başka bir açıdan bak.",
    taglineLineBreakAfter: "başka",
    taglineEmphasis: "açıdan",
    description:
      "Yapay zekâdan yazılıma, aklımıza takılan konuları beraber araştırıyoruz. Öğrendiklerimizi de seninle paylaşıyoruz.",
  },
  about: {
    title: "Echoid hakkında",
    paragraphs: [
      "Echoid’de teknolojiye şöyle bir bakıp geçmiyoruz; nasıl çalıştığını da merak edip kurcalıyoruz. Yapay zekâdan yazılıma, aklımıza takılan konuları beraber araştırıyor, öğrendiklerimizi de sade ve keyifli bir dille seninle paylaşıyoruz. Aklına takılan bir şey varsa, gel beraber keşfedelim.",
    ],
    footer: "MERAK ETMEYE DEVAM.",
  },
  links: [
    {
      id: "youtube",
      label: "YouTube",
      accessibleName: "Echoid'in YouTube kanalı",
      keywords: "teknoloji · yapay zekâ · merak",
      href: publicUrls.youtube,
    },
    {
      id: "projects",
      label: "Projeler",
      accessibleName: "Echoid'in GitHub projeleri",
      keywords: "deneyler · araçlar · üretim",
      href: publicUrls.projects,
    },
    {
      id: "x",
      label: "X",
      accessibleName: "Echoid'in X profili",
      keywords: "notlar · keşifler · gündem",
      href: publicUrls.x,
    },
  ],
} satisfies EchoidSiteData;
