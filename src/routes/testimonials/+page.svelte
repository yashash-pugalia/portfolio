<script lang="ts">
  import { testimonials } from "$lib";
  import Testimonial from "../../Testimonial.svelte";
</script>

<h2>Testimonials</h2>

{#each testimonials as t}
  <Testimonial data={t} />
{/each}
