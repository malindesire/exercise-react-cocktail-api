import styles from './style.module.css';

type TagProps = {
	text: string;
};

export default function Tag({ text }: TagProps) {
	return <p className={styles.tag}>{text}</p>;
}
