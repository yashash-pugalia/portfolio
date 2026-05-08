<script lang="ts">
  interface Props {
    /** Numeric tweet id from the status URL. */
    id: string;
    /** `masonry`: fill column width, shorter iframe so cards can differ in height. */
    variant?: "default" | "masonry";
  }

  let { id, variant = "default" }: Props = $props();

  const src = $derived(
    `https://platform.twitter.com/embed/Tweet.html?id=${encodeURIComponent(id)}&theme=light&lang=en&dnt=true`,
  );

  const shellClass = $derived(
    variant === "masonry"
      ? "not-prose bg-base-200 ring-base-300 w-full max-w-none overflow-hidden rounded-2xl ring-1"
      : "not-prose bg-base-200 ring-base-300 mx-auto w-full max-w-[550px] overflow-hidden rounded-2xl ring-1",
  );

  /** Shorter box in masonry so short tweets do not inherit a huge min-height. */
  const iframeStyle = $derived(
    variant === "masonry"
      ? "height: min(65vh, 520px); min-height: 260px;"
      : "height: min(90vh, 820px); min-height: 480px;",
  );
</script>

<div class={shellClass}>
  <iframe
    title="Post on X"
    {src}
    class="block w-full border-0"
    style={iframeStyle}
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
