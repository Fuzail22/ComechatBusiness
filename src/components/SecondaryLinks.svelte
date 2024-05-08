<script>
	import Link from '../elements/Link.svelte';

	let legalPages = ['2023 © CometChat', 'Terms of Use', 'Privacy Policy'];

	let socials = ['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'GitHub'];
</script>

<div class="flex flex-col-reverse gap-y-11 px-12 lg:flex-row lg:px-24">
	<div class="inline-flex gap-6">
		{#each legalPages as linkItem, index (index)}
			<Link {linkItem} classList="text-xs" />
		{/each}
	</div>
	<div class="lg:ml-auto inline-flex flex-wrap gap-6">
		{#each socials as linkItem, index (index)}
			<Link {linkItem} iconPresent={true} />
		{/each}
	</div>
</div>
