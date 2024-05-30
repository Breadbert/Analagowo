import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './App.css';

import carouselImage1 from './assets/carousel_image1.jpg';
import carouselImage2 from './assets/carousel_image2.jpg';
import carouselImage3 from './assets/carousel_image3.jpg';

function App() {
    return (
        <div className="app">
            <Container fluid className="main-content">
                <Row className="justify-content-center">
                    <Col md={10} className="content">
                        <h1>Dashboard</h1>
                        <Row>
                            <Col md={4}>
                                <Card className="mb-4 vinyl-card">
                                    <Card.Header as="h5">Vinyl Records</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            View your current vinyl inventory.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="mb-4 cassette-card">
                                    <Card.Header as="h5">Cassette Tapes</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            View your current cassette inventory.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="mb-4 cd-card">
                                    <Card.Header as="h5">CD Albums</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            View your current CD inventory.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row xs={1} lg={3}>
                            <Col>
                                <Carousel data-bs-theme="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-blick w-100"
                                            src={carouselImage1}
                                            alt="1"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-blick w-100"
                                            src={carouselImage2}
                                            alt="2"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-blick w-100"
                                            src={carouselImage3}
                                            alt="3"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>

                            <Col>
                                <Card className="mb-4 sales-overview-card">
                                    <Card.Header as="h5">Sales Overview</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            View a summary of your sales performance and trends.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="mb-4 reports-card">
                                    <Card.Header as="h5">Reports</Card.Header>
                                    <Card.Body>
                                        <div className="big-number">5</div>
                                        <Card.Text>
                                            You currently have 5 reports to view.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
