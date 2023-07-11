import { PUBLIC_MEAL_API_ENDPOINT, PUBLIC_MEAL_API_URL } from '$env/static/public';

const MAX_MEALS = 8;

/**
 * @param {typeof window.fetch} fetch - Fetch function of svelte
 */
export function getRandomMeals(fetch) {
	const promises = [];

	for (let i = 0; i < MAX_MEALS; i++) {
		const promise = fetch(`${PUBLIC_MEAL_API_URL}/${PUBLIC_MEAL_API_ENDPOINT}/random.php`)
			.then((response) => response.json())
			.then((json) => json.meals)
			.catch((error) => error);
		promises.push(promise);
	}

	return Promise.all(promises);
}
