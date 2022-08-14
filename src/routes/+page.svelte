<script>
	import About from '../components/About.svelte';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import Projects from '../components/Projects.svelte';

	import '../global.css';
</script>

<Nav />
<main>
	<About />
	<Projects />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 1rem 3rem 1rem;
		gap: 4rem;
	}
</style>
