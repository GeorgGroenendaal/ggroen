import type { PageLoad } from './$types';
import { loadOne } from '$lib/blog';

export const load = (async ({ params }) => {
	const { slug } = params;

	// print current fs path
	const post = await loadOne(slug);

	const metadata = post.metadata;
	const content = post.component;

	return {
		metadata,
		content: content
	};
}) satisfies PageLoad;
