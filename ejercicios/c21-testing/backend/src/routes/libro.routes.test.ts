import { describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";

const tokenCliente = jwt.sign({ id: 2, rol: "CLIENTE" }, JWT_SECRET, {
  expiresIn: "1h",
});
const tokenAdmin = jwt.sign({ id: 1, rol: "ADMIN" }, JWT_SECRET, {
  expiresIn: "1h",
});

const libroNuevo = {
  titulo: "Rayuela",
  precio: 7000,
  imagen: "https://img/r.jpg",
  autorId: 1,
};

describe("POST /api/libros (matriz de permisos y validaciones)", () => {
  it("sin token → 401", async () => {
    const res = await request(app).post("/api/libros").send(libroNuevo);
    expect(res.status).toBe(401);
  });

  it("con token de CLIENTE → 403", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${tokenCliente}`)
      .send(libroNuevo);
    expect(res.status).toBe(403);
  });

  it("ADMIN con body inválido → 400, no 403", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ precio: -5 });
    expect(res.status).toBe(400);
    expect(res.body.detalles).toContainEqual({
      campo: "precio",
      mensaje: "El precio debe ser mayor a 0",
    });
  });

  it("PUT sin token → 401", async () => {
    const res = await request(app).put("/api/libros/1").send({ precio: 8000 });
    expect(res.status).toBe(401);
  });

  it("PUT con token de CLIENTE → 403", async () => {
    const res = await request(app)
      .put("/api/libros/1")
      .set("Authorization", `Bearer ${tokenCliente}`)
      .send({ precio: 8000 });
    expect(res.status).toBe(403);
  });

  it("DELETE con token de CLIENTE → 403", async () => {
    const res = await request(app)
      .delete("/api/libros/1")
      .set("Authorization", `Bearer ${tokenCliente}`);
    expect(res.status).toBe(403);
  });
});
