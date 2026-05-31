<script lang="ts">
  import { onMount } from "svelte";
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import { highlightPageEmbeds } from "$lib/highlights-embeds";

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

<h2>Highlights</h2>

<EmbedGridSection
  items={highlightPageEmbeds}
  wideLayout={wideLayout}
  sectionClass="not-prose mt-8"
/>
