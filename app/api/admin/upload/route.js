import { randomBytes } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { isAdminSession } from "../../../../lib/admin-auth.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const mimeExtensions = new Map([["image/jpeg", ".jpg"], ["image/png", ".png"], ["image/webp", ".webp"], ["image/gif", ".gif"], ["image/avif", ".avif"]]);
const folders = new Set(["clinic", "clinic-gallery", "orthopaedic", "ent", "uploads"]);
const maxBytes = 10 * 1024 * 1024;

export async function POST(request) {
  if (!isAdminSession(request)) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  let form;
  try { form = await request.formData(); } catch { return NextResponse.json({ error: "Invalid upload." }, { status: 400 }); }
  const file = form.get("file");
  const folder = form.get("folder");
  if (!file || typeof file.arrayBuffer !== "function") return NextResponse.json({ error: "Choose an image first." }, { status: 400 });
  if (!folders.has(folder)) return NextResponse.json({ error: "Choose a valid image folder." }, { status: 400 });
  const extension = mimeExtensions.get(file.type);
  if (!extension) return NextResponse.json({ error: "Use JPG, PNG, WebP, GIF or AVIF images." }, { status: 415 });
  if (file.size > maxBytes) return NextResponse.json({ error: "Images must be 10 MB or smaller." }, { status: 413 });

  const originalName = path.basename(file.name, path.extname(file.name)).normalize("NFKD").replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 45) || "image";
  const filename = `${Date.now()}-${randomBytes(3).toString("hex")}-${originalName}${extension}`;
  const directory = path.join(process.cwd(), "public", "images", folder);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), Buffer.from(await file.arrayBuffer()), { flag: "wx" });
  return NextResponse.json({ ok: true, filename, url: `/images/${folder}/${filename}`, folder });
}
