<script lang="ts">
  import LinkedInEmbed from "$lib/LinkedInEmbed.svelte";
  import TweetEmbed from "$lib/TweetEmbed.svelte";
  import type { HighlightEmbedItem } from "$lib/highlights-embeds";

  interface Props {
    item: HighlightEmbedItem;
  }

  let { item }: Props = $props();
</script>

<div class="flex w-full min-w-0 flex-col gap-2">
  {#if item.kind === "x"}
    <TweetEmbed id={item.id} variant="masonry" />
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      class="text-primary self-center text-sm underline underline-offset-[3px] decoration-1 hover:no-underline"
      >View on X →</a
    >
  {:else}
    <LinkedInEmbed urn={item.urn} variant="masonry" />
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      class="text-primary self-center text-sm underline underline-offset-[3px] decoration-1 hover:no-underline"
      >View on LinkedIn →</a
    >
  {/if}
</div>
