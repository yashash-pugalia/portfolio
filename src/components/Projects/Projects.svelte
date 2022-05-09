<script>
  import ProjectCard from "./ProjectCard.svelte";

  const projectData = {
    "Windows 11 Settings": {
      img: "./img/settings.webp",
      desc: "Recreating the Windows 11 settings app in ReactJS.",
      repoLink: "https://github.com/yashash1511/windows11-settings",
      website: "https://yashash1511.github.io/windows11-settings/",
    },
    Portfolio: {
      img: "./img/portfolio.webp",
      desc: "Portfolio website made in ReactJS.",
      repoLink: "https://github.com/yashash1511/yashash1511.github.io",
      website: "https://yashash1511.github.io/",
    },
  };

</script>

<section id="projects">
  <h2>Projects</h2>
  <div class="projectCont">
    {#each Object.entries(projectData) as [title, data]}
      <ProjectCard {title} {...data} />
    {/each}
  </div>
</section>

<style>
  .projectCont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    width: 100%;
  }
</style>