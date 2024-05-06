<script>
	export let imageName = '';
	export let sectionHeight = '';
	let imagePath = imageName !== '' ? `url('/${imageName}')` : '';
	// let imagePath = `url('/${imageName}')`;
	console.log(imagePath);
</script>

<div
	class="flex flex-col bg-bgc2 bg-cover pt-0 p-6"
	style="background-image: {imagePath};min-height:{sectionHeight}"
>
	<slot />
</div>
