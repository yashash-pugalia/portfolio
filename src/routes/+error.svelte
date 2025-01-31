<script>
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

<div class="mx-auto mt-8 max-w-2xl place-items-center dark:text-white">
  <div class="flex items-center gap-4 text-center">
    <iconify-icon
      icon="material-symbols:warning-outline-rounded"
      class="text-9xl"
    ></iconify-icon>
    <h1 class="text-9xl font-semibold">404</h1>
  </div>

  <div class="my-4">
    Going back to home in
    <button class="btn h-[unset]! py-0!">{counter}</button>
    seconds!
  </div>

  <a href="/" class="btn h-[unset]! p-8">Go Home</a>
</div>
