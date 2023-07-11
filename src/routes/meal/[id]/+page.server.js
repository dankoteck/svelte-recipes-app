import { PUBLIC_MEAL_API_ENDPOINT, PUBLIC_MEAL_API_URL } from '$env/static/public';
import { mapIngredientsToArray, mapMeasuresToArray } from '$lib/utils';

/**
 * @type {import('./$types').PageServerLoad}
 */
export async function load({ fetch, params }) {
	const response = await fetch(
		`${PUBLIC_MEAL_API_URL}/${PUBLIC_MEAL_API_ENDPOINT}/lookup.php?i=${params.id}`
	);
	const { meals } = await response.json();

	const formattedMeals = mapMeasuresToArray(mapIngredientsToArray(meals[0]));

	return formattedMeals;
}
