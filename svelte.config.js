import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		vitePreprocess(), 
		preprocess({
			postcss: true
    	}),
		mdsvex({extensions: ['.md', '.svx']})
	],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
		}),
	}
};

export default config;
