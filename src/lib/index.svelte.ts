// place files you want to import through the `$lib` alias in this folder.


export const socials = [
  {
    name: "GitHub",
    icon: "lucide:github",
    link: "https://github.com/yashash-pugalia",
  },
  {
    name: "LinkedIn",
    icon: "lucide:linkedin",
    link: "https://www.linkedin.com/in/yashash-pugalia",
  },
  {
    name: "X (Twitter)",
    icon: "lucide:twitter",
    link: "https://x.com/yashash_pugalia",
  },
  // {
  // name: "Instagram",
  // icon: "lucide:instagram",
  // link: "https://www.instagram.com/yashash_pugalia/",
  // },
  {
    name: "Discord",
    icon: "ic:outline-discord",
    link: "https://discord.com/users/759823534100316200",
  },
  {
    name: "Email",
    icon: "lucide:mail",
    link: "mailto:yashash1511@gmail.com",
  },
  {
    name: "YouTube",
    icon: "lucide:youtube",
    link: "https://www.youtube.com/@yashashpugalia",
  },
];


export const about =
  "Software Engineer specializing in frontend (TypeScript, Svelte) with React and full-stack experience. Owned frontend systems at a high-growth startup from pre-seed to Series A, building a B2B AI-native SaaS platform now used by Fortune 500 companies. Product-focused, built open-source projects reaching 20M+ visits.";

export const technologies = [
  {
    section: "Frontend",
    stack: [
      "JavaScript/TypeScript",
      "Svelte/Kit",
      "React",
      "Tailwind",
      "shadcn/ui",
      "Vite",
      "Chart.js",
      // "LayerChart",
      "PSPDFKit",
      "Adobe PDF Embed API",
    ],
  },
  {
    section: "Backend / Database",
    stack: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Prisma",
      "Drizzle ORM",
      "SQLAlchemy",
    ],
  },
  {
    section: "Platform / Tooling",
    stack: [
      "GitHub Actions",
      "GCP",
      "Stripe",
      "Auth.js",
      "LangChain",
      "ESLint",
      "Vitest",
      "Storybook",
    ],
  },
];

export const work = [
  {
    company: "Haast",
    link: "https://www.haast.io/",
    date: "2023 - Present",
    location: "Sydney, Australia - Remote",
    desc: `Joined as the [founding frontend engineer](https://www.linkedin.com/posts/liamking97_ai-start-ups-score-245m-funding-windfall-activity-7101717182698459136-KD0C) at Pre-Seed for a B2B AI-native marketing & legal compliance platform used by enterprises. Built and owned the majority of the frontend for the core product. Scaled through [Seed (Airtree $6M)](https://www.capitalbrief.com/article/haast-raises-6-million-to-transform-compliance-with-ai-automation-24f00fee-be78-4b0b-be61-dc0019789885/) and into **Series A** during a period of rapid growth (4.5x YoY revenue growth), now used by **Fortune 500 companies**.
- Built and scaled core product systems (workflows, reviews, asset management, rule pipelines) and document workflows (PDF comparison, annotations, commenting) used in enterprise compliance workflows, contributing to 80% reduction in manual review effort and 2-3x faster time-to-market
- Led frontend foundation: migrated and optimized build system from Rollup → Vite reducing local dev build times from 30s to 500ms (50x faster, instant HMR), and upgraded Svelte v3 → v4 (+ contributions toward v5) and introduced Tailwind + DaisyUI
- Delivered audit-ready review and collaboration UX (annotations, commenting, workflow states) providing complete audit trails and a single source of truth for regulated enterprise approvals
- Stabilized complex state-heavy workflows and resolved production reactivity issues, improving reliability and scalability of critical user flows
- Established engineering standards (TypeScript, linting, CI, pre-commit) and contributed to in-house design system and frontend scalability across the product
`,
  },
  {
    company: "Realm Labs",
    date: "2022 - 2023",
    location: "New York, United States - Remote",
    desc: `Joined as an early full-stack engineer and built a 0→1 AI comic creation platform, owning end-to-end development and working closely with the [founder](/testimonials?highlight=will-yoo) to ship the MVP from concept to production.
- Developed key features including authentication, a custom drag-and-drop editor, AI scene and character generation, character chat, and creator monetization flows (payments + payouts via Stripe)
- Integrated LLM and image generation workflows (LangChain, GPT-3.5, fine-tuned Stable Diffusion) to enable AI-driven content creation
- Built full-stack architecture using SvelteKit, TypeScript, MongoDB + Prisma, and GCP for media storage, evolving backend from Firebase to a more scalable setup
`,
  },
];

export let projects = $state([
  {
    title: "Windows 11 Web",
    link: "https://win11.yashash.dev/",
    date: "2021 - 2022",
    previewImage: "https://win11.yashash.dev/demo.webp",
    desc: `Built browser-based Windows 11 replicas ([win11-svelte](https://win11.yashash.dev), [win11-react](https://win11.blueedge.me)) reaching **20M+ visits** and earning [11.1K GitHub Stars](https://github.com/yashash-pugalia), sponsored by Vercel.
- [Hacker News](https://news.ycombinator.com/item?id=35896505), #1 on News Y Combinator [(archive)](https://web.archive.org/web/20230511060851/https://news.ycombinator.com/)
- [JSNation open-source Awards](https://youtu.be/V3FzeG3OneI), nominated for 'Fun Side Project of the Year'
- Endorsed by [Guillermo Rauch](https://x.com/rauchg/status/1656493176088150017) (CEO Vercel), [Eric Simons](https://x.com/ericsimons40/status/1656644824190308352) (CEO Bolt.new), [Rich Harris](https://x.com/Rich_Harris/status/1657097805733715987) (Creator Svelte) and [JavaScript Weekly](https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This)
`,
  },
]);

export const testimonials = [
  {
    name: "Julie Zhuo",
    role: "Co-Founder Sundial | ex-VP Design Facebook",
    quote:
      "Love your work! Especially your dedication to building with craft and creative exploration.",
    linkPerson: "https://www.linkedin.com/in/julie-zhuo/",
  },
  {
    name: "Guillermo Rauch",
    role: "CEO Vercel | Creator Next.js",
    quote:
      "Well played https://win11-svelte.vercel.app <br> Also: modern web browsers are engineering marvels",
    link: "https://x.com/rauchg/status/1656493176088150017",
  },
  {
    name: "Eric Simons",
    role: "CEO Bolt.new",
    quote:
      "Great work on this @yashash_pugalia!, <br> One idea I had - you could even power the file system and standalone terminal app using the http://webcontainers.io api 👀",
    link: "https://x.com/ericsimons40/status/1656644824190308352",
  },
  {
    name: "Rich Harris",
    role: "Creator Svelte",
    quote:
      "i love the 'build a pretend OS in svelte' trend — kudos  @yashash_pugalia",
    link: "https://x.com/Rich_Harris/status/1657097805733715987",
  },
  {
    name: "Will Yoo",
    quote:
      "I want to say you're one of the most talented young engineers I've met, you make some engineers and even founders I've worked with look like amateurs. I highly encourage you to take risks, and do big things with your life. I'm always here to support you. Let's win together.",
    role: "Co-Founder Unto Labs, Thru",
    linkPerson: "https://www.linkedin.com/in/bywillyoo/",
  },
  // {
  //   name: "David Peng",
  //   role: "Senior Software Engineer @Haast",
  //   quote: "You're a one man frontend team 🫡",
  //   linkPerson: "https://www.linkedin.com/in/david-peng-502747137/",
  // },
];

export const education = [
  {
    degree: "Bachelor of Technology - B.Tech, Computer Science Engineering",
    school: "Bennett University",
  },
];

