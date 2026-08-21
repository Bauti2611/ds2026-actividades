import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: "El Camino de los Reyes",
    autor: "Brandon Sanderson",
    precio: 25000,
    imagen: "https://th.bing.com/th/id/OIP.WsWdkjZZx8aWJu1acouQVwHaHa?w=157&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
  },
  {
    titulo: "Harry Potter y la Piedra Filosofal",
    autor: "J.K. Rowling",
    precio: 22000,
    imagen: "https://th.bing.com/th/id/OIP.ZHWBTkkcsYBeTwPnGeQfKAHaLx?w=133&h=211&c=7&r=0&o=7&dpr=2&pid=1.7&rm=300x400",
    disponible: true,
  },
  {
    titulo: "El eternauta",
    autor: "Héctor Germán Oesterheld",
    precio: 18500,
    imagen: "https://th.bing.com/th/id/OIP.58sk3KjChG7kVXJidxlG-wHaFX?w=265&h=192&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
  },
  {
    titulo: "Los días del venado",
    autor: "Liliana Bodoc",
    precio: 16000,
    imagen: "https://th.bing.com/th/id/OIP.N-DHNcIxOLo1TUfy0eZG0wHaLR?w=115&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
  },
  {
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    precio: 14000,
    imagen: "https://th.bing.com/th/id/OIP.anXzE_aifrMMui5v_4pbQQHaLH?w=194&h=291&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    disponible: true,
  },
  {
    titulo: "Nuestra parte de noche",
    autor: "Mariana Enriquez",
    precio: 21000,
    imagen: "https://th.bing.com/th/id/OIP.Ru59G2KaXrdXCJtQy5vCcgHaLo?w=119&h=187&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
  },
];

const autores = [
  { nombre: "Brandon Sanderson", nacionalidad: "Estadounidense" },
  { nombre: "J.K. Rowling", nacionalidad: "Británica" },
  { nombre: "Julio Cortázar", nacionalidad: "Argentina" },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
  console.log("Seed completado exitosamente 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
