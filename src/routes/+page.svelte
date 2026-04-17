<script lang="ts">
  import MarkdownLink from "./MarkdownLink.svelte";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";

  const bio = `I'm a software engineer. I'm originally from Kolkata, India, and brought up in New Delhi. I owe much of my career to the Web and open source.

I spent my early teens tinkering with computers — flashing custom ROMs on Android phones, dual-booting Linux distros, and building small WordPress sites.

At 16, I built browser-based replicas of Windows 11 ([win11-svelte](https://win11.yashash.dev), [win11-react](https://win11.blueedge.me)), which went viral and reached over **20M+ visits**, including hitting [#1 on Hacker News](https://news.ycombinator.com/item?id=35896505) ([archive](https://web.archive.org/web/20230511060851/https://news.ycombinator.com/)). The project was sponsored by Vercel and received recognition from people like [Guillermo Rauch](https://x.com/rauchg/status/1656493176088150017), [Eric Simons](https://x.com/ericsimons40/status/1656644824190308352), and [Rich Harris](https://x.com/Rich_Harris/status/1657097805733715987).

I later worked with early-stage startups, building MVPs and product systems across full-stack.

At 18, I joined [Haast](https://www.haast.io) as a [founding frontend engineer](https://www.linkedin.com/posts/liamking97_ai-start-ups-score-245m-funding-windfall-activity-7101717182698459136-KD0C/) at Pre-Seed. I built and owned much of the frontend for a B2B AI platform focused on marketing and legal compliance, as the company scaled from pre-seed through [Seed (Airtree A$6M)](https://www.capitalbrief.com/article/haast-raises-6-million-to-transform-compliance-with-ai-automation-24f00fee-be78-4b0b-be61-dc0019789885/) and into [Series A (Peak XV $12M)](https://www.axios.com/pro/enterprise-software-deals/2026/04/09/enterprise-compliance-haast-12-m), now used by **Fortune 500s**.

I'm particularly interested in building product experiences at the intersection of AI and the web.`;
</script>

<div class="prose-base">
  <h2>About</h2>

  <img
    src="/me.jpg"
    alt="Yashash Pugalia"
    class="bg-base-200 float-none mx-auto mb-8 block aspect-square w-40 max-w-[45%] rounded-2xl object-cover object-center shadow sm:float-right sm:mt-1 sm:mb-4 sm:ml-8 sm:w-44 sm:max-w-none md:w-52"
  />

  <SvelteMarkdown source={bio} renderers={{ link: MarkdownLink }} />
</div>
