import { Libro } from "../types/libro.types";

let libros: Libro[] = [
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

let proximoId = 7;

export function findAll(): Libro[] {
  return libros;
}

export function findById(id: number): Libro | undefined {
  return libros.find((l) => l.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Partial<Omit<Libro, "id">>): Libro | undefined {
  const index = libros.findIndex((l) => l.id === id);
  if (index === -1) return undefined;
  
  libros[index] = { ...libros[index], ...datos };
  return libros[index];
}

export function remove(id: number): boolean {
  const index = libros.findIndex((l) => l.id === id);
  if (index === -1) return false;
  
  libros.splice(index, 1);
  return true;
}
