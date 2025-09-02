import type { ListItem as ListItemType } from '../../utilities/types';
import ListItem from '../ListItem';
import styles from './style.module.css';

type ListProps = {
	items: ListItemType[];
};

export default function List({ items }: ListProps) {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<ListItem
					key={item.id}
					id={item.id}
					label={item.label}
					link={item.link}
				/>
			))}
		</ul>
	);
}
