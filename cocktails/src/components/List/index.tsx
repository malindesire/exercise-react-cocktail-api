import { useState } from 'react';
import type { ListItem as ListItemType } from '../../utilities/types';
import ListItem from '../ListItem';
import styles from './style.module.css';

type ListProps = {
	items: ListItemType[];
};

export default function List({ items }: ListProps) {
	const [page, setPage] = useState(0);

	const pageSize = 10;
	const pageCount = Math.ceil(items.length / pageSize);
	const start = page * pageSize;
	const end = start + pageSize;

	const handleOnPrevious = () => setPage((prev) => Math.max(prev - 1, 0));
	const handleOnNext = () =>
		setPage((prev) => Math.min(prev + 1, pageCount - 1));

	return (
		<section>
			<ul className={styles.list}>
				{items
					.map((item) => (
						<ListItem
							key={item.id}
							id={item.id}
							label={item.label}
							link={item.link}
						/>
					))
					.slice(start, end)}
			</ul>
			{pageCount > 1 && (
				<>
					<button onClick={handleOnPrevious}>Prev</button>
					<button onClick={handleOnNext}>Next</button>
				</>
			)}
		</section>
	);
}
