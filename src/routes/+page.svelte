<script>
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import SectionWrapper from '../components/SectionWrapper.svelte';
	import CustomersSlide from '../components/CustomersSlide.svelte';
	import PartnerSection from '../components/PartnerSection.svelte';
</script>

<main class="flex flex-col">
	<SectionWrapper imageName="HeroBg.png" sectionHeight="646px">
		<Header />
		<Hero />
	</SectionWrapper>
	<CustomersSlide />
	<PartnerSection />
</main>
<!-- continue working on third section -->
