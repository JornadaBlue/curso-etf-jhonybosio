import { eq } from "drizzle-orm";
import { files, InsertFile } from "../drizzle/schema";
import { getDb } from "./db";

export async function createFile(file: InsertFile) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const [result] = await db.insert(files).values(file);
  return result.insertId;
}

export async function listFiles(category?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  if (category) {
    return await db.select().from(files).where(eq(files.category, category));
  }
  
  return await db.select().from(files);
}

export async function getFileById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.select().from(files).where(eq(files.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function deleteFile(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.delete(files).where(eq(files.id, id));
}

