<script>
	import Brand from '../elements/Brand.svelte';
	import HamMenu from '../elements/HamMenu.svelte';
	import SpecialButton from '../elements/SpecialButton.svelte';
	import Navigation from '../components/Navigation.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import FixedWidthProvider from './FixedWidthProvider.svelte';
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

<FixedWidthProvider classList="bg-bgc2 fixed z-50">
	{#if showNav || isNavigationEnabled}
		<div class="flex items-center py-3 px-4 md:px-8 md:py-4 text-textc1 text-sm">
			<Brand />
			<nav class="hidden lg:inline-flex gap-12 ml-auto items-center">
				{#each navItems as item, index (index)}
					{#if item == 'Pricing'}
						<a href="https://www.cometchat.com/pricing" class="text-textc1-85 hover:text-textc1-95"
							>{item}</a
						>
					{:else}
						<a href="#{item}" class="text-textc1-85 hover:text-textc1-95">{item}</a>
					{/if}
				{/each}
			</nav>
			<div class="flex items-center gap-4 sm:flex-row ml-auto">
				<a href="#LogIn" class="text-textc1-85 hover:text-textc1-95">Log in</a>
				<SpecialButton classList="hidden sm:inline" text="Schedule a demo" />
			</div>
			<HamMenu
				bind:isNavigationEnabled
				on:click={() => (isNavigationEnabled = !isNavigationEnabled)}
			/>
		</div>
	{/if}
	{#if isNavigationEnabled}
		<div
			id="hamMenu"
			class="flex flex-col lg:hidden px-2 py-2 rounded-xl"
			style="background:url('/Stars.png'),linear-gradient(to bottom right,rgba(20, 19, 29, 1) 70%,rgba(104, 82, 214, 1));backdrop-filter: blur(100px);background-size:cover;width:100%;height:100%;overflow-y:auto;color:var(--textc1,white);padding:0.5rem 0.5rem 1.5rem 0.5rem"
			transition:slide={{ duration: 100 }}
		>
			<Navigation breakpoint={1024} />
			<SpecialButton classList="mt-auto" text="Schedule a demo" />
		</div>
	{/if}
</FixedWidthProvider>

<style>
	#hamMenu {
		transition: all 0.5s ease;
	}
</style>
