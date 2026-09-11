import { Link, useNavigate } from 'react-router-dom';
import { obtenerToken, borrarToken } from '../../services/sesion';

export default function Navbar() {
  const navigate = useNavigate();
  const token = obtenerToken();

  const handleLogout = () => {
    borrarToken();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">
          📚 Librería UTN
        </Link>
        <div className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
          <Link className="nav-link text-white" to="/">
            Inicio
          </Link>
          <Link className="nav-link text-white" to="/libros">
            Catálogo
          </Link>
          <Link className="nav-link text-white" to="/libros/nuevo">
            Nuevo Libro
          </Link>
          {token ? (
            <button className="btn btn-outline-light btn-sm ms-2" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          ) : (
            <Link className="btn btn-primary btn-sm ms-2" to="/login">
              Ingresar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
