<script lang="ts">
  import LinkedInEmbed from "$lib/LinkedInEmbed.svelte";
  import TweetEmbed from "$lib/TweetEmbed.svelte";
  import type { HighlightEmbedItem } from "$lib/highlights-embeds";

  interface Props {
    item: HighlightEmbedItem;
  }

  let { item }: Props = $props();
  let activeImageIndex = $state<number | null>(null);

  function openImage(index: number) {
    activeImageIndex = index;
  }

  function closeImage() {
    activeImageIndex = null;
  }

  function nextImage(total: number) {
    if (activeImageIndex === null) return;
    activeImageIndex = (activeImageIndex + 1) % total;
  }

  function prevImage(total: number) {
    if (activeImageIndex === null) return;
    activeImageIndex = (activeImageIndex - 1 + total) % total;
  }
</script>

<div class="flex w-full min-w-0 flex-col gap-2">
  {#if item.kind === "x"}
    <TweetEmbed id={item.id} variant="masonry" />
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      class="text-primary self-center text-sm underline decoration-1 underline-offset-[3px] hover:no-underline"
      >View on X →</a
    >
  {:else if item.kind === "linkedin"}
    <LinkedInEmbed urn={item.urn} variant="masonry" />
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      class="text-primary self-center text-sm underline decoration-1 underline-offset-[3px] hover:no-underline"
      >View on LinkedIn →</a
    >
  {:else if item.kind === "imageGroup"}
    <figure class="m-0 w-full overflow-hidden rounded-xl ring-1 ring-base-300">
      <button
        type="button"
        class="bg-base-300 grid w-full grid-cols-2 gap-1 p-1 text-left"
        onclick={() => openImage(0)}
        aria-label="Open {item.caption} gallery"
      >
        <img
          src={item.images[0].src}
          alt={item.images[0].alt}
          class="col-span-2 h-52 w-full rounded-md object-cover"
          loading="lazy"
          decoding="async"
        />
        {#if item.images[1]}
          <img
            src={item.images[1].src}
            alt={item.images[1].alt}
            class="h-32 w-full rounded-md object-cover"
            loading="lazy"
            decoding="async"
          />
        {/if}
        {#if item.images[2]}
          <img
            src={item.images[2].src}
            alt={item.images[2].alt}
            class="h-32 w-full rounded-md object-cover"
            loading="lazy"
            decoding="async"
          />
        {/if}
      </button>
      <figcaption class="bg-base-200 px-3 py-2 text-center text-sm">
        {item.caption}
        {#if item.dateLabel}
          <span class="block text-base-content/70">{item.dateLabel}</span>
        {/if}
        {#if item.xLink || item.linkedinLink}
          <span class="mt-1 flex items-center justify-center gap-3 text-xs">
            {#if item.xLink}
              <a
                href={item.xLink}
                target="_blank"
                rel="noreferrer"
                class="text-primary underline decoration-1 underline-offset-[3px] hover:no-underline"
                >X (Twitter)</a
              >
            {/if}
            {#if item.linkedinLink}
              <a
                href={item.linkedinLink}
                target="_blank"
                rel="noreferrer"
                class="text-primary underline decoration-1 underline-offset-[3px] hover:no-underline"
                >LinkedIn</a
              >
            {/if}
          </span>
        {/if}
      </figcaption>
    </figure>

    {#if activeImageIndex !== null}
      <div
        class="bg-base-content/85 fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          class="absolute inset-0"
          aria-label="Close gallery"
          onclick={closeImage}
        ></button>
        <div class="relative z-[1] flex w-full max-w-5xl items-center gap-3">
          <button
            type="button"
            class="ui-btn-primary"
            onclick={() => prevImage(item.images.length)}
            aria-label="Previous image"
            >←</button
          >
          <img
            src={item.images[activeImageIndex].src}
            alt={item.images[activeImageIndex].alt}
            class="max-h-[85vh] w-full rounded-xl object-contain"
          />
          <button
            type="button"
            class="ui-btn-primary"
            onclick={() => nextImage(item.images.length)}
            aria-label="Next image"
            >→</button
          >
          <button
            type="button"
            class="ui-btn-primary absolute -top-12 right-0"
            onclick={closeImage}
            aria-label="Close gallery"
            >✕</button
          >
        </div>
      </div>
    {/if}
  {:else}
    <figure class="m-0 w-full overflow-hidden rounded-xl ring-1 ring-base-300">
      <img
        src={item.src}
        alt={item.alt}
        class="bg-base-300 block h-auto w-full"
        loading="lazy"
        decoding="async"
      />
      <figcaption class="bg-base-200 px-3 py-2 text-center text-sm">
        {item.caption}
        {#if item.dateLabel}
          <span class="block text-base-content/70">{item.dateLabel}</span>
        {/if}
        {#if item.xLink || item.linkedinLink}
          <span class="mt-1 flex items-center justify-center gap-3 text-xs">
            {#if item.xLink}
              <a
                href={item.xLink}
                target="_blank"
                rel="noreferrer"
                class="text-primary underline decoration-1 underline-offset-[3px] hover:no-underline"
                >X (Twitter)</a
              >
            {/if}
            {#if item.linkedinLink}
              <a
                href={item.linkedinLink}
                target="_blank"
                rel="noreferrer"
                class="text-primary underline decoration-1 underline-offset-[3px] hover:no-underline"
                >LinkedIn</a
              >
            {/if}
          </span>
        {/if}
      </figcaption>
    </figure>
  {/if}
</div>
