import clsx from 'clsx';
import type { Cocktail } from '../../utilities/types';
import Tag from '../Tag';
import styles from './style.module.css';

type ItemInfoProps = {
	item: Cocktail;
	className?: string;
};

export default function ItemInfo({ item, className }: ItemInfoProps) {
	const { name, tags, category, ingredients, glass } = item;
	return (
		<div className={clsx(styles.iteminfo, className)}>
			<h2 className={styles.name}>{name}</h2>
			<Tag text={category} />
			<dl>
				{ingredients.map((ingredient, i) => (
					<div key={i} className={styles.ingredient}>
						<dd>{ingredient.measure}</dd>
						<dt>{ingredient.ingredient}</dt>
					</div>
				))}
			</dl>
			<p>Served in a {glass}</p>
			{tags.length > 0 && <Tag text={tags.join(' . ')} />}
		</div>
	);
}
