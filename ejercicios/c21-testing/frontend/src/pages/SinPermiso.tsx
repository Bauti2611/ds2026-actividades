import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export default function SinPermiso() {
  return (
    <Container className="py-5">
      <Alert variant="warning" className="text-center p-4 shadow-sm">
        <Alert.Heading className="fs-3 mb-3">Acceso Restringido</Alert.Heading>
        <p className="fs-5">
          No tenés los permisos necesarios para acceder a esta página.
        </p>
        <hr />
        <div className="d-flex justify-content-center mt-3">
          <Link to="/libros" className="btn btn-outline-dark">
            Volver al Catálogo
          </Link>
        </div>
      </Alert>
    </Container>
  );
}
