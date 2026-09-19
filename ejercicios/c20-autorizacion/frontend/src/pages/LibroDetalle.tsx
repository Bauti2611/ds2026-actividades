import { useParams, Link } from 'react-router-dom';
import { Spinner, Alert } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export default function LibroDetalle() {
    const { id } = useParams<{ id: string }>();
    const { data: libro, loading, error } = useFetch<Libro>(`/libros/${id}`);

    if (loading) return (
        <main className="container flex-grow-1 mt-5 mb-5 text-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Cargando libro...</p>
        </main>
    );

    if (error || !libro) return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{error ?? "Libro no encontrado"}</p>
                <Link to="/libros" className="btn btn-outline-danger btn-sm mt-2">Volver al catálogo</Link>
            </Alert>
        </main>
    );

    return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <div className="card shadow-sm p-4">
                <div className="row g-4">
                    <div className="col-md-4">
                        <img 
                            src={libro.imagen} 
                            alt={libro.titulo} 
                            className="img-fluid rounded shadow-sm w-100" 
                            style={{ maxHeight: '450px', objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column">
                        <h2 className="display-6 fw-bold mb-3">{libro.titulo}</h2>
                        <h4 className="text-muted mb-3">
                            Autor: {libro.autor?.nombre} {libro.autor?.nacionalidad ? `(${libro.autor.nacionalidad})` : ''}
                        </h4>
                        <h3 className="text-primary fw-bold mb-4">${libro.precio.toLocaleString()}</h3>
                        <p className="mb-4">
                            Estado: <span className={`badge ${libro.disponible ? 'bg-success' : 'bg-secondary'}`}>
                                {libro.disponible ? 'Disponible' : 'Alquilado'}
                            </span>
                        </p>
                        {libro.categorias && libro.categorias.length > 0 && (
                            <p className="mb-4">
                                Categorías: {libro.categorias.map(c => (
                                    <span key={c.id} className="badge bg-info text-dark me-2">{c.nombre}</span>
                                ))}
                            </p>
                        )}
                        <div className="mt-auto">
                            <Link to="/libros" className="btn btn-secondary">Volver al catálogo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
