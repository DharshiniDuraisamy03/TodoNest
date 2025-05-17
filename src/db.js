import { PGlite } from "@electric-sql/pglite";

export async function getDB() {
  const db = new PGlite(":memory:");
  await db.exec(
    `CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)`
  );
  return db;
}
