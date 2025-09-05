import { useState } from 'react';
import type { Cocktail } from '../../utilities/types';
import styles from './style.module.css';
import { fetchRandomCocktail } from '../../utilities/api';
import { mapRawCocktailData } from '../../utilities/mapRawCocktailData';
import Card from '../Card';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';

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
		<section className={styles.cardCarousel}>
			<AnimatePresence mode="wait">
				<motion.div
					key={item.id}
					initial={{ x: '100%', opacity: 0 }} // startar utanför till höger
					animate={{ x: '0%', opacity: 1 }} // landar i mitten
					exit={{ x: '-100%', opacity: 0 }} // åker ut till vänster
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className={styles.cardContainer}
					layout
				>
					<Card
						image={{ src: item.thumbnail, alt: item.name }}
						title={item.name}
						link={`/cocktail/${item.id}`}
						className={styles.card}
					/>
				</motion.div>
			</AnimatePresence>
			<Button label="Show new cocktail" onClick={() => fetchNewItem()} />
		</section>
	);
}
