import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import type { Libro } from '../types/libro';

export default function LibroCard({ titulo, autor, precio, imagen, disponible }: Libro) {
  const [disponibilidad, setDisponibilidad] = useState<boolean>(disponible);

  return (
    <Card className="h-100 shadow-sm">
      <div style={{ height: '260px', overflow: 'hidden' }} className="position-relative">
        <Card.Img
          variant="top"
          src={imagen}
          alt={titulo}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <span
          className={`badge position-absolute top-0 end-0 m-2 ${disponibilidad ? 'bg-success' : 'bg-secondary'}`}
        >
          {disponibilidad ? 'Disponible' : 'Alquilado'}
        </span>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5">{titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{autor?.nombre}</Card.Subtitle>
        <Card.Text className="fw-bold fs-5 text-primary mb-3">
          ${precio.toLocaleString()}
        </Card.Text>
        <div className="mt-auto">
          <Button
            variant={disponibilidad ? 'outline-primary' : 'outline-secondary'}
            className="w-100"
            onClick={() => setDisponibilidad(!disponibilidad)}
          >
            {disponibilidad ? 'Alquilar' : 'Devolver'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
