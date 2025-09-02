import type { ListItem as ListItemType } from '../../utilities/types';
import styles from './style.module.css';

type ListItemProps = ListItemType;

export default function ListItem({ label, link }: ListItemProps) {
	return (
		<li className={styles.listitem}>
			<a href={link} target="_blank" rel="noreferrer">
				{label}
			</a>
		</li>
	);
}
