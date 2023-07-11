<script>
	import Ingredient from '$lib/components/Ingredient.svelte';

	export let data;
	console.log(data);
</script>

<div class="px-8 py-20 mx-auto max-w-7xl">
	<div class="grid grid-cols-2 gap-8 mb-24">
		<div class="flex flex-col gap-4">
			<img class="" alt="Main meal" src={data.strMealThumb} />

			<div class="flex items-center gap-4">
				<span
					class="px-2 py-0.5 text-sm w-fit border rounded-3xl cursor-pointer text-white bg-slate-700"
					>{data.strCategory}</span
				>

				<a
					class="flex items-center gap-0.5 hover:underline text-sky-500"
					href={data.strSource}
					target="_blank"
					rel="noopener noreferrer"
					>Source
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4 mb-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</a>
			</div>

			<div class="flex items-center gap-1">
				<a
					href={data.strYoutube}
					class="px-3.5 py-1.5 text-white bg-red-700 rounded-lg"
					target="_blank"
					rel="noopener noreferrer"
				>
					YOUTUBE
				</a>

				<span class="flex items-center gap-2 text-sky-500"
					>&nbsp;instructions
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4 mb-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</span>
			</div>

			<div class="mt-4 space-y-2">
				<h3 class="text-xl">Measures</h3>

				<ul class="px-4 text-base text-gray-600">
					{#each data.measures as measure, i}
						<li>- {measure} {data.ingredients[i]}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<span class="text-2xl font-bold">{data.strMeal}</span>

			<h3 class="text-xl">Instructions</h3>
			<ul class="pl-4 space-y-2 text-base text-gray-600">
				{#each data.strInstructions.split('\n') as instruction}
					{#if instruction.trim()}
						<li>- {instruction}</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>

	<h1 class="block w-full mx-auto my-8 text-2xl text-center">Ingredients</h1>

	<div class="grid grid-cols-1 gap-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
		{#each data.ingredients as ingredient}
			<Ingredient data={ingredient} />
		{/each}
	</div>
</div>
