<script lang="ts">
	import Logo from '../lib/components/Logo.svelte';

	import '../app.postcss';
	import { page } from '$app/stores';

	const links = {
		'/': 'home',
		'/blog': 'blog',
		'/contact': 'contact'
	};
</script>

<div class="sticky top-0 left-0 right-0 text-lg tracking-wide bg-primary-900 text-light">
	<div
		class="container flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto sm:py-6"
	>
		<Logo />

		<nav class="items-center hidden space-x-4 sm:flex">
			{#each Object.entries(links) as [href, label]}
				<a class="align-middle hover:brightness-75 " {href}>{label}</a>
			{/each}
		</nav>

		<button class="relative transition-all group sm:hidden" aria-label="Expand navigation menu">
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
				<nav class="flex flex-col space-y-2">
					{#each Object.entries(links) as [href, label]}
						<a class="px-2 py-1 rounded hover:brightness-75 hover:bg-primary-800" {href}>{label}</a>
					{/each}
				</nav>
			</div>
		</button>
	</div>
</div>

<slot />

<div class="bg-dark text-light py-12">
	<div class="flex container max-w-screen-xl mx-auto items-center px-4">
		<div class="hue-rotate-60 grow w-0">
			<Logo noText={true} />
		</div>

		<!-- copyright notice -->
		<div>
			<p class="text-sm">&copy; {new Date().getFullYear()} Georg Groenendaal</p>
		</div>

		<div class="grow" />
	</div>
	<!-- footer -->
</div>
