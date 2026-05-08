export type HighlightEmbedItem =
  | {
      kind: "x";
      key: string;
      id: string;
      href: string;
      xLink?: string;
      linkedinLink?: string;
      publishedAt: string;
    }
  | {
      kind: "linkedin";
      key: string;
      urn: string;
      href: string;
      xLink?: string;
      linkedinLink?: string;
      publishedAt: string;
    }
  | {
      kind: "image";
      key: string;
      src: string;
      alt: string;
      caption: string;
      dateLabel?: string;
      xLink?: string;
      linkedinLink?: string;
      publishedAt: string;
    }
  | {
      kind: "imageGroup";
      key: string;
      caption: string;
      dateLabel?: string;
      xLink?: string;
      linkedinLink?: string;
      publishedAt: string;
      images: {
        src: string;
        alt: string;
      }[];
    };

export const embedsWindows11Web: HighlightEmbedItem[] = [
  // {
  //   kind: "x",
  //   key: "1666673933150740480",
  //   id: "1666673933150740480",
  //   href: "https://x.com/yashash_pugalia/status/1666673933150740480",
  //   publishedAt: "2023-06-08T05:10:05.624Z",
  // },
  {
    kind: "x",
    key: "1663581820477120512",
    id: "1663581820477120512",
    href: "https://x.com/yashash_pugalia/status/1663581820477120512",
    publishedAt: "2023-05-30T16:23:08.514Z",
  },
  {
    kind: "x",
    key: "1657097805733715987",
    id: "1657097805733715987",
    href: "https://x.com/Rich_Harris/status/1657097805733715987",
    publishedAt: "2023-05-12T18:57:58.932Z",
  },
  {
    kind: "x",
    key: "1656644824190308352",
    id: "1656644824190308352",
    href: "https://x.com/EricSimons/status/1656644824190308352",
    publishedAt: "2023-05-11T12:57:59.716Z",
  },
  {
    kind: "x",
    key: "1656500100775157760",
    id: "1656500100775157760",
    href: "https://x.com/SvelteSociety/status/1656500100775157760",
    publishedAt: "2023-05-11T03:22:54.965Z",
  },
  {
    kind: "x",
    key: "1656493176088150017",
    id: "1656493176088150017",
    href: "https://x.com/rauchg/status/1656493176088150017",
    publishedAt: "2023-05-11T02:55:23.991Z",
  },
];

export const embedsHaast: HighlightEmbedItem[] = [
  {
    kind: "x",
    key: "2042317998997061722",
    id: "2042317998997061722",
    href: "https://x.com/yashash_pugalia/status/2042317998997061722",
    linkedinLink:
      "https://www.linkedin.com/posts/yashash-pugalia_the-big-news-is-finally-out-haast-has-raised-activity-7448119710304374784-h43q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD315asBwZb0UsVW7y586I1DcHLL0aXjFQk",
    publishedAt: "2026-04-09T19:05:30.051Z",
  },
  {
    kind: "image",
    key: "haast-engineer-award",
    src: "/highlights/haast engineer award.webp",
    alt: "Haast engineer award",
    caption: "Haast Longest-serving Engineer Award",
    dateLabel: "6 March 2026",
    xLink: "https://x.com/yashash_pugalia/status/2029779608200188281?s=20",
    publishedAt: "2026-03-06T12:00:00.000Z",
  },
  {
    kind: "image",
    key: "haast-xmas-party",
    src: "/highlights/haast xmas party.webp",
    alt: "Haast Christmas party",
    caption: "Haast the Halls: Christmas Party 🎄",
    dateLabel: "3 Dec 2025",
    linkedinLink:
      "https://www.linkedin.com/posts/were-officially-in-festive-mode-at-haast-ugcPost-7402502643920785409-ELPf/",
    publishedAt: "2025-12-03T12:00:00.000Z",
  },
  {
    kind: "linkedin",
    key: "7325814092743561216",
    urn: "urn:li:share:7325814092743561216",
    href: "https://www.linkedin.com/posts/yashash-pugalia_seedround-startup-ai-share-7325814092743561216-YV8Q",
    publishedAt: "2025-05-07T12:00:00.000Z",
  },
  {
    kind: "linkedin",
    key: "7101717182698459136",
    urn: "urn:li:activity:7101717182698459136",
    href: "https://www.linkedin.com/posts/liamking97_ai-start-ups-score-245m-funding-windfall-activity-7101717182698459136-KD0C",
    publishedAt: "2023-05-09T12:00:00.000Z",
  },
];

export const embedsGeneral: HighlightEmbedItem[] = [
  // {
  //   kind: "imageGroup",
  //   key: "yc-apr-2026-group",
  //   caption: "Dinner with YC partners Jon Xu & Jared Friedman",
  //   dateLabel: "17-18 Apr 2026",
  //   xLink: "https://x.com/yashash_pugalia/status/2047301953739510270?s=20",
  //   linkedinLink:
  //     "https://www.linkedin.com/posts/yashash-pugalia_had-a-great-time-at-a-smally-combinator-activity-7453177831636832256-iGYo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD315asBwZb0UsVW7y586I1DcHLL0aXjFQk",
  //   publishedAt: "2026-04-18T12:00:00.000Z",
  //   images: [
  //     {
  //       src: "/highlights/yc startup school 2.webp",
  //       alt: "YC Startup School",
  //     },
  //     {
  //       src: "/highlights/yc dinner with jon xu.webp",
  //       alt: "YC dinner with Jon Xu & Jared Friedman",
  //     },
  //     {
  //       src: "/highlights/yc dinner.webp",
  //       alt: "YC dinner",
  //     },
  //   ],
  // },
  {
    kind: "x",
    key: "2047301953739510270",
    id: "2047301953739510270",
    href: "https://x.com/yashash_pugalia/status/2047301953739510270",
    publishedAt: "2026-04-23T13:09:57.459Z",
  },
  // {
  //   kind: "linkedin",
  //   key: "7453177830638551040",
  //   urn: "urn:li:ugcPost:7453177830638551040",
  //   href: "https://www.linkedin.com/posts/yashash-pugalia_had-a-great-time-at-a-smally-combinator-ugcPost-7453177830638551040-5rH5/",
  //   publishedAt: "2026-03-20T06:30:00.000Z",
  // },
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
  if (item.kind === "x") return 360;
  if (item.kind === "image") return 430;
  if (item.kind === "imageGroup") return 500;
  return 720;
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
