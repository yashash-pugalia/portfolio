<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let counter = $state(5);

  const decrementCounter = () => {
    if (counter > 0) counter--;
    else goto("/");
  };

  onMount(() => {
    const interval = setInterval(decrementCounter, 1000);

    return () => clearInterval(interval);
  });
</script>

<div
  class="not-prose border-l-primary mt-6 w-full border-l-[2pt] pl-5 text-left"
>
  <p class="text-primary mb-1 font-medium">404</p>

  <h1
    class="text-base-content mb-3 text-2xl leading-snug font-medium tracking-tight"
  >
    This page doesn't exist.
  </h1>

  <p class="mb-6 text-base leading-[1.55] text-[var(--app-prose-quotes)]">
    The link may be wrong or the page was removed. Redirecting to the home page
    in
    <span class="text-primary font-medium tabular-nums">{counter}</span>
    second{counter === 1 ? "" : "s"}, or go there now.
  </p>
</div>

<a href="/">← Home</a>
