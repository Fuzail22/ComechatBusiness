<script>
	import TitleCard from './TitleCard.svelte';
	let faqs = [
		{
			question: 'This is a frequently asked question?',
			answer:
				'Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.'
		},
		{
			question: 'This is a frequently asked question?',
			answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
		},
		{
			question:
				'This is a very long frequently asked question about our services with more than one line?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			question: 'This is a frequently asked question?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			question: 'This is a question?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			question: 'This is a question?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
	let activeQuestion = -1;
</script>

<div class="flex flex-col items-center justify-center w-full bg-bgc1 px-5 py-12 md:p-20">
	<TitleCard
		title="FAQ's"
		description="We want to help you with all your doubts"
		titleColor="--textc2"
		descriptionColor="--textc4"
		centerText={true}
	/>
	<div class="flex flex-col gap-4 mt-8">
		{#each faqs as faq, index (index)}
			<button
				class="relative sm:w-[638px] md:w-[751px] text-start text-lg font-medium md:text-[22px] bg-cardbgc1 p-4 md:p-6 rounded-[20px] border border-cardborderc1 backdrop-blur-xl"
				on:click={() => {
					if (activeQuestion == index) {
						activeQuestion = -1;
					} else {
						activeQuestion = index;
					}
					console.log(activeQuestion);
				}}
			>
				<div class="flex">
					<h3>{faq.question}</h3>
					<img
						class="ml-auto"
						src={activeQuestion == index ? '/chevron-up.svg' : '/chevron-down.svg'}
						alt={faq.title}
						width={20}
						height={20}
					/>
				</div>
				<p class="{activeQuestion == index ? 'block' : 'hidden'} text-textc4-75">{faq.answer}</p>
			</button>
		{/each}
	</div>
</div>
