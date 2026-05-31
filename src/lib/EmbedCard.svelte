<script lang="ts">
  import {
    formatHighlightDate,
    type HighlightEmbedItem,
  } from "$lib/highlights-embeds";

  interface Props {
    item: HighlightEmbedItem;
  }

  let { item }: Props = $props();

  const externalLinkClass =
    "text-primary underline decoration-1 underline-offset-[3px] hover:no-underline";
</script>

{#snippet figcaptionContent(item: HighlightEmbedItem)}
  {item.caption}
  <span class="block text-base-content/70"
    >{formatHighlightDate(item.date)}</span
  >
  {#if item.xLink || item.linkedinLink || item.ytLink || item.hnLink}
    <span
      class="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs"
    >
      {#if item.xLink}
        <a
          href={item.xLink}
          target="_blank"
          rel="noreferrer"
          class={externalLinkClass}>X (Twitter)</a
        >
      {/if}
      {#if item.linkedinLink}
        <a
          href={item.linkedinLink}
          target="_blank"
          rel="noreferrer"
          class={externalLinkClass}>LinkedIn</a
        >
      {/if}
      {#if item.ytLink}
        <a
          href={item.ytLink}
          target="_blank"
          rel="noreferrer"
          class={externalLinkClass}>YouTube</a
        >
      {/if}
      {#if item.hnLink}
        <a
          href={item.hnLink}
          target="_blank"
          rel="noreferrer"
          class={externalLinkClass}>Hacker News</a
        >
      {/if}
    </span>
  {/if}
{/snippet}

<div class="flex w-full min-w-0 flex-col">
  {#if item.kind === "imageGroup"}
    <figure
      class="bg-base-200 m-0 w-full overflow-hidden rounded-xl ring-1 ring-base-300"
    >
      <div class="grid w-full grid-cols-2 gap-1 p-1 pb-0">
        <img
          src={item.images[0].src}
          alt={item.images[0].alt}
          class="col-span-2 h-40 w-full rounded-xl object-cover"
          loading="lazy"
          decoding="async"
        />
        {#if item.images[1]}
          <img
            src={item.images[1].src}
            alt={item.images[1].alt}
            class="h-40 w-full rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
        {/if}
        {#if item.images[2]}
          <img
            src={item.images[2].src}
            alt={item.images[2].alt}
            class="h-40 w-full rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
        {/if}
      </div>
      <figcaption class="m-0 px-3 py-2 text-center text-sm">
        {@render figcaptionContent(item)}
      </figcaption>
    </figure>
  {:else}
    <figure
      class="bg-base-200 m-0 w-full overflow-hidden rounded-xl ring-1 ring-base-300"
    >
      <div class="p-1 pb-0">
        <img
          src={item.src}
          alt={item.alt}
          class="bg-base-300 block h-auto w-full rounded-xl"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption class="m-0 px-3 py-2 text-center text-sm">
        {@render figcaptionContent(item)}
      </figcaption>
    </figure>
  {/if}
</div>
