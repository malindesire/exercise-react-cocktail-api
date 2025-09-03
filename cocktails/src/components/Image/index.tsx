import clsx from 'clsx';
import type { Image as ImageType } from '../../utilities/types';
import styles from './style.module.css';

type ImageProps = ImageType & {
	className?: string;
};

export default function Image({ src, alt, className }: ImageProps) {
	return (
		<div className={clsx(styles.image, className)}>
			<img src={src} alt={alt} />
		</div>
	);
}
