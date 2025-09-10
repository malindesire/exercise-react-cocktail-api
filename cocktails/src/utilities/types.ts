export type IngredientItem = {
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
	ingredients: IngredientItem[];
};

export type Image = {
	src: string;
	alt: string;
};

export type ListItem = {
	id: string;
	label: string;
	link: string;
};

export type Ingredient = {
	id: string;
	name: string;
	thumbnail: string;
	category: string;
	alcoholic: boolean;
	description: string;
};
