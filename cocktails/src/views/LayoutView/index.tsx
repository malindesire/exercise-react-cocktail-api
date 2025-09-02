import { Outlet } from 'react-router';
import styles from './style.module.css';
import Header from '../../components/Header';

export default function LayoutView() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
}
