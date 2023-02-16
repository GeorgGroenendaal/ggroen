<script lang="ts">
	export let noText = false;
</script>

<div class="relative flex items-center my-2">
	<div class="absolute z-20 w-10 h-10 rounded-sm shadow -top-2 -left-2 bg-primary-100" />
	<div class="z-10 w-10 h-10 rounded-sm shadow bg-primary-200" />
	<div class="absolute w-10 h-10 rounded-sm shadow top-2 left-2 bg-primary-300" />
	{#if !noText}
		<p class="hidden ml-4 text-xl select-none sm:block">ggroen.com</p>
	{/if}
</div>
