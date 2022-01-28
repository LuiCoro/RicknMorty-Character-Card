import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';

const CharacterDetails = ({ match }) => {
	useEffect(() => {
		fetchCharacter();
		console.log(match);
	}, []);

	const [Character, setCharacter] = useState([]);

	const fetchCharacter = async () => {
		const fetchCharacter = await fetch(
			`https://rickandmortyapi.com/api/character/${match.params.id}`
		);
		const Character = await fetchCharacter.json();
		setCharacter(Character);

		console.log(Character);
	};

	return (
		<Card centered>
			<Card.Content>
				<Image src={Character.image} alt={Character.name}></Image>
				<br />
				<Card.Header>{Character.name}</Card.Header>
				<ul className='Details'>
					<li>Vitals: {Character.status}</li>
					<li>Species: {Character.species}</li>
					<li>Gender: {Character.gender}</li>
				</ul>
			</Card.Content>
		</Card>
	);
};

export default CharacterDetails;
