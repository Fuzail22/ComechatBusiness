<script>
	export let titleColor = '--textc2';
	export let title;
	export let description;
	export let descriptionColor;
</script>

<div class="w-96">
	<div class="text-xl" style="color:var({titleColor},white)">{title}</div>
	<div class="text-3xl sm:text-4xl" style="color:var({descriptionColor},white)">{description}</div>
</div>
