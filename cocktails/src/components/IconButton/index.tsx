import clsx from 'clsx';
import { Arrow } from './Arrow';
import styles from './style.module.css';

type IconButtonProps = {
	icon: 'prev' | 'next';
	label: string;
	onClick: () => void;
};

export default function IconButton({ icon, label, onClick }: IconButtonProps) {
	return (
		<button
			className={clsx(styles.button, icon === 'prev' && styles.prev)}
			aria-label={label}
			onClick={onClick}
		>
			{<Arrow />}
		</button>
	);
}
