import styles from './style.module.css';
import { fetchRandomCocktail } from '../../utilities/api';
import { useEffect, useState } from 'react';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function Home() {
	const [cocktail, setCocktail] = useState<Cocktail>();

	const getRandomCocktail = () => {
		fetchRandomCocktail().then((result) =>
			setCocktail(mapRawCocktailData(result.drinks[0]))
		);
	};

	useEffect(() => {
		getRandomCocktail();
	}, []);

	if (!cocktail) return;
	return (
		<div className={styles.home}>
			<Card
				image={{ src: cocktail.thumbnail, alt: cocktail.name }}
				title={cocktail.name}
				link=""
			/>
			<Button label="Show new cocktail" onClick={getRandomCocktail} />
		</div>
	);
}
