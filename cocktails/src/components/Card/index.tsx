import clsx from 'clsx';
import type { Image as ImageType } from '../../utilities/types';
import Image from '../Image';
import styles from './style.module.css';
import { NavLink } from 'react-router';

type CardProps = {
	image: ImageType;
	title: string;
	link: string;
	className?: string;
};

export default function Card({ image, title, link, className }: CardProps) {
	return (
		<div className={clsx(styles.card, className)}>
			<Image src={image.src} alt={image.alt} className={styles.image} />
			<h2 className={styles.title}>{title}</h2>
			<NavLink className={styles.link} to={link}>
				Read more
			</NavLink>
		</div>
	);
}
