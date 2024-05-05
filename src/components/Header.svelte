<script>
	import SpecialButton from '../elements/SpecialButton.svelte';

	let navItems = ['Products', 'Solutions', 'Developers', 'Resources', 'Privacy Policy'];
</script>

<div class="flex px-4 py-2 text-textc1 text-md bg-transparent">
	<span class="text-3xl">comet<span class="font-semibold">chat</span></span>
	<nav class="hidden md:inline-flex ml-auto items-center space-x-4">
		{#each navItems as item, index (index)}
			<a href="#{item}" class="text-textc1-85 hover:text-textc1-95">{item}</a>
		{/each}
	</nav>
	<div class="inline ml-auto">
		<a href="#LogIn" class="text-textc1-85 hover:text-textc1-95">Login</a>
		<SpecialButton text="Schedule a demo" />
	</div>
</div>
