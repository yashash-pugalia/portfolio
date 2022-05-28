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
      {#each repos as { name, description, topics, homepage, html_url }}
        <div class="projectCard cardBox">
          <h3>{name.replaceAll("-", " ")}</h3>
          <img src={`img/${name}.webp`} alt="" width="280" height="140" />
          <p>{description}</p>
          <div class="topics">
            {#each topics as t}<p class:uppercase={t.length < 5}>{t}</p>{/each}
          </div>
          <div class="btnBox">
            <a href={homepage} target="_blank" rel="noreferrer" class="btn">
              View Live
            </a>
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              class="btn btn-github"
            >
              Github
            </a>
          </div>
        </div>
      {/each}
    {:catch error}<p>{error.message}</p>
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
    font-size: 1.25rem;
  }
  img {
    border-radius: 4px;
    outline: 1px solid var(--bg3);
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
