import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const Home = () => {
	useEffect(() => {
		fetchCharacters();
	}, []);

	const [Characters, setCharacters] = useState([]);

	const fetchCharacters = async () => {
		const data = await fetch('https://rickandmortyapi.com/api/character');

		const characters = await data.json();
		console.log(characters.results);
		setCharacters(characters.results);
	};

	return (
		<Card centered>
			<div>
				{Characters.map(character => (
					<h1 key={character.id}>
						<Link to={`/home/${character.id}`}>{character.name}</Link>
					</h1>
				))}
			</div>
		</Card>
	);
};

export default Home;
