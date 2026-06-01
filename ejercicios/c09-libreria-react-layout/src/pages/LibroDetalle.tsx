import { useParams, Link } from 'react-router-dom';
import { libros } from '../data/libros';

export default function LibroDetalle() {
    const { id } = useParams<{ id: string }>();
    const libro = libros.find((l) => l.id === Number(id));

    if (!libro) {
        return (
            <main className="container flex-grow-1 mt-5 mb-5 text-center">
                <div className="py-5">
                    <h2 className="text-danger fw-bold mb-3">⚠️ Libro no encontrado</h2>
                    <p className="text-muted mb-4">El libro que buscas no existe o ha sido retirado.</p>
                    <Link to="/libros" className="btn btn-primary">
                        Volver al Catálogo
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <div className="card shadow border-0 overflow-hidden">
                <div className="row g-0">
                    <div className="col-12 col-md-5">
                        <img
                            src={libro.imagen}
                            alt={`Portada de ${libro.titulo}`}
                            className="img-fluid w-100 h-100"
                            style={{ objectFit: 'cover', minHeight: '400px', maxHeight: '550px' }}
                        />
                    </div>
                    <div className="col-12 col-md-7 d-flex flex-column p-4 p-lg-5 justify-content-center">
                        <div>
                            <span className="badge bg-secondary mb-2">Libro Recomendado</span>
                            <h1 className="display-5 fw-bold mb-2 text-dark">{libro.titulo}</h1>
                            <h3 className="text-muted mb-4 fs-4">por {libro.autor}</h3>
                            
                            <hr className="my-4" />

                            <div className="bg-light p-3 rounded-3 mb-4 d-inline-block">
                                <span className="text-muted d-block fs-6">Precio Especial</span>
                                <span className="fs-2 text-primary fw-bold">${libro.precio}</span>
                            </div>

                            <p className="text-secondary mb-5 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac purus pretium, 
                                sodales arcu in, porttitor eros. Proin vel nisl tristique, convallis lorem vel, 
                                aliquet justo. Ut hendrerit imperdiet leo id ultrices. Class aptent taciti sociosqu 
                                ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>

                        <div className="d-flex gap-3 flex-wrap">
                            <button className="btn btn-success btn-lg px-4 fs-5">
                                🛒 Comprar Ahora
                            </button>
                            <Link to="/libros" className="btn btn-outline-secondary btn-lg px-4 fs-5">
                                ↩️ Volver al Catálogo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
