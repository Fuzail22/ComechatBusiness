<script>
	import { onMount } from 'svelte';

	export let titleColor = '--textc2';
	export let title;
	export let description;
	export let descriptionColor;
	export let centerText = false;
</script>

<div
	class="sm:w-[540px] font-medium mb-12 md:mb-24"
	style="text-align:{centerText ? 'center' : 'left'};"
>
	<div class="text-2xl" style="color:var({titleColor},white);">
		{title}
	</div>
	<div class="text-3xl sm:text-5xl" style="color:var({descriptionColor},white)">
		{description}
	</div>
</div>
