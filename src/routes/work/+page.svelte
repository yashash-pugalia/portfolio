<script lang="ts">
  import MarkdownLink from "../MarkdownLink.svelte";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import {
    experience,
    experienceHeadline,
    experienceSummary,
    projectHeroSubtitleMarkdown,
    projects,
  } from "$lib/resume-work-content";

  /** Tight prose island for markdown blurbs only — cards stay `not-prose`. */
  const mdBlurb =
    "prose prose-sm max-w-none text-base-content prose-p:my-0 prose-headings:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0";

  const expCardAria: Record<string, string> = {
    haast: "Haast",
    realm: "Realm Labs",
  };

  const projCardAria: Record<string, string> = {
    win11: "Windows 11 Web",
    "prosper-mint": "Prosper Mint",
  };
</script>

<h2>Work</h2>

<h3 class="text-[color:var(--tw-prose-headings)] mt-8">Experience</h3>

<div class="mt-6 flex flex-col gap-5">
  {#each experience as item (item.id)}
    {@const summary = experienceSummary(item)}
    <article
      class="not-prose bg-base-200 ring-base-300 hover:ring-primary/20 relative flex flex-col gap-3 rounded-2xl p-5 ring-1 transition-[box-shadow] sm:p-6"
    >
      <a
        href="/work/{item.slug}"
        class="absolute inset-0 z-[1] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="View {expCardAria[item.id] ?? item.id} experience"
      ></a>
      <div class="pointer-events-none relative z-[2] flex flex-col gap-3">
        <div
          class="{mdBlurb} [&_a]:pointer-events-auto"
          style="view-transition-name: work-head-{item.slug}"
        >
          <SvelteMarkdown
            source={experienceHeadline(item)}
            renderers={{ link: MarkdownLink }}
          />
        </div>
        {#if summary}
          <div
            class="{mdBlurb} text-base-content/78 [&_p]:my-0 [&_a]:pointer-events-auto text-sm leading-relaxed"
            style="view-transition-name: work-sum-{item.slug}"
          >
            <SvelteMarkdown
              source={summary}
              renderers={{ link: MarkdownLink }}
            />
          </div>
        {/if}
      </div>
    </article>
  {/each}
</div>

<h3 class="text-[color:var(--tw-prose-headings)] mt-14">Projects</h3>

<div class="mt-6 flex flex-col gap-5">
  {#each projects as p (p.id)}
    <article
      class="not-prose bg-base-200 ring-base-300 hover:ring-primary/20 relative flex flex-col gap-3 rounded-2xl p-5 ring-1 transition-[box-shadow] sm:p-6"
    >
      <a
        href="/work/{p.slug}"
        class="absolute inset-0 z-[1] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="View {projCardAria[p.id] ?? p.id} project"
      ></a>
      <div class="pointer-events-none relative z-[2] flex flex-col gap-3">
        {#if p.title}
          <div
            class="{mdBlurb} [&_a]:pointer-events-auto"
            style="view-transition-name: work-head-{p.slug}"
          >
            <SvelteMarkdown
              source={p.title}
              renderers={{ link: MarkdownLink }}
            />
          </div>
        {/if}
        <div
          class="{mdBlurb} text-base-content/78 [&_p]:my-0 [&_a]:pointer-events-auto text-sm leading-relaxed"
          style="view-transition-name: work-sum-{p.slug}"
        >
          <SvelteMarkdown
            source={projectHeroSubtitleMarkdown(p)}
            renderers={{ link: MarkdownLink }}
          />
        </div>
      </div>
    </article>
  {/each}
</div>
