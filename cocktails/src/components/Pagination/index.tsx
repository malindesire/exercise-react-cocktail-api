import ClickableIcon from '../ClickableIcon';
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
			<ClickableIcon
				element="button"
				icon="prev"
				label="Previous page"
				onClick={onPrev}
				disabled={currentPage <= 1}
			/>
			<p>
				{currentPage} / {pageCount}
			</p>
			<ClickableIcon
				element="button"
				icon="next"
				label="Next page"
				onClick={onNext}
				disabled={currentPage >= pageCount}
			/>
		</div>
	);
}
