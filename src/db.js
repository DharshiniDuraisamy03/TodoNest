import { PGlite } from "@electric-sql/pglite";

let db;

export async function getDB() {
  if (!db) {
    db = new PGlite(":memory:");
    await db.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        gender TEXT,
        contact TEXT
      )
    `);
  }
  return db;
}
