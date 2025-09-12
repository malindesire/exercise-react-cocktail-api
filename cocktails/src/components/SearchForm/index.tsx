import { useEffect } from 'react';
import { useDebounce } from '../../utilities/useDebounce';
import Clickable from '../Clickable';
import styles from './style.module.css';
import type { useFetcher } from 'react-router';

type SearchFormProps = {
	inputLabel: string;
	fetcher: ReturnType<typeof useFetcher>;
};

export default function SearchForm({ inputLabel, fetcher }: SearchFormProps) {
	const { state } = fetcher;

	const debouncedSubmit = useDebounce((form: HTMLFormElement) => {
		form.requestSubmit();
	}, 500);

	// cleanup on unmount
	useEffect(() => {
		return () => {
			debouncedSubmit.cancel();
		};
	}, [debouncedSubmit]);

	return (
		<fetcher.Form method="get" action="/search" className={styles.form}>
			<label className={styles.label}>
				{inputLabel}:
				<input
					type="text"
					name="q"
					onChange={(e) => {
						if (e.currentTarget.form) {
							debouncedSubmit(e.currentTarget.form);
						}
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && e.currentTarget.form) {
							e.preventDefault();
							debouncedSubmit.flush();
						}
					}}
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
