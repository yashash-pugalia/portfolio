<script lang="ts">
  import EmbedCard from "$lib/EmbedCard.svelte";
  import {
    distributeEmbedColumns,
    type HighlightEmbedItem,
  } from "$lib/highlights-embeds";
  import { onMount } from "svelte";

  interface Props {
    items: HighlightEmbedItem[];
    sectionClass?: string;
  }

  let { items, sectionClass = "" }: Props = $props();
  let wideLayout = $state(false);

  onMount(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const apply = () => {
      wideLayout = mq.matches;
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  });
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
