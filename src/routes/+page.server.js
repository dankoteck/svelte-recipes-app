import { PUBLIC_MEAL_API_ENDPOINT, PUBLIC_MEAL_API_URL } from '$env/static/public';
import { getRandomMeals } from '$lib/actions';

/**
 * @type {import('./$types').PageServerLoad}
 */
export async function load({ fetch }) {
	// Get all categories
	const resCategories = await fetch(
		`${PUBLIC_MEAL_API_URL}/${PUBLIC_MEAL_API_ENDPOINT}/categories.php`
	);
	const { categories } = await resCategories.json();

	// Get all meals by area (Vietnam)
	const resMealsArea = await fetch(
		`${PUBLIC_MEAL_API_URL}/${PUBLIC_MEAL_API_ENDPOINT}/filter.php?a=Vietnamese`
	);
	const { meals: mealsArea } = await resMealsArea.json();

	// Get 8 random meals
	const resRandomMeals = await getRandomMeals(fetch);
	const randomMeals = resRandomMeals.flat(Infinity);

	// Get meals based on each day (Today is Chicken for e.g.)
	const resMealsToday = await fetch(
		`${PUBLIC_MEAL_API_URL}/${PUBLIC_MEAL_API_ENDPOINT}/filter.php?c=Chicken`
	);
	const { meals: mealsToday } = await resMealsToday.json();

	const data = {
		categories,
		mealsArea,
		mealsToday: mealsToday.slice(0, 8),
		randomMeals: JSON.parse(JSON.stringify(randomMeals))
	};

	return data;
}
