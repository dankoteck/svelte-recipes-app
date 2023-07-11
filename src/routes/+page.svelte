<script>
	import List from '$lib/components/List.svelte';
	import Search from '$lib/components/Search.svelte';
	import { getRandomSlice } from '$lib/utils';

	export let data;

	const categories = getRandomSlice(data.categories, 5);
</script>

{#if categories.length > 0}
	<div class="flex flex-col items-center gap-8 px-16 py-8 mx-auto max-w-7xl">
		<div class="flex flex-col gap-8">
			<Search />
			<div class="flex items-center gap-4 text-sm">
				<span class="">Searches</span>
				<ul class="flex items-center gap-4">
					{#each categories as category}
						<li
							class="border border-blue-950 rounded-full px-5 py-1.5 transition-all duration-300 hover:bg-blue-950 hover:text-white cursor-pointer"
						>
							{category.strCategory}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}

<div class="flex flex-col items-center gap-8 mt-8 space-y-8">
	<List title="Random Meals" data={data.randomMeals} />
	<List title="Meals in your Area (Vietnam)" data={data.mealsArea} />
	<List title="Today's Chicken" data={data.mealsToday} />
</div>
