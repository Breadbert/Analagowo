import React from 'react';
import { Container, Table, Accordion, Form, Row, Col } from 'react-bootstrap';
import './Inventory.css';

export const Inventory = () => {
    const products = [
        { code: 1, name: 'Ihsahn - "Ihnsahn" 2LP', category: 'Vinyl', PKWIU: '21.11.01.0', priceNetto: 75.50 },
        { code: 2, name: 'Katatonia - The Great Cold Distance', category: 'Vinyl', PKWIU: '21.11.01.0', priceNetto: 82.25 },
        { code: 3, name: 'Death - The Sound of Perserverance', category: 'Cassette', PKWIU: '36.22.04.0', priceNetto: 24.50 },
        { code: 4, name: 'Anathema - The Silent Enigma', category: 'Cassette', PKWIU: '36.22.04.0', priceNetto: 24.50 },
        { code: 5, name: 'Porcupine Tree - In Absentia', category: 'CD', PKWIU: '18.11.01.0', priceNetto: 35.50 },
        { code: 6, name: 'Myrkur - Folkesange', category: 'CD', PKWIU: '18.11.01.0', priceNetto: 20.70 },
    ];

    const updatedProducts = products.map(product => {
        const tax = (product.priceNetto * 0.23).toFixed(2);
        const priceBrutto = (parseFloat(product.priceNetto) + parseFloat(tax)).toFixed(2);
        return { ...product, tax, priceBrutto };
    });

    return (
        <Container>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>List filter</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Search by name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Price lowest</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Price highest</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Search categories</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Show all</option>
                                            <option value="1">Vinyl</option>
                                            <option value="2">Cassette</option>
                                            <option value="3">CD</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>PKWIU</th>
                        <th>Price Netto</th>
                        <th>VAT</th>
                        <th>Tax</th>
                        <th>Price Brutto</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedProducts.map(product => (
                        <tr key={product.code}>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.PKWIU}</td>
                            <td>{product.priceNetto}</td>
                            <td>23%</td>
                            <td>{product.tax}</td>
                            <td>{product.priceBrutto}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
