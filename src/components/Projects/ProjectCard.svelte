<script>
  export let img, title, desc, repoLink, website;
</script>

<div class="projectCard cardBox">
  <h3>{title}</h3>
  <img src={img} alt={title} width="272" height="153" />
  <p>{desc}</p>
  <div class="btnBox">
    <a href={website} target="_blank" rel="noreferrer" class="btn">
      View Live
    </a>
    <a href={repoLink} target="_blank" rel="noreferrer" class="btn btn-github">
      Github
    </a>
  </div>
</div>

<style>
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
