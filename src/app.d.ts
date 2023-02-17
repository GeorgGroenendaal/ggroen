// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '*&imagetools' {
	// from https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-1009292026
	const out;
	export default out;
}

declare module 'kwesforms' {
	// fix to make kwesforms work with sveltekit
	export function init(): void;
}
