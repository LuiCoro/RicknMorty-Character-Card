import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<h3>Rick N Morty Facts</h3>
			<ul className='Nav-Links'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/comingsoon'>Coming Soon</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

// Here we creating links to help us move through the pages
