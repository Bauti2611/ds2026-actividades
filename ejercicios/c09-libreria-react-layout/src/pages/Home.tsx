import LibroCard from '../components/LibroCard';
import type { Libro } from '../types/libro';

export default function Home() {
    const librosDestacados: Libro[] = [
        {
            id: 1,
            titulo: "El Camino de los Reyes",
            autor: "Brandon Sanderson",
            precio: 25000,
            imagen: "https://th.bing.com/th/id/OIP.WsWdkjZZx8aWJu1acouQVwHaHa?w=157&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400"
        },
        {
            id: 2,
            titulo: "Harry Potter y la Piedra Filosofal",
            autor: "J.K. Rowling",
            precio: 22000,
            imagen: "https://th.bing.com/th/id/OIP.ZHWBTkkcsYBeTwPnGeQfKAHaLx?w=133&h=211&c=7&r=0&o=7&dpr=2&pid=1.7&rm=300x400"
        },
        {
            id: 3,
            titulo: "El eternauta",
            autor: "Héctor Germán Oesterheld",
            precio: 18500,
            imagen: "https://th.bing.com/th/id/OIP.58sk3KjChG7kVXJidxlG-wHaFX?w=265&h=192&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400"
        },
        {
            id: 4,
            titulo: "Los días del venado",
            autor: "Liliana Bodoc",
            precio: 16000,
            imagen: "https://th.bing.com/th/id/OIP.N-DHNcIxOLo1TUfy0eZG0wHaLR?w=115&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400"
        },
        {
            id: 5,
            titulo: "Ficciones",
            autor: "Jorge Luis Borges",
            precio: 14000,
            imagen: "https://th.bing.com/th/id/OIP.anXzE_aifrMMui5v_4pbQQHaLH?w=194&h=291&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
        },
        {
            id: 6,
            titulo: "Nuestra parte de noche",
            autor: "Mariana Enriquez",
            precio: 21000,
            imagen: "https://th.bing.com/th/id/OIP.Ru59G2KaXrdXCJtQy5vCcgHaLo?w=119&h=187&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400"
        }
    ];

    return (
        <main className="container flex-grow-1 mt-5 mb-5">
            <h2 className="text-center mb-4 fw-bold">Libros Destacados</h2>

            <div className="row g-4">
                {librosDestacados.map((libro) => (
                    <div className="col-12 col-md-6 col-lg-4" key={libro.id}>
                        <LibroCard
                            titulo={libro.titulo}
                            autor={libro.autor}
                            precio={libro.precio}
                            imagen={libro.imagen}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}

