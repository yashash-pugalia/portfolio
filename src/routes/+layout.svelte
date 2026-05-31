<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import { socials } from "$lib/index.svelte";
  import "../app.css";
  import "iconify-icon";

  let { children } = $props();

  const pathname = $derived(page.url.pathname);

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
  class="prose prose-headings:font-medium prose-headings:leading-snug prose-p:leading-[1.55] prose-a:font-normal prose-a:text-primary prose-a:underline prose-a:decoration-primary prose-a:underline-offset-[3px] prose-a:decoration-1 prose-a:[font-weight:inherit] prose-a:hover:text-primary prose-a:hover:decoration-primary prose-a:hover:no-underline mx-auto flex min-h-dvh max-w-4xl flex-col px-4 sm:px-8"
>
  <header
    class="not-prose border-base-300 bg-base-100 sticky top-0 z-10 -mx-4 mb-0 flex items-start justify-between gap-4 border-b px-4 py-4 [view-transition-name:header] sm:items-center sm:py-8"
  >
    <div
      class="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-y-0"
    >
      <a
        href="/"
        class="hover:no-underline sm:col-start-1 sm:row-start-1"
        class:underline={page.route.id !== "/"}
      >
        <h1
          class="text-base-content shrink-0 text-3xl font-medium tracking-tight"
        >
          Yashash Pugalia
        </h1>
      </a>

      <a
        class="ui-btn-primary shrink-0 justify-self-end sm:col-start-3 sm:row-start-1"
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1rEI0fqz-LcTZS0YQD2azX91sZFjTpPKs/view?usp=sharing"
        aria-label="Open resume (PDF)"
      >
        <iconify-icon icon="material-symbols:download-rounded" class="text-base"
        ></iconify-icon>
        Resume
      </a>

      <nav
        class="text-base-content/90 col-span-2 row-start-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:justify-end"
        aria-label="Site"
      >
        <a href="/" class:underline={pathname === "/"}>About</a>
        <a href="/work" class:underline={pathname.startsWith("/work")}>Work</a>
        <a href="/highlights" class:underline={pathname === "/highlights"}
          >Highlights</a
        >
        <a href="/testimonials" class:underline={pathname === "/testimonials"}
          >Testimonials</a
        >
      </nav>
    </div>
  </header>

  <div class="flex-1">
    {@render children()}
  </div>

  <footer
    class="border-base-300 -mx-4 mt-12 flex flex-wrap items-center gap-4 border-t px-4 py-4 sm:py-8"
  >
    {#each socials as c}
      <a href={c.link} target="_blank" class="flex items-center gap-1">
        <iconify-icon icon={c.icon}></iconify-icon>
        {c.name}
      </a>
    {/each}
  </footer>
</main>
