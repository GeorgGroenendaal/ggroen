<script lang="ts">
	import MetaComponent from '../lib/components/MetaComponent.svelte';

	import BlogView from '../lib/components/BlogView.svelte';

	import Tag from '../lib/components/Tag.svelte';

	import { base } from '$app/paths';
	import type { PageData } from './$types';

	import profile_avif from '$lib/assets/profile.jpg?width=16;112&format=avif&srcset&imagetools';
	import profile_webp from '$lib/assets/profile.jpg?width=16;112&format=webp&srcset&imagetools';
	import profile from '$lib/assets/profile.jpg?width=16;112&format=jpeg&srcset&imagetools';

	import abstract_shapes_avif from '$lib/assets/abstract_shapes.png?width=600&height=400&position=center&format=avif&srcset&imagetools';
	import abstract_shapes_webp from '$lib/assets/abstract_shapes.png?width=600&&heigth=400&position=center&format=webp&srcset&imagetools';
	import abstract_shapes from '$lib/assets/abstract_shapes.png?width=600&height=400&position=center&format=jpeg&srcset&imagetools';

	import printing_press_avif from '$lib/assets/printing_press.png?width=600&height=400&position=bottom&format=avif&srcset&imagetools';
	import printing_press_webp from '$lib/assets/printing_press.png?width=600&&heigth=400&position=bottom&format=webp&srcset&imagetools';
	import printing_press from '$lib/assets/printing_press.png?width=600&height=400&position=bottom&format=jpeg&srcset&imagetools';

	import alarm_clock_avif from '$lib/assets/alarm_clock.png?width=600&height=400&position=bottom&format=avif&srcset&imagetools';
	import alarm_clock_webp from '$lib/assets/alarm_clock.png?width=600&&heigth=400&position=bottom&format=webp&srcset&imagetools';
	import alarm_clock from '$lib/assets/alarm_clock.png?width=600&height=400&position=bottom&format=jpeg&srcset&imagetools';

	const interests = [
		{
			category: 'Programming',
			specific: 'Python, Typescript, Java, Go and more'
		},
		{
			category: 'ML and AI',
			specific: 'Deep Learning, Reinforcement Learning'
		},
		{
			category: 'Web Development',
			specific: 'Svelte, React, Tailwind, Django'
		},
		{
			category: 'Devops',
			specific: 'CI/CD, Docker, Kubernetes, Terraform'
		}
	];

	const education = [
		{
			degree: 'Master Artificial Intelligence',
			institution: 'University of Groningen',
			period: '2020-2023'
		},
		{
			degree: 'Pre-Master Artificial Intelligence',
			institution: 'University of Groningen',
			period: '2019-2020'
		},
		{
			degree: 'Bachelor Software Engineering',
			institution: 'Hanze University of Applied Sciences',
			period: '2015-2019'
		}
	];

	const experience = [
		{
			role: 'Software Engineer',
			company: 'Dataprovider.com',
			period: 'Jul-2018 - December 2021'
		},
		{
			role: 'Graduate Intern Software Engineering',
			company: 'Alledaags',
			period: 'Feb 2019 - Jul 2019'
		},
		{
			role: 'Intern Data Scientist',
			company: 'Dataprovider.com',
			period: 'Feb 2018 - Jul 2018'
		},
		{
			role: 'Junior Software Engineer',
			company: 'Dataprovider.com',
			period: 'Apr 2017 - Feb 2018'
		}
	];

	const projects = [
		{
			title: 'Sveltekit Portfolio',
			description:
				'Open-source code of this website. A static portfolio that can be hosted on github pages. Build with Sveltekit, Tailwind css. Perfect score on lighthouse.',
			tags: ['sveltekit', 'web development'],
			image_avif: abstract_shapes_avif,
			image_webp: abstract_shapes_webp,
			image: abstract_shapes,
			link: 'https://github.com/GeorgGroenendaal/ggroen'
		},
		{
			title: 'Thesis Template',
			description:
				"LaTeX template for a master's thesis. Well suited for theses in the field of computer science and artificial intelligence.",
			tags: ['thesis', 'latex'],
			image_avif: printing_press_avif,
			image_webp: printing_press_webp,
			image: printing_press,
			link: 'https://github.com/GeorgGroenendaal/University-of-Groningen-Latex-Thesis-Template'
		},
		{
			title: 'Pomopom.com',
			description:
				'A simple pomodoro timer that gives insights into your productivity and focus. Build with Django and HTMX and tailwind css for my own use.',
			tags: ['django', 'web development'],
			image_avif: alarm_clock_avif,
			image_webp: alarm_clock_webp,
			image: alarm_clock,
			link: 'https://pomopom.com'
		}
	];

	export let data: PageData;
</script>

<svelte:head>
	<MetaComponent />
</svelte:head>

<div class="py-12 bg-primary-800 text-light">
	<div class="container max-w-screen-xl px-4 mx-auto">
		<div class="flex flex-col mb-12 md:flex-row">
			<div class="flex flex-col flex-grow text-center md:text-left">
				<div>
					<div class="inline-block p-2 rounded shadow bg-primary-700">
						<picture>
							<source type="image/avif" srcset={profile_avif} />
							<source type="image/webp" srcset={profile_webp} />
							<img
								srcset={profile}
								class="object-cover rounded-sm w-28 h-28"
								loading="lazy"
								alt="Georg Groenendaal"
							/>
						</picture>
					</div>
					<h2 class="mb-2 text-4xl">Georg Groenendaal</h2>
					<p class="font-serif text-sm">Software engineer, MSc. Artificial Intelligence</p>
				</div>

				<div class="flex items-center justify-center py-2 mt-2 space-x-2 md:justify-start">
					<a
						class="hover:brightness-75"
						href="{base}/contact"
						aria-label="Contact me with e-mail (contact page)"
					>
						<iconify-icon icon="carbon:email" height="36" />
					</a>
					<a
						class="hover:brightness-75"
						href="https://www.linkedin.com/in/georggroenendaal/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Linkedin"
					>
						<iconify-icon icon="carbon:logo-linkedin" height="30" />
					</a>

					<a
						class="hover:brightness-75"
						href="https://github.com/GeorgGroenendaal"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Github"
					>
						<iconify-icon icon="carbon:logo-github" height="30" />
					</a>
				</div>
			</div>

			<div class="flex-[3_3_0%]">
				<h2 class="mb-2 text-4xl">About me</h2>
				<p class="font-serif text-lg">
					Hello there, I'm a Software Engineer with a passion for Artificial Intelligence. I'm
					passionate about exploring various topics in computer science and artificial intelligence,
					ranging from machine learning to web development and everything in between. I'm
					enthusiastic about building software and products. This site is a showcase of my work and
					a place to share my thoughts and ideas. Feel free to reach out to me via linkedin or the
					contact form if you want to get in touch.
				</p>
			</div>
		</div>

		<div class="flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-8">
			<div class="flex-col space-y-2">
				<p class="mb-2 text-2xl">Interest and skills</p>

				{#each interests as int}
					<div class="flex px-2 py-1 space-x-2 rounded shadow items-top bg-primary-700">
						<iconify-icon icon="mdi:head-love" class="-ml-1 mt-[0.1rem]" width="34" />
						<div class="grow">
							<p>{int.category}</p>
							<div class="flex items-center justify-between w-full">
								<p class="text-sm">
									{int.specific}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="flex-col space-y-2">
				<p class="mb-2 text-2xl">Education</p>

				{#each education as edu}
					<div class="flex px-2 py-1 space-x-2 rounded shadow items-top bg-primary-700">
						<iconify-icon class="pt-2" icon="carbon:education" width="30" />
						<div class="grow">
							<p>{edu.degree}</p>
							<div class="flex items-center justify-between w-full">
								<p class="text-sm">
									{edu.institution}
								</p>
								<p class="ml-6 text-sm italic">{edu.period}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="flex-col space-y-2">
				<p class="mb-2 text-2xl">Experience</p>

				{#each experience as exp}
					<div class="flex px-2 py-1 space-x-2 rounded shadow items-top bg-primary-700">
						<iconify-icon icon="carbon:code" width="30" />
						<div class="grow">
							<p>{exp.role}</p>
							<div class="flex items-center justify-between w-full">
								<p class="text-sm">
									{exp.company}
								</p>
								<p class="ml-6 text-sm italic">{exp.period}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto px-4 max-w-screen-xl py-20 grid gap-12 grid-cols-1 md:grid-cols-6">
	<div class="rounded flex flex-col space-y-4 grow md:col-span-4">
		<h2 class="text-4xl font-bold">My work</h2>

		<div class="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid items-end gap-6">
			{#each projects as proj}
				<a
					class="group shadow bg-white rounded-lg border border-opacity-0 hover:border-opacity-100 transition border-primary-700 h-full flex flex-col"
					href={proj.link}
					target="_blank"
				>
					<div class="relative">
						<picture class="transition-all group-hover:saturate-100 saturate-0">
							<source type="image/avif" srcset={proj.image_avif} />
							<source type="image/webp" srcset={proj.image_webp} />
							<img
								srcset={proj.image_webp}
								class="object-cover rounded-sm w-full rounded-t-lg"
								loading="lazy"
								alt={proj.title}
							/>
						</picture>
						<div
							class="absolute w-full h-full bg-green-200/30 transition group-hover:opacity-0 z-10 top-0 rounded-t-lg"
						/>
					</div>

					<div class="px-4 pt-2 pb-4 flex flex-col grow">
						<h3 class="text-xl font-bold">{proj.title}</h3>
						<p class="text-sm grow">
							{proj.description}
						</p>
						<div class="pt-4">
							{#each proj.tags as tag}
								<Tag>{tag}</Tag>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<BlogView content={data.blog} />
</div>
