<script lang="ts">
  import { page } from "$app/state";
  import { testimonialSlug, type Testimonial } from "$lib/index.svelte";
  import { onMount, tick } from "svelte";

  interface Props {
    data: Testimonial;
    class?: string;
  }

  const { data, class: classes }: Props = $props();

  const highlightTestimonial = async (id: string) => {
    await tick();

    const testimonial = document.querySelector(`#${id}`);

    if (testimonial) {
      testimonial.scrollIntoView({ behavior: "smooth" });
      await tick();

      testimonial.classList.add("testimonial-highlight");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      testimonial.classList.remove("testimonial-highlight");
    }
  };

  onMount(() => {
    if (page.route.id !== "/testimonials") return;

    const id = page.url.searchParams.get("highlight");
    if (id) highlightTestimonial(id);
  });
</script>

<blockquote
  class="prose prose-sm border-base-300 border-l-primary bg-base-200 text-base-content prose-p:my-0 prose-p:leading-snug prose-a:text-primary prose-a:underline prose-a:decoration-primary prose-a:underline-offset-2 hover:prose-a:text-primary hover:prose-a:decoration-primary relative my-0 flex h-full max-w-none flex-none flex-col rounded-lg border border-l-[2pt] py-3 pr-2 pl-4 leading-snug not-italic transition-[border-color,box-shadow] duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] {classes}"
  class:hover:border-primary={data.link}
  id={testimonialSlug(data.name)}
>
  <!-- svelte-ignore a11y_missing_content -->
  {#if data.link}
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      class="absolute inset-0 z-0 rounded-lg"
      aria-label="View Testimonial"
    ></a>
  {/if}

  <div
    class="pointer-events-none relative z-1 flex min-w-0 flex-col gap-3 [&_a]:pointer-events-auto"
  >
    <p class="leading-snug text-[var(--app-prose-quotes)] not-italic">
      {@html data.quote}
    </p>

    <a
      class="text-primary decoration-primary ml-auto inline-flex items-center gap-2 pt-2 text-end text-sm underline underline-offset-2"
      href={data.linkPerson}
      target="_blank"
      rel="noopener noreferrer"
    >
      ~ {data.name}, {data.role}
      <img
        src={data.avatar}
        alt=""
        width="20"
        height="20"
        aria-hidden="true"
        class="ring-base-300 inline-block size-5 rounded-full ring-1"
        loading="lazy"
        decoding="async"
        referrerpolicy="no-referrer"
      />
    </a>
  </div>
</blockquote>
