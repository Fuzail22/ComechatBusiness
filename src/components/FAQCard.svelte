<script>
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

<section>
	<h2>Frequently Asked Questions</h2>
	{#each faqs as faq, index (index)}
		<button>
			<h3>{faq.question}</h3>
			<p class={activeQuestion == index ? 'block' : 'hidden'}>{faq.answer}</p>
		</button>
	{/each}
</section>

<style>
	/* Add your custom styles here */
</style>
