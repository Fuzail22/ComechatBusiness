<script>
	import Brand from '../elements/Brand.svelte';
	import HamMenu from '../elements/HamMenu.svelte';
	import SpecialButton from '../elements/SpecialButton.svelte';
	import Navigation from '../components/Navigation.svelte';
	import { onMount, onDestroy } from 'svelte';
	let navItems = ['Platforms', 'Solutions', 'Developers', 'Resources', 'Pricing'];
	let isNavigationEnabled = false;

	let showNav = true;
	let lastScrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			showNav = currentScrollY < lastScrollY || currentScrollY === 0;
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="fixed w-full z-50">
	{#if showNav || isNavigationEnabled}
		<div class="flex items-center px-2 py-2 text-textc1 text-md bg-bgc2">
			<Brand />
			<nav class="hidden lg:inline-flex gap-12 ml-auto items-center">
				{#each navItems as item, index (index)}
					<a href="#{item}" class="text-textc1-85 hover:text-textc1-95">{item}</a>
				{/each}
			</nav>
			<div class="flex items-center gap-4 sm:flex-row ml-auto">
				<a href="#LogIn" class="text-textc1-85 hover:text-textc1-95 text-sm">Log in</a>
				<SpecialButton classList="hidden sm:inline" text="Schedule a demo" />
			</div>
			<HamMenu on:click={() => (isNavigationEnabled = !isNavigationEnabled)} />
		</div>
	{/if}
	{#if isNavigationEnabled}
		<div
			class="flex flex-col lg:hidden px-2 py-2"
			style="background:url('/Stars.png'),linear-gradient(to bottom right,rgba(20, 19, 29, 1) 70%,rgba(104, 82, 214, 1));backdrop-filter: blur(100px);background-size:cover;width:100%;height:93vh;overflow-y:auto;color:var(--textc1,white);padding:0.5rem 0.5rem 1.5rem 0.5rem"
		>
			<Navigation breakpoint={1024} />
			<SpecialButton classList="mt-auto" text="Schedule a demo" />
		</div>
	{/if}
</div>
