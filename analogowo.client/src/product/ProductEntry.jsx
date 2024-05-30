import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const ProductEntry = () => {
    return (
        <div>
            <Container fluid>
                <Form>
                    <Row>
                        <Tabs
                            defaultActiveKey="danePodstawowe"
                            id="daneTowaru"
                            className="mb-3"
                        >
                            <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Code</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Code" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Catalog number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter catalog number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter product name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Categories</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">Vinyl</option>
                                                <option value="2">Cassette</option>
                                                <option value="3">CD</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>

                            <Tab eventKey="additionalInformation" title="Price">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>PKWIU</Form.Label>
                                            <Form.Control type="text" placeholder="Enter PKWiU" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>VAT</Form.Label>
                                            <Form.Control type="text" placeholder="Enter VAT" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Default price</Form.Label>
                                            <Form.Control type="text" placeholder="Enter default price" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>

                            <Tab eventKey="comments" title="Comments">
                                <Row>
                                    <Col xs={8}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Additional information</Form.Label>
                                            <Form.Control as="textarea" placeholder="Enter additional information" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control as="textarea" placeholder="Enter comments" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                    <Row>
                        <Col xs="auto" className="pb-3">
                            <Button variant="primary">Save</Button>{' '}
                            <Button variant="primary">Cancel</Button>{' '}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
