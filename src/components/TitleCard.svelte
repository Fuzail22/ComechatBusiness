<script>
	import { onMount } from 'svelte';

	export let titleColor = '--textc2';
	export let title;
	export let description;
	export let descriptionColor;
	export let centerText = false;
	// let breakpoint = 768;
	// let isLesserThanMdBreakpoint = false;
	// $: if (isLesserThanMdBreakpoint) {
	// 	centerText = false;
	// 	console.log({ centerText });
	// }
	// onMount(() => {
	// 	const checkViewportWidth = () => {
	// 		isLesserThanMdBreakpoint = window.innerWidth <= breakpoint;
	// 	};
	// 	// console.log({ isLesserThanMdBreakpoint });
	// 	checkViewportWidth();

	// 	window.addEventListener('resize', checkViewportWidth);

	// 	return () => {
	// 		window.removeEventListener('resize', checkViewportWidth);
	// 	};
	// });
</script>

<div style="text-align:{centerText ? 'center' : 'left'};" class="sm:w-[500px] font-semibold">
	<div class="text-2xl" style="color:var({titleColor},white);">
		{title}
	</div>
	<div class="text-3xl sm:text-5xl text-wrap" style="color:var({descriptionColor},white)">
		{description}
	</div>
</div>
