import clsx from 'clsx';
import { Arrow } from './Arrow';
import styles from './style.module.css';
import { NavLink } from 'react-router';
import { Search } from './Search';

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
			className={clsx(styles.clickable, icon === 'prev' && styles.prev)}
			aria-label={label}
			onClick={onClick}
			disabled={disabled}
		>
			{Icon(icon)}
		</button>
	);
}

function IconLink({ icon, label, link }: IconLinkProps) {
	return (
		<NavLink
			className={clsx(styles.clickable, icon === 'prev' && styles.prev)}
			aria-label={label}
			to={link}
		>
			{Icon(icon)}
		</NavLink>
	);
}

function Icon(iconType: string) {
	switch (iconType) {
		case 'prev':
			return <Arrow />;
		case 'next':
			return <Arrow />;
		case 'search':
			return <Search />;
	}
}
