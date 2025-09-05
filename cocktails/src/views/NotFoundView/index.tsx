import Clickable from '../../components/Clickable';
import styles from './style.module.css';

export default function NotFoundView() {
	return (
		<div className={styles.notFound}>
			<h2>Page not found</h2>
			<Clickable element={'a'} label={'Go to Home'} link={'/'} />
		</div>
	);
}
