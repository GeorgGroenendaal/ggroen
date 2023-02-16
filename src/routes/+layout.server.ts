import { loadMeta } from '$lib/blog';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	const blog = await loadMeta();

	return {
		blog
	};
}) satisfies LayoutServerLoad;
