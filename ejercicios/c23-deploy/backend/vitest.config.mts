import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import fs from "node:fs";

const env = loadEnv("test", process.cwd(), "");
const isDocker = fs.existsSync("/.dockerenv");
const rawDb = env.DATABASE_URL || "postgresql://postgres:tu_password_segura@localhost:5432/libreria_db";
const dbUrl = isDocker ? rawDb : rawDb.replace("@db:", "@localhost:");

export default defineConfig({
  test: {
    env: {
      JWT_SECRET: "secreto-solo-para-tests",
      DATABASE_URL: dbUrl,
    },
  },
});
