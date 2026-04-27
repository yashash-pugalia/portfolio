<script lang="ts">
  import { onMount } from "svelte";
  import EmbedGridSection from "$lib/EmbedGridSection.svelte";
  import { highlightPageSections } from "$lib/highlights-embeds";

  /** After mount: true = 2-column masonry per section; false = single column. */
  let wideLayout = $state(false);

  onMount(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      wideLayout = mq.matches;
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  });
</script>

<h2>Highlights</h2>

{#each highlightPageSections as section, idx (section.id)}
  <EmbedGridSection
    heading={section.heading}
    items={section.items}
    {wideLayout}
    showHeading={false}
    sectionClass={idx === 0 ? "mt-8" : "mt-14"}
  />
{/each}
