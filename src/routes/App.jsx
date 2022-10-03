import React , { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Primero from '@pages/Primero';
import Segundo from '@pages/Segundo';
import Tercero from '@pages/Tercero';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import '@styles/global.css';

const App = () => {
	useEffect(() => {
		setTimeout(
			function() 
			{
				$('#lucas').css({'opacity':'0','-webkit-transition':'all 1.3s ease'});
				$('#will').css({'opacity':'0','-webkit-transition':'all 1.3s ease'});
				$('#dustin').css({'opacity':'0','-webkit-transition':'all 1.3s ease'});
				$('#mainBackground').css({'height':'88vh','-webkit-transition':'all 1.5s ease'});
				$('#eleven').css({'margin-right':'-87%', 'filter' : 'opacity(90%','-webkit-transition':'all 2s ease'});
				$('#verticalBar').css({'opacity':'0','-webkit-transition':'all 1.3s ease'});
				$('#mainTitleContainer').css({'opacity':'0','-webkit-transition':'all 1.3s ease'});
			}, 2500);		
    }, []);

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
