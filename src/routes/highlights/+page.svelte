<script lang="ts">
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import { highlightPageEmbeds } from "$lib/highlights-embeds";
</script>

<h2>Highlights</h2>

<EmbedGridSection items={highlightPageEmbeds} sectionClass="not-prose mt-8" />
