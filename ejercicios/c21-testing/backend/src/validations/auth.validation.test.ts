import { describe, it, expect } from "vitest";
import { loginSchema, registroSchema } from "./auth.validation";

describe("loginSchema", () => {
  it("normaliza el email: saca espacios y pasa a minúsculas", () => {
    const r = loginSchema.safeParse({
      email: "  Admin@Libreria.TEST ",
      password: "x",
    });
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.email).toBe("admin@libreria.test");
    }
  });
});

describe("registroSchema", () => {
  it("una contraseña débil acumula los tres errores", () => {
    const r = registroSchema.safeParse({
      nombre: "Ana",
      email: "ana@libreria.test",
      password: "corta",
    });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues.map((i) => i.message)).toHaveLength(3);
    }
  });

  it("acepta un registro válido con contraseña fuerte", () => {
    const r = registroSchema.safeParse({
      nombre: "Carlos",
      email: "carlos@libreria.test",
      password: "Password123",
    });
    expect(r.success).toBe(true);
  });
});
