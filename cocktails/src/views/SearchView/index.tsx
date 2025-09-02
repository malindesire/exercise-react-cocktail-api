import { useEffect, useState } from 'react';
import List from '../../components/List';
import styles from './style.module.css';
import { searchCocktailByName } from '../../utilities/api';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import type { ListItem } from '../../utilities/types';

export default function SearchView() {
	const [result, setResult] = useState<Cocktail[]>([]);

	useEffect(() => {
		searchCocktailByName('margarita').then((data) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const mappedData = data.drinks.map((drink: any) =>
				mapRawCocktailData(drink)
			);
			setResult(mappedData);
		});
	}, []);

	const cocktails: ListItem[] = result.map((item) => {
		return {
			id: item.id,
			label: item.name,
			link: '',
		};
	});

	return (
		<div className={styles.searchview}>
			<List items={cocktails} />
		</div>
	);
}
