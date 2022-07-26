<script>
  import { date } from "../store";
</script>

<section id="about">
  <h2>About</h2>
  <div class="abCont">
    <div class="about cardBox">
      <h3>Hi, I am Yashash. 👋</h3>
      <p>
        I am a
        <span class="monospace">
          {(
            ($date - Date.parse("2004-11-15")) /
            (365.25 * 24 * 3600000)
          ).toFixed(10)}
        </span>
        years old student from New Delhi, India.
      </p>
      <p>
        Want to contact?
        <a href="mailto:yashash1511@gmail.com" target="_blank" rel="noreferrer">
          email me
        </a>
      </p>
      <p>Have Discord? Will travel! - Yashash#6681</p>
    </div>
    <div class="skills cardBox">
      <h3>Languages && Tools</h3>
      <p>Python</p>
      <p>MySQL</p>
      <p>Javascript, ReactJS, Svelte</p>
      <p>CSS, SASS, Tailwind, Bootstrap</p>
      <p>HTML</p>
      <p>Git, Github</p>
    </div>
  </div>
</section>

<style>
  #about {
    padding-top: 3rem;
  }

  .abCont {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .about,
  .skills {
    gap: 0.75rem;
  }
  .skills p {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>
