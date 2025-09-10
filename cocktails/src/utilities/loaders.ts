import type { LoaderFunctionArgs } from 'react-router';
import {
	fetchCocktailById,
	fetchIngredient,
	fetchIngredients,
	fetchRandomCocktail,
	searchCocktailByName,
} from './api';

export const randomCocktailLoader = async () => {
	return await fetchRandomCocktail();
};

export const cocktailLoader = async ({ params }: LoaderFunctionArgs) => {
	const { id } = params;
	if (!id) throw new Response('No ID provided', { status: 400 });
	return await fetchCocktailById(id);
};

export const searchCocktailsLoader = async ({
	request,
}: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const q = url.searchParams.get('q');
	if (!q) return [];
	return await searchCocktailByName(q);
};

export const ingredientsLoader = async () => {
	return await fetchIngredients();
};

export const ingredientLoader = async ({ params }: LoaderFunctionArgs) => {
	const { name } = params;
	if (!name) throw new Response('No ID provided', { status: 400 });
	return await fetchIngredient(name);
};
