import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import HomeView from './views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router';
import LayoutView from './views/LayoutView';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutView />}>
					<Route index element={<HomeView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
