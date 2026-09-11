import { Spinner, Alert } from 'react-bootstrap';
import LibroCard from '../components/LibroCard';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export default function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros');

  if (loading) {
    return (
      <main className="container flex-grow-1 mt-5 mb-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Cargando catálogo desde la API...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container flex-grow-1 mt-5 mb-5">
        <Alert variant="danger">
          <Alert.Heading>Error al conectar con el servidor</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </main>
    );
  }

  return (
    <main className="container flex-grow-1 mt-4 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Catálogo de Libros</h2>
        <span className="text-muted">Total: {libros?.length ?? 0}</span>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {(libros ?? []).map((libro) => (
          <div className="col" key={libro.id}>
            <LibroCard {...libro} />
          </div>
        ))}
      </div>
    </main>
  );
}
