<script>
	import SpecialButton from '../elements/SpecialButton.svelte';

	let navItems = ['Products', 'Solutions', 'Developers', 'Resources', 'Privacy Policy'];
</script>

<div class="flex items-center px-2 py-2 text-textc1 text-md bg-transparent">
	<a href="#" class="text-base sm:text-md md:text-3xl"
		>comet<span class="font-semibold">chat</span></a
	>
	<nav class="hidden lg:inline-flex ml-auto items-center space-x-4">
		{#each navItems as item, index (index)}
			<a href="#{item}" class="text-textc1-85 hover:text-textc1-95">{item}</a>
		{/each}
	</nav>
	<div class="flex items-center flex-row-reverse md:flex-row sm:flex-row ml-auto">
		<a href="#LogIn" class="text-textc1-85 hover:text-textc1-95 text-sm">Login</a>
		<SpecialButton text="Schedule a demo" />
	</div>
</div>
