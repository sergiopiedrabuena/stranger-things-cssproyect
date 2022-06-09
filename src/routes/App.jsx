import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Primero from '@pages/Primero';
import Segundo from '@pages/Segundo';
import Tercero from '@pages/Tercero';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import '@styles/global.css';

const App = () => {
	return (
		<AppContext.Provider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/primero" element={<Primero />} />
						<Route path="/segundo" element={<Segundo />} />
						<Route path="/tercero" element={<Tercero />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
