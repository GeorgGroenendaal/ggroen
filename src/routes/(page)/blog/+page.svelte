<script lang="ts">
	import BlogView from '../../../lib/components/BlogView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog posts</title>
	<meta name="description" content="Overview page of all blog posts on ggroen.com" />
</svelte:head>

<div class="pb-[30rem]">
	<BlogView content={data.blog} />
</div>
