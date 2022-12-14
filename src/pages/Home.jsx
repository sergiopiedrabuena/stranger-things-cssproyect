import React from 'react';
import '@styles/Home.scss';

import Lucas from '@images/lucas.png';
import Dustin from '@images/dustin.png';
import Eleven from '@images/eleven.png';
import Will from '@images/will.png';
import MainBackground from '@images/main-background.jpg'

import Hawkins from '@containers/Hawkins'

const Home = () => {
	return (
		<div className='Home'>
			<div className='characterContainer'>
				<div id='mainBackgroundContainer'><img id='mainBackground' src={MainBackground} />
				</div>
				<img className='character' id='lucas' src={Lucas}></img>
				<img className='character' id='dustin' src={Dustin}></img>
				<img className='character' id='eleven' src={Eleven}></img>
				<img className='character' id='will' src={Will}></img>
			</div>
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
				<div className='underline-container'>
					<div id='underlineOne' className='underline'></div>
					<div id='underlineTwo' className='underline'></div>
					<div id='underlineThree' className='underline'></div>
				</div>
				<div id='verticalBar'></div>
			</div>
			<Hawkins/>
		</div>

	);
}

export default Home;
