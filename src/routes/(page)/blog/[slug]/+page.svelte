<script lang="ts">
	import { page } from '$app/stores';
	import MetaComponent from '$lib/components/MetaComponent.svelte';
	import BlogView from '../../../../lib/components/BlogView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: otherMeta = data.blog.filter((meta) => meta.slug !== $page.params.slug);
</script>

<svelte:head>
	<MetaComponent title={data.metadata.title} description={data.metadata.description} />
	<meta name="keywords" content={data.metadata.tags.join(', ')} />
</svelte:head>

<div class="flex flex-col md:flex-row py-12 justify-between md:space-y-0 space-y-16 md:space-x-8">
	<article
		class="prose flex-grow prose-headings:text-dark prose-headings:font-sans max-w-2xl prose-p:font-serif prose-p:text-dark prose-lg prose-a:text-accent-400 "
	>
		<div class="not-prose text-dark">
			<h1 class="mb-2 text-5xl font-bold">{data.metadata.title}</h1>
			<p class="text-sm">Published on {data.metadata.date}</p>
		</div>

		<svelte:component this={data.content} />
	</article>

	<BlogView content={otherMeta} title="Other posts" />
</div>
