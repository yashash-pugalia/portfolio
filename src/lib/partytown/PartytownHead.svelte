<script lang="ts">
  import { partytownSnippet } from "@qwik.dev/partytown/integration";
</script>

<svelte:head>
  <script>
    partytown = {
      forward: ["dataLayer.push", "gtag"],
    };
  </script>

  {@html '<script>' + partytownSnippet() + '</script>'}

  <script
    type="text/partytown"
    src="https://www.googletagmanager.com/gtag/js?id=G-94YW8BED1P"
  ></script>
  <script type="text/partytown">
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", "G-94YW8BED1P");
  </script>
</svelte:head>
