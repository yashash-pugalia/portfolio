<script lang="ts">
  import EmbedCard from "$lib/EmbedCard.svelte";
  import {
    distributeEmbedColumns,
    type HighlightEmbedItem,
  } from "$lib/highlights-embeds";

  interface Props {
    heading: string;
    items: HighlightEmbedItem[];
    wideLayout: boolean;
    /** e.g. `mt-8` / `mt-14` / `not-prose mt-14` */
    sectionClass?: string;
    /** Use 2 on `/work/[slug]` (no page-level h2 for the block); 3 under `/highlights`. */
    headingLevel?: 2 | 3;
    showHeading?: boolean;
  }

  let {
    heading,
    items,
    wideLayout,
    sectionClass = "",
    headingLevel = 3,
    showHeading = true,
  }: Props = $props();

  const headingTag = $derived(headingLevel === 2 ? "h2" : "h3");
  /** With no title, spacing comes from `<section>` only. */
  const gridTop = $derived(showHeading ? "mt-6" : "mt-0");
</script>

{#if items.length > 0}
  <section
    class={sectionClass}
    aria-label={showHeading ? undefined : heading}
  >
    {#if showHeading}
      <svelte:element
        this={headingTag}
        class="text-[color:var(--tw-prose-headings)]"
      >
        {heading}
      </svelte:element>
    {/if}

    {#if wideLayout}
      <div class="not-prose grid grid-cols-2 items-start gap-8 {gridTop}">
        {#each distributeEmbedColumns(items, 2) as col, colIndex (colIndex)}
          <div class="flex min-h-0 min-w-0 flex-col gap-8">
            {#each col as item (item.kind + "-" + item.key)}
              <EmbedCard {item} />
            {/each}
          </div>
        {/each}
      </div>
    {:else}
      <div class="not-prose flex flex-col gap-8 {gridTop}">
        {#each items as item (item.kind + "-" + item.key)}
          <EmbedCard {item} />
        {/each}
      </div>
    {/if}
  </section>
{/if}
