<script>
	export let imageName = '';
	export let sectionHeight = '';
	let imagePath = imageName !== '' ? `url('/${imageName}')` : '';
	// let imagePath = `url('/${imageName}')`;
	console.log(imagePath);
</script>

<div
	class="flex flex-col bg-bgc1 bg-cover"
	style="background-image: {imagePath};height:{sectionHeight}"
>
	<slot />
</div>
