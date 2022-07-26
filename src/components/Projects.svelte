<script>
  const getRepos = (async () => {
    const response = await fetch(
      "https://api.github.com/users/yashash1511/repos?type=all"
    );
    return await response.json();
  })();
</script>

<section id="projects">
  <h2>Projects</h2>
  <div class="projectCont">
    {#await getRepos}
      <p>Loading...</p>
    {:then repos}
      {#each repos as r}
        {#if !r.fork}
          <div
            class="projectCard cardBox"
            style:--bgImg="url('{r.homepage}/demo.webp')"
          >
            <h3>
              {r.name.charAt(0).toUpperCase() +
                r.name.slice(1).replace(/([A-Z]{1,})/g, " $1")}
            </h3>
            <p>{r.description}</p>
            <div class="topics">
              {#each r.topics as topic}
                <span class:uppercase={topic.length < 5}>{topic}</span>
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
                class="btn btn-gh"
              >
                Github
              </a>
            </div>
          </div>
        {/if}
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
    background: var(--bgImg) center / cover no-repeat;
    width: 22.5rem;
    height: 202.5px;
    gap: 10px;
    position: relative;
    overflow: hidden;
    z-index: 0;
    transition: all 333ms;

    > * {
      transform: translateY(140px);
      transition: all 333ms;
    }
    > *:not(h3) {
      opacity: 0;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -10;
      background: linear-gradient(transparent, rgb(0 0 0 / 50%));
      height: 3rem;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -10;
      inset: 0;
      transition: all 100ms;
    }
    &:hover {
      transform: translateY(-4px);

      &::after {
        backdrop-filter: blur(8px);
        background: rgb(0 0 0 / 10%);
      }

      > * {
        transform: none;
        opacity: 1;
      }
    }
  }

  h3 {
    font-size: 1.25rem;
    text-shadow: 0 0 8px black;
  }
  .topics {
    color: var(--clr2);
    display: flex;
    gap: 1rem;
    margin-top: auto;
    text-transform: capitalize;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
