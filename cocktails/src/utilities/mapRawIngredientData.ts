import type { Ingredient } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapRawIngredientData(rawIngredient: any): Ingredient {
	const imageName = rawIngredient.strIngredient.split(' ')[0];

	return {
		id: rawIngredient.id,
		name: rawIngredient.strIngredient,
		thumbnail: `https://www.thecocktaildb.com/images/ingredients/${imageName}.png`,
		category: rawIngredient.strType,
		alcoholic: rawIngredient.strAlcohol === 'Yes',
		description: rawIngredient.strDescription,
	};
}
