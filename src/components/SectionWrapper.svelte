<script>
	export let imageName = '';
	export let sectionHeight = '';
	export let bgSize = 'cover';
	let imagePath = imageName !== '' ? `url('/${imageName}')` : '';
	// let imagePath = `url('/${imageName}')`;
	console.log(imagePath);
</script>

<div
	class="flex flex-col bg-bgc2 pt-0 p-6"
	style="background-image: {imagePath};min-height:{sectionHeight};background-size:{bgSize};background-repeat:no-repeat;"
>
	<slot />
</div>
