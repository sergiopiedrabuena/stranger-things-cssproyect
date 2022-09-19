import React from 'react';
import '@styles/Home.scss';

import Lucas from '@images/lucas.png';
import Dustin from '@images/dustin.png';
import Eleven from '@images/eleven.png';
import Will from '@images/will.png';

const Home = () => {
	return (
		<div className='Home'>
			<div className='characterContainer'>
				<img className='character' id='lucas' src={Lucas}></img>
				<img className='character' id='dustin' src={Dustin}></img>
				<img className='character' id='eleven' src={Eleven}></img>
				<img className='character' id='will' src={Will}></img>
				<div id='mainTitleContainer'>
					<p className='mainTitle'>s</p>
					<p className='mainTitle'>t</p>
					<p className='mainTitle'>ran</p>
					<p className='mainTitle'>g</p>
					<p className='mainTitle'>e</p>
					<p className='mainTitle'>r</p>
					<p className='mainTitle'>t</p>
					<p className='mainTitle'>h</p>
					<p className='mainTitle'>i</p>
					<p className='mainTitle'>n</p>
					<p className='mainTitle'>g</p>
					<p className='mainTitle'>s</p>
					<div className='underline'></div>
					<div className='underline'></div>
					<div className='underline'></div>
				</div>
				<div id='verticalBar'></div>
			</div>

		</div>

	);
}

export default Home;
