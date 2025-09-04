import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LayoutView from './views/LayoutView';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';
import CocktailView from './views/CocktailView';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutView />,
		children: [
			{ index: true, element: <HomeView /> },
			{ path: '/search', element: <SearchView /> },
			{ path: '/cocktail/:id', element: <CocktailView /> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
