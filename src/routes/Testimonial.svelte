<script lang="ts">
  interface Props {
    data: {
      name: string;
      role: string;
      quote: string;
      link?: string;
    };
    class?: string;
  }

  const { data, class: classes }: Props = $props();
</script>

<blockquote
  class="relative my-0 flex h-full flex-none flex-col rounded bg-base-200 {classes}"
>
  <!-- svelte-ignore a11y_missing_content -->
  {#if data.link}
    <a
      href={data.link}
      target="_blank"
      class="absolute inset-0 rounded rounded-l-none border border-transparent transition hover:border-base-content/20"
      aria-label="View Testimonial"
    ></a>
  {/if}

  <p>{@html data.quote}</p>
  <span class="mt-auto ml-auto p-4 pt-0 text-end">
    ~ {data.name}, {data.role}
  </span>
</blockquote>
