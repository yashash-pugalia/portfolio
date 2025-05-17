<script lang="ts">
  interface Props {
    text?: string;
    href?: string;
  }

  let { text = "", href = "" }: Props = $props();
</script>

{#if href.startsWith("/")}
  <a {href}>{text}</a>
{:else}
  <a {href} target="_blank">{text}</a>
{/if}
