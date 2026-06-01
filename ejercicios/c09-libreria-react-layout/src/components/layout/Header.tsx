import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="px-4 py-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand className="mb-0 fs-3">
                    📚 Librería UTN
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
