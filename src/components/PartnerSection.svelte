<script lang="ts">
	import GridCards from './GridCards.svelte';
	import TitleCard from './TitleCard.svelte';

	let partnerAdvantages = [
		{
			title: 'Free credits',
			description: 'Empowering partners to scale.'
		},
		{
			title: 'Revenue share',
			description: 'Get monthly recurring revenues when you refer clients.'
		},
		{
			title: 'Training and mentoring sessions',
			description: 'Enabling partners to deliver the best experience.'
		},
		{
			title: 'Special developer access',
			description: 'Get an all-access account to build unlimited PoCs for your clients.'
		},
		{
			title: 'Reduced time',
			description: 'Deliver your products much faster with our partners’ programs.'
		},
		{
			title: 'Value addition to your users',
			description: 'Value addition to your users'
		},
		{
			title: 'Knowledge sessions',
			description: 'Access to product and market sessions.'
		},
		{
			title: 'On-demand support',
			description: 'Technical assistance for implementation.'
		},
		{
			title: 'Significant passive income',
			description: 'Get exclusive access to new features before they are released to the public.'
		}
	];
</script>

<div class="bg-bgc2 px-5 py-12 md:p-24">
	<TitleCard
		title="Be a partner"
		description="CometChat partner advantages"
		titleColor="--textc2"
		descriptionColor="--textc1"
	/>
	<GridCards items={partnerAdvantages} titleColor="--textc1" descriptionColor="--textc1-75" />
</div>
