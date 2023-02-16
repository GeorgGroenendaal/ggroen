<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<article
	class="prose prose-headings:text-dark prose-headings:font-sans prose-p:font-serif prose-p:text-dark prose-lg mx-auto pt-8 prose-a:text-accent-400"
>
	<div class="not-prose text-dark">
		<h1 class="mb-2 text-5xl font-bold">{data.title}</h1>
		<p class="text-sm">Published on {data.date}</p>
	</div>

	<svelte:component this={data.content} />
</article>
