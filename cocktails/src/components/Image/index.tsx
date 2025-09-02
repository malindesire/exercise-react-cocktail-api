import styles from './style.module.css';

type ImageProps = {
	src: string;
	alt: string;
};

export default function Image({ src, alt }: ImageProps) {
	return (
		<div className={styles.image}>
			<img src={src} alt={alt} />
		</div>
	);
}
