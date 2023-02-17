<script lang="ts">
	import kwesforms from 'kwesforms'; // @ts-nocheck
	import { onMount } from 'svelte';

	onMount(() => {
		kwesforms.init();
	});
</script>

<svelte:head>
	<title>Contact</title>
	<meta
		name="description"
		content="Contact form to reach my email. Fill in your contact details and I will be in touch as soon as possible"
	/>
</svelte:head>

<div class="max-w-3xl mx-auto p-16 pb-72">
	<h1 class="text-4xl font-bold">Contact me</h1>

	<p class="text-lg font-serif my-4">
		Fill in your details below and I will be in touch as soon as possible
	</p>

	<form
		class="kwes-form flex flex-col gap-1"
		action="https://kwesforms.com/api/foreign/forms/sRZ53JPJlmZCKRtaLWfK"
	>
		<label for="name" class="mt-4">Name</label>
		<input type="text" class="h-10 px-2 rounded-lg bg-white border" name="name" id="name" />

		<label for="email" class="mt-4">Email</label>
		<input type="email" name="email" id="email" class="h-10 px-2 rounded-lg bg-white border" />

		<label for="message" class="mt-4">Message</label>
		<textarea name="message" class="h-64 px-2 rounded-lg bg-white border" id="message" />

		<button class="self-end px-4 py-2 mt-4 bg-green-800 font-bold text-white rounded" type="submit"
			>Submit</button
		>
	</form>
</div>
