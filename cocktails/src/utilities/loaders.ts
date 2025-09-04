import { fetchRandomCocktail } from './api';

export const randomCocktailLoader = async () => {
	return await fetchRandomCocktail();
}
