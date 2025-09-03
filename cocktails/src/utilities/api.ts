export const fetchRandomCocktail = async () => {
	const res = await fetch(
		'https://www.thecocktaildb.com/api/json/v1/1/random.php'
	);
	const cocktail = await res.json();
	return cocktail;
};

export const fetchCocktailById = async (id: string) => {
	const res = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
	);
	const cocktail = await res.json();
	return cocktail;
};

export const searchCocktailByName = async (name: string) => {
	const res = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
	);
	const cocktails = await res.json();
	return cocktails;
};
