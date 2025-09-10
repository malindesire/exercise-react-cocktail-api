import { useLoaderData } from 'react-router';
import styles from './style.module.css';
import Image from '../../components/Image';
import { mapRawIngredientData } from '../../utilities/mapRawIngredientData';
import type { Ingredient } from '../../utilities/types';
import ItemInfo from '../../components/ItemInfo';

export default function IngredientView() {
	const data = useLoaderData();
	const ingredient: Ingredient = mapRawIngredientData(data);

	if (!ingredient) return;
	return (
		<main className={styles.ingredientView}>
			<Image src={ingredient.thumbnail} alt={ingredient.name} />
			<ItemInfo
				item="ingredient"
				ingredient={ingredient}
				className={styles.info}
			/>
		</main>
	);
}
