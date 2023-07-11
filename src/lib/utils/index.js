// @ts-ignore
export function getRandomSlice(array, n) {
	// Clone the original array to avoid modifying it
	const clone = [...array];

	// Create an empty array to store the randomly sliced items
	const result = [];

	// Iterate 5 times to randomly select and remove items from the clone array
	for (let i = 0; i < n; i++) {
		// Generate a random index within the current range of the clone array
		const randomIndex = Math.floor(Math.random() * clone.length);

		// Remove the selected item from the clone array and add it to the result array
		result.push(clone.splice(randomIndex, 1)[0]);
	}

	return result;
}

export function mapIngredientsToArray(obj) {
	/**
	 * @type {string[]}
	 */
	const ingredients = [];
	const newObj = { ...obj };

	Object.keys(newObj).forEach((key) => {
		if (key.includes('strIngredient')) {
			if (newObj[key]) {
				ingredients.push(newObj[key]);
			}
			delete newObj[key];
		}
	});

	return { ...newObj, ingredients };
}

export function mapMeasuresToArray(obj) {
	/**
	 * @type {string[]}
	 */
	const measures = [];
	const newObj = { ...obj };

	Object.keys(newObj).forEach((key) => {
		if (key.includes('strMeasure')) {
			if (newObj[key]) {
				measures.push(newObj[key]);
			}
			delete newObj[key];
		}
	});

	newObj.measures = measures;

	return { ...newObj, measures };
}
