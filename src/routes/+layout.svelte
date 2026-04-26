<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import { socials } from "$lib/index.svelte";
  import "../app.css";
  import "iconify-icon";

  let { children } = $props();

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

<main
  class="prose prose-headings:font-medium prose-headings:leading-snug prose-p:leading-[1.55] prose-a:font-normal prose-a:text-primary prose-a:underline prose-a:decoration-primary prose-a:underline-offset-[3px] prose-a:decoration-1 prose-a:[font-weight:inherit] prose-a:hover:text-primary prose-a:hover:decoration-primary prose-a:hover:no-underline mx-auto flex min-h-dvh max-w-4xl flex-col p-4 sm:p-8"
>
  <nav
    class="not-prose border-base-300 bg-base-100 sticky top-0 z-10 -m-4 mb-0 flex items-start justify-between gap-4 border-b p-4 [view-transition-name:header] sm:pb-8"
  >
    <a
      href="/"
      class="hover:no-underline"
      class:underline={page.route.id !== "/"}
    >
      <h1
        class="text-base-content shrink-0 text-3xl font-medium tracking-tight"
      >
        Yashash Pugalia
      </h1>
    </a>

    <a
      class="ui-btn-primary"
      target="_blank"
      href="https://drive.google.com/file/d/1rEI0fqz-LcTZS0YQD2azX91sZFjTpPKs/view?usp=sharing"
    >
      <iconify-icon icon="material-symbols:download-rounded" class="text-base"
      ></iconify-icon>
      Download
    </a>
  </nav>

  <div class="flex-1">
    {@render children()}
  </div>

  <!-- text-sm -->
  <footer
    class="border-base-300 -mx-4 mt-12 flex flex-wrap items-center gap-4 border-t px-4 pt-4 sm:pt-8"
  >
    {#each socials as c}
      <a href={c.link} target="_blank" class="flex items-center gap-1">
        <iconify-icon icon={c.icon}></iconify-icon>
        {c.name}
      </a>
    {/each}
  </footer>
</main>
