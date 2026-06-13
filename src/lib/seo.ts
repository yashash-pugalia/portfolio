import type { WorkItem } from "$lib/resume-work-content";

export const SITE_URL = "https://yashash.com";

export const OG_IMAGE_URL = `${SITE_URL}/og-image.webp`;

export const DEFAULT_TITLE =
  "Yashash Pugalia — Software Engineer | Frontend, TypeScript, Svelte | 20M+ Visits";

export const DEFAULT_DESCRIPTION =
  "Software engineer specializing in frontend (TypeScript, Svelte) with React and full-stack experience. Built and scaled systems at a Series A B2B AI startup used by Fortune 500 companies. Built open-source projects with 20M+ visits.";

export const ERROR_PAGE_META = {
  title: "Page not found · Yashash Pugalia",
  description: "The page you're looking for doesn't exist.",
} as const;

export const PAGE_META = {
  work: {
    title: "Work · Yashash Pugalia",
    description:
      "Professional experience and personal projects — founding frontend engineer at Haast, Windows 11 Web (20M+ visits), Realm Labs, and more.",
  },
  highlights: {
    title: "Highlights · Yashash Pugalia",
    description:
      "Career highlights, press, awards, and photos — Hacker News #1, JSNation open-source awards, Vercel sponsorship, and Fortune 500 enterprise work.",
  },
  testimonials: {
    title: "Testimonials · Yashash Pugalia",
    description:
      "Endorsements from peers, founders, and industry leaders on Yashash Pugalia's engineering work and open-source projects.",
  },
} as const;

export function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function metaDescription(text: string, maxLength = 160): string {
  const plain = stripMarkdown(text);
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength - 1).trimEnd()}…`;
}

export function workPageTitle(workTitle: string): string {
  return `${workTitle} · Work · Yashash Pugalia`;
}

export function getPageMeta(
  routeId: string | null,
  data: { work?: WorkItem },
  status = 200,
): { title: string; description: string } | null {
  if (status >= 400) {
    return ERROR_PAGE_META;
  }

  if (!routeId) return null;

  if (routeId === "/") {
    return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };
  }

  if (routeId === "/work/[slug]" && data.work) {
    return {
      title: workPageTitle(data.work.title),
      description: metaDescription(data.work.summary),
    };
  }

  const staticMeta = PAGE_META[routeId.slice(1) as keyof typeof PAGE_META];
  return staticMeta ?? null;
}

export const PROJECT_SCHEMA_IDS = new Set([
  "windows11-web",
  "prosper-mint",
  "haast",
  "realm-labs",
]);

export function personJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yashash Pugalia",
    url: SITE_URL,
    image: `${SITE_URL}/me.webp`,
    sameAs: [
      "https://github.com/yashash-pugalia",
      "https://twitter.com/yashash_pugalia",
      "https://www.linkedin.com/in/yashash-pugalia",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Haast",
      url: "https://www.haast.io/",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bennett University",
    },
    knowsAbout: [
      "Software Development",
      "Svelte",
      "TypeScript",
      "JavaScript",
      "React",
      "Web Development",
      "AI",
      "User Interface Design",
    ],
    description: DEFAULT_DESCRIPTION,
  });
}

export function websiteJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yashash Pugalia Portfolio",
    url: `${SITE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    author: {
      "@type": "Person",
      name: "Yashash Pugalia",
      url: SITE_URL,
    },
  });
}

export function breadcrumbListJsonLd(
  items: { name: string; url: string }[],
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function softwareApplicationJsonLd(work: {
  title: string;
  summary: string;
  live?: string;
  github?: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: work.title,
    description: metaDescription(work.summary, 300),
    ...(work.live ? { url: work.live } : {}),
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: "Yashash Pugalia",
      url: SITE_URL,
    },
    ...(work.github ? { codeRepository: work.github } : {}),
  });
}
