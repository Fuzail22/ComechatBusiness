<script>
	import Link from '../elements/Link.svelte';

	let legalPages = ['2023 © CometChat', 'Terms of Use', 'Privacy Policy'];

	let socials = ['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'GitHub'];
</script>

<div class="flex px-16">
	<div class="inline-flex gap-6">
		{#each legalPages as linkItem, index (index)}
			<Link {linkItem} />
		{/each}
	</div>
	<div class="ml-auto inline-flex gap-6">
		{#each socials as linkItem, index (index)}
			<Link {linkItem} iconPresent={true} />
		{/each}
	</div>
</div>
