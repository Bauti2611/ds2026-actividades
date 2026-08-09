import { Autor } from "../types/autor.types";

let autores: Autor[] = [
  { id: 1, nombre: "Brandon Sanderson", nacionalidad: "Estadounidense" },
  { id: 2, nombre: "J.K. Rowling", nacionalidad: "Británica" },
  { id: 3, nombre: "Julio Cortázar", nacionalidad: "Argentina" }
];

let proximoId = 4;

export function findAll(): Autor[] {
  return autores;
}

export function findById(id: number): Autor | undefined {
  return autores.find((a) => a.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Partial<Omit<Autor, "id">>): Autor | undefined {
  const index = autores.findIndex((a) => a.id === id);
  if (index === -1) return undefined;
  
  autores[index] = { ...autores[index], ...datos };
  return autores[index];
}

export function remove(id: number): boolean {
  const index = autores.findIndex((a) => a.id === id);
  if (index === -1) return false;
  
  autores.splice(index, 1);
  return true;
}
