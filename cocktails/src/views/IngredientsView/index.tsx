import { useLoaderData } from 'react-router';
import styles from './style.module.css';
import type { ListItem } from '../../utilities/types';
import List from '../../components/List';

export default function IngredientsView() {
	const data = useLoaderData();

	const ingredients: ListItem[] = data.map(
		(item: { strIngredient1: string }) => {
			const id = item.strIngredient1.replaceAll(' ', '_');
			return {
				id: id,
				label: item.strIngredient1,
				link: `/ingredient/${id}`,
			};
		}
	);

	return (
		<main className={styles.notFoundView}>
			<h2>Ingredients</h2>
			<List items={ingredients} />
		</main>
	);
}
