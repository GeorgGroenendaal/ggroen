<script lang="ts">
	import MetaComponent from '$lib/components/MetaComponent.svelte';
	import BlogView from '../../../lib/components/BlogView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<MetaComponent title="Blog posts" description="All blog posts on ggroen.com" />
</svelte:head>

<div class="pb-[30rem]">
	<BlogView content={data.blog} />
</div>
