<script>
	export let linkItem = '';
	export let iconPresent = false;
	export let link = 'https://www.cometchat.com/';
</script>

<a href={link} class="text-textc1-85 text-sm">
	{#if iconPresent}<img
			class="inline mr-1"
			src="/{linkItem}.svg"
			alt={linkItem + 'icon'}
			width="12"
			height="12"
		/>{/if}{linkItem}</a
>
