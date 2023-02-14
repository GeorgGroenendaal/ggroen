<script lang="ts">
	import { base } from '$app/paths';

	import profile from '$lib/assets/profile.jpg?run';
	import Img from '@zerodevx/svelte-img';

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
</script>

<div class="py-12 bg-theme-800 text-light">
	<div class="container max-w-screen-xl px-4 mx-auto ">
		<div class="flex flex-col mb-12 md:flex-row">
			<div class="flex flex-col flex-grow text-center md:text-left">
				<div>
					<div class="inline-block p-2 rounded shadow bg-theme-700">
						<Img src={profile} class="object-cover rounded-sm w-28 h-28" />
					</div>
					<h2 class="mb-2 text-4xl">Georg Groenendaal</h2>
					<p class="font-serif text-sm">Software engineer and student Arificial Intelligence</p>
				</div>

				<div class="flex items-center justify-center py-2 mt-2 space-x-2 md:justify-start">
					<a class="hover:brightness-75" href="#">
						<iconify-icon icon="carbon:email" height="36" />
					</a>
					<a class="hover:brightness-75" href="#">
						<iconify-icon icon="carbon:logo-linkedin" height="30" />
					</a>

					<a class="hover:brightness-75" href="#">
						<iconify-icon icon="carbon:logo-github" height="30" />
					</a>
				</div>
			</div>

			<div class="flex-[3_3_0%]">
				<h2 class="mb-2 text-4xl">About me</h2>
				<p class="font-serif text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque venenatis lorem
					ut porttitor. Suspendisse et magna sollicitudin, gravida turpis at, luctus ante. Aenean
					tristique neque id velit aliquet commodo. Duis tincidunt eros eu neque consectetur
					gravida. Pellentesque vel mauris risus. Nullam in velit sed est cursus consectetur.
					Aliquam dolor lacus, faucibus eget consectetur in, vestibulum vitae sapien. Suspendisse
					rhoncus porttitor nisl, ac vehicula est ultricies sit amet. Proin id molestie felis, vitae
					ullamcorper libero. Nulla ac nulla porta, aliquet leo vel, suscipit tellus.
				</p>
			</div>
		</div>

		<div class="flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-8">
			<div class="flex-col hidden space-y-2 md:block">
				<p class="mb-2 text-2xl">Interest</p>

				{#each education as edu}
					<div class="flex px-2 py-1 space-x-2 rounded shadow items-top bg-theme-700">
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
				<p class="mb-2 text-2xl">Education</p>

				{#each education as edu}
					<div class="flex px-2 py-1 space-x-2 rounded shadow items-top bg-theme-700">
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

				{#each education as edu}
					<div class="flex px-2 py-1 space-x-2 rounded shadow items-top bg-theme-700">
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
		</div>
	</div>
</div>
