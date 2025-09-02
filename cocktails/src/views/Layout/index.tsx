import { Outlet } from 'react-router';
import styles from './style.module.css';

export default function Layout() {
	return (
		<main className={styles.main}>
			<Outlet />
		</main>
	);
}
