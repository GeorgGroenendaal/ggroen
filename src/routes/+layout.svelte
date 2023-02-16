<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';

	const links = {
		'/': 'home',
		'/blog': 'blog'
		// '/': 'projects',
		// '/': 'contact'
	};
</script>

<div class="sticky top-0 left-0 right-0 text-lg tracking-wide bg-primary-900 text-light">
	<div
		class="container flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto sm:py-6"
	>
		<div class="relative flex items-center my-2">
			<div class="absolute z-20 w-10 h-10 rounded-sm shadow -top-2 -left-2 bg-primary-100" />
			<div class="z-10 w-10 h-10 rounded-sm shadow bg-primary-200" />
			<div class="absolute w-10 h-10 rounded-sm shadow top-2 left-2 bg-primary-300" />
			<p class="hidden ml-4 text-xl select-none sm:block">ggroen.com</p>
		</div>

		<div class="items-center hidden space-x-4 sm:flex">
			{#each Object.entries(links) as [href, label]}
				<a class="align-middle hover:brightness-75 " {href}>{label}</a>
			{/each}
		</div>

		<button class="relative transition-all group sm:hidden">
			<div class="flex items-center">
				<iconify-icon
					class="group-focus:brightness-75"
					icon="ph:list-bold"
					width="36"
					height="36"
				/>
			</div>
			<div
				class="absolute z-30 hidden w-40 px-2 py-2 space-x-2 text-left border rounded-md shadow right-1 group-focus:block bg-primary-800 border-primary-900 hover:block"
			>
				<div class="flex flex-col space-y-2">
					{#each Object.entries(links) as [href, label]}
						<a class="px-2 py-1 rounded hover:brightness-75 hover:bg-primary-800" {href}>{label}</a>
					{/each}
				</div>
			</div>
		</button>
	</div>
</div>

<slot />

<div class="bg-dark text-light py-12">
	<div class="flex container max-w-screen-xl" />
	<!-- footer -->
</div>
