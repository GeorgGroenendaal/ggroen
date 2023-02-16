import type { PageLoad } from './$types';
import { loadOne } from '$lib/blog';

export const load = (async ({ params }) => {
	const { slug } = params;

	// print current fs path
	const post = await loadOne(slug);

	const { title, date } = post.metadata;
	const content = post.component;

	return {
		title: title,
		date: date,
		content: content
	};
}) satisfies PageLoad;
