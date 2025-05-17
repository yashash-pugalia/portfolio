<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import "iconify-icon";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  import { socials } from "$lib";
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

{#snippet socialsList(classes?: string)}
  <div class="flex flex-wrap gap-1.5 {classes}">
    {#each socials as c}
      <div class="tooltip tooltip-bottom" data-tip={c.name}>
        <a
          href={c.link}
          target="_blank"
          class="btn btn-sm btn-square"
          aria-label={c.name}
        >
          <iconify-icon icon={c.icon} class="text-base"></iconify-icon>
        </a>
      </div>
    {/each}
  </div>
{/snippet}

{#snippet donwloadBtn()}
  <div class="border-base-300 mb-auto rounded-full border print:hidden">
    <a
      class="btn btn-neutral max-sm:btn-sm"
      target="_blank"
      href="https://drive.google.com/file/d/1rEI0fqz-LcTZS0YQD2azX91sZFjTpPKs/view?usp=sharing"
    >
      <iconify-icon icon="material-symbols:download-rounded" class="text-base"
      ></iconify-icon> Download
    </a>
  </div>
{/snippet}

{#snippet themeSwitcher()}
  <div class="border-base-300 mb-auto flex rounded-full border print:hidden">
    <button
      class="btn btn-circle btn-sm btn-ghost"
      data-set-theme="light"
      data-act-class="btn-active"
      aria-label="Light Mode"
    >
      <iconify-icon
        icon="material-symbols:sunny-outline-rounded"
        class="text-base"
      ></iconify-icon>
    </button>
    <button
      class="btn btn-circle btn-sm btn-ghost"
      data-set-theme="dark"
      data-act-class="btn-active"
      aria-label="Dark Mode"
    >
      <iconify-icon
        icon="material-symbols:nightlight-outline-rounded"
        class="text-base"
      ></iconify-icon>
    </button>

    <button class="btn-active hidden">
      so svelte doesn't remove btn-active css
    </button>
  </div>
{/snippet}

<main
  class="prose prose-sm prose-a:no-underline prose-a:italic prose-a:hover:underline mx-auto max-w-3xl p-4 sm:p-8 print:max-w-none"
>
  <nav
    class="bg-base-100/50 not-prose sticky top-0 z-10 -m-4 space-y-4 p-4 backdrop-blur [view-transition-name:header]"
  >
    <header class="flex justify-between gap-4">
      <a href="/" class="hover:underline" class:italic={page.route.id !== "/"}>
        <h1 class="text-base-content shrink-0 text-3xl font-bold">
          Yashash Pugalia
        </h1>
      </a>

      {@render socialsList("not-print:hidden")}

      {@render donwloadBtn()}
    </header>

    <div class="flex flex-wrap justify-between gap-2">
      {@render socialsList("print:hidden")}

      {@render themeSwitcher()}
    </div>
  </nav>

  {@render children()}
</main>
