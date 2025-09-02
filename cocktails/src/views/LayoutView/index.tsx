import { Outlet } from 'react-router';
import styles from './style.module.css';

export default function LayoutView() {
	return (
		<main className={styles.main}>
			<Outlet />
		</main>
	);
}
