<script lang="ts">
  import { onMount } from "svelte";
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import MarkdownLink from "../../MarkdownLink.svelte";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import { getEmbedsForWorkSlug } from "$lib/highlights-embeds";
  import {
    experienceDetailRestMarkdown,
    experienceHeadline,
    experienceSummary,
    projectDetailRestMarkdown,
    projectHeroSubtitleMarkdown,
  } from "$lib/resume-work-content";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const pageTitles: Record<string, string> = {
    haast: "Haast",
    "realm-labs": "Realm Labs",
    "windows11-web": "Windows 11 Web",
    "prosper-mint": "Prosper Mint",
  };

  const pageTitle = $derived(
    pageTitles[data.work.item.slug] ?? data.work.item.id,
  );

  /** Matches `/work` index cards — shared view-transition names for head + summary. */
  const workCardMdBlurb =
    "prose prose-sm max-w-none text-base-content prose-p:my-0 prose-headings:my-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0";

  const workCardSummary =
    `${workCardMdBlurb} text-base-content/78 [&_p]:my-0 [&_a]:pointer-events-auto text-sm leading-relaxed`;

  /** Matches `<main>` typography so markdown in cards renders like the rest of the site. */
  const descProse =
    "prose prose-headings:font-medium prose-headings:leading-snug prose-p:leading-[1.55] prose-a:font-normal prose-a:text-primary prose-a:underline prose-a:decoration-primary prose-a:underline-offset-[3px] prose-a:decoration-1 prose-a:[font-weight:inherit] prose-a:hover:text-primary prose-a:hover:decoration-primary prose-a:hover:no-underline max-w-none text-base-content prose-li:leading-relaxed";

  const workEmbeds = $derived(getEmbedsForWorkSlug(data.work.item.slug));

  const experienceRest = $derived(
    data.work.kind === "experience"
      ? experienceDetailRestMarkdown(data.work.item)
      : "",
  );

  const projectRest = $derived(
    data.work.kind === "project"
      ? projectDetailRestMarkdown(data.work.item)
      : "",
  );

  let wideLayoutEmbeds = $state(false);

  onMount(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      wideLayoutEmbeds = mq.matches;
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  });
</script>

<svelte:head>
  <title>{pageTitle} · Work · Yashash Pugalia</title>
</svelte:head>

<p class="not-prose mb-6">
  <a
    href="/work"
    class="text-primary text-sm underline underline-offset-[3px] decoration-1 hover:no-underline"
    >← Work</a
  >
</p>

{#if data.work.kind === "experience"}
  {@const slug = data.work.item.slug}
  {@const exp = data.work.item}
  {@const sum = experienceSummary(exp)}
  <section class="not-prose mb-6 flex flex-col gap-3" aria-label="Overview">
    <div
      class="{workCardMdBlurb} [&_a]:pointer-events-auto"
      style="view-transition-name: work-head-{slug}"
    >
      <SvelteMarkdown
        source={experienceHeadline(exp)}
        renderers={{ link: MarkdownLink }}
      />
    </div>
    {#if sum}
      <div
        class={workCardSummary}
        style="view-transition-name: work-sum-{slug}"
      >
        <SvelteMarkdown source={sum} renderers={{ link: MarkdownLink }} />
      </div>
    {/if}
  </section>
  {#if experienceRest}
    <article class="bg-base-200 ring-base-300 rounded-2xl p-5 ring-1 sm:p-6">
      <div class={descProse}>
        <SvelteMarkdown
          source={experienceRest}
          renderers={{ link: MarkdownLink }}
        />
      </div>
    </article>
  {/if}
{:else}
  {@const slug = data.work.item.slug}
  {@const proj = data.work.item}
  <section class="not-prose mb-6 flex flex-col gap-3" aria-label="Overview">
    {#if proj.title}
      <div
        class="{workCardMdBlurb} [&_a]:pointer-events-auto"
        style="view-transition-name: work-head-{slug}"
      >
        <SvelteMarkdown
          source={proj.title}
          renderers={{ link: MarkdownLink }}
        />
      </div>
    {/if}
    <div
      class={workCardSummary}
      style="view-transition-name: work-sum-{slug}"
    >
      <SvelteMarkdown
        source={projectHeroSubtitleMarkdown(proj)}
        renderers={{ link: MarkdownLink }}
      />
    </div>
  </section>
  <article
    class="bg-base-200 ring-base-300 flex flex-col gap-6 rounded-2xl p-5 ring-1 sm:p-6"
  >
    <div
      class="not-prose flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-base-300 pb-4 text-sm"
    >
      <a
        href={proj.live}
        target="_blank"
        rel="noreferrer"
        class="ui-btn-primary">Live</a
      >
      <a
        href={proj.github}
        target="_blank"
        rel="noreferrer"
        class="text-primary underline underline-offset-[3px] decoration-1 hover:no-underline"
        >GitHub</a
      >
    </div>
    {#if proj.image}
      <div>
        {#if proj.image.href}
          <a
            href={proj.image.href}
            target="_blank"
            rel="noreferrer"
            class="ring-base-300 hover:ring-primary/25 bg-base-300 block overflow-hidden rounded-xl ring-1 transition-[box-shadow,opacity] hover:opacity-[0.98]"
          >
            <img
              src={proj.image.src}
              alt={proj.image.alt}
              class="bg-base-300 block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </a>
        {:else}
          <img
            src={proj.image.src}
            alt={proj.image.alt}
            class="bg-base-300 block h-auto w-full rounded-xl ring-1 ring-base-300"
            loading="lazy"
            decoding="async"
          />
        {/if}
      </div>
    {/if}
    {#if projectRest}
      <div class={descProse}>
        <SvelteMarkdown
          source={projectRest}
          renderers={{ link: MarkdownLink }}
        />
      </div>
    {/if}
  </article>
{/if}

<EmbedGridSection
  heading="Highlights"
  items={workEmbeds}
  wideLayout={wideLayoutEmbeds}
  sectionClass="not-prose mt-14"
  headingLevel={2}
/>
