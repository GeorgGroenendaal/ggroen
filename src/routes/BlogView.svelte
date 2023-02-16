<script lang="ts">
	import { base } from '$app/paths';
	import type { contentMeta } from '$lib/types';
	import Tag from '../lib/components/Tag.svelte';

	export let content: contentMeta;
	export let title = 'Blog';
</script>

<div class="rounded flex flex-grow flex-col space-y-4 md:max-w-sm min-w-0">
	<h2 class="text-4xl font-bold">{title}</h2>
	{#each content as b}
		<a href="{base}/blog/{b.slug}">
			<div
				class="px-4 transition py-2 border border-opacity-0 rounded-lg hover:border-primary-700 hover:brightness-125 shadow"
			>
				<div class="flex justify-between items-baseline space-x-4">
					<h3 class="text-xl font-bold">
						{b.title}
					</h3>
					<p class="text-sm  text-opacity-75 font-thin">
						{b.date}
					</p>
				</div>
				{#each b.tags as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>
		</a>
	{/each}
</div>
