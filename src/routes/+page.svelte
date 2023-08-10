<script lang="ts">
	import About from '../components/About.svelte';
	import Experience from '../components/Experience.svelte';
	import Projects from '../components/Projects.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<About />

<Experience />

<Projects data={data.res} />
