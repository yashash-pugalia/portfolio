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

<div class="not-prose mt-8 place-items-center">
  <div class="flex items-center gap-4 text-center">
    <iconify-icon
      icon="material-symbols:warning-outline-rounded"
      class="text-9xl"
    ></iconify-icon>
    <h1 class="text-9xl font-semibold">404</h1>
  </div>

  <div class="my-4">
    Going back to home in
    <span class="badge badge-ghost tabular-nums">{counter}</span>
    seconds!
  </div>
</div>
