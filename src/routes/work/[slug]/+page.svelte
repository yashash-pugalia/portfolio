<script lang="ts">
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import { getEmbedsForWorkId } from "$lib/highlights-embeds";
  import { getTestimonialsForWorkId } from "$lib/index.svelte";
  import MarkdownLink from "$lib/MarkdownLink.svelte";
  import {
    breadcrumbListJsonLd,
    PROJECT_SCHEMA_IDS,
    SITE_URL,
    softwareApplicationJsonLd,
  } from "$lib/seo";
  import Testimonial from "$lib/Testimonial.svelte";
  import WorkHeader from "$lib/WorkHeader.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const work = $derived(data.work);
  const workEmbeds = $derived(getEmbedsForWorkId(work.id));
  const workTestimonials = $derived(getTestimonialsForWorkId(work.id));
  const detailMarkdown = $derived(work.details.trim());
  const breadcrumbSchema = $derived(
    breadcrumbListJsonLd([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Work", url: `${SITE_URL}/work` },
      { name: work.title, url: `${SITE_URL}/work/${work.id}` },
    ]),
  );
  const projectSchema = $derived(
    PROJECT_SCHEMA_IDS.has(work.id) ? softwareApplicationJsonLd(work) : null,
  );
</script>

<svelte:head>
  <svelte:element this={"script"} type="application/ld+json">
    {breadcrumbSchema}
  </svelte:element>
  {#if projectSchema}
    <svelte:element this={"script"} type="application/ld+json">
      {projectSchema}
    </svelte:element>
  {/if}
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
