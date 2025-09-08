import styles from './style.module.css';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import { useLoaderData } from 'react-router';
import CardCarousel from '../../components/CardCarousel';

export default function HomeView() {
	const data = useLoaderData();
	const cocktail: Cocktail = mapRawCocktailData(data);

	if (!cocktail) return;
	return (
		<div className={styles.homeView}>
			<CardCarousel initialItem={cocktail} />
		</div>
	);
}
