import { generateLlmsTxt } from "$lib/llms-txt";

export const prerender = true;

export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
