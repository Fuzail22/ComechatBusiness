<script>
	export let isNavigationEnabled;
</script>

<button on:click class="lg:hidden mx-4"
	><img
		src={isNavigationEnabled ? '/Close.svg' : '/HamMenu.svg'}
		alt="Ham-Menu"
		width="24"
		height="24"
	/></button
>
