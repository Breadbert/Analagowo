import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card, ListGroup } from 'react-bootstrap';
import './Styles.css';

import image_ihsahn2lp from '../assets/ihsahn.jpg';
import image_katatonialp from '../assets/katatonia.jpg';
import image_deathcas from '../assets/death.jpg';
import image_anathemacas from '../assets/anathema.jpg';
import image_porctreecd from '../assets/pol_pm_Porcupine-Tree-In-Absentia-60670_1.jpg';
import image_myrkurcd from '../assets/pol_pm_Myrkur-Folkesange-52553_1.jpg';
import image_anathema2 from '../assets/pol_pm_Anathema-Pentecost-III-Lp-53985_1.jpg';
import image_anathema3 from '../assets/pol_pm_Anathema-Serenades-Lp-48923_1.jpg';
import image_opeth1 from '../assets/pol_pm_Opeth-Still-Life-Lp-48860_1.jpg';
import image_opeth2 from '../assets/pol_pm_Opeth-Orchid-71199_1.jpg';
import image_katatonia1 from '../assets/pol_pm_Katatonia-Dance-Of-December-Souls-LP-53137_1.jpg';
import image_katatonia2 from '../assets/pol_pm_Katatonia-For-Funerals-To-Come-30534_1.jpg';
import placeholder from '../assets/emptyPlaceholderImage.png';

const vinylItems = [
    { id: 1, title: 'Ihsahn - "Ihnsahn" 2LP', image: image_ihsahn2lp },
    { id: 2, title: 'Katatonia - The Great Cold Distance', image: image_katatonialp },
    { id: 3, title: 'Anathema - Pentecost III LP', image: image_anathema2 },
    { id: 4, title: 'Opeth - Still Life', image: image_opeth1 },
    { id: 5, title: 'Lorem Ipsum Band - Mumble Rap1', image: placeholder },
    { id: 6, title: 'Lorem Ipsum Band - Mumble Rap2', image: placeholder },
    { id: 7, title: 'Lorem Ipsum Band - Mumble Rap3', image: placeholder },
    { id: 8, title: 'Lorem Ipsum Band - Mumble Rap4', image: placeholder },
];

const cassetteItems = [
    { id: 1, title: 'Death - The Sound of Perserverance', image: image_deathcas },
    { id: 2, title: 'Anathema - The Silent Enigma', image: image_anathemacas },
    { id: 3, title: 'Katatonia - Dance of December Souls', image: image_katatonia1 },
    { id: 4, title: 'Opeth - Orchid', image: image_opeth2 },
    { id: 5, title: 'Lorem Ipsum Band - Mumble Rap5', image: placeholder },
    { id: 6, title: 'Lorem Ipsum Band - Mumble Rap6', image: placeholder },
    { id: 7, title: 'Lorem Ipsum Band - Mumble Rap7', image: placeholder },
    { id: 8, title: 'Lorem Ipsum Band - Mumble Rap8', image: placeholder }
];

const cdItems = [
    { id: 1, title: 'Porcupine Tree - In Absentia', image: image_porctreecd },
    { id: 2, title: 'Myrkur - Folkesange', image: image_myrkurcd },
    { id: 3, title: 'Katatonia - For Funerals To Come', image: image_katatonia2 },
    { id: 4, title: 'Anathema - Serenades', image: image_anathema3 },
    { id: 5, title: 'Lorem Ipsum Band - Mumble Rap9', image: placeholder },
    { id: 6, title: 'Lorem Ipsum Band - Mumble Rap10', image: placeholder },
    { id: 7, title: 'Lorem Ipsum Band - Mumble Rap11', image: placeholder },
    { id: 8, title: 'Lorem Ipsum Band - Mumble Rap12', image: placeholder }
];

export const InventoryGraphicalPreview = () => {
    const [selectedCategory, setSelectedCategory] = useState('vinyl');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const renderItems = (items) => {
        return items.map(item => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card>
                    <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'scale-down' }} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        ));
    }

    return (
        <div className="app">
            <Container fluid className="main-content">
                <Row className="justify-content-center mb-4">
                    <Col xs={10} md={6}>
                        <Form>
                            <Form.Group controlId="categorySelect">
                                <Form.Label>Select Category</Form.Label>
                                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
                                    <option value="vinyl">Vinyl</option>
                                    <option value="cassette">Cassette</option>
                                    <option value="cd">CD</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    {selectedCategory === "vinyl" && renderItems(vinylItems)}
                    {selectedCategory === "cassette" && renderItems(cassetteItems)}
                    {selectedCategory === "cd" && renderItems(cdItems)}
                </Row>
            </Container>
        </div>
    );
};
