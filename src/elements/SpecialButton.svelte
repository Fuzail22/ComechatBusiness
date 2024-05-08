<script>
	export let text = 'Submit';
	export let classList = '';
</script>

<button
	class="relative bg-buttonc1 hover:bg-buttonc1-75 hover:shadow-lg rounded-xl font-semibold text-sm px-2 py-2 md:px-4 mx-2 {classList}"
	>{text}</button
>

<style>
	button::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 20%;
		width: 50%;
		height: 50%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 60%);
	}
</style>
