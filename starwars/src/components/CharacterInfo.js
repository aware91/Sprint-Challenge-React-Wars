// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
// import { Container, Row } from "reactstrap";
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    margin: 5%;
`;

const CharacterInfo = () => {
    const [characterData, setCharacterData] = useState([])
        useEffect(() => {
            axios
                .get("https://rickandmortyapi.com/api/character")
                .then(response => {
                    setCharacterData(response.data.results)
                })
                .catch(error => {console.error("ERROR: ", error.message)});
        }, [])
        console.info(characterData)
    return(
        <div>
            <Box>
                {characterData.map(characters => {
                    return <Character characters={characters} key={characters.id} />;
                })}
            </Box>
        </div>
    );    
}

export default CharacterInfo;