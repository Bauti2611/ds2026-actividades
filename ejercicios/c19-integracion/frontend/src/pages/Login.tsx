import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Card, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginValidado } from '../schemas/loginSchema';
import { apiFetch } from '../services/api';
import { guardarToken } from '../services/sesion';
import type { Sesion } from '../types/sesionType';

export default function Login() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidado>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (datos: LoginValidado) => {
    try {
      setCargando(true);
      setErrorApi(null);
      const sesion = await apiFetch<Sesion>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(datos),
      });
      guardarToken(sesion.token);
      navigate('/libros');
    } catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="container py-5">
      <Card style={{ maxWidth: '400px', margin: '0 auto' }} className="shadow-sm p-4">
        <h2 className="mb-4 text-center">Ingresar</h2>

        {errorApi && <Alert variant="danger">{errorApi}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="admin@libreria.test"
              {...register('email')}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              {...register('password')}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={cargando}>
            {cargando ? <Spinner animation="border" size="sm" /> : 'Ingresar'}
          </Button>
        </Form>
      </Card>
    </main>
  );
}
