<script>
	// @ts-nocheck

	/**
	 * @type {string} - Title of section
	 */
	export let title;

	/**
	 * @type {import('$lib/types').Meal[]}
	 */
	export let data;
</script>

<div class="flex flex-col items-center gap-12 px-8 py-4 border-t max-w-7xl border-t-slate-300">
	<h1 class="text-3xl font-semibold text-center">{title}</h1>

	<ul class="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
		{#each data as item}
			<li class="">
				<a
					href={`/meal/${item.idMeal}`}
					class="flex flex-col items-center gap-4"
					data-sveltekit-preload-data
				>
					<img alt={item.idMeal} src={item.strMealThumb} />
					<span class="block w-full mt-4 text-xl text-center text-slate-900">{item.strMeal}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
