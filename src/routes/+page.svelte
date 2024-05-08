<script>
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import CustomersSlide from '../components/CustomersSlide.svelte';
	import PartnerSection from '../components/PartnerSection.svelte';
	import Programs from '../components/Programs.svelte';
	import Faq from '../components/FAQ.svelte';
	import PreFooter from '../components/PreFooter.svelte';
	import Footer from '../components/Footer.svelte';
	import SecondaryLinks from '../components/SecondaryLinks.svelte';
	import FixedWidthProvider from '../components/FixedWidthProvider.svelte';
</script>

<main class="flex flex-col font-semibold">
	<Header />
	<FixedWidthProvider
		classList="bg-bgc2 p-2"
		addBefore={true}
		imageName="HeroBg.png"
		sectionHeight="646px"
	>
		<Hero />
	</FixedWidthProvider>
	<FixedWidthProvider classList="bg-bgc2">
		<CustomersSlide /></FixedWidthProvider
	>
	<FixedWidthProvider classList="bg-bgc2">
		<PartnerSection />
	</FixedWidthProvider>
	<FixedWidthProvider classList="bg-bgc1">
		<Programs />
		<Faq />
	</FixedWidthProvider>
	<FixedWidthProvider
		classList="bg-bgc2 pb-10"
		imageName="Modified-Pre-footer.png"
		sectionHeight="735px"
		bgSize="contain"
	>
		<PreFooter />
		<Footer />
		<SecondaryLinks />
	</FixedWidthProvider>
</main>
