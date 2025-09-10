const baseUrl = process.env.REACT_APP_API_URL;

export const fetchRandomCocktail = async () => {
	const res = await fetch(`${baseUrl}/random.php`);
	if (!res.ok) throw new Error('Failed to fetch');
	const data = await res.json();
	return data.drinks[0];
};

export const fetchCocktailById = async (id: string) => {
	const res = await fetch(`${baseUrl}/lookup.php?i=${id}`);
	if (!res.ok) throw new Error('Failed to fetch');
	const data = await res.json();
	return data.drinks[0];
};

export const searchCocktailByName = async (name: string) => {
	const res = await fetch(`${baseUrl}/search.php?s=${name}`);
	if (!res.ok) throw new Error('Failed to fetch');
	const data = await res.json();
	return data.drinks;
};

export const fetchIngredients = async () => {
	const res = await fetch(`${baseUrl}/list.php?i=list`);
	if (!res.ok) throw new Error('Failed to fetch');
	const data = await res.json();
	return data.drinks;
};

export const fetchIngredient = async (name: string) => {
	const res = await fetch(`${baseUrl}/search.php?i=${name}`);
	if (!res.ok) throw new Error('Failed to fetch');
	const data = await res.json();
	return data.ingredients[0];
};
