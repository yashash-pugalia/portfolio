<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import "iconify-icon";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import "../app.css";

  let { children } = $props();

  onMount(() => themeChange(false));

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<main class="prose prose-sm mx-auto max-w-3xl p-8">
  <header class="flex justify-between gap-4 [view-transition-name:header]">
    <h1 class="font-bold">Yashash Pugalia</h1>

    <div class="mb-auto flex flex-wrap items-center gap-2">
      <div class="border-base-content/20 flex rounded-full border">
        <!-- TODO: Does not work -->
        <!-- <button
        class="btn btn-circle border-none!"
        data-set-theme=""
        data-act-class="btn-active"
        aria-label="System"
      >
        <iconify-icon icon="material-symbols:devices-outline-rounded"
        ></iconify-icon>
      </button> -->
        <button
          class="btn btn-circle btn-ghost"
          data-set-theme="light"
          data-act-class="btn-active"
          aria-label="Light Mode"
        >
          <iconify-icon icon="material-symbols:sunny-outline-rounded"
          ></iconify-icon>
        </button>
        <button
          class="btn btn-circle btn-ghost"
          data-set-theme="dark"
          data-act-class="btn-active"
          aria-label="Dark Mode"
        >
          <iconify-icon icon="material-symbols:nightlight-outline-rounded"
          ></iconify-icon>
        </button>
      </div>

      <button class="btn-active hidden"
        >so svelte doesn't remove btn-active css</button
      >

      {#if page.route.id !== "/"}
        <a href="/" class="btn group ml-auto">
          <iconify-icon
            icon="material-symbols:arrow-left-alt-rounded"
            class="text-lg transition group-hover:-translate-x-1"
          ></iconify-icon>
          Go Home
        </a>
      {:else}
        <a class="btn" target="_blank" href="/Yashash-Pugalia_Resume-CV.pdf">
          <iconify-icon icon="material-symbols:download-rounded" class="text-lg"
          ></iconify-icon>
          Download
        </a>
      {/if}
    </div>
  </header>

  {@render children()}
</main>
