import { Navigate, Outlet } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useAuth } from '../context/AuthContext';
import type { Rol } from '../types/sesionType';

export function PrivateRoute({ rol }: { rol?: Rol }) {
  const { usuario, cargando } = useAuth();

  // 1. ¿Ya sé quién sos?
  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // 2. ¿Sos alguien? (401)
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // 3. ¿Podés? (403)
  if (rol && usuario.rol !== rol) {
    return <Navigate to="/sin-permiso" replace />;
  }

  // Sí: pasá
  return <Outlet />;
}

export default PrivateRoute;