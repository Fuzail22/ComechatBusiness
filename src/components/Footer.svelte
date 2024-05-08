<script>
	import { onMount } from 'svelte';
	import Brand from '../elements/Brand.svelte';
	import Link from '../elements/Link.svelte';
	import Navigation from './Navigation.svelte';

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

	let isLesserThanMd;
	let activeItem = '';
	onMount(() => {
		const mdBreakpoint = 638;

		const checkViewportWidth = () => {
			isLesserThanMd = window.innerWidth <= mdBreakpoint;
		};
		checkViewportWidth();

		window.addEventListener('resize', checkViewportWidth);

		return () => {
			window.removeEventListener('resize', checkViewportWidth);
		};
	});
</script>

<div class="py-12 px-12 lg:px-24 mt-8">
	<Brand />
	<br /><br />
	<Navigation breakpoint={1024} />
	<div
		class="faded-line my-4 w-full"
		style="height: 1.5px;
    background: linear-gradient(to right, transparent, white, transparent);"
	/>
</div>
