import clsx from 'clsx';
import type { Image as ImageType } from '../../utilities/types';
import styles from './style.module.css';
import { useState } from 'react';

type ImageProps = ImageType & {
	className?: string;
};

export default function Image({ src, alt, className }: ImageProps) {
	const [error, setError] = useState(false);
	return (
		<figure className={clsx(styles.image, className)}>
			<img
				src={src}
				alt={alt}
				onError={() => setError(true)}
				className={clsx(error && styles.error)}
			/>
		</figure>
	);
}
