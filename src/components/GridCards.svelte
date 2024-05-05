<script>
	export let items = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 py-12">
	{#each items as item, index (index)}
		<div class="flex flex-col w-auto xxl:w-[400px]">
			<!-- <embed type="image/svg+xml" src="/{item.title}.svg" /> -->
			<img src="/{item.title}.svg" alt={item.title} width={39} height={38} />
			<div class="text-textc1 text-xl">{item.title}</div>
			<div class="text-textc1-75 text-lg text-wrap">{item.description}</div>
		</div>
	{/each}
</div>
