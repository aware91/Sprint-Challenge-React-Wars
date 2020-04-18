// Write your Character component here
import React from 'react';
// import {   CardImg, CardText, CardBody,
//     CardTitle, Col  } from 'reactstrap';
    import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 25%;
    margin: 3%;
`;

const CardBody = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    background: #EDF2B9;
`;

const CardTitle = styled.h2`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background: #2DCF94;
    width: 100%;
`;

const CardImg = styled.img`
    display: block;
    margin: 5%;
    width: 90%;
`;

const CardText = styled.p`
    text-align: center;
    margin: 3%;
`;

const Statues = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: space-evenly;
    width: 100%;
`;

const StatuesText = styled.p`
    width: 49%;
`;
const Character = ({ characters }) => {
    console.log('characters', characters)
    return (
            <Card>
                <CardTitle>{characters.name}</CardTitle>
                <CardBody>
                    <CardImg src={characters.image} alt={characters.name} />
                    <Statues>
                        <StatuesText>Status: {characters.status}</StatuesText>
                        <StatuesText>Species: {characters.species}</StatuesText>
                        <StatuesText>Type: {characters.type}</StatuesText>
                        <StatuesText>Gender: {characters.gender}</StatuesText>
                    </Statues>
                    <CardText>Origin: {characters.origin.name}</CardText>
                    <CardText>Location: {characters.location.name}</CardText>
                    <CardText>Created: {characters.created}</CardText>
                </CardBody>
            </Card>
    );
};

export default Character;