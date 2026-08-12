<script lang="ts">
  import { experience, projects } from "#lib/resume-work-content.ts";
  import WorkHeader from "#lib/WorkHeader.svelte";

  const cardProse =
    "prose prose-sm max-w-none text-base-content pointer-events-none prose-headings:font-medium prose-h4:my-0 prose-h4:text-lg prose-p:my-0 [&>p]:mt-1 [&>p]:text-sm [&>p]:text-[var(--app-prose-quotes)] [&_div]:mt-3";

  const sectionAriaKind = {
    experience: "experience",
    project: "project",
  } as const;

  type SectionKind = keyof typeof sectionAriaKind;
</script>

<h2>Work</h2>

{#snippet workSection(
  title: string,
  items: typeof experience,
  kind: SectionKind,
  headingClass: string,
)}
  <h3 class="text-[color:var(--tw-prose-headings)] {headingClass}">{title}</h3>

  <div class="mt-6 flex flex-col gap-5">
    {#each items as item (item.id)}
      <article
        class="group bg-base-200 ring-base-300 hover:ring-primary/20 relative cursor-pointer rounded-2xl p-5 ring-1 transition-[box-shadow] sm:p-6"
      >
        <div class={cardProse} inert>
          <WorkHeader work={item} heading="h4" />
        </div>
        <iconify-icon
          icon="lucide:arrow-up-right"
          aria-hidden="true"
          class="text-primary pointer-events-none absolute top-4 right-4 text-lg opacity-0 transition group-focus-within:opacity-100 group-hover:opacity-100 sm:top-5 sm:right-5"
        ></iconify-icon>
        <a
          href="/work/{item.id}"
          class="focus-visible:outline-primary absolute inset-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="View {item.title} {sectionAriaKind[kind]}"
        ></a>
      </article>
    {/each}
  </div>
{/snippet}

{@render workSection("Experience", experience, "experience", "mt-8")}
{@render workSection("Projects", projects, "project", "mt-14")}
