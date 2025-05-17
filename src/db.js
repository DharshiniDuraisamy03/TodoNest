import { PGlite } from "@electric-sql/pglite";

let dbInstance;

export async function getDB() {
  if (!dbInstance) {
    // WARNING: Deletes old DB, use only in dev!
    await indexedDB.deleteDatabase("medic-db");

    dbInstance = await PGlite.create("idb://medic-db");

    await dbInstance.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id SERIAL PRIMARY KEY,
        name TEXT,
        age INTEGER,
        gender TEXT,
        contact TEXT
      );
    `);
  }
  return dbInstance;
}
