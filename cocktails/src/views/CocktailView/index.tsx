import { useLoaderData } from 'react-router';
import styles from './style.module.css';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import Image from '../../components/Image';
import ItemInfo from '../../components/ItemInfo';

export default function CocktailView() {
	const data = useLoaderData();
	const cocktail: Cocktail = mapRawCocktailData(data.drinks[0]);

	if (!cocktail) return;
	return (
		<div className={styles.cocktailView}>
			<Image src={cocktail.thumbnail} alt={cocktail.name} />
			<ItemInfo item={cocktail} className={styles.info} />
		</div>
	);
}
