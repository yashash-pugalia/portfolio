<script lang="ts">
  import EmbedCard from "$lib/EmbedCard.svelte";
  import {
    distributeEmbedColumns,
    type HighlightEmbedItem,
  } from "$lib/highlights-embeds";

  interface Props {
    items: HighlightEmbedItem[];
    wideLayout: boolean;
    /** e.g. `not-prose mt-6` */
    sectionClass?: string;
  }

  let { items, wideLayout, sectionClass = "" }: Props = $props();
</script>

{#if items.length > 0}
  <section class={sectionClass}>
    {#if wideLayout}
      <div class="not-prose grid grid-cols-2 items-start gap-8">
        {#each distributeEmbedColumns(items, 2) as col, colIndex (colIndex)}
          <div class="flex min-h-0 min-w-0 flex-col gap-8">
            {#each col as item (item.kind + "-" + item.key)}
              <EmbedCard {item} />
            {/each}
          </div>
        {/each}
      </div>
    {:else}
      <div class="not-prose flex flex-col gap-8">
        {#each items as item (item.kind + "-" + item.key)}
          <EmbedCard {item} />
        {/each}
      </div>
    {/if}
  </section>
{/if}
