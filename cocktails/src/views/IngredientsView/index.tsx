import { useLoaderData } from 'react-router';
import styles from './style.module.css';
import type { ListItem } from '../../utilities/types';
import List from '../../components/List';

export default function IngredientsView() {
	const data = useLoaderData();

	let ingredients: ListItem[] = data.map(
		(item: { strIngredient1: string }) => {
			const id = item.strIngredient1.replaceAll(' ', '_');
			return {
				id: id,
				label: item.strIngredient1,
				link: `/ingredient/${id}`,
			};
		}
	);

	ingredients = ingredients.sort((a, b) => {
		const nameA = a.label.toUpperCase();
		const nameB = b.label.toUpperCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});

	return (
		<main className={styles.ingredientsView}>
			<h2>Ingredients</h2>
			<List items={ingredients} />
		</main>
	);
}
