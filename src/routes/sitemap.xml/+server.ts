import type { RequestHandler } from './$types';
import { website } from '$lib/info';
import { loadMeta } from '$lib/blog';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const metadata = await loadMeta();

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
		  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		  xmlns:xhtml="https://www.w3.org/1999/xhtml"
		  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>

		<url>
			<loc>${website}/</loc>
			<changefreq>daily</changefreq>
			<priority>1.0</priority>
		</url>

		<url>
			<loc>${website}/blog</loc>
			<changefreq>daily</changefreq>
			<priority>0.9</priority>
		</url>

		<url>
			<loc>${website}/contact</loc>
			<changefreq>daily</changefreq>
			<priority>0.9</priority>
		</url>

		${metadata
			.map((post) => {
				return `<url>
				<loc>${website}/blog/${post.slug}</loc>
				<changefreq>daily</changefreq>
				<priority>0.8</priority> 
				</url> `;
			})
			.join('\n')}


		</urlset>
		`,
		{
			headers
		}
	);
};
