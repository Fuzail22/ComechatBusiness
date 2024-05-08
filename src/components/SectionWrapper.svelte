<script>
	// export let imageName = '';
	// export let sectionHeight = '';
	// export let bgSize = 'cover';
	// let imagePath = imageName !== '' ? `url('/${imageName}')` : '';
	// console.log(imagePath);
</script>

<!-- style="background-image: {imagePath};min-height:{sectionHeight};background-size:{bgSize};background-repeat:no-repeat;" -->
<div class="flex flex-col bg-bgc2 pt-0 p-6">
	<slot />
</div>

<style>
	div::before {
		content: '';
		display: block;
		/* width: 50px; */
		height: 5rem;
	}
</style>
