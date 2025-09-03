import clsx from 'clsx';
import { Arrow } from './Arrow';
import styles from './style.module.css';
import { NavLink } from 'react-router';

type BaseProps = {
	icon: 'prev' | 'next' | 'search';
	label: string;
};

type IconButtonProps = BaseProps & {
	element: 'button';
	disabled?: boolean;
	onClick: () => void;
};

type IconLinkProps = BaseProps & {
	element: 'a';
	link: string;
};

type ClickableIconProps = IconButtonProps | IconLinkProps;

export default function ClickableIcon(props: ClickableIconProps) {
	if (props.element === 'a') {
		return <IconLink {...props} />;
	}

	return <IconButton {...props} />;
}

function IconButton({ icon, label, disabled, onClick }: IconButtonProps) {
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

function IconLink({ icon, label, link }: IconLinkProps) {
	return (
		<NavLink
			className={clsx(styles.button, icon === 'prev' && styles.prev)}
			aria-label={label}
			to={link}
		>
			{<Arrow />}
		</NavLink>
	);
}
