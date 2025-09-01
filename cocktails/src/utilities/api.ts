export const fetchRandomCocktail = async () => {
	const res = await fetch(
		'https://www.thecocktaildb.com/api/json/v1/1/random.php'
	);
	const cocktail = await res.json();
	return cocktail;
};
