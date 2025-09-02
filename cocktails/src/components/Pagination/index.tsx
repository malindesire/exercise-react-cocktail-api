import IconButton from '../IconButton';
import styles from './style.module.css';

type PaginationProps = {
	currentPage: number;
	pageCount: number;
	onPrev: () => void;
	onNext: () => void;
};

export default function Pagination({
	currentPage,
	pageCount,
	onPrev,
	onNext,
}: PaginationProps) {
	return (
		<div className={styles.pagination}>
			<IconButton
				icon="prev"
				label="Previous page"
				onClick={onPrev}
				disabled={currentPage <= 1}
			/>
			<p>
				{currentPage} / {pageCount}
			</p>
			<IconButton
				icon="next"
				label="Next page"
				onClick={onNext}
				disabled={currentPage >= pageCount}
			/>
		</div>
	);
}
