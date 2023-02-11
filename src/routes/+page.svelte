<script lang="ts">
	import { Alert, FooterLink } from 'flowbite-svelte';
	import { base } from '$app/paths';

	import test from '$lib/assets/test.jpg?run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="p-8">
	<Img class="w-full" src="{test}" alt="test" />
</div>
