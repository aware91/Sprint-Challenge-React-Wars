// Write your Character component here
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const Character = ({ characters }) => {

    return (
        <Col xs="6" md="4" xl="3">
            <Card>
                <CardBody>
                    <CardTitle>{characters.name}</CardTitle>
                    <CardText>{characters.status}</CardText>
                    <CardText>{characters.species}</CardText>
                    <CardText>{characters.type}</CardText>
                    <CardText>{characters.gender}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Character;