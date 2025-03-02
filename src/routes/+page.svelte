<script lang="ts">
  import { education, projects, socials, testimonials, work } from "$lib";
  import Marquee from "svelte-fast-marquee";
  import SvelteMarkdown from "svelte-markdown";
  import { slide } from "svelte/transition";
  import MarkdownLink from "./MarkdownLink.svelte";
  import Testimonial from "./Testimonial.svelte";
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<!-- <h2 class="font-normal tracking-wider">Software Developer</h2> -->

<h2>Work Experience</h2>
{#each work as w}
  <div class="flex justify-between gap-2">
    <!-- custom-hover-effect cursor-pointer -->
    <!-- onclick={() => (w.collapsed = !w.collapsed)} -->
    <h3>
      <a href={w.link} target="_blank">{w.company}</a>
    </h3>
    <p class="mt-auto">{w.date}</p>
  </div>
  {#if !w.collapsed}
    <p transition:slide={{ delay: 0 }}>{w.location}</p>
    <p transition:slide={{ delay: 100 }}>{w.desc}</p>
    <p transition:slide={{ delay: 200 }}>Stack: {w.stack}</p>
  {/if}
{/each}

<h2>Projects</h2>
{#each projects as p}
  <div class="flex justify-between gap-2">
    <!-- custom-hover-effect cursor-pointer -->
    <!-- onclick={() => (p.collapsed = !p.collapsed)} -->
    <h3 class="space-x-2">
      <a
        href={p.link}
        target="_blank"
        class="project-image [--mousePos:0]"
        style:--previewImage="url('{p.previewImage}')"
        onmousemove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          e.currentTarget.style.setProperty("--mousePos", `${x}px`);
        }}
      >
        {p.title}
      </a>
      <a class="text-sm font-normal" href={p.github} target="_blank">
        (GitHub)
      </a>
    </h3>
    <p class="mt-auto">{p.date}</p>
  </div>

  {#if !p.collapsed}
    <div transition:slide>
      <SvelteMarkdown source={p.desc} renderers={{ link: MarkdownLink }} />
    </div>

    <p transition:slide={{ delay: 200 }}>
      Stack: {p.stack}
    </p>
  {/if}
{/each}

<h2>
  <a href="/testimonials"> Testimonials </a>
</h2>
<div class="@container">
  <Marquee gap="1rem" pauseOnHover={true}>
    {#each testimonials as t, idx}
      <Testimonial data={t} class="w-[83cqw]" />
    {/each}
  </Marquee>
</div>

<h2>Education</h2>
{#each education as e}
  <div class="flex justify-between gap-2">
    <h3>{e.school}</h3>
    <p class="mt-auto">{e.date}</p>
  </div>

  <p>{e.degree}</p>
{/each}

<h2>Socials</h2>
<div class="grid w-fit grid-cols-2 gap-2">
  {#each socials as c}
    <span>{c.name}: </span>
    <a href={c.link} target="_blank">{c.linkDisplay}</a>
  {/each}
</div>

<style lang="postcss">
  @reference "../app.css";

  /* Kept if we want accordian style back */
  /* .custom-hover-effect {
    @apply relative;
  }
  .custom-hover-effect::before {
    @apply pointer-events-none absolute -inset-x-4 -inset-y-1 -z-10 mt-4 rounded  opacity-0 transition-all [content:''] ;
  }
  .custom-hover-effect:hover::before {
    @apply opacity-100;
  } */

  .project-image {
    @apply relative;
  }

  .project-image::after {
    @apply border-base-300 pointer-events-none absolute left-1/2 z-1 h-40 w-[272px] translate-x-[calc(-50%+var(--mousePos))] -translate-y-full scale-50 rounded border-8 [background-image:var(--previewImage)] bg-contain bg-no-repeat opacity-0 transition-all duration-100 [content:''];
  }
  .project-image:hover::after {
    @apply -translate-y-[calc(100%+1.5rem)] scale-100 opacity-100;
  }
</style>
