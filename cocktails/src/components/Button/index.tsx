import styles from './style.module.css';

type ButtonProps = {
	label: string;
	onClick?: () => void;
	type?: 'button' | 'submit';
};

export default function Button({ label, onClick, type }: ButtonProps) {
	if (type === 'submit') {
		return <input className={styles.button} type="submit" value={label} />;
	}

	return (
		<button className={styles.button} onClick={onClick}>
			{label}
		</button>
	);
}
