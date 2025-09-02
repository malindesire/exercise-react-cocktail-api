import styles from './style.module.css';
import { fetchRandomCocktail } from '../../utilities/api';
import { useEffect, useState } from 'react';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import Card from '../Card';

export default function Home() {
	const [cocktail, setCocktail] = useState<Cocktail>();
	useEffect(() => {
		fetchRandomCocktail().then((result) =>
			setCocktail(mapRawCocktailData(result.drinks[0]))
		);
	}, []);
	console.log(cocktail);

	if (!cocktail) return;

	return (
		<div className={styles.home}>
			<Card
				image={{ src: cocktail.thumbnail, alt: cocktail.name }}
				title={cocktail.name}
				link=""
			/>
		</div>
	);
}
