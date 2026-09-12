import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { createNews, listNews } from "@/lib/db";

const MAX_IMAGE_BYTES = 6 * 1024 * 1024; // 6 MB

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
  const news = await listNews();
  return NextResponse.json({ news });
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const form = await request.formData();
  const title = String(form.get("title") ?? "").trim();
  const eventDate = String(form.get("eventDate") ?? "").trim();
  const location = String(form.get("location") ?? "").trim();
  const excerpt = String(form.get("excerpt") ?? "").trim();
  const photoCaption = String(form.get("photoCaption") ?? "").trim();
  const file = form.get("image");

  if (!title || !eventDate || !excerpt) {
    return NextResponse.json(
      { error: "Titre, date et texte sont obligatoires." },
      { status: 400 }
    );
  }

  let image: { buffer: Buffer; type: string } | null = null;
  if (file instanceof File && file.size > 0) {
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Le fichier envoyé n'est pas une image." },
        { status: 400 }
      );
    }
    if (file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json(
        { error: "L'image dépasse la taille maximale de 6 Mo." },
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    image = { buffer, type: file.type };
  }

  const id = await createNews({
    title,
    eventDate,
    location,
    excerpt,
    photoCaption,
    image,
  });
  return NextResponse.json({ ok: true, id });
}
