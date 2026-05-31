<script lang="ts">
  import EmbedCard from "$lib/EmbedCard.svelte";
  import type { HighlightEmbedItem } from "$lib/highlights-embeds";

  interface Props {
    items: HighlightEmbedItem[];
    /** e.g. `not-prose mt-6` */
    sectionClass?: string;
  }

  let { items, sectionClass = "" }: Props = $props();
</script>

{#if items.length > 0}
  <section class={sectionClass}>
    <div class="not-prose grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
      {#each items as item (item.kind + "-" + item.key)}
        <EmbedCard {item} />
      {/each}
    </div>
  </section>
{/if}
