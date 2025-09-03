import { useParams } from 'react-router';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import { fetchCocktailById } from '../../utilities/api';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';

export default function CocktailView() {
	const { id } = useParams();
	const [cocktail, setCocktail] = useState<Cocktail>();

	useEffect(() => {
		if (!id) return;

		fetchCocktailById(id).then((result) =>
			setCocktail(mapRawCocktailData(result.drinks[0]))
		);
	}, [id]);

	if (!cocktail) return;
	console.log(cocktail);

	return <div className={styles.cocktailview}>Hello CocktailView</div>;
}
