<script lang="ts">
  import Marquee from "svelte-fast-marquee";
  import SvelteMarkdown from "svelte-markdown";

  import { education, projects, stack, testimonials, work } from "$lib";
  import Testimonial from "../Testimonial.svelte";
  import MarkdownLink from "./MarkdownLink.svelte";
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<h2>Work Experience</h2>
{#each work as w}
  <div class="flex gap-2">
    {#if w.link}
      <a href={w.link} target="_blank">
        <h3>{w.company}</h3>
      </a>
    {:else}
      <h3>{w.company}</h3>
    {/if}
    <p class="mt-auto mb-2.5 ml-auto">{w.date}</p>
  </div>
  <p class="-mt-2 text-xs">{w.location}</p>

  <SvelteMarkdown source={w.desc} renderers={{ link: MarkdownLink }} />
{/each}

<h2>Projects</h2>
{#each projects as p}
  <div class="flex gap-2">
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
    </h3>
    <p class="mt-auto mb-2.5 ml-auto">{p.date}</p>
  </div>

  <SvelteMarkdown source={p.desc} renderers={{ link: MarkdownLink }} />
{/each}

<h2>Tech Stack</h2>
{#each stack as s}
  <p>
    <strong>{s.section}: </strong>
    <span>{s.stack.join(" · ")}</span>
  </p>
{/each}

<a href="/testimonials">
  <h2>Testimonials</h2>
</a>
<div class="@container print:hidden">
  <Marquee gap="1rem" pauseOnHover={true}>
    {#each testimonials as t, idx}
      <Testimonial data={t} class="w-[83cqw]" />
    {/each}
  </Marquee>
</div>
<div class="hidden print:block">
  {#each testimonials as t, idx}
    <Testimonial data={t} />
  {/each}
</div>

<h2>Education</h2>
{#each education as e}
  <h3>{e.school}</h3>
  <p>{e.degree}</p>
{/each}

<div class="flex items-end justify-between gap-4 print:hidden">
  <div>
    <h2>Thank You!</h2>
    <p>for reading the whole thing, lucky me :)</p>
  </div>
  <img
    src="/me.jpg"
    alt="Yashash Pugalia"
    class="w-20 rounded-full grayscale transition hover:grayscale-0"
  />
</div>

<style lang="postcss">
  @reference "../app.css";

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
