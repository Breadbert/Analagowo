import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
    return (
        <div className="app">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Azymut</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/reports">Reports</Nav.Link>
                            <Nav.Link href="/inventoryview">Products</Nav.Link>
                            <Nav.Link href="/sales">Sales</Nav.Link>
                            <Nav.Link href="/inventory">Inventory</Nav.Link>
                            <Nav.Link href="/customers">Customers</Nav.Link>
                            <Nav.Link href="/settings">Settings</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}