import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Libro } from '../types/libro';

type LibroCardProps = Libro;

export default function LibroCard({ id, titulo, autor, precio, imagen }: LibroCardProps) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="card h-100 shadow-sm border-0 transition-hover">
            <img
                src={imagen}
                className="card-img-top"
                alt={`Portada de ${titulo}`}
                style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">{titulo}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{autor}</h6>
                <p className="card-text fs-4 text-primary mt-auto fw-bold">${precio}</p>

                <div className="d-flex gap-2 mt-3 justify-content-center">
                    <button
                        className="btn btn-outline-danger flex-grow-1"
                        onClick={() => setLikes(likes + 1)}
                    >
                        ❤️ Me gusta ({likes})
                    </button>
                    <Link
                        to={`/libros/${id}`}
                        className="btn btn-primary flex-grow-1"
                    >
                        🔎 Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
}
