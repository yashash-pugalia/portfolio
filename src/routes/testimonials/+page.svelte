<script lang="ts">
  import { testimonials } from "$lib/index.svelte";
  import Testimonial from "../../Testimonial.svelte";
</script>

<h2>Testimonials</h2>

<div class="not-prose mt-6 flex flex-col gap-4">
  {#each testimonials as t}
    <Testimonial data={t} />
  {/each}
</div>

<a href="/" class="mt-6 inline-block">← Home</a>
