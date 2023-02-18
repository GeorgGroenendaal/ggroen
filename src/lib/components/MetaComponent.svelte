<script lang="ts">
	import banner from '$lib/assets/logo_text.png?width=1200&height=630&position=left&format=jpeg&imagetools';

	export let title: string = 'Portfolio of Georg Groenendaal';
	export let description: string =
		'Portfolio of Georg Groenendaal - Masters student in AI and software engineer. Discover my projects, code samples, and insights on various topics related to computer science and artificial intelligence.';
	export let image: string = banner;

	console.log(image);
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={banner} />
<meta property="og:image:alt" content="website banner" />
