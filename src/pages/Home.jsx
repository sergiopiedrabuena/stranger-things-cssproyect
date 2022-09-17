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
				<p id='mainTitle'>stranger<br/>things</p>
				<div id='verticalBar'></div>
			</div>
			
		</div>

	);
}

export default Home;
