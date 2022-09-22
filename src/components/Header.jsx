import React from 'react';
import '@styles/Header.scss';

const Header = () => {
	return (
		<nav>
			<div className="navbar">
				<ul>
					<li>
						<a href="/">hawkings</a>
					</li>
					<li>
						<a href="/primero">personajes</a>
					</li>
					<li>
						<a href="/segundo">temporadas</a>
					</li>
					<li>
						<a href="/tercero">playlist</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
