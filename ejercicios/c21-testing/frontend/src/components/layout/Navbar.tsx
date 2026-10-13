import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { usuario, logout, tieneRol } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-3" to="/">
          📚 Librería UTN
        </NavLink>
        <div className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
          <NavLink className="nav-link text-white" to="/">
            Inicio
          </NavLink>
          <NavLink className="nav-link text-white" to="/libros">
            Catálogo
          </NavLink>
          {tieneRol('ADMIN') && (
            <NavLink className="nav-link text-white" to="/libros/nuevo">
              Nuevo libro
            </NavLink>
          )}
          {usuario ? (
            <>
              <span className="navbar-text text-white me-2">
                Hola, {usuario.nombre}
              </span>
              <button className="btn btn-outline-light btn-sm ms-2" onClick={logout}>
                Salir
              </button>
            </>
          ) : (
            <NavLink className="btn btn-primary btn-sm ms-2" to="/login">
              Ingresar
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
