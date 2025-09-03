import { NavLink } from 'react-router';
import type { ListItem as ListItemType } from '../../utilities/types';
import styles from './style.module.css';

type ListItemProps = ListItemType;

export default function ListItem({ label, link }: ListItemProps) {
	return (
		<li className={styles.listitem}>
			<NavLink to={link}>{label}</NavLink>
		</li>
	);
}
