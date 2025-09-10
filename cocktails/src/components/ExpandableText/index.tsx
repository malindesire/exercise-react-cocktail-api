import { useState } from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

type ExpandableTextProps = {
	text: string;
};

export default function ExpandableText({ text }: ExpandableTextProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<p
				className={clsx(
					styles.expandableText,
					expanded && styles.expanded
				)}
			>
				{text}
			</p>
			<button
				className={styles.button}
				onClick={() => setExpanded(!expanded)}
			>
				{!expanded ? 'Show more' : 'Show less'}
			</button>
		</div>
	);
}
