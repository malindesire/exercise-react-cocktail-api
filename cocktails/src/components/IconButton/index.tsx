import clsx from 'clsx';
import { Arrow } from './Arrow';
import styles from './style.module.css';

type IconButtonProps = {
	icon: 'prev' | 'next';
	label: string;
	onClick: () => void;
	disabled?: boolean;
};

export default function IconButton({
	icon,
	label,
	onClick,
	disabled,
}: IconButtonProps) {
	return (
		<button
			className={clsx(styles.button, icon === 'prev' && styles.prev)}
			aria-label={label}
			onClick={onClick}
			disabled={disabled}
		>
			{<Arrow />}
		</button>
	);
}
