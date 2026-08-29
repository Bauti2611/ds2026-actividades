import { prisma } from "../src/config/prisma";

const autores = [
  { nombre: "Brandon Sanderson", nacionalidad: "Estadounidense" },
  { nombre: "J.K. Rowling", nacionalidad: "Británica" },
  { nombre: "Héctor Germán Oesterheld", nacionalidad: "Argentina" },
  { nombre: "Liliana Bodoc", nacionalidad: "Argentina" },
  { nombre: "Jorge Luis Borges", nacionalidad: "Argentina" },
  { nombre: "Mariana Enriquez", nacionalidad: "Argentina" },
  { nombre: "Julio Cortázar", nacionalidad: "Argentina" },
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
];

const categorias = [
  { nombre: "Fantasía" },
  { nombre: "Ciencia Ficción" },
  { nombre: "Clásico" },
  { nombre: "Terror" },
  { nombre: "Novela" },
];

const libros = [
  {
    titulo: "El Camino de los Reyes",
    autor: "Brandon Sanderson",
    precio: 25000,
    imagen: "https://th.bing.com/th/id/OIP.WsWdkjZZx8aWJu1acouQVwHaHa?w=157&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
    cats: ["Fantasía", "Novela"],
  },
  {
    titulo: "Harry Potter y la Piedra Filosofal",
    autor: "J.K. Rowling",
    precio: 22000,
    imagen: "https://th.bing.com/th/id/OIP.ZHWBTkkcsYBeTwPnGeQfKAHaLx?w=133&h=211&c=7&r=0&o=7&dpr=2&pid=1.7&rm=300x400",
    disponible: true,
    cats: ["Fantasía"],
  },
  {
    titulo: "El eternauta",
    autor: "Héctor Germán Oesterheld",
    precio: 18500,
    imagen: "https://th.bing.com/th/id/OIP.58sk3KjChG7kVXJidxlG-wHaFX?w=265&h=192&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
    cats: ["Ciencia Ficción", "Clásico"],
  },
  {
    titulo: "Los días del venado",
    autor: "Liliana Bodoc",
    precio: 16000,
    imagen: "https://th.bing.com/th/id/OIP.N-DHNcIxOLo1TUfy0eZG0wHaLR?w=115&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
    cats: ["Fantasía", "Novela"],
  },
  {
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    precio: 14000,
    imagen: "https://th.bing.com/th/id/OIP.anXzE_aifrMMui5v_4pbQQHaLH?w=194&h=291&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    disponible: true,
    cats: ["Clásico"],
  },
  {
    titulo: "Nuestra parte de noche",
    autor: "Mariana Enriquez",
    precio: 21000,
    imagen: "https://th.bing.com/th/id/OIP.Ru59G2KaXrdXCJtQy5vCcgHaLo?w=119&h=187&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3/300x400",
    disponible: true,
    cats: ["Terror", "Novela"],
  },
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map((nombre) => ({ nombre })) },
      },
    });
  }
  console.log("Seed C17 completado exitosamente 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
