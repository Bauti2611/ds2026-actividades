import type { Libro } from '../types/libro';

export const libros: Libro[] = [
    {
        id: 1,
        titulo: "El Camino de los Reyes",
        autorId: 1,
        autor: { id: 1, nombre: "Brandon Sanderson", nacionalidad: "Estadounidense" },
        precio: 25000,
        imagen: "https://th.bing.com/th/id/OIP.WsWdkjZZx8aWJu1acouQVwHaHa?w=157&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
        disponible: true
    },
    {
        id: 2,
        titulo: "Harry Potter y la Piedra Filosofal",
        autorId: 2,
        autor: { id: 2, nombre: "J.K. Rowling", nacionalidad: "Británica" },
        precio: 22000,
        imagen: "https://th.bing.com/th/id/OIP.ZHWBTkkcsYBeTwPnGeQfKAHaLx?w=133&h=211&c=7&r=0&o=7&dpr=2&pid=1.7&rm=300x400",
        disponible: true
    },
    {
        id: 3,
        titulo: "Cien Años de Soledad",
        autorId: 3,
        autor: { id: 3, nombre: "Gabriel García Márquez", nacionalidad: "Colombiana" },
        precio: 18000,
        imagen: "https://th.bing.com/th/id/OIP.m613oJ20p5wzD3W26YkXfQHaLH?w=115&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=300x400",
        disponible: false
    }
];
