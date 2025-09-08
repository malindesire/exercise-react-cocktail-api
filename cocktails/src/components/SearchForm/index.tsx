import Clickable from '../Clickable';
import styles from './style.module.css';
import type { useFetcher } from 'react-router';

type SearchFormProps = {
	inputLabel: string;
	fetcher: ReturnType<typeof useFetcher>;
};

export default function SearchForm({ inputLabel, fetcher }: SearchFormProps) {
	const { state } = fetcher;

	return (
		<fetcher.Form method="get" action="/search" className={styles.form}>
			<label className={styles.label}>
				{inputLabel}:
				<input
					type="text"
					name="q"
					onChange={(e) => e.currentTarget.form?.requestSubmit()}
				/>
			</label>
			<Clickable
				element="submit"
				label={
					state === 'loading'
						? 'Loading cocktails'
						: 'Search cocktails'
				}
				disabled={state === 'loading'}
			/>
		</fetcher.Form>
	);
}
