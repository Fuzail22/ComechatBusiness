<script lang="ts">
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

<div class="bg-bgc1 px-5 py-12 md:p-24">
	<div class="w-80">
		<div class="text-xl text-[#FF7F3E]">Be a partner</div>
		<div class="text-textc1 text-3xl sm:text-4xl">CometChat partner advantages</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 py-12">
		{#each partnerAdvantages as advantage, index (index)}
			<div class="flex flex-col w-auto xxl:w-[400px]">
				<!-- <embed type="image/svg+xml" src="/{advantage.title}.svg" /> -->
				<img src="/{advantage.title}.svg" alt={advantage.title} width={39} height={38} />
				<div class="text-textc1 text-xl">{advantage.title}</div>
				<div class="text-textc1-75 text-lg text-wrap">{advantage.description}</div>
			</div>
		{/each}
	</div>
</div>
