<script lang="ts">
  interface Props {
    /** e.g. urn:li:share:7325814092743561216 or urn:li:ugcPost:7402502643920785409 */
    urn: string;
    variant?: "default" | "masonry";
  }

  let { urn, variant = "default" }: Props = $props();

  /** `collapsed=1` trims long posts in the embed chrome. */
  const src = $derived(
    `https://www.linkedin.com/embed/feed/update/${encodeURIComponent(urn)}?collapsed=1`,
  );

  const shellClass = $derived(
    variant === "masonry"
      ? "not-prose bg-base-200 ring-base-300 w-full max-w-none overflow-hidden rounded-2xl ring-1"
      : "not-prose bg-base-200 ring-base-300 mx-auto w-full max-w-[504px] overflow-hidden rounded-2xl ring-1",
  );
</script>

<div class={shellClass}>
  <iframe
    src={src}
    title="Embedded post"
    width="504"
    height="670"
    frameborder="0"
    class="mx-auto block max-w-full border-0"
    style="width: 504px; max-width: 100%; height: 670px;"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
