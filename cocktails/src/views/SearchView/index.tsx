import { useEffect, useState } from 'react';
import List from '../../components/List';
import styles from './style.module.css';
import { searchCocktailByName } from '../../utilities/api';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import type { Cocktail } from '../../utilities/types';
import type { ListItem } from '../../utilities/types';
import SearchForm from '../../components/SearchForm';

export default function SearchView() {
	const [result, setResult] = useState<Cocktail[]>([]);
	const [searchWord, setSearchWord] = useState('');

	useEffect(() => {
		searchCocktailByName(searchWord).then((data) => {
			if (Array.isArray(data.drinks)) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const mappedData = data.drinks.map((drink: any) =>
					mapRawCocktailData(drink)
				);
				setResult(mappedData);
			} else {
				setResult([]);
			}
		});
	}, [searchWord]);

	const cocktails: ListItem[] = result.map((item) => {
		return {
			id: item.id,
			label: item.name,
			link: `/cocktail/${item.id}`,
		};
	});

	return (
		<section className={styles.searchview}>
			<SearchForm
				inputLabel="Search cocktail by name"
				onSearch={setSearchWord}
			/>
			{cocktails.length > 0 ? (
				<>
					<h2 className={styles.message}>
						Search results for <span>"{searchWord}"</span>
					</h2>
					<List items={cocktails} />
				</>
			) : searchWord !== '' ? (
				<h2 className={styles.message}>
					No cocktails with the name <span>"{searchWord}"</span> was
					found.
				</h2>
			) : null}
		</section>
	);
}
