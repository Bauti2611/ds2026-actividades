"use strict";
const inputBusqueda = document.getElementById('busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const divResultados = document.getElementById('resultados');
btnBuscar.addEventListener('click', async () => {
    const termino = inputBusqueda.value.trim();
    if (termino === '') {
        divResultados.innerHTML = '<p style="color:red">Por favor, ingresá un título.</p>';
        return;
    }
    divResultados.innerHTML = '<p>Buscando libros...</p>';
    try {
        const url = `https://openlibrary.org/search.json?q=${termino}`;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Error en la API');
        const data = await response.json();
        const libros = data.docs.slice(0, 10);
        divResultados.innerHTML = '';
        if (libros.length === 0) {
            divResultados.innerHTML = '<p>No se encontraron resultados.</p>';
            return;
        }
        libros.forEach(libro => {
            const autor = libro.author_name ? libro.author_name[0] : 'Autor desconocido';
            const anio = libro.first_publish_year ? libro.first_publish_year : 'Año desconocido';
            divResultados.innerHTML += `
                <div style="border: 1px solid black; padding: 10px; margin-bottom: 10px;">
                    <h3>${libro.title}</h3>
                    <p>Autor: ${autor}</p>
                    <p>Año de publicación: ${anio}</p>
                </div>
            `;
        });
    }
    catch (error) {
        divResultados.innerHTML = '<p style="color:red">Ocurrió un error al intentar buscar.</p>';
    }
});
