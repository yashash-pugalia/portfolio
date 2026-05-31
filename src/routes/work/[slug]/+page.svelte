<script lang="ts">
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import { getEmbedsForWorkId } from "$lib/highlights-embeds";
  import { getTestimonialsForWorkId } from "$lib/index.svelte";
  import MarkdownLink from "$lib/MarkdownLink.svelte";
  import Testimonial from "$lib/Testimonial.svelte";
  import WorkHeader from "$lib/WorkHeader.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const work = $derived(data.work);
  const workEmbeds = $derived(getEmbedsForWorkId(work.id));
  const workTestimonials = $derived(getTestimonialsForWorkId(work.id));
  const detailMarkdown = $derived(work.details.trim());
</script>

<svelte:head>
  <title>{work.title} · Work · Yashash Pugalia</title>
</svelte:head>

<section class="mb-6" aria-label="Overview">
  <WorkHeader {work} linkTitle />
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

{#if workEmbeds.length > 0}
  <h3 class="mt-8 text-[color:var(--tw-prose-headings)]">Highlights</h3>
  <EmbedGridSection items={workEmbeds} sectionClass="not-prose mt-6" />
{/if}

{#if workTestimonials.length > 0}
  <h3 class="mt-8 text-[color:var(--tw-prose-headings)]">Testimonials</h3>
  <div class="not-prose mt-6 flex flex-col gap-4">
    {#each workTestimonials as t (t.name)}
      <Testimonial data={t} />
    {/each}
  </div>
{/if}
