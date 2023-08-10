<script lang="ts">
	const exp = [
		{
			company: 'Haast',
			link: 'https://haast.io',
			role: 'Software Developer',
			start: 'Aug 2023',
			end: 'Present',
			// description: 'Description 2'
			location: 'Australia - Remote'
		},
		{
			company: 'Realm Labs AI',
			link: 'https://koscope.vercel.app',
			role: 'Software Engineer',
			start: 'Jan 2023',
			end: 'Jul 2023',
			// description: 'Description 1'
			location: 'New York - Remote',
			skills:
				'Skills: MongoDB · Prisma · Google Cloud Platform (GCP) · SvelteKit · TypeScript · Git · JavaScript · GitHub · Svelte · Tailwind CSS'
		}
	];
</script>

<section id="experience">
	<h2>Work Experience</h2>

	<div class="expCont">
		{#each exp as e}
			<div class="cardBox w-80">
				<a href={e.link}>{e.role} · {e.company}</a>
				<p class="text-sm opacity-75">{e.start} - {e.end}</p>
				<p class="text-sm opacity-75">{e.location}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	#experience {
	}

	.expCont {
		display: flex;
		flex-wrap: wrap;
		column-gap: 2rem;
		align-items: center;
		justify-content: center;
	}
</style>
