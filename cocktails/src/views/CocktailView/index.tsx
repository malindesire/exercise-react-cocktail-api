import { useLoaderData } from 'react-router';
import styles from './style.module.css';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import Image from '../../components/Image';
import ItemInfo from '../../components/ItemInfo';

export default function CocktailView() {
	const data = useLoaderData();
	const cocktail: Cocktail = mapRawCocktailData(data);

	if (!cocktail) return;
	return (
		<main className={styles.cocktailView}>
			<Image src={cocktail.thumbnail} alt={cocktail.name} />
			<ItemInfo
				item="cocktail"
				cocktail={cocktail}
				className={styles.info}
			/>
		</main>
	);
}
