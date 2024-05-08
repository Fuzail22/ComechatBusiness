<script>
	import Link from '../elements/Link.svelte';

	let legalPages = ['2023 © CometChat', 'Terms of Use', 'Privacy Policy'];

	let socials = ['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'GitHub'];
</script>

<div class="flex flex-col-reverse gap-y-11 md:flex-row md:px-24 md:mt-20">
	<div class="inline-flex gap-6">
		{#each legalPages as linkItem, index (index)}
			<Link {linkItem} />
		{/each}
	</div>
	<div class="md:ml-auto inline-flex flex-wrap gap-6">
		{#each socials as linkItem, index (index)}
			<Link {linkItem} iconPresent={true} />
		{/each}
	</div>
</div>
