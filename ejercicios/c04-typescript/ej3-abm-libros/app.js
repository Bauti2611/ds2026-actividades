"use strict";
//base de datos simulada por gemini
let catalogo = [
    { isbn: "978-01", titulo: "El Aleph", autor: "Jorge Luis Borges", genero: "Ficción", precio: 15000, disponible: true },
    { isbn: "978-02", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", precio: 22000, disponible: false },
    { isbn: "978-03", titulo: "Ficciones", autor: "Jorge Luis Borges", genero: "Ficción", precio: 14000, disponible: true },
    { isbn: "978-04", titulo: "El Imperio Final", autor: "Brandon Sanderson", genero: "Fantasía", precio: 28000, disponible: true },
    { isbn: "978-05", titulo: "1984", autor: "George Orwell", genero: "Ciencia ficción", precio: 16000, disponible: true },
    { isbn: "978-06", titulo: "Código Limpio", autor: "Robert C. Martin", genero: "Programación", precio: 35000, disponible: false },
    { isbn: "978-07", titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Distopía", precio: 18500, disponible: true },
    { isbn: "978-08", titulo: "El Resplandor", autor: "Stephen King", genero: "Terror", precio: 21000, disponible: false },
    { isbn: "978-09", titulo: "Dune", autor: "Frank Herbert", genero: "Ciencia ficción", precio: 24000, disponible: true },
    { isbn: "978-10", titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", genero: "Fantasía", precio: 19000, disponible: false }
];
const formLibro = document.getElementById("formLibro");
const inputTitulo = document.getElementById("inputTitulo");
const inputAutor = document.getElementById("inputAutor");
const inputGenero = document.getElementById("inputGenero");
const inputPrecio = document.getElementById("inputPrecio");
const checkDisponible = document.getElementById("checkDisponible");
const errorForm = document.getElementById("errorForm");
const ulListado = document.getElementById("listado");
function renderizar() {
    ulListado.innerHTML = "";
    for (let i = 0; i < catalogo.length; i++) {
        const libro = catalogo[i];
        const li = document.createElement("li");
        const icono = libro.disponible ? "si" : "no";
        const textoGenero = libro.genero ? `| Género: ${libro.genero} ` : "";
        const info = document.createElement("span");
        info.innerHTML = `<strong>${libro.titulo}</strong> - ${libro.autor} <br> 
                          <small>$${libro.precio} ${icono} ${textoGenero}</small>`;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            catalogo = catalogo.filter(l => l.isbn !== libro.isbn);
            renderizar();
        });
        li.appendChild(info);
        li.appendChild(btnEliminar);
        ulListado.appendChild(li);
    }
}
function validarYObtenerLibro() {
    const t = inputTitulo.value.trim();
    const a = inputAutor.value.trim();
    const g = inputGenero.value.trim();
    const p = parseInt(inputPrecio.value);
    if (t === "" || a === "" || isNaN(p) || p <= 0) {
        errorForm.textContent = "Error: El título, autor y precio son campos obligatorios.";
        return null;
    }
    errorForm.textContent = "";
    const nuevoLibro = {
        isbn: "ID-" + Date.now(),
        titulo: t,
        autor: a,
        precio: p,
        disponible: checkDisponible.checked
    };
    if (g !== "") {
        nuevoLibro.genero = g;
    }
    return nuevoLibro;
}
formLibro.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevo = validarYObtenerLibro();
    if (nuevo) {
        catalogo.push(nuevo);
        formLibro.reset();
        renderizar();
    }
});
renderizar();
