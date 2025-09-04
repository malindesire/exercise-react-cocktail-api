import { useState } from 'react';
import type { Cocktail } from '../../utilities/types';
import styles from './style.module.css';
import { fetchRandomCocktail } from '../../utilities/api';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import Card from '../Card';
import Button from '../Button';

type CardCarouselProps = {
	initialItem: Cocktail;
};

export default function CardCarousel({ initialItem }: CardCarouselProps) {
	const [item, setItem] = useState(initialItem);

	const fetchNewItem = async () => {
		const data = await fetchRandomCocktail();
		setItem(mapRawCocktailData(data.drinks[0]));
	};

	return (
		<section className={styles.cardcarousel}>
			<Card
				image={{ src: item.thumbnail, alt: item.name }}
				title={item.name}
				link={`/cocktail/${item.id}`}
				className={styles.card}
			/>
			<Button label="Show new cocktail" onClick={() => fetchNewItem()} />
		</section>
	);
}
