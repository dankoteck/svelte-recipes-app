<script>
	import { PUBLIC_MEAL_API_URL, PUBLIC_MEAL_IMAGES_ENDPOINT } from '$env/static/public';

	export let data;

	const imageURL = `${PUBLIC_MEAL_API_URL}/${PUBLIC_MEAL_IMAGES_ENDPOINT}/${data}.png`;
</script>

<div class="transition duration-150 cursor-pointer hover:opacity-50">
	<a href="" data-sveltekit-preload-data>
		<img alt="Ingredient" src={imageURL} />
		<span class="block w-full text-lg text-center">{data}</span>
	</a>
</div>
