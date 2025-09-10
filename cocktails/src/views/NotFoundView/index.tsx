import Clickable from '../../components/Clickable';
import styles from './style.module.css';

export default function NotFoundView() {
	return (
		<main className={styles.notFoundView}>
			<h2>Page not found</h2>
			<Clickable element={'a'} label={'Go to Home'} link={'/'} />
		</main>
	);
}
