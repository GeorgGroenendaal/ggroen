<script lang="ts">
	import BlogView from '../../BlogView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="pb-[30rem]">
	<BlogView content={data.blog} />
</div>
