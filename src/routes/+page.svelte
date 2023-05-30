<script lang="ts">
	import About from '../components/About.svelte';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import Projects from '../components/Projects.svelte';
	import '../global.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Nav />
<main>
	<About />
	<Projects data={data.res} />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 1rem 3rem 1rem;
		gap: 4rem;
	}

	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
