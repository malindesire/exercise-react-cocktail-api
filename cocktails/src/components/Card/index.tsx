import clsx from 'clsx';
import type { Image as ImageType } from '../../utilities/types';
import Image from '../Image';
import styles from './style.module.css';

type CardProps = {
	image: ImageType;
	title: string;
	link: string;
	className?: string;
};

export default function Card({ image, title, link, className }: CardProps) {
	return (
		<div className={clsx(styles.card, className)}>
			<Image src={image.src} alt={image.alt} />
			<p className={styles.title}>{title}</p>
			<a className={styles.link} href={link}>
				Read more...
			</a>
		</div>
	);
}
