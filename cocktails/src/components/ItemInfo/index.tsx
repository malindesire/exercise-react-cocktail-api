import clsx from 'clsx';
import type { Cocktail, Ingredient } from '../../utilities/types';
import Tag from '../Tag';
import styles from './style.module.css';
import ExpandableText from '../ExpandableText';

type BaseProps = {
	className: string;
};

type CocktailInfoProps = BaseProps & {
	item: 'cocktail';
	cocktail: Cocktail;
};

type IngredientInfoProps = BaseProps & {
	item: 'ingredient';
	ingredient: Ingredient;
};

type ItemInfoProps = CocktailInfoProps | IngredientInfoProps;

export default function ItemInfo(props: ItemInfoProps) {
	return (
		<div className={clsx(styles.iteminfo, props.className)}>
			{props.item === 'cocktail' && <CocktailInfo {...props} />}
			{props.item === 'ingredient' && <IngredientInfo {...props} />}
		</div>
	);
}

function CocktailInfo({ cocktail }: CocktailInfoProps) {
	const { name, tags, category, ingredients, glass } = cocktail;

	return (
		<>
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
			<p>
				Serve in <span className={styles.glass}>{glass}</span>
			</p>
			{tags.length > 0 && <Tag text={tags.join(' . ')} />}
		</>
	);
}

function IngredientInfo({ ingredient }: IngredientInfoProps) {
	const { name, category, alcoholic, description } = ingredient;
	return (
		<>
			<h2 className={styles.name}>{name}</h2>
			{category && <Tag text={category} />}
			{description && <ExpandableText text={description} />}
			<Tag text={alcoholic ? 'Alcoholic' : 'Non-Alcoholic'} />
		</>
	);
}
