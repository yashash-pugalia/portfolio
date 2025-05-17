<script lang="ts">
  import { page } from "$app/stores";
  import { onMount, tick } from "svelte";

  interface Props {
    data: {
      name: string;
      role: string;
      quote: string;
      link?: string;
      linkPerson?: string;
    };
    class?: string;
  }

  const { data, class: classes }: Props = $props();

  const highlightTestimonial = async (id: string) => {
    await tick();

    const testimonial = document.querySelector(`#${id}`);

    if (testimonial) {
      testimonial.scrollIntoView({ behavior: "smooth" });
      await tick();

      testimonial.classList.add("bg-base-300");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      testimonial.classList.remove("bg-base-300");
    }
  };

  onMount(() => {
    if ($page.route.id !== "/testimonials") return;

    const id = new URLSearchParams($page.url.search)?.get("highlight");
    if (id) highlightTestimonial(id);
  });
</script>

<blockquote
  class="bg-base-200 relative my-0 flex h-full flex-none flex-col rounded transition {classes}"
  id={data.name.toLowerCase().replace(/ /g, "-")}
>
  <!-- svelte-ignore a11y_missing_content -->
  {#if data.link}
    <a
      href={data.link}
      target="_blank"
      class="hover:border-base-content/20 absolute inset-0 rounded rounded-l-none border border-l-0 border-transparent transition"
      aria-label="View Testimonial"
    ></a>
  {/if}

  <p>{@html data.quote}</p>

  <span class="mt-auto ml-auto p-4 pt-0 text-end">
    {#if data.linkPerson}
      <a href={data.linkPerson} target="_blank">
        ~ {data.name}, {data.role}
      </a>
    {:else}
      ~ {data.name}, {data.role}
    {/if}
  </span>
</blockquote>
