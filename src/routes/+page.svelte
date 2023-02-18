<script lang="ts">
	import MetaComponent from '../lib/components/MetaComponent.svelte';

	import BlogView from '../lib/components/BlogView.svelte';

	import Tag from '../lib/components/Tag.svelte';

	import { base } from '$app/paths';
	import type { PageData } from './$types';

	import profile_avif from '$lib/assets/profile.jpg?width=16;112&format=avif&srcset&imagetools';
	import profile_webp from '$lib/assets/profile.jpg?width=16;112&format=webp&srcset&imagetools';
	import profile from '$lib/assets/profile.jpg?width=16;112&format=jpeg&srcset&imagetools';

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
			specific: 'Svelte, React, Tailwind'
		},
		{
			category: 'Devops',
			specific: 'CI/CD, Docker, Kubernetes, Terraform'
		}
	];

	const education = [
		{
			degree: 'MSc. Artificial Intelligence',
			institution: 'University of Groningen',
			period: '2020-Present'
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
			period: 'Jul-2018 - December 2020'
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

	export let data: PageData;
</script>

<svelte:head>
	<MetaComponent />
</svelte:head>

<div class="py-12 bg-primary-800 text-light">
	<div class="container max-w-screen-xl px-4 mx-auto ">
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
					<p class="font-serif text-sm">Software engineer and student Artificial Intelligence</p>
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
					Hello there, I'm a Masters student in artificial intelligence (currently graduating) with
					a background in software engineering. I'm passionate about exploring various topics in
					computer science and artificial intelligence, ranging from machine learning and data
					science to natural language processing and computer vision. Besides academic pursuits, I'm
					enthusiastic about building software and products. I enjoy using my skills to develop
					innovative solutions and improve existing systems. On this site, I'll be sharing my
					thoughts and insights on various topics related to computer science, data science, and
					artificial intelligence. I'll also be sharing my projects, code samples, tutorials, and
					other resources. If you have any questions or suggestions, please don't hesitate to get in
					touch.
				</p>
			</div>
		</div>

		<div class="flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-8">
			<div class="flex-col space-y-2">
				<p class="mb-2 text-2xl">Interest</p>

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

<div
	class="container mx-auto px-4 max-w-screen-xl py-20 flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0"
>
	<div class="rounded flex flex-col space-y-4 flex-grow">
		<h2 class="text-4xl font-bold">Projects</h2>

		<div class="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid items-end gap-6">
			{#each [1] as z}
				<a href="/" class="disabled opacity-80 saturate-0 cursor-default">
					<div
						class="transition shadow bg-white rounded-lg border border-opacity-0 border-primary-700 brightness-125"
					>
						<div
							class="h-32 bg-gradient-to-tl from-primary-400 to-primary-800 rounded-t-lg border-b border-primary-900"
						/>

						<div class="px-4 pt-2 pb-4">
							<h3 class="text-xl font-bold">Sveltekit static portfolio starter</h3>
							<p class="text-sm">
								(Coming soon) Open sourced template of this website, built with Sveltekit, Tailwind
								and hosted on Github Pages.
							</p>

							<div class="pt-4">
								<Tag>coming soon</Tag>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<BlogView content={data.blog} />
</div>
