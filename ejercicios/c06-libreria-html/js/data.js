"use strict";

const inputBusqueda = document.getElementById('busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const divResultados = document.getElementById('resultados');

btnBuscar.addEventListener('click', async () => {
    const termino = inputBusqueda.value.trim();
    if (termino === '') {
        // Usamos clases de Bootstrap (text-danger) para los mensajes de error
        divResultados.innerHTML = '<p class="text-danger text-center w-100">Por favor, ingresá un título.</p>';
        return;
    }
    
    divResultados.innerHTML = '<div class="text-center w-100"><p>Buscando libros...</p></div>';
    
    try {
        const url = `https://openlibrary.org/search.json?q=${termino}`;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Error en la API');
        
        const data = await response.json();
        const libros = data.docs.slice(0, 10);
        
        divResultados.innerHTML = '';
        
        if (libros.length === 0) {
            divResultados.innerHTML = '<p class="text-center w-100">No se encontraron resultados.</p>';
            return;
        }
        
        libros.forEach(libro => {
            const autor = libro.author_name ? libro.author_name[0] : 'Autor desconocido';
            const anio = libro.first_publish_year ? libro.first_publish_year : 'Año desconocido';
            
            // Buscamos la portada
            const imagen = libro.cover_i 
                ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` 
                : 'https://via.placeholder.com/300x500?text=Sin+Portada';

            divResultados.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${imagen}" class="card-img-top img-portada" alt="Portada de ${libro.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${libro.title}</h5>
                            <p class="card-text text-muted mb-1">Autor: ${autor}</p>
                            <p class="card-text text-muted small mb-3">Año: ${anio}</p>
                            <a href="libro.html?obra=${libro.key}" class="btn btn-outline-primary mt-auto">Ver más</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    catch (error) {
        divResultados.innerHTML = '<p class="text-danger text-center w-100">Ocurrió un error al intentar buscar.</p>';
    }
});