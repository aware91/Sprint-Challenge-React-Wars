// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import { Container, Row } from 'reactstrap';

const CharacterInfo = () => {
    const [character, setCharacter] = useState([])
    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                console.log(response);
                setCharacter(response)
            })
            .catch(error => {
                console.log('Error!', error);
            })
    }, []);

    return(
        <Container>
            <Row>
                {character.map(characters => {
                return <Character characters={characters} key={characters.id} />;
                })}
            </Row>
        </Container>
    )    
}

export default CharacterInfo;