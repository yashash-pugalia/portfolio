import { socials, testimonials } from "$lib/index.svelte";
import { experience, projects, type WorkItem } from "$lib/resume-work-content";

export const SITE_URL = "https://yashashpugalia.com";

const SITE_SUMMARY =
  "Software engineer specializing in frontend (TypeScript, Svelte) with React and full-stack experience. Built and scaled systems at a Series A B2B AI startup used by Fortune 500 companies. Built open-source projects with 20M+ visits.";

function collapseWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function stripHtml(text: string): string {
  return text.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "");
}

function workLink(item: WorkItem): string {
  const meta = [item.years, item.location].filter(Boolean).join(", ");
  const note = collapseWhitespace(
    meta ? `${meta}. ${item.summary}` : item.summary,
  );
  return `- [${item.title}](${SITE_URL}/work/${item.id}): ${note}`;
}

function workDetailBlock(item: WorkItem): string[] {
  const meta = [item.years, item.location].filter(Boolean).join(" · ");
  const lines = [
    `**${item.title}**${meta ? ` (${meta})` : ""}`,
    "",
    item.summary.trim(),
  ];

  if (item.details.trim()) {
    lines.push("", item.details.trim());
  }

  if (item.live) {
    lines.push("", `Live: ${item.live}`);
  }

  if (item.github) {
    lines.push(`GitHub: ${item.github}`);
  }

  return lines;
}

function testimonialLink(t: (typeof testimonials)[number]): string {
  const url = t.link ?? t.linkPerson;
  const quote = collapseWhitespace(stripHtml(t.quote));
  const label = `${t.name} — ${t.role}`;
  return `- [${label}](${url}): "${quote}"`;
}

export function generateLlmsTxt(): string {
  const optionalWorkDetails = [...experience, ...projects].flatMap(
    (item, index) => [
      ...(index > 0 ? ["", "---", ""] : []),
      ...workDetailBlock(item),
    ],
  );

  const lines = [
    "# Yashash Pugalia",
    "",
    `> ${SITE_SUMMARY}`,
    "",
    "Portfolio for Yashash Pugalia — founding frontend engineer at Haast, creator of Windows 11 Web (20M+ visits, #1 on Hacker News). Originally from Kolkata, India; based in New Delhi. Focused on product experiences at the intersection of AI and the web.",
    "",
    "## Pages",
    "",
    `- [About](${SITE_URL}/): Background, bio, and career overview`,
    `- [Work](${SITE_URL}/work): Professional experience and personal projects`,
    `- [Highlights](${SITE_URL}/highlights): Career highlights and photos`,
    `- [Testimonials](${SITE_URL}/testimonials): Endorsements from peers and industry leaders`,
    "",
    "## Experience",
    "",
    ...experience.map(workLink),
    "",
    "## Projects",
    "",
    ...projects.map(workLink),
    "",
    "## Contact",
    "",
    ...socials.map((s) => `- [${s.name}](${s.link})`),
    "",
    "## Optional",
    "",
    "Detailed work and project write-ups. Skip if a shorter overview is enough.",
    "",
    ...optionalWorkDetails,
    "",
    "---",
    "",
    `- [Testimonials](${SITE_URL}/testimonials): Full endorsements page`,
    ...testimonials.map(testimonialLink),
    "",
    `- [Resume (PDF)](https://drive.google.com/file/d/1rEI0fqz-LcTZS0YQD2azX91sZFjTpPKs/view?usp=sharing): Full resume download`,
    `- [Sitemap](${SITE_URL}/sitemap.xml): All indexed pages`,
  ];

  return `${lines.join("\n")}\n`;
}
