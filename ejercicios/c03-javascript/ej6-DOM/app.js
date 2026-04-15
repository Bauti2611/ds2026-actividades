const input = document.querySelector('#inputProducto');
const botonAgregar = document.querySelector('#botonAgregar');
const error = document.querySelector('#mensajeError');
const lista = document.querySelector('#listaProductos');
const textoContador = document.querySelector('#contador');


let cantidad = 0;


botonAgregar.addEventListener('click', () => {
    
    error.textContent = "";

    const nombreProducto = input.value;

    
    if (nombreProducto === "") {
        error.textContent = "El producto no puede estar vacío.";
        return; 
    }


    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = nombreProducto + " "; 

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener('click', () => {
        nuevoItem.remove(); 
        cantidad--; 
        textoContador.textContent = cantidad; 
    });

    nuevoItem.appendChild(botonEliminar); 
    lista.appendChild(nuevoItem); 

    cantidad++; 
    textoContador.textContent = cantidad; 
});