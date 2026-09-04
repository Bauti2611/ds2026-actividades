import LibroCard from '../components/LibroCard';
import { libros } from '../data/libros';

export default function Home() {
    // Mostramos los primeros 3 libros como destacados en la Home
    const librosDestacados = libros.slice(0, 3);

    return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <div className="text-center mb-5 py-5 bg-dark text-white rounded-3 shadow-sm px-4 hero-section">
                <h1 className="display-4 fw-bold">📚 Bienvenidos a Librería UTN</h1>
                <p className="lead fs-4 text-light-50">Encuentra los mejores títulos de literatura fantástica, misterio y clásicos en un solo lugar.</p>
            </div>

            <h2 className="text-center mb-4 fw-bold position-relative pb-2">
                Libros Destacados
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></span>
            </h2>

            <div className="row g-4 mt-2">
                {librosDestacados.map((libro) => (
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
