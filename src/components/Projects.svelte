<script>
  const projects = [
    {
      name: "Windows 11 Settings",
      desc: "Recreating the Windows 11 settings app in ReactJS.",
      repo: "windows11-settings",
    },
    {
      name: "Portfolio",
      desc: "Portfolio website made in Svelte.",
      repo: "yashash1511.github.io",
    },
  ];
</script>

<section id="projects">
  <h2>Projects</h2>
  <div class="projectCont">
    {#each projects as { name, desc, repo }}
      <div class="projectCard cardBox">
        <h3>{name}</h3>
        <img src={`./img/${repo}.webp`} alt={name} width="272" height="153" />
        <p>{desc}</p>
        <div class="btnBox">
          <a
            href={`https://yashash1511.github.io/${repo}`}
            target="_blank"
            rel="noreferrer"
            class="btn"
          >
            View Live
          </a>
          <a
            href={`https://github.com/yashash1511/${repo}`}
            target="_blank"
            rel="noreferrer"
            class="btn btn-github"
          >
            Github
          </a>
        </div>
      </div>
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

  .projectCard {
    width: 20rem;
    gap: 1rem;
  }
  h3 {
    font-size: 1.33rem;
  }
  img {
    border-radius: 6px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
