export type WorkItem = {
  id: string;
  title: string;
  summary: string;
  details: string;
  live?: string;
  github?: string;
  years?: string;
  location?: string;
};

export const experience: WorkItem[] = [
  {
    id: "haast",
    title: "Haast",
    live: "https://www.haast.io/",
    years: "2023 - Present",
    location: "Sydney, Australia - Remote",
    summary:
      "Joined as the [founding frontend engineer](https://www.linkedin.com/posts/liamking97_ai-start-ups-score-245m-funding-windfall-activity-7101717182698459136-KD0C) at Pre-Seed for a B2B AI-native marketing & legal compliance platform used by enterprises. Built and owned the majority of the frontend for the core product. Scaled through [Seed (Airtree $6M)](https://www.capitalbrief.com/article/haast-raises-6-million-to-transform-compliance-with-ai-automation-24f00fee-be78-4b0b-be61-dc0019789885/) and into [Series A (Peak XV $12M)](https://www.axios.com/pro/enterprise-software-deals/2026/04/09/enterprise-compliance-haast-12-m) during rapid growth (4.5x YoY revenue), now used by **Fortune 500** companies",
    details: `- Built and scaled core product systems (workflows, reviews, asset management, rule pipelines) and document workflows (PDF comparison, annotations, commenting), contributing to **80% reduction** in manual review effort and 2–3x faster time-to-market
- Led frontend foundation: migrated and optimized build system from Rollup → Vite, reducing local dev build times from 30s to 500ms (50x faster, instant HMR); upgraded Svelte v3 → v4 (+ contributions toward v5); and introduced Tailwind + DaisyUI
- Delivered audit-ready review and collaboration UX (annotations, commenting, workflow states) providing complete audit trails and a single source of truth for regulated enterprise approvals
- Stabilized complex state-heavy workflows and resolved production reactivity issues, improving reliability and scalability of critical user flows
- Established engineering standards (TypeScript, linting, CI, pre-commit) and contributed to in-house design system and frontend scalability across the product`,
  },
  {
    id: "realm-labs",
    title: "Realm Labs",
    years: "2022 - 2023",
    location: "New York, United States - Remote",
    summary:
      "Joined as an early full-stack engineer and built a 0→1 AI comic creation platform, owning end-to-end development and working closely with the [founder](https://yashashpugalia.com/testimonials?highlight=will-yoo) to ship the MVP from concept to production",
    details: `- Developed key features including authentication, a custom drag-and-drop editor, AI scene and character generation, character chat, and creator monetization flows **(payments + payouts via Stripe)**
- Integrated LLM and image generation workflows (LangChain, GPT-3.5, fine-tuned Stable Diffusion) to enable AI-driven content creation
- Built full-stack architecture using SvelteKit, TypeScript, MongoDB + Prisma, and GCP, evolving backend from Firebase to a more scalable setup`,
  },
];

export const projects: WorkItem[] = [
  {
    id: "windows11-web",
    title: "Windows 11 Web",
    live: "https://win11.yashashpugalia.com/",
    github: "https://github.com/yashash-pugalia/win11-svelte",
    years: "2021 - 2022",
    summary:
      "Built browser-based Windows 11 replicas [win11-svelte](https://win11.yashashpugalia.com/) and [win11-react](https://win11.blueedge.me), reaching **20M+ visits** and earning [11K GitHub stars](https://github.com/yashash-pugalia), sponsored by Vercel",
    details: `- #1 on [Hacker News](https://news.ycombinator.com/item?id=35896505) ([archive](https://web.archive.org/web/20230511060851/https://news.ycombinator.com/))
- [JSNation open-source Awards](https://youtu.be/V3FzeG3OneI), nominated for 'Fun Side Project of the Year'
- Endorsed by [Guillermo Rauch](https://x.com/rauchg/status/1656493176088150017) (CEO Vercel), [Eric Simons](https://x.com/EricSimons/status/1656644824190308352) (CEO Bolt.new), [Rich Harris](https://x.com/Rich_Harris/status/1657097805733715987) (Creator Svelte) and [JavaScript Weekly](https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This)`,
  },
  {
    id: "prosper-mint",
    title: "Prosper Mint",
    live: "https://prosper-mint.yashash.dev",
    github: "https://github.com/yashash-pugalia/prosper-mint",
    summary:
      "Full-stack SvelteKit MVP for personal finance: connect accounts and surface a clear view of spending, balances, and where your money goes.",
    details: ``,
  },
];

const byId = new Map<string, WorkItem>();
for (const item of experience) {
  byId.set(item.id, item);
}
for (const item of projects) {
  byId.set(item.id, item);
}

export function getWorkById(id: string): WorkItem | undefined {
  return byId.get(id);
}
