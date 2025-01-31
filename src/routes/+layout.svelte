<script>
  import "iconify-icon";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import "../app.css";

  let { children } = $props();

  onMount(() => {
    themeChange(false);
  });
</script>

{@render children()}
