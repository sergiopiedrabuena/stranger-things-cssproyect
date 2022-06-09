import React from 'react';
import '@styles/Header.scss';

const Header = () => {
	return (
		<nav>
			<div className="navbar">
				<ul>
					<li>
						<a href="/">Página principal</a>
					</li>
					<li>
						<a href="/primero">Primera</a>
					</li>
					<li>
						<a href="/segundo">Segunda</a>
					</li>
					<li>
						<a href="/tercero">Tercera</a>
					</li>
					<li>
						<a href="/cualquierlinknovalido">Prueba NotFound</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
