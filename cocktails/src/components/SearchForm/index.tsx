import { useState } from 'react';
import Button from '../Button';
import styles from './style.module.css';

type SearchFormProps = {
	inputLabel: string;
	onSearch: (value: string) => void;
};

export default function SearchForm({ inputLabel, onSearch }: SearchFormProps) {
	const [searchInput, setSearchInput] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(searchInput);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label>
				{inputLabel}
				<input
					type="text"
					name="searchInput"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
			</label>
			<Button label="Search cocktails" type="submit" />
		</form>
	);
}
