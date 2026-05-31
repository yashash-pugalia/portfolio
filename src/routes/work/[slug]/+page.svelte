<script lang="ts">
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import { getTestimonialsForWorkId } from "$lib/index.svelte";
  import MarkdownLink from "../../MarkdownLink.svelte";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import { getEmbedsForWorkId } from "$lib/highlights-embeds";
  import Testimonial from "../../../Testimonial.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const pageTitles: Record<string, string> = {
    haast: "Haast",
    "realm-labs": "Realm Labs",
    "windows11-web": "Windows 11 Web",
    "prosper-mint": "Prosper Mint",
  };

  const pageTitle = $derived(pageTitles[data.work.id] ?? data.work.id);

  const work = $derived(data.work);
  const workEmbeds = $derived(getEmbedsForWorkId(work.id));
  const workTestimonials = $derived(getTestimonialsForWorkId(work.id));
  const detailMarkdown = $derived(work.details.trim());
</script>

<svelte:head>
  <title>{pageTitle} · Work · Yashash Pugalia</title>
</svelte:head>

<section class="mb-6" aria-label="Overview">
  <h2 style="view-transition-name: work-head-{work.id}">
    {#if work.live}
      <a href={work.live} target="_blank" rel="noopener noreferrer"
        >{work.title}</a
      >
    {:else}
      {work.title}
    {/if}
  </h2>
  {#if work.years || work.location}
    <p style="view-transition-name: work-meta-{work.id}">
      {[work.years, work.location].filter(Boolean).join(" · ")}
    </p>
  {/if}
  {#if work.summary.trim()}
    <div style="view-transition-name: work-sum-{work.id}">
      <SvelteMarkdown
        source={work.summary}
        renderers={{ link: MarkdownLink }}
      />
    </div>
  {/if}
</section>

{#if detailMarkdown}
  <section class="mb-6" aria-label="Details">
    <SvelteMarkdown source={work.details} renderers={{ link: MarkdownLink }} />
  </section>
{/if}

{#if work.github}
  <p class="mb-6">
    <a href={work.github} target="_blank" rel="noopener noreferrer">GitHub</a>
  </p>
{/if}

{#if workTestimonials.length > 0}
  <h3 class="mt-8 text-[color:var(--tw-prose-headings)]">Testimonials</h3>
  <div class="not-prose mt-6 flex flex-col gap-4">
    {#each workTestimonials as t (t.name)}
      <Testimonial data={t} />
    {/each}
  </div>
{/if}

{#if workEmbeds.length > 0}
  <h3 class="mt-8 text-[color:var(--tw-prose-headings)]">Highlights</h3>
  <EmbedGridSection items={workEmbeds} sectionClass="not-prose mt-6" />
{/if}
