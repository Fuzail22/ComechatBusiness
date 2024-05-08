<script>
	import { onMount } from 'svelte';
	import Link from '../elements/Link.svelte';
	export let breakpoint = 640;

	let isLesserThanMdBreakpoint;
	let activeItem = '';
	let items = [
		{
			heading: 'Platforms',
			subHeading1: {
				heading: 'Features',
				items: [
					'Chat & Messaging',
					'Voice & Video Calls',
					'Security & Compliance',
					'Extensions',
					'Features at a glance',
					'Webhooks & Bots',
					'Moderation',
					'Analytics & Insights'
				]
			},
			subHeading2: { heading: 'Implementation', items: ['Widgets', 'UI Kits', 'SDKs & APIs'] },
			subHeading3: {
				heading: 'Technologies',
				items: [
					'React Chat SDK & API',
					'Angular Chat SDK & API',
					'Vue Chat SDK & API',
					'IOS Swift Chat SDK & API',
					'Android Kotlin Chat SDK & API',
					'Android Java Chat SDK & API',
					'React Native Chat SDK & API',
					'Ionic/Capacitor Chat SDK & API',
					'WordPress Chat SDK & API',
					'Lavarel/PHP Chat SDK & API',
					'Flutter Chat SDK & API',
					'Next.js Chat SDK & API'
				]
			}
		},
		{
			heading: 'Solutions',
			subHeading1: {
				heading: 'By Use Cases',
				items: [
					'Social Community',
					'Marketplace',
					'Healthcare',
					'Education',
					'Virtual Events',
					'On-Demand Service',
					'Dating Apps',
					'Gaming'
				]
			},
			subHeading2: { heading: 'By Organization Type', items: ['Enterprise', 'Startups'] }
		},
		{
			heading: 'Developers',
			subHeading1: {
				heading: 'Technologies documentation',
				items: [
					'React',
					'Angular',
					'Vue',
					'IOS Swift',
					'Android Kotlin',
					'Android Java',
					'React Native',
					'Ionic/Capacitor',
					'WordPress',
					'Lavarel/PHP',
					'Flutter',
					'Next.js'
				]
			},
			subHeading2: {
				heading: 'Documentation',
				items: [
					'Documentation',
					'Product updates',
					'Tutorials',
					'Open-source Apps',
					'Product status',
					'Glossary'
				]
			}
		}
	];
	let items2 = [
		{
			heading: 'Resources',
			items: [
				'Customer stories',
				'Blog',
				'Give feedback',
				'Community forum',
				'Help center',
				'Partners'
			]
		},
		{ heading: 'Competitors', items: ['SendBird', 'GetStream', 'Applozic', 'Twilio', 'PubNub'] },
		{ heading: 'Company', items: ['About us', 'Careers', 'Partners', 'Pricing', 'Chat with us'] }
	];

	onMount(() => {
		const checkViewportWidth = () => {
			isLesserThanMdBreakpoint = window.innerWidth <= breakpoint;
		};
		// console.log({ isLesserThanMdBreakpoint });
		checkViewportWidth();

		window.addEventListener('resize', checkViewportWidth);

		return () => {
			window.removeEventListener('resize', checkViewportWidth);
		};
	});
</script>

<div
	class="flex flex-col gap-4 mb-4 lg:flex-row sm:flex-wrap justify-between lg:gap-20 backdrop-blur-3xl"
>
	{#each items as item, index (index)}
		<div id={item.heading} class="lg:w-[268px]">
			{#if isLesserThanMdBreakpoint}<button
					class="flex text-textc3 mt-4 w-full"
					on:click={() => {
						if (activeItem == item.heading) activeItem = '';
						else activeItem = item.heading;
					}}
					>{item.heading}
					<img
						class="inline ml-auto"
						src="/plus.svg"
						alt="plus-icon"
						width="18"
						height="18"
					/></button
				>
			{:else}
				<h4 class="text-textc3 mt-4">{item.heading}</h4>
			{/if}
			{#if !isLesserThanMdBreakpoint || item.heading == activeItem}
				<div class="flex flex-col mt-4 gap-4 lg:w-[268px]">
					{#if item.subHeading1}
						<h6 class="text-textc1-50">{item.subHeading1.heading}</h6>
						{#each item.subHeading1.items as linkItem, index (index)}
							<Link {linkItem} />
						{/each}
					{/if}
					{#if item.subHeading2}
						<h6 class="text-textc1-50">{item.subHeading2.heading}</h6>
						{#each item.subHeading2.items as linkItem, index (index)}
							<Link {linkItem} />
						{/each}
					{/if}
					{#if item.subHeading3}
						<h6 class="text-textc1-50">{item.subHeading3.heading}</h6>
						{#each item.subHeading3.items as linkItem, index (index)}
							<Link {linkItem} />
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	{/each}

	{#each items2 as item, index (index)}
		<div id={item.heading}>
			{#if isLesserThanMdBreakpoint}<button
					class="flex text-textc3 mt-4 w-full"
					on:click={() => {
						if (activeItem == item.heading) activeItem = '';
						else activeItem = item.heading;
					}}
					>{item.heading}
					<img
						class="inline ml-auto"
						src="/plus.svg"
						alt="plus-icon"
						width="18"
						height="18"
					/></button
				>
			{:else}
				<h4 class="text-textc3 mt-4">{item.heading}</h4>
			{/if}
			{#if !isLesserThanMdBreakpoint || item.heading == activeItem}
				<div class="flex flex-col mt-4 gap-4 lg:w-[268px]">
					{#each item.items as linkItem, index (index)}
						<Link {linkItem} />
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
