<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    text?: string;
    href?: string;
    title?: string;
    /** Nested tokens (e.g. `**label**` inside `[**label**](url)`) — prefer over flat `text`. */
    children?: Snippet;
  }

  let { text = "", href = "", title, children }: Props = $props();
</script>

{#if href.startsWith("/")}
  <a {href} {title}>
    {#if children}{@render children()}{:else}{text}{/if}
  </a>
{:else}
  <a {href} {title} target="_blank" rel="noreferrer">
    {#if children}{@render children()}{:else}{text}{/if}
  </a>
{/if}
