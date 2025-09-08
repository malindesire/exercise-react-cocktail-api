import { NavLink } from 'react-router';
import styles from './style.module.css';
import clsx from 'clsx';

type BaseProps = {
	label: string;
	disabled?: boolean;
};

type ButtonProps = BaseProps & {
	element: 'button';
	onClick: () => void;
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

function Link({ label, link, disabled }: LinkProps) {
	return (
		<NavLink
			className={clsx(styles.clickable, disabled && styles.disabled)}
			to={link}
		>
			{label}
		</NavLink>
	);
}

function Submit({ label, disabled }: SubmitProps) {
	return (
		<input
			className={clsx(styles.clickable, disabled && styles.disabled)}
			type="submit"
			value={label}
		/>
	);
}
