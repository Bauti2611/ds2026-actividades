import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';

export default function LibroNuevo() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LibroValidado>({
        resolver: zodResolver(libroSchema),
        defaultValues: {
            titulo: '',
            autor: '',
            precio: 0,
            imagen: ''
        }
    });

    const onSubmit = (data: LibroValidado) => {
        console.log('Libro a agregar:', data);
        // Acá iría el POST a la API para crear el libro.
        // Como solo tenemos mock, redirigimos directamente.
        navigate('/libros');
    };

    return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <h2 className="text-center mb-4 fw-bold position-relative pb-2">
                Agregar Nuevo Libro
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-primary" style={{ width: '60px', height: '4px', borderRadius: '2px' }}></span>
            </h2>

            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="titulo">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        {...register('titulo')}
                                        isInvalid={!!errors.titulo}
                                        placeholder="Ej: El señor de los anillos"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.titulo?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="autor">
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control
                                        {...register('autor')}
                                        isInvalid={!!errors.autor}
                                        placeholder="Ej: J.R.R. Tolkien"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.autor?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="precio">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="number"
                                        {...register('precio')}
                                        isInvalid={!!errors.precio}
                                        placeholder="Ej: 15000"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.precio?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="imagen">
                                    <Form.Label>URL de Imagen (opcional)</Form.Label>
                                    <Form.Control
                                        {...register('imagen')}
                                        isInvalid={!!errors.imagen}
                                        placeholder="https://..."
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.imagen?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" size="lg">
                                        Guardar Libro
                                    </Button>
                                    <Button variant="outline-secondary" type="button" onClick={() => navigate('/libros')}>
                                        Cancelar
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
