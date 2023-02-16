const components = import.meta.glob('../blog/*.md');

export const loadAll = async () => {
	let posts: {
		[key: string]: {
			component: ConstructorOfATypedSvelteComponent;
			metadata: {
				title: string;
				date: string;
				tags: string[];
			};
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
	const response: {
		slug: string;
		title: string;
		date: string;
		tags: string[];
	}[] = [];

	const posts = await loadAll();

	for (const [slug, post] of Object.entries(posts)) {
		response.push({
			slug,
			title: post.metadata.title,
			date: post.metadata.date,
			tags: post.metadata.tags
		});
	}

	return response;
};
