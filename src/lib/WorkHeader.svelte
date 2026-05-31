<script lang="ts">
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import MarkdownLink from "$lib/MarkdownLink.svelte";
  import type { WorkItem } from "$lib/resume-work-content";

  interface Props {
    work: WorkItem;
    heading?: "h2" | "h4";
    /** When true and `work.live` is set, the title links to the live site */
    linkTitle?: boolean;
  }

  let { work, heading = "h2", linkTitle = false }: Props = $props();

  const metaLine = $derived(
    [work.years, work.location].filter(Boolean).join(" · "),
  );
  const showSummary = $derived(work.summary.trim().length > 0);
</script>

<svelte:element
  this={heading}
  style="view-transition-name: work-head-{work.id}"
>
  {#if linkTitle && work.live}
    <a href={work.live} target="_blank" rel="noopener noreferrer"
      >{work.title}</a
    >
  {:else}
    {work.title}
  {/if}
</svelte:element>

{#if metaLine}
  <p style="view-transition-name: work-meta-{work.id}">{metaLine}</p>
{/if}

{#if showSummary}
  <div style="view-transition-name: work-sum-{work.id}">
    <SvelteMarkdown source={work.summary} renderers={{ link: MarkdownLink }} />
  </div>
{/if}
