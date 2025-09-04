import type { LoaderFunctionArgs } from 'react-router';
import { fetchCocktailById, fetchRandomCocktail } from './api';

export const randomCocktailLoader = async () => {
	return await fetchRandomCocktail();
};

export const cocktailLoader = async ({ params }: LoaderFunctionArgs) => {
	const { id } = params;
	if (!id) throw new Response('No ID provided', { status: 400 });
	return await fetchCocktailById(id);
};
