import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
    const { usuario, logout, tieneRol } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="md" className="px-4 py-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className="mb-0 fs-3 fw-bold text-white d-flex align-items-center">
                    📚 Librería UTN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 align-items-center mt-2 mt-md-0 gap-2">
                        <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/libros">Catálogo</Nav.Link>
                        {tieneRol('ADMIN') && (
                            <Nav.Link as={NavLink} to="/libros/nuevo">Nuevo libro</Nav.Link>
                        )}
                        {usuario ? (
                            <>
                                <Navbar.Text className="text-white me-2">
                                    Hola, {usuario.nombre}
                                </Navbar.Text>
                                <Button variant="outline-light" size="sm" onClick={logout}>
                                    Salir
                                </Button>
                            </>
                        ) : (
                            <Nav.Link as={NavLink} to="/login">
                                Ingresar
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
