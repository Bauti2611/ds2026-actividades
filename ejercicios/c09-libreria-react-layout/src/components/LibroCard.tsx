import { useState } from 'react';
import type { Libro } from '../types/libro';

type LibroCardProps = Omit<Libro, 'id'>;

export default function LibroCard({ titulo, autor, precio, imagen }: LibroCardProps) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="card h-100 shadow-sm border-0">
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

                <button
                    className="btn btn-outline-danger mt-3"
                    onClick={() => setLikes(likes + 1)}
                >
                    ❤️ Me gusta ({likes})
                </button>
            </div>
        </div>
    );
}
