import styles from './style.module.css';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useLoaderData, useRevalidator } from 'react-router';

export default function HomeView() {
	const data = useLoaderData();
	const cocktail: Cocktail = mapRawCocktailData(data.drinks[0]);
	const { revalidate } = useRevalidator();

	if (!cocktail) return;
	return (
		<div className={styles.home}>
			<Card
				image={{ src: cocktail.thumbnail, alt: cocktail.name }}
				title={cocktail.name}
				link={`/cocktail/${cocktail.id}`}
			/>
			<Button
				label="Show new cocktail"
				onClick={() => {
					revalidate();
				}}
			/>
		</div>
	);
}
