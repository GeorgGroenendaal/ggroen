<script lang="ts">
	import banner from '$lib/assets/logo_text.png?width=1200&height=630&position=left&format=jpeg&imagetools';
	import logo_small from '$lib/assets/logo_small.png?format=jpeg&imagetools';

	export let title: string = 'Georg Groenendaal | Portfolio';
	export let description: string =
		'My personal portfolio website, showcasing my projects and skills. I am a software engineer with a passion for machine learning and web development.';
	// export let image: string = banner;
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={banner} />
<meta property="og:image:alt" content="website banner" />

<!-- twitter -->
<meta name="twitter:title" content={title} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={logo_small} />
