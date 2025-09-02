import { NavLink } from 'react-router';
import { Cocktail } from './Cocktail';
import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<NavLink to={'/'} className={styles.logoLink}>
				<Cocktail />
				<h1>Cocktails</h1>
			</NavLink>
			<NavLink to={'/search'}>Search</NavLink>
		</header>
	);
}
