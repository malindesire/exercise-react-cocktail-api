import type { Image as ImageType } from '../../utilities/types';
import styles from './style.module.css';

type ImageProps = ImageType;

export default function Image({ src, alt }: ImageProps) {
	return (
		<div className={styles.image}>
			<img src={src} alt={alt} />
		</div>
	);
}
