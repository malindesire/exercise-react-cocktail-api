import styles from './style.module.css';

type ClickableProps = {
	label: string;
	onClick?: () => void;
	type?: 'button' | 'submit';
};

export default function Clickable({ label, onClick, type }: ClickableProps) {
	if (type === 'submit') {
		return (
			<input className={styles.clickable} type="submit" value={label} />
		);
	}

	return (
		<button className={styles.clickable} onClick={onClick}>
			{label}
		</button>
	);
}
