const baseUrl = process.env.REACT_APP_API_URL;

export const fetchRandomCocktail = async () => {
	const res = await fetch(`${baseUrl}/random.php`);
	if (!res.ok) throw new Error('Failed to fetch');
	return res.json();
};

export const fetchCocktailById = async (id: string) => {
	const res = await fetch(`${baseUrl}/lookup.php?i=${id}`);
	if (!res.ok) throw new Error('Failed to fetch');
	return res.json();
};

export const searchCocktailByName = async (name: string) => {
	const res = await fetch(`${baseUrl}/search.php?s=${name}`);
	const cocktails = await res.json();
	return cocktails;
};
