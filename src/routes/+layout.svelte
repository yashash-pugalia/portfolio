<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import '../global.css';
</script>

<Nav />
<main class="max-w-screen-xl mx-auto w-full grow">
	<slot />
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
