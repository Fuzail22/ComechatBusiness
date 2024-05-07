<script>
	import Brand from '../elements/Brand.svelte';
	import Link from '../elements/Link.svelte';

	let Features = [
		'Chat & Messaging',
		'Voice & Video Calls',
		'Security & Compliance',
		'Extensions',
		'Features at a glance',
		'Webhooks & Bots',
		'Moderation',
		'Analytics & Insights'
	];
	let Implementation = ['Widgets', 'UI Kits', 'SDKs & APIs'];
	let Technologies = [
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
	];
	let By_Use_cases = [
		'Social Community',
		'Marketplace',
		'Healthcare',
		'Education',
		'Virtual Events',
		'On-Demand Service',
		'Dating Apps',
		'Gaming'
	];
	let By_Organization_Type = ['Enterprise', 'Startups'];
	let Technologies_documentation = [
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
	];
	let Documentation = [
		'Documentation',
		'Product updates',
		'Tutorials',
		'Open-source Apps',
		'Product status',
		'Glossary'
	];
	let Resources = [
		'Customer stories',
		'Blog',
		'Give feedback',
		'Community forum',
		'Help center',
		'Partners'
	];
	let Competitors = ['SendBird', 'GetStream', 'Applozic', 'Twilio', 'PubNub'];
	let Company = ['About us', 'Careers', 'Partners', 'Pricing', 'Chat with us'];
	let items = [
		{
			heading: 'Platform',
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
</script>

<div class="px-16 mt-14">
	<Brand />
	<div class="flex justify-between gap-20 backdrop-blur-3xl">
		{#each items as item, index (index)}
			<div class="flex flex-col gap-4 w-[268px]">
				<h4 class="text-textc3 mt-4">{item.heading}</h4>
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
		{/each}
		<div>
			{#each items2 as item, index (index)}
				<div class="flex flex-col gap-4">
					<h4 class="text-textc3 mt-4">{item.heading}</h4>
					<h6 class="text-textc1-50">{item.heading}</h6>
					{#each item.items as linkItem, index (index)}
						<Link {linkItem} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
