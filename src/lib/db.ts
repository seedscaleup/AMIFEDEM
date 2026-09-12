import { Pool } from "pg";
import { readFile } from "fs/promises";
import path from "path";

declare global {
  var __pgPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL n'est pas configurée. Ajoutez cette variable d'environnement (voir README)."
    );
  }
  const isLocal =
    connectionString.includes("localhost") ||
    connectionString.includes("127.0.0.1");
  return new Pool({
    connectionString,
    ssl: isLocal ? false : { rejectUnauthorized: false },
  });
}

function getPool(): Pool {
  if (!global.__pgPool) {
    global.__pgPool = createPool();
  }
  return global.__pgPool;
}

let schemaReady: Promise<void> | null = null;

async function ensureSchema() {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS news (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      event_date TEXT NOT NULL,
      location TEXT,
      excerpt TEXT NOT NULL,
      photo_caption TEXT,
      image BYTEA,
      image_type TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  const { rows } = await pool.query<{ count: string }>(
    "SELECT count(*)::text FROM news"
  );
  if (rows[0].count === "0") {
    let image: Buffer | null = null;
    try {
      image = await readFile(
        path.join(process.cwd(), "public", "presidente-article.jpg")
      );
    } catch {
      image = null;
    }
    await pool.query(
      `INSERT INTO news (title, event_date, location, excerpt, photo_caption, image, image_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        "Cérémonie de l'excellence scolaire 2026 à Mengong",
        "Samedi 29 août 2026",
        "Esplanade de l'hôtel de ville de Mengong",
        "Sous la présidence de Madame EBA Jeanine épouse NGO'O, Présidente de l'AMIDEFEM, l'association a organisé sa cérémonie de l'excellence scolaire sur l'esplanade de l'hôtel de ville de Mengong. Réunissant membres, familles et autorités locales, cet événement a permis de distribuer des fournitures scolaires aux enfants des membres de l'association, et de récompenser les lauréats du baccalauréat 2026 de la localité — une nouvelle occasion pour l'AMIDEFEM de réaffirmer son engagement en faveur de l'éducation et de la réussite scolaire à Mengong.",
        "Madame EBA Jeanine épouse NGO'O, Présidente de l'AMIDEFEM",
        image,
        image ? "image/jpeg" : null,
      ]
    );
  }
}

export async function withSchema<T>(fn: () => Promise<T>): Promise<T> {
  if (!schemaReady) {
    schemaReady = ensureSchema();
  }
  await schemaReady;
  return fn();
}

export type NewsRow = {
  id: number;
  title: string;
  event_date: string;
  location: string | null;
  excerpt: string;
  photo_caption: string | null;
  has_image: boolean;
  created_at: string;
};

export async function listNews(): Promise<NewsRow[]> {
  return withSchema(async () => {
    const pool = getPool();
    const { rows } = await pool.query(
      `SELECT id, title, event_date, location, excerpt, photo_caption,
              (image IS NOT NULL) AS has_image, created_at
       FROM news ORDER BY created_at DESC`
    );
    return rows;
  });
}

export async function createNews(input: {
  title: string;
  eventDate: string;
  location: string;
  excerpt: string;
  photoCaption?: string;
  image?: { buffer: Buffer; type: string } | null;
}): Promise<number> {
  return withSchema(async () => {
    const pool = getPool();
    const { rows } = await pool.query<{ id: number }>(
      `INSERT INTO news (title, event_date, location, excerpt, photo_caption, image, image_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [
        input.title,
        input.eventDate,
        input.location || null,
        input.excerpt,
        input.photoCaption || null,
        input.image?.buffer ?? null,
        input.image?.type ?? null,
      ]
    );
    return rows[0].id;
  });
}

export async function deleteNews(id: number): Promise<void> {
  return withSchema(async () => {
    const pool = getPool();
    await pool.query("DELETE FROM news WHERE id = $1", [id]);
  });
}

export async function getNewsImage(
  id: number
): Promise<{ buffer: Buffer; type: string } | null> {
  return withSchema(async () => {
    const pool = getPool();
    const { rows } = await pool.query<{ image: Buffer; image_type: string }>(
      "SELECT image, image_type FROM news WHERE id = $1 AND image IS NOT NULL",
      [id]
    );
    if (rows.length === 0) return null;
    return { buffer: rows[0].image, type: rows[0].image_type };
  });
}
