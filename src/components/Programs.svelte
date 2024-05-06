<script>
	import GridCards from './GridCards.svelte';
	import TitleCard from './TitleCard.svelte';

	let programs = [
		{
			title: 'Affiliate partner program',
			description:
				'Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.'
		},
		{
			title: 'Technology partner program',
			description:
				'Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!'
		},
		{
			title: 'Start up growth program',
			description:
				'We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.'
		}
	];
</script>

<div class="bg-bgc1 px-5 py-12 md:p-24">
	<TitleCard
		title="Our programs"
		description="Types of partnerships programs"
		titleColor="--textc3"
		descriptionColor="--textc4"
	/>
	<GridCards items={programs} titleColor="--textc4" descriptionColor="--textc4-75" />
</div>
