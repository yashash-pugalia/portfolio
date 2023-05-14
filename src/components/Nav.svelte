<nav>
	<h1>MENU...</h1>
	<a href="#about">About</a>
	<a href="#projects">Projects</a>
	<a href="http://github.com/yashash-pugalia" target="_blank" rel="noreferrer"> Github </a>
	<a href="mailto:hi@yashash.dev" target="_blank" rel="noreferrer"> Contact </a>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: sticky;
		top: 2rem;
		padding: 1rem;
		gap: 1rem;
		background: black;
		box-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
		z-index: 10;

		width: calc(126px * 2);
		max-width: calc(100vw - 1rem);
		height: calc(37px * 2);
		margin: 0 auto;
		border-radius: 4rem;

		transform: scale(0.5);
		transform-origin: top;
		transition: 200ms;
	}
	nav a {
		display: none;
		pointer-events: none;
	}
	nav:hover {
		transform: none;
		border-radius: 1rem;
		width: max-content;
	}
	nav:hover a {
		display: initial;
		animation: a-click-fix 200ms 1 forwards;
	}
	@keyframes a-click-fix {
		100% {
			pointer-events: all;
		}
	}
	nav:hover h1 {
		display: none;
	}

	a {
		font-family: 'Roboto Mono', monospace;
		color: inherit;
		transition: all 200ms;
		padding: 4px 8px;
		border-radius: 4px;
	}
	a:hover {
		text-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
	}
</style>
