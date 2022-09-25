import React from 'react';
import '@styles/Hawkins.scss'

import NameCharacter from '@components/nameCharacter';

const Hawkins = () => {
	return (
		<div className="Hawkins">
			<div id='mainModal'>
				<div className='modalTitle' id='modalTitle'>
					<p>welcome to <span>hawkings</span></p>
					<p id='indiana'>indiana</p>
				</div>
				<div id='modalText'>
					<p>Y la respuesta es que no, Hawkins no existe. El pueblo ficticio de Indiana donde transcurren todos los hechos se graba en varios lugares cercanos a Atlanta, la gran mayoría en localizaciones que se encuentran en los pueblos de Jackson, East Point y Stockbridge.
					</p>
					<p>Hawkins es una pequeña ciudad del medio oeste de los Estados Unidos de América ubicada en el condado de Roane en el estado de Indiana. Tiene una población estimada de 10.000 a 15.000.
					</p>
				</div>
			</div>
			<NameCharacter/>
		</div>
	);
}

export default Hawkins;
