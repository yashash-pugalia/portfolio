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
        <div
          class="projectCard cardBox"
          style="background-image: url({`img/${name}.webp`})"
        >
          <!-- <img src={`img/${name}.webp`} alt={name} width="320" height="160" /> -->
          <h3>{name.replaceAll("-", " ")}</h3>
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
              class="btn btn-gh"
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

<style lang="scss">
  .projectCont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    width: 100%;
  }
  .projectCard {
    width: 22.5rem;
    height: 202.5px;
    gap: 0.5rem;
    box-shadow: 0 0 8px black;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: all 200ms;
    z-index: -1;

    * {
      transform: translateY(150px);
      transition: all 200ms;
    }

    h3 {
      text-shadow: 0 0 8px black;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -2;
      transition: all 200ms;
    }
    &:hover {
      &::after {
        backdrop-filter: blur(1rem);
        background: rgb(0 0 0 / 10%);
      }

      * {
        transform: none;
      }
    }
  }

  .btnBox {
    margin-top: auto;
  }

  h3 {
    font-size: 1.25rem;
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
