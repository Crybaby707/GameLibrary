import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import DataFetchingService from '../Services/DataFetchingService';

 const Cards = () => {

    const renderCard = (card, index) => {
        <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" />
        <Card.Body>
        <DataFetchingService />
            <Card.Title></Card.Title>
            <Card.Text>


            </Card.Text>
            <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
        </Card.Body>
        </Card>
    }

};
