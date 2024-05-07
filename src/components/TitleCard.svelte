<script>
	export let titleColor = '--textc2';
	export let title;
	export let description;
	export let descriptionColor;
	export let centerText = false;
</script>

<div class="sm:w-[500px]" style="text-align:{centerText ? 'center' : 'left'};">
	<div class="text-2xl" style="color:var({titleColor},white);">
		{title}
	</div>
	<div class="text-3xl sm:text-5xl text-wrap" style="color:var({descriptionColor},white)">
		{description}
	</div>
</div>
