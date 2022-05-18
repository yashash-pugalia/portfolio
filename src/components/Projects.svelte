<script>
  const getRepos = (async () => {
    const res = await fetch("https://api.github.com/users/yashash1511/repos");
    return await res.json();
  })();
</script>

<section id="projects">
  <h2>Projects</h2>
  <div class="projectCont">
    {#await getRepos}
      <p>Loading...</p>
    {:then repos}
      {#each repos as r}
        <div class="projectCard cardBox">
          <h3>{r.name.replaceAll("-", " ")}</h3>
          <img
            src={`img/${r.name}.webp`}
            alt={r.name}
            width="272"
            height="153"
          />
          <p>{r.description}</p>
          <div class="topics">
            {#each r.topics as topic}
              <p class={topic.length <= 4 ? "uppercase" : ""}>{topic}</p>
            {/each}
          </div>
          <div class="btnBox">
            <a href={r.homepage} target="_blank" rel="noreferrer" class="btn">
              View Live
            </a>
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              class="btn btn-github"
            >
              Github
            </a>
          </div>
        </div>
      {/each}
    {:catch error}
      <p>{error.message}</p>
    {/await}
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
  .topics {
    display: flex;
    gap: 1rem;
    opacity: 50%;
    text-transform: capitalize;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
