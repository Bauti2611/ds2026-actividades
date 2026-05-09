"use strict";

async function cargarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const obraId = params.get('obra'); 

    if (!obraId) {
        document.getElementById('titulo-libro').innerText = "Libro no encontrado";
        document.getElementById('descripcion-libro').innerText = "Por favor, elegí un libro desde el catálogo.";
        return;
    }

    try {
        const response = await fetch(`https://openlibrary.org${obraId}.json`);
        const data = await response.json();

        document.getElementById('titulo-libro').innerText = data.title;
        
        const desc = data.description;
        document.getElementById('descripcion-libro').innerText = 
            typeof desc === 'object' ? desc.value : (desc || "No hay descripción disponible.");

        if (data.covers && data.covers.length > 0) {
            document.getElementById('foto-libro').src = `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`;
        } else {
            document.getElementById('foto-libro').src = 'https://via.placeholder.com/300x500?text=Sin+Portada';
        }

    } catch (error) {
        document.getElementById('descripcion-libro').innerText = "Ocurrió un error al cargar los datos.";
    }
}

cargarDetalle();