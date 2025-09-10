import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LayoutView from './views/LayoutView';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';
import CocktailView from './views/CocktailView';
import {
	cocktailLoader,
	ingredientLoader,
	ingredientsLoader,
	randomCocktailLoader,
	searchCocktailsLoader,
} from './utilities/loaders';
import NotFoundView from './views/NotFoundView';
import IngredientsView from './views/IngredientsView';
import IngredientView from './views/IngredientView';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutView />,
		children: [
			{
				index: true,
				element: <HomeView />,
				loader: randomCocktailLoader,
				errorElement: <p>Something went wrong.</p>,
			},
			{
				path: '/search',
				element: <SearchView />,
				loader: searchCocktailsLoader,
				errorElement: <p>Something went wrong.</p>,
			},
			{
				path: '/cocktail/:id',
				element: <CocktailView />,
				loader: cocktailLoader,
				errorElement: <p>Something went wrong.</p>,
			},
			{
				path: '/ingredients',
				element: <IngredientsView />,
				loader: ingredientsLoader,
				errorElement: <p>Something went wrong.</p>,
			},
			{
				path: '/ingredient/:name',
				element: <IngredientView />,
				loader: ingredientLoader,
				errorElement: <p>Something went wrong.</p>,
			},
			{
				path: '*',
				element: <NotFoundView />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
