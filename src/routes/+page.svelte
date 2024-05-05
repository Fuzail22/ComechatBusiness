<script>
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import SectionWrapper from '../components/SectionWrapper.svelte';
	import CustomersSlide from '../components/CustomersSlide.svelte';
</script>

<main class="flex flex-col">
	<SectionWrapper imageName="HeroBg.png">
		<Header />
		<Hero />
	</SectionWrapper>
	<CustomersSlide />
</main>
