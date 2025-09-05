import { NavLink } from 'react-router';
import styles from './style.module.css';

type BaseProps = {
	label: string;
};

type ButtonProps = BaseProps & {
	element: 'button';
	onClick: () => void;
	disabled?: boolean;
};

type LinkProps = BaseProps & {
	element: 'a';
	link: string;
};

type SubmitProps = BaseProps & {
	element: 'submit';
};

type ClickableProps = ButtonProps | LinkProps | SubmitProps;

export default function Clickable(props: ClickableProps) {
	if (props.element === 'button') return <Button {...props} />;
	if (props.element === 'a') return <Link {...props} />;
	if (props.element === 'submit') return <Submit {...props} />;
}

function Button({ label, onClick, disabled }: ButtonProps) {
	return (
		<button
			className={styles.clickable}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
}

function Link({ label, link }: LinkProps) {
	return (
		<NavLink className={styles.clickable} to={link}>
			{label}
		</NavLink>
	);
}

function Submit({ label }: SubmitProps) {
	return <input className={styles.clickable} type="submit" value={label} />;
}
