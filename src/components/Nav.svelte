<nav>
  <h1>Yashash</h1>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="http://github.com/yashash1511" target="_blank" rel="noreferrer">
    Github
  </a>
  <a href="mailto:yashash1511@gmail.com" target="_blank" rel="noreferrer">
    Contact
  </a>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 0;
    height: 3rem;
    width: 100%;
    background: var(--bg2);
    backdrop-filter: blur(8px);
    border-bottom: 2px solid var(--bg3);
    border-radius: 0 0 8px 8px;
    z-index: 10;
  }

  a {
    font-family: "Roboto Mono", monospace;
    color: inherit;
    transition: all 200ms;
    padding: 4px 8px;
    border-radius: 4px;
  }
  a:hover {
    background: var(--bg3);
  }
</style>
