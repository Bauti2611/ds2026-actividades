
interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string; 
}

const catalogo: Libro[] = [
    { isbn: "978-01", titulo: "El Aleph", autor: "Jorge Luis Borges", precio: 15000, disponible: true, genero: "Ficción" },
    { isbn: "978-02", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 22000, disponible: false, genero: "Realismo mágico" },
    { isbn: "978-03", titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 14000, disponible: true }
];

const inputAutor = document.getElementById("filtroAutor") as HTMLInputElement;
const btnFiltrar = document.getElementById("filtrar") as HTMLButtonElement;
const btnDisponibles = document.getElementById("mostrarDisponibles") as HTMLButtonElement;
const btnTodos = document.getElementById("mostrarTodos") as HTMLButtonElement;
const ulListado = document.getElementById("listado") as HTMLUListElement;
const pStats = document.getElementById("stats") as HTMLParagraphElement;


function buscarPorAutor(autor: string): Libro[] {

    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible === true);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0; 
    
    let sumaTotal = 0;
    for (let i = 0; i < libros.length; i++) {
        sumaTotal += libros[i].precio;
    }
    return sumaTotal / libros.length; 
}


function renderizar(libros: Libro[]): void {
    ulListado.innerHTML = ""; 


    for (let i = 0; i < libros.length; i++) {
        const libro = libros[i];
        const li = document.createElement("li");
        
        let textoDisponible = libro.disponible ? "Disponible" : "Agotado";
        li.textContent = `${libro.titulo} - ${libro.autor} ($${libro.precio}) | ${textoDisponible}`;
        
        ulListado.appendChild(li); 
    }

    const promedio = precioPromedio(libros);
    pStats.textContent = `Cantidad de libros: ${libros.length} | Precio promedio: $${promedio.toFixed(2)}`;
}


btnFiltrar.addEventListener("click", () => {
    const autorBuscado = inputAutor.value;
    const resultados = buscarPorAutor(autorBuscado);
    renderizar(resultados);
});

btnDisponibles.addEventListener("click", () => {
    renderizar(librosDisponibles());
});

btnTodos.addEventListener("click", () => {
    renderizar(catalogo);
    inputAutor.value = ""; 
});

renderizar(catalogo);