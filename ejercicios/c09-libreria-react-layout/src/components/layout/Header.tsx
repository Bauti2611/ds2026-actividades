import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="px-4 py-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="mb-0 fs-3 fw-bold text-white d-flex align-items-center">
                    📚 Librería UTN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 align-items-center mt-2 mt-md-0 gap-2">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/libros">Catálogo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
