export type Ingredient = {
	ingredient: string;
	measure: string | null;
};

export type Cocktail = {
	id: string;
	name: string;
	tags: string[];
	category: string;
	alcoholic: boolean;
	glass: string;
	instructions: string;
	thumbnail: string;
	ingredients: Ingredient[];
};
