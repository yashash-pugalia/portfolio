<script lang="ts">
  import MarkdownLink from "../MarkdownLink.svelte";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";
  import { experience, projects } from "$lib/resume-work-content";

  const cardProse =
    "prose prose-sm max-w-none text-base-content pointer-events-none relative z-[2] prose-headings:font-medium";

  const sectionAriaKind = {
    experience: "experience",
    project: "project",
  } as const;

  /** Short names for accessibility labels (`id` stays the canonical URL segment). */
  const cardAriaTitle: Record<string, string> = {
    haast: "Haast",
    "realm-labs": "Realm Labs",
    "windows11-web": "Windows 11 Web",
    "prosper-mint": "Prosper Mint",
  };

  type SectionKind = keyof typeof sectionAriaKind;
</script>

<h2>Work</h2>

{#snippet workSection(title: string, items: typeof experience, kind: SectionKind, headingClass: string)}
  <h3 class="text-[color:var(--tw-prose-headings)] {headingClass}">{title}</h3>

  <div class="mt-6 flex flex-col gap-5">
    {#each items as item (item.id)}
      <article
        class="not-prose bg-base-200 ring-base-300 hover:ring-primary/20 relative flex cursor-pointer flex-col gap-3 rounded-2xl p-5 ring-1 transition-[box-shadow] sm:p-6"
      >
        <a
          href="/work/{item.id}"
          class="absolute inset-0 z-[1] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="View {cardAriaTitle[item.id] ?? item.id} {sectionAriaKind[kind]}"
        ></a>
        <div class={cardProse} inert>
          <h4 style="view-transition-name: work-head-{item.id}">{item.title}</h4>
          {#if item.years || item.location}
            <p style="view-transition-name: work-meta-{item.id}">
              {[item.years, item.location].filter(Boolean).join(" · ")}
            </p>
          {/if}
          {#if item.summary.trim()}
            <div style="view-transition-name: work-sum-{item.id}">
              <SvelteMarkdown
                source={item.summary}
                renderers={{ link: MarkdownLink }}
              />
            </div>
          {/if}
        </div>
      </article>
    {/each}
  </div>
{/snippet}

{@render workSection("Experience", experience, "experience", "mt-8")}
{@render workSection("Projects", projects, "project", "mt-14")}
