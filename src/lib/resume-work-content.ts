/**
 * Résumé copy from `src/main.tex` (Experience, Projects) as structured data.
 * `slug` is the URL segment under `/work/` (e.g. `/work/haast`).
 */

export type ExperienceItem = {
  id: string;
  slug: string;
  /** Full detail body (markdown). */
  desc: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  href?: string;
};

export type ProjectItem = {
  id: string;
  slug: string;
  live: string;
  github: string;
  /** Time range; kept for résumé source of truth, not shown in the UI. */
  years?: string;
  title?: string;
  /** Plain-text blurb for `/work` index cards (Live/GitHub stay on detail pages). */
  summary: string;
  desc: string;
  image?: ProjectImage;
};

export const experience: ExperienceItem[] = [
  {
    id: "haast",
    slug: "haast",
    desc: `**[Haast](https://www.haast.io)** · Software Engineer · 2023 - Present — Sydney, Australia - Remote

- Joined as the [founding frontend engineer](https://www.linkedin.com/posts/liamking97_ai-start-ups-score-245m-funding-windfall-activity-7101717182698459136-KD0C) at Pre-Seed for a B2B AI-native marketing & legal compliance platform used by enterprises. Built and owned the majority of the frontend for the core product. Scaled through [Seed (Airtree $6M)](https://www.capitalbrief.com/article/haast-raises-6-million-to-transform-compliance-with-ai-automation-24f00fee-be78-4b0b-be61-dc0019789885/) and into [Series A (Peak XV $12M)](https://www.axios.com/pro/enterprise-software-deals/2026/04/09/enterprise-compliance-haast-12-m) during rapid growth (4.5x YoY revenue), now used by **Fortune 500** companies
- Built and scaled core product systems (workflows, reviews, asset management, rule pipelines) and document workflows (PDF comparison, annotations, commenting), contributing to **80% reduction** in manual review effort and 2–3x faster time-to-market
- Led frontend foundation: migrated and optimized build system from Rollup → Vite, reducing local dev build times from 30s to 500ms (50x faster, instant HMR); upgraded Svelte v3 → v4 (+ contributions toward v5); and introduced Tailwind + DaisyUI
- Delivered audit-ready review and collaboration UX (annotations, commenting, workflow states) providing complete audit trails and a single source of truth for regulated enterprise approvals
- Stabilized complex state-heavy workflows and resolved production reactivity issues, improving reliability and scalability of critical user flows
- Established engineering standards (TypeScript, linting, CI, pre-commit) and contributed to in-house design system and frontend scalability across the product`,
  },
  {
    id: "realm",
    slug: "realm-labs",
    desc: `**Realm Labs** · Software Engineer · 2022 - 2023 — New York, United States - Remote

- Joined as an early full-stack engineer and built a 0→1 AI comic creation platform, owning end-to-end development and working closely with the [founder](https://yashashpugalia.com/testimonials?highlight=will-yoo) to ship the MVP from concept to production
- Developed key features including authentication, a custom drag-and-drop editor, AI scene and character generation, character chat, and creator monetization flows **(payments + payouts via Stripe)**
- Integrated LLM and image generation workflows (LangChain, GPT-3.5, fine-tuned Stable Diffusion) to enable AI-driven content creation
- Built full-stack architecture using SvelteKit, TypeScript, MongoDB + Prisma, and GCP, evolving backend from Firebase to a more scalable setup`,
  },
];

export const projects: ProjectItem[] = [
  {
    id: "win11",
    slug: "windows11-web",
    live: "https://win11.yashashpugalia.com/",
    github: "https://github.com/yashash-pugalia/win11-svelte",
    years: "2021 - 2022",
    title: `[**Windows 11 Web**](https://win11.yashashpugalia.com/)`,
    summary:
      "Browser-based Windows 11 desktop replicas in Svelte and React—20M+ visits, #1 on Hacker News, Vercel-sponsored, and widely picked up by the JavaScript community.",
    image: {
      src: "https://win11.yashashpugalia.com/demo.webp",
      alt: "Windows 11 Web: desktop with Settings open on Personalisation",
      href: "https://win11.yashashpugalia.com/",
    },
    desc: `- Built browser-based Windows 11 replicas [win11-svelte](https://win11.yashashpugalia.com/) and [win11-react](https://win11.blueedge.me), reaching **20M+ visits** and earning [11K GitHub stars](https://github.com/yashash-pugalia), sponsored by Vercel
- [Hacker News](https://news.ycombinator.com/item?id=35896505) (#1 on News Y Combinator) ([archive](https://web.archive.org/web/20230511060851/https://news.ycombinator.com/))
- [JSNation open-source Awards](https://youtu.be/V3FzeG3OneI), nominated for 'Fun Side Project of the Year'
- Endorsed by [Guillermo Rauch](https://x.com/rauchg/status/1656493176088150017) (CEO Vercel), [Eric Simons](https://x.com/EricSimons/status/1656644824190308352) (CEO Bolt.new), [Rich Harris](https://x.com/Rich_Harris/status/1657097805733715987) (Creator Svelte) and [JavaScript Weekly](https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This)`,
  },
  {
    id: "prosper-mint",
    slug: "prosper-mint",
    live: "https://prosper-mint.yashash.dev",
    github: "https://github.com/yashash-pugalia/prosper-mint",
    title: `**Prosper Mint**`,
    summary:
      "Full-stack SvelteKit MVP for personal finance: connect accounts and surface a clear view of spending, balances, and where your money goes.",
    desc: `MVP full-stack SvelteKit app. Get a clear picture of your finances.`,
  },
];

export type WorkEntry =
  | { kind: "experience"; item: ExperienceItem }
  | { kind: "project"; item: ProjectItem };

const bySlug = new Map<string, WorkEntry>();
for (const item of experience) {
  bySlug.set(item.slug, { kind: "experience", item });
}
for (const item of projects) {
  bySlug.set(item.slug, { kind: "project", item });
}

export function getWorkBySlug(slug: string): WorkEntry | undefined {
  return bySlug.get(slug);
}

/** First paragraph before `\n\n` — company · role · dates on `/work` index cards. */
export function experienceHeadline(item: ExperienceItem): string {
  const [head] = item.desc.split(/\n\n/);
  return head ?? item.desc;
}

/** First markdown bullet (without leading `- `) as the card summary under the headline. */
export function experienceSummary(item: ExperienceItem): string | undefined {
  const [, ...restBlocks] = item.desc.split(/\n\n/);
  const body = restBlocks.join("\n\n").trim();
  if (!body) return undefined;
  for (const line of body.split("\n")) {
    const m = line.match(/^\s*-\s+(.*)$/);
    if (m?.[1]?.trim()) return m[1].trim();
  }
  return undefined;
}

/** Markdown body after the headline block and first `- ` bullet (detail page below the hero). */
export function experienceDetailRestMarkdown(item: ExperienceItem): string {
  const [, ...restBlocks] = item.desc.split(/\n\n/);
  const body = restBlocks.join("\n\n").trim();
  if (!body) return "";
  const lines = body.split("\n");
  let skippedFirstBullet = false;
  const kept: string[] = [];
  for (const line of lines) {
    if (!skippedFirstBullet && /^\s*-\s+/.test(line)) {
      skippedFirstBullet = true;
      continue;
    }
    kept.push(line);
  }
  return kept.join("\n").trim();
}

function projectFirstBulletMarkdown(item: ProjectItem): string | undefined {
  for (const line of item.desc.split("\n")) {
    const m = line.match(/^\s*-\s+(.*)$/);
    if (m?.[1]?.trim()) return m[1].trim();
  }
  return undefined;
}

/** Hero subtitle markdown: first list bullet when present, else the index-card summary. */
export function projectHeroSubtitleMarkdown(item: ProjectItem): string {
  return projectFirstBulletMarkdown(item) ?? item.summary;
}

/** Project `desc` with the first `- ` line removed when present; otherwise unchanged. */
export function projectDetailRestMarkdown(item: ProjectItem): string {
  const lines = item.desc.split("\n");
  let skippedFirstBullet = false;
  const kept: string[] = [];
  for (const line of lines) {
    if (!skippedFirstBullet && /^\s*-\s+/.test(line)) {
      skippedFirstBullet = true;
      continue;
    }
    kept.push(line);
  }
  return kept.join("\n").trim();
}
