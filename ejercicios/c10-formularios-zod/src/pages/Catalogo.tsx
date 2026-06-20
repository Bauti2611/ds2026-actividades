import LibroCard from '../components/LibroCard';
import { libros } from '../data/libros';

export default function Catalogo() {
    return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <h2 className="text-center mb-4 fw-bold position-relative pb-2">
                Nuestro Catálogo Completo
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></span>
            </h2>
            <p className="text-center text-muted mb-5">Explora nuestra colección entera y encuentra tu próxima gran lectura.</p>

            <div className="row g-4">
                {libros.map((libro) => (
                    <div className="col-12 col-md-6 col-lg-4" key={libro.id}>
                        <LibroCard
                            id={libro.id}
                            titulo={libro.titulo}
                            autor={libro.autor}
                            precio={libro.precio}
                            imagen={libro.imagen}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
