import type { contentMeta } from './types';

const components = import.meta.glob('../blog/*.md');

export const loadAll = async () => {
	let posts: {
		[key: string]: {
			component: ConstructorOfATypedSvelteComponent;
			metadata: contentMeta;
		};
	} = {};

	for (const [path, component] of Object.entries(components)) {
		const comp = await component();
		const slug = path.replace('.md', '').replace('../blog/', '');

		posts = {
			...posts,
			[slug]: {
				component: comp.default,
				metadata: comp.metadata
			}
		};
	}

	return posts;
};

export const loadOne = async (slug: string) => {
	const posts = await loadAll();
	return posts[slug];
};

export const loadMeta = async () => {
	const response: contentMeta[] = [];

	const posts = await loadAll();

	for (const [slug, post] of Object.entries(posts)) {
		response.push({
			slug,
			title: post.metadata.title,
			date: post.metadata.date,
			tags: post.metadata.tags,
			description: post.metadata.description
		});
	}

	response.sort((a, b) => {
		// convert DD-MM-YYYY to MM-DD-YYYY. european to american with regex
		const a_converted = a.date.replace(/(\d+)-(\d+)-(\d+)/, '$2-$1-$3');
		const b_converted = b.date.replace(/(\d+)-(\d+)-(\d+)/, '$2-$1-$3');

		return Date.parse(b_converted) - Date.parse(a_converted);
	});

	return response;
};
