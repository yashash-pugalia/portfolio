export type HighlightEmbedItem =
  | {
      kind: "image";
      key: string;
      src: string;
      alt: string;
      caption: string;
      date: string;
      xLink?: string;
      linkedinLink?: string;
      ytLink?: string;
      hnLink?: string;
    }
  | {
      kind: "imageGroup";
      key: string;
      caption: string;
      date: string;
      xLink?: string;
      linkedinLink?: string;
      ytLink?: string;
      hnLink?: string;
      images: {
        src: string;
        alt: string;
      }[];
    };

export function formatHighlightDate(isoDate: string): string {
  const [year, month] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const embedsWindows11Web: HighlightEmbedItem[] = [
  {
    kind: "image",
    key: "1663566935085424642",
    src: "/highlights/win11-web-jsnation-award.webp",
    alt: "🤯 github.com/yashash-pugali... has been nominated for JavaScript Open Source Awards! @thejsnation Category: Fun Side Project of the Year. Thanks Everyone. osawards.com/javascript/",
    caption: "Windows 11 Web: JSNation Open Source Awards",
    xLink: "https://x.com/yashash_pugalia/status/1663566935085424642",
    ytLink: "https://youtu.be/V3FzeG3OneI",
    date: "2023-05-30",
  },
  {
    kind: "image",
    key: "1657097805733715987",
    src: "/highlights/win11-web-rich-harris.webp",
    alt: "i love the 'build a pretend OS in svelte' trend that @puruvjdev started — kudos @yashash_pugalia: win11-svelte.vercel.app always get nervous seeing svelte at the top of hacker news but i guess i shouldn't have been",
    caption: "Windows 11 Web: Rich Harris, Creator of Svelte",
    xLink: "https://x.com/Rich_Harris/status/1657097805733715987",
    date: "2023-05-13",
  },
  {
    kind: "image",
    key: "1656644824190308352",
    src: "/highlights/win11-web-eric-simons.webp",
    alt: "Great work on this @yashash_pugalia! One idea I had- you could even power the file system and standalone terminal app using the webcontainers.io api 👀",
    caption: "Windows 11 Web: Eric Simons, CEO Bolt.new",
    xLink: "https://x.com/EricSimons/status/1656644824190308352",
    date: "2023-05-11",
  },
  {
    kind: "image",
    key: "1656500100775157760",
    src: "/highlights/win11-web-svelte-society-hn.webp",
    alt: "svelte on HN again! Screenshot shows Windows 11 in Svelte at #1 on Hacker News.",
    caption: "Windows 11 Web: Svelte Society, Hacker News #1",
    xLink: "https://x.com/SvelteSociety/status/1656500100775157760",
    hnLink: "https://news.ycombinator.com/item?id=35896505",
    date: "2023-05-11",
  },
  {
    kind: "image",
    key: "1656493176088150017",
    src: "/highlights/win11-web-guillermo-rauch.webp",
    alt: "Well played win11-svelte.vercel.app Also: modern web browsers are engineering marvels",
    caption: "Windows 11 Web: Guillermo Rauch, CEO Vercel",
    xLink: "https://x.com/rauchg/status/1656493176088150017",
    date: "2023-05-11",
  },
];

export const embedsHaast: HighlightEmbedItem[] = [
  {
    kind: "image",
    key: "2042317998997061722",
    src: "/highlights/haast-series-a.webp",
    alt: "Haast $12M Series A. Investors: Peak XV Partners, Airtree, Aura Ventures, defy, Black Sheep Capital.",
    caption: "Haast: Series A, Peak XV ($12M)",
    date: "2026-04-10",
    xLink: "https://x.com/yashash_pugalia/status/2042317998997061722",
    linkedinLink:
      "https://www.linkedin.com/posts/yashash-pugalia_the-big-news-is-finally-out-haast-has-raised-share-7448109936422727680-8qWx",
  },
  {
    kind: "image",
    key: "haast-engineer-award",
    src: "/highlights/haast-engineer-award.webp",
    alt: "Haast engineer award",
    caption: "Haast: Longest-serving Engineer Award",
    date: "2026-03-06",
    xLink: "https://x.com/yashash_pugalia/status/2029779608200188281?s=20",
  },
  {
    kind: "image",
    key: "haast-xmas-party",
    src: "/highlights/haast-xmas-party.webp",
    alt: "Haast Christmas party",
    caption: "Haast: Christmas Party 🎄",
    date: "2025-12-03",
    linkedinLink:
      "https://www.linkedin.com/posts/were-officially-in-festive-mode-at-haast-ugcPost-7402502643920785409-ELPf/",
  },
  {
    kind: "image",
    key: "7325814092743561216",
    src: "/highlights/haast-seed-airtree.webp",
    alt: "I'm thrilled that the big news is finally out: Haast has raised a $6M seed round from Airtree, defy.vc, Aura Ventures, and Black Sheep Capital! Having been at Haast for 2 years, it's been an incredible journey building this platform from the ground up.",
    caption: "Haast: Seed, Airtree (A$6M)",
    linkedinLink:
      "https://www.linkedin.com/posts/yashash-pugalia_seedround-startup-ai-share-7325814092743561216-YV8Q",
    date: "2025-05-07",
  },
  {
    kind: "image",
    key: "7101717182698459136",
    src: "/highlights/haast-pre-seed-aura.webp",
    alt: "Excited to announce Haast have raised $1.2m pre-seed round and continue building Haast. Thanks to our amazing team including Yashash Pugalia. Investors: Aura Ventures, Black Sheep Capital.",
    caption: "Haast: Pre-Seed, Aura Ventures (A$1.2M)",
    linkedinLink:
      "https://www.linkedin.com/posts/liamking97_ai-start-ups-score-245m-funding-windfall-activity-7101717182698459136-KD0C",
    date: "2023-08-28",
  },
];

export const embedsGeneral: HighlightEmbedItem[] = [
  {
    kind: "imageGroup",
    key: "yc-apr-2026-group",
    caption:
      "Y Combinator: Dinner with Jared Friedman, Jon Xu, Arnav Sahu, Puneet Kumar",
    date: "2026-04-17",
    xLink: "https://x.com/yashash_pugalia/status/2047301953739510270",
    linkedinLink:
      "https://www.linkedin.com/posts/yashash-pugalia_had-a-great-time-at-a-smally-combinator-ugcPost-7453177830638551040-5rH5",
    images: [
      {
        src: "/highlights/yc-startup-school.webp",
        alt: "YC Startup School",
      },
      {
        src: "/highlights/yc-dinner-jon-xu.webp",
        alt: "YC dinner with Jon Xu and Jared Friedman",
      },
      {
        src: "/highlights/yc-dinner.webp",
        alt: "YC dinner",
      },
    ],
  },
];

export const highlightPageEmbeds: HighlightEmbedItem[] = [
  ...embedsGeneral,
  ...embedsHaast,
  ...embedsWindows11Web,
];

export function getEmbedsForWorkId(id: string): HighlightEmbedItem[] {
  switch (id) {
    case "haast":
      return [...embedsHaast];
    case "windows11-web":
      return [...embedsWindows11Web];
    default:
      return [];
  }
}

export function estimateEmbedHeight(item: HighlightEmbedItem): number {
  if (item.kind === "imageGroup") return 500;
  return 430;
}

export function distributeEmbedColumns(
  items: HighlightEmbedItem[],
  n: number,
): HighlightEmbedItem[][] {
  const cols: HighlightEmbedItem[][] = Array.from({ length: n }, () => []);
  const heights = new Array<number>(n).fill(0);
  for (const item of items) {
    let best = 0;
    for (let j = 1; j < n; j++) {
      if (heights[j] < heights[best]) best = j;
    }
    cols[best].push(item);
    heights[best] += estimateEmbedHeight(item);
  }
  return cols;
}
