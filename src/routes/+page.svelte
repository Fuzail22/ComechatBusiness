<script>
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import SectionWrapper from '../components/SectionWrapper.svelte';
	import CustomersSlide from '../components/CustomersSlide.svelte';
	import PartnerSection from '../components/PartnerSection.svelte';
	import Programs from '../components/Programs.svelte';
	import Faq from '../components/FAQ.svelte';
	import PreFooter from '../components/PreFooter.svelte';
	import Footer from '../components/Footer.svelte';
	import SecondaryLinks from '../components/SecondaryLinks.svelte';
</script>

<main class="flex flex-col">
	<SectionWrapper imageName="HeroBg.png" sectionHeight="646px">
		<Header />
		<Hero />
	</SectionWrapper>
	<CustomersSlide />
	<PartnerSection />
	<Programs />
	<Faq />
	<SectionWrapper imageName="Pre-footer.png" sectionHeight="735px" bgSize="contain">
		<PreFooter />
		<Footer />
		<SecondaryLinks />
	</SectionWrapper>
</main>
<!-- continue working on third section -->
