<script lang="ts">
  import { slide } from "svelte/transition";

  export let data: {
    name: string;
    role: string;
    quote: string;
    link?: string;
  }[];
</script>

<div
  class="flex w-full snap-x snap-mandatory gap-4 overflow-auto scroll-smooth"
  transition:slide
>
  {#each data as t, idx}
    <blockquote
      class="relative my-0 flex w-10/12 flex-none snap-center flex-col rounded bg-neutral-100 dark:bg-neutral-800"
    >
      <!-- svelte-ignore a11y-missing-content -->
      {#if t.link}
        <a
          href={t.link}
          target="_blank"
          class="absolute inset-0 rounded rounded-l-none border border-transparent transition hover:border-neutral-200 hover:dark:border-neutral-700"
        />
      {/if}

      <p>{@html t.quote}</p>
      <span class="ml-auto mt-auto p-4 pt-0 text-end">
        ~ {t.name}, {t.role}
      </span>
    </blockquote>
  {/each}
</div>
