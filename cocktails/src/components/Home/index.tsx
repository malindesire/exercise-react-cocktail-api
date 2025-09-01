import styles from './style.module.css';
import { fetchRandomCocktail } from '../../utilities/api';
import { useEffect, useState } from 'react';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';

export default function Home() {
	const [cocktail, setCocktail] = useState<Cocktail>();
	useEffect(() => {
		fetchRandomCocktail().then((result) =>
			setCocktail(mapRawCocktailData(result.drinks[0]))
		);
	}, []);
	console.log(cocktail);

	return <div className={styles.home}>Hello {cocktail?.name}</div>;
}
