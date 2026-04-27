/**
 * Embedded X / LinkedIn posts for `/highlights` and matching `/work/[slug]` detail pages.
 */

export type HighlightEmbedItem =
  | {
      kind: "x";
      key: string;
      id: string;
      href: string;
      /** ISO 8601 (UTC); tweet time from numeric status ID. */
      publishedAt: string;
    }
  | {
      kind: "linkedin";
      key: string;
      urn: string;
      href: string;
      /** ISO 8601 (UTC); set manually — LinkedIn does not expose a stable ID-derived time here. */
      publishedAt: string;
    };

const TWITTER_SNOWFLAKE_EPOCH_MS = 1288834974657;

/** Publication time encoded in X / Twitter numeric `status` ids. */
export function isoFromTweetSnowflake(statusId: string): string {
  const ms = Number((BigInt(statusId) >> 22n) + BigInt(TWITTER_SNOWFLAKE_EPOCH_MS));
  return new Date(ms).toISOString();
}

function sortByPublishedAtDesc(
  items: HighlightEmbedItem[],
): HighlightEmbedItem[] {
  return [...items].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}

/** Endorsements around Windows 11 in Svelte + same-era threads (sorted newest first). */
export const embedsWindows11Web = sortByPublishedAtDesc([
  {
    kind: "x",
    key: "1666673933150740480",
    id: "1666673933150740480",
    href: "https://x.com/yashash_pugalia/status/1666673933150740480",
    publishedAt: isoFromTweetSnowflake("1666673933150740480"),
  },
  {
    kind: "x",
    key: "1663581820477120512",
    id: "1663581820477120512",
    href: "https://x.com/yashash_pugalia/status/1663581820477120512",
    publishedAt: isoFromTweetSnowflake("1663581820477120512"),
  },
  {
    kind: "x",
    key: "1657097805733715987",
    id: "1657097805733715987",
    href: "https://x.com/Rich_Harris/status/1657097805733715987",
    publishedAt: isoFromTweetSnowflake("1657097805733715987"),
  },
  {
    kind: "x",
    key: "1656644824190308352",
    id: "1656644824190308352",
    href: "https://x.com/EricSimons/status/1656644824190308352",
    publishedAt: isoFromTweetSnowflake("1656644824190308352"),
  },
  {
    kind: "x",
    key: "1656493176088150017",
    id: "1656493176088150017",
    href: "https://x.com/rauchg/status/1656493176088150017",
    publishedAt: isoFromTweetSnowflake("1656493176088150017"),
  },
  {
    kind: "x",
    key: "1656500100775157760",
    id: "1656500100775157760",
    href: "https://x.com/SvelteSociety/status/1656500100775157760",
    publishedAt: isoFromTweetSnowflake("1656500100775157760"),
  },
]);

export const embedsHaast = sortByPublishedAtDesc([
  {
    kind: "x",
    key: "2042317998997061722",
    id: "2042317998997061722",
    href: "https://x.com/yashash_pugalia/status/2042317998997061722",
    publishedAt: isoFromTweetSnowflake("2042317998997061722"),
  },
  {
    kind: "x",
    key: "2029779608200188281",
    id: "2029779608200188281",
    href: "https://x.com/yashash_pugalia/status/2029779608200188281",
    publishedAt: isoFromTweetSnowflake("2029779608200188281"),
  },
  {
    kind: "linkedin",
    key: "7402502643920785409",
    urn: "urn:li:ugcPost:7402502643920785409",
    href: "https://www.linkedin.com/posts/were-officially-in-festive-mode-at-haast-ugcPost-7402502643920785409-ELPf",
    publishedAt: "2025-12-12T06:30:00.000Z",
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
]);

export const embedsGeneral = sortByPublishedAtDesc([
  {
    kind: "linkedin",
    key: "7453177830638551040",
    urn: "urn:li:ugcPost:7453177830638551040",
    href: "https://www.linkedin.com/posts/yashash-pugalia_had-a-great-time-at-a-smally-combinator-ugcPost-7453177830638551040-5rH5",
    publishedAt: "2026-03-20T06:30:00.000Z",
  },
]);

export type HighlightPageSection = {
  id: string;
  heading: string;
  items: HighlightEmbedItem[];
};

export const highlightPageSections: HighlightPageSection[] = [
  { id: "general", heading: "General", items: embedsGeneral },
  { id: "haast", heading: "Haast", items: embedsHaast },
  { id: "win11", heading: "Windows 11 Web", items: embedsWindows11Web },
];

/** Matches `ExperienceItem.slug` / `ProjectItem.slug` from `resume-work-content`. */
export function getEmbedsForWorkSlug(slug: string): HighlightEmbedItem[] {
  switch (slug) {
    case "haast":
      return [...embedsHaast];
    case "windows11-web":
      return [...embedsWindows11Web];
    default:
      return [];
  }
}

/** Rough heights for shortest-column packing (iframes are cross-origin). */
export function estimateEmbedHeight(item: HighlightEmbedItem): number {
  return item.kind === "x" ? 360 : 720;
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
