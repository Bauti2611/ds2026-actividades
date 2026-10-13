import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Card, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';
import { useFetch } from '../hooks/useFetch';
import { apiFetch } from '../services/api';
import type { Autor, Libro } from '../types/libro';

type LibroFormulario = z.input<typeof libroSchema>;

export default function LibroNuevo() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const { data: autores, loading: cargandoAutores, error: errorAutores } = useFetch<Autor[]>('/autores');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LibroFormulario, unknown, LibroValidado>({
    resolver: zodResolver(libroSchema),
  });

  const onSubmit = async (datos: LibroValidado) => {
    try {
      setGuardando(true);
      setErrorApi(null);
      await apiFetch<Libro>('/libros', {
        method: 'POST',
        body: JSON.stringify(datos),
      });
      navigate('/libros');
    } catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    } finally {
      setGuardando(false);
    }
  };

  if (cargandoAutores) {
    return (
      <main className="container flex-grow-1 mt-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Cargando autores...</p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <Card style={{ maxWidth: '500px', margin: '0 auto' }} className="shadow-sm p-4">
        <h2 className="mb-4 text-center">Agregar Nuevo Libro</h2>

        {errorAutores && <Alert variant="warning">Error cargando autores: {errorAutores}</Alert>}
        {errorApi && <Alert variant="danger">{errorApi}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Rayuela"
              {...register('titulo')}
              isInvalid={!!errors.titulo}
            />
            <Form.Control.Feedback type="invalid">
              {errors.titulo?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Select {...register('autorId')} isInvalid={!!errors.autorId}>
              <option value="">Seleccioná un autor...</option>
              {(autores ?? []).map((autor) => (
                <option key={autor.id} value={autor.id}>
                  {autor.nombre} ({autor.nacionalidad})
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.autorId?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 7500"
              {...register('precio')}
              isInvalid={!!errors.precio}
            />
            <Form.Control.Feedback type="invalid">
              {errors.precio?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://..."
              {...register('imagen')}
              isInvalid={!!errors.imagen}
            />
            <Form.Control.Feedback type="invalid">
              {errors.imagen?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check
              type="checkbox"
              label="Disponible para alquiler"
              {...register('disponible')}
            />
          </Form.Group>

          <div className="d-flex gap-2 justify-content-end">
            <Button variant="secondary" onClick={() => navigate('/libros')}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" disabled={guardando}>
              {guardando ? <Spinner animation="border" size="sm" /> : 'Guardar Libro'}
            </Button>
          </div>
        </Form>
      </Card>
    </main>
  );
}
