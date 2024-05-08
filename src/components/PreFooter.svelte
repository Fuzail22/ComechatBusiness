<script>
	import Button from '../elements/Button.svelte';
	import SpecialButton from '../elements/SpecialButton.svelte';
</script>

<div class="flex flex-col gap-8 items-center justify-center w-full px-5 py-12 md:py-32">
	<div class="sm:w-[500px] backdrop-blur-sm" style="text-align:center;">
		<div class="text-3xl sm:text-5xl text-wrap" style="color:var(--textc1,white)">
			Get started for free
		</div>
		<div class="text-2xl mt-4" style="color:var(--textc1-75,white);">
			Build and test for as long as you need. <br />Pick a plan when you’re ready.
		</div>
	</div>
	<div class="text-textc1 backdrop-blur-sm">
		<Button text="Start free Trial" /><SpecialButton text="Schedule a demo" />
	</div>
</div>
