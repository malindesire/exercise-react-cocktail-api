import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './views/Layout';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
