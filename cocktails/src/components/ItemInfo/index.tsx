import type { Cocktail } from '../../utilities/types';
import Tag from '../Tag';
import styles from './style.module.css';

type ItemInfoProps = {
	item: Cocktail;
};

export default function ItemInfo({ item }: ItemInfoProps) {
	const { name, tags, category, ingredients, glass } = item;
	return (
		<div className={styles.iteminfo}>
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
