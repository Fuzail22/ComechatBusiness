<script>
	export let items = [];
	export let titleColor = '';
	export let descriptionColor = '';
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
	{#each items as item, index (index)}
		<div class="flex flex-col w-auto xxl:w-[400px]">
			<!-- <embed type="image/svg+xml" src="/{item.title}.svg" /> -->
			<img src="/{item.title}.svg" alt={item.title} width={39} height={38} />
			<div class="text-lg md:text-xl font-medium" style="color:var({titleColor},white)">
				{item.title}
			</div>
			<div class="text-base md:text-lg font-medium" style="color:var({descriptionColor},white)">
				{item.description}
			</div>
		</div>
	{/each}
</div>
