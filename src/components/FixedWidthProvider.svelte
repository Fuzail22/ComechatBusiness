<script>
	export let classList = '';
	export let imageName = '';
	export let sectionHeight = '';
	export let bgSize = 'cover';
	export let addBefore = false;
	let imagePath = imageName !== '' ? `url('/${imageName}')` : '';
</script>

<div
	class="flex justify-center w-full {classList}"
	style="background-image: {imagePath};min-height:{sectionHeight};background-size:{bgSize};background-repeat:no-repeat;"
>
	<div class="{addBefore ? 'addBefore' : ''} w-full max-w-[1440px]"><slot /></div>
</div>

<style>
	.addBefore::before {
		content: '';
		display: block;
		/* width: 50px; */
		height: 5rem;
	}
</style>
