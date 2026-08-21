import { Request, Response } from "express";
import * as libroService from "../services/libro.service";

export async function getAll(req: Request, res: Response) {
  try {
    const disponible = req.query.disponible === "true" ? true : req.query.disponible === "false" ? false : undefined;
    const libros = await libroService.findAll(disponible);
    return res.json(libros);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const libro = await libroService.findById(id);

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.json(libro);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const nuevoLibro = await libroService.create(req.body);
    return res.status(201).json(nuevoLibro);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const libroActualizado = await libroService.update(id, req.body);

    if (!libroActualizado) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.json(libroActualizado);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const borrado = await libroService.remove(id);

    if (!borrado) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
