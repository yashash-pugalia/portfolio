import { experience, projects } from "$lib/resume-work-content";
import { SITE_URL } from "$lib/seo";

export const prerender = true;

const STATIC_PAGES: { path: string; priority: string }[] = [
  { path: "", priority: "1.00" },
  { path: "/work", priority: "0.80" },
  { path: "/highlights", priority: "0.80" },
  { path: "/testimonials", priority: "0.80" },
];

function locForPath(path: string): string {
  return path === "" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = [
    ...STATIC_PAGES.map(({ path, priority }) => ({
      loc: locForPath(path),
      priority,
    })),
    ...experience.map((item) => ({
      loc: `${SITE_URL}/work/${item.id}`,
      priority: "0.64",
    })),
    ...projects.map((item) => ({
      loc: `${SITE_URL}/work/${item.id}`,
      priority: "0.64",
    })),
  ];

  const body = urls
    .map(
      ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
