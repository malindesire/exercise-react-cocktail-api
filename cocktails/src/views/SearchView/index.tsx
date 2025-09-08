import List from '../../components/List';
import styles from './style.module.css';
import type { Cocktail } from '../../utilities/types';
import type { ListItem } from '../../utilities/types';
import SearchForm from '../../components/SearchForm';
import { useFetcher } from 'react-router';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';

export default function SearchView() {
	const fetcher = useFetcher();
	const dataRaw = fetcher.data ?? [];
	const searchWord = fetcher.formData?.get('q')?.toString() ?? '';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const mappedData: Cocktail[] = dataRaw.map((drink: any) =>
		mapRawCocktailData(drink)
	);

	const cocktails: ListItem[] = mappedData.map((item) => {
		return {
			id: item.id,
			label: item.name,
			link: `/cocktail/${item.id}`,
		};
	});

	return (
		<div className={styles.searchView}>
			<SearchForm
				inputLabel="Search cocktail by name"
				fetcher={fetcher}
			/>
			{cocktails && cocktails.length > 0 ? (
				<>
					<h2 className={styles.message}>Search results</h2>
					<List items={cocktails} />
				</>
			) : searchWord !== '' ? (
				<h2 className={styles.message}>No cocktails found.</h2>
			) : null}
		</div>
	);
}
