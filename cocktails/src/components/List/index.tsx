import { useEffect, useState } from 'react';
import type { ListItem as ListItemType } from '../../utilities/types';
import ListItem from '../ListItem';
import styles from './style.module.css';
import Pagination from '../Pagination';

type ListProps = {
	items: ListItemType[];
	pageSize?: number;
};

export default function List({ items, pageSize = 10 }: ListProps) {
	const [page, setPage] = useState(0);

	useEffect(() => {
		setPage(0);
	}, [items]);

	const pageCount = Math.ceil(items.length / pageSize);
	const start = page * pageSize;
	const end = start + pageSize;

	const handleOnPrevious = () => setPage((prev) => Math.max(prev - 1, 0));
	const handleOnNext = () =>
		setPage((prev) => Math.min(prev + 1, pageCount - 1));

	const listHeight = pageSize * 1.7;

	return (
		<section>
			<ul className={styles.list} style={{ height: `${listHeight}rem` }}>
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
				<Pagination
					currentPage={page + 1}
					pageCount={pageCount}
					onPrev={handleOnPrevious}
					onNext={handleOnNext}
				/>
			)}
		</section>
	);
}
