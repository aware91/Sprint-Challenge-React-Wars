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
    align-items: center;
`;

const CardTitle = styled.h2`
    text-align: center;
`;

const CardImg = styled.img`
    display: block;
    margin-left: 7.5%;
    margin-right: 5%;
    width: 100%;
`;

const CardText = styled.p`
    text-align: center;
`;

const Character = ({ characters }) => {
    console.log('characters', characters)
    return (
            <Card>
                <CardBody>
                    <CardTitle>{characters.name}</CardTitle>
                    <CardImg src={characters.image} alt={characters.name} />
                    <CardText>{characters.status}</CardText>
                    <CardText>{characters.species}</CardText>
                    <CardText>{characters.type}</CardText>
                    <CardText>{characters.gender}</CardText>
                </CardBody>
            </Card>
    );
};

export default Character;