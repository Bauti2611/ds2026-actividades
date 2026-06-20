
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import { useState } from 'react';
import {libros} from './data/libros';
import type { Libro } from './types/libro';
import LibroDetalle from './pages/LibroDetalle';
import LibroNuevo from './pages/LibroNuevo';


function App() {
    const [listaLibros, setListaLibros] = useState<Libro[]>(libros);

    const agregarLibro = (nuevoLibro: Libro) => {
        setListaLibros([...listaLibros, nuevoLibro]);
    };

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/libros" element={<Catalogo libros={listaLibros} />} />
                <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
                <Route path="/libros/:id" element={<LibroDetalle />} />
            </Routes>
        </Layout>
    );
}

export default App;