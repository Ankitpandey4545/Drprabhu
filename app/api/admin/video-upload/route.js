import { randomBytes } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { isAdminSession } from "../../../../lib/admin-auth.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const videoExtensions = new Map([["video/mp4", ".mp4"], ["video/webm", ".webm"], ["video/quicktime", ".mov"]]);
const maxBytes = 100 * 1024 * 1024;

export async function POST(request) {
  if (!isAdminSession(request)) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  let form;
  try { form = await request.formData(); } catch { return NextResponse.json({ error: "Invalid upload." }, { status: 400 }); }
  const file = form.get("file");
  if (!file || typeof file.arrayBuffer !== "function") return NextResponse.json({ error: "Choose a video first." }, { status: 400 });
  const extension = videoExtensions.get(file.type);
  if (!extension) return NextResponse.json({ error: "Use an MP4, WebM or MOV video." }, { status: 415 });
  if (file.size > maxBytes) return NextResponse.json({ error: "Videos must be 100 MB or smaller." }, { status: 413 });

  const originalName = path.basename(file.name, path.extname(file.name)).normalize("NFKD").replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 45) || "clinic-video";
  const filename = `${Date.now()}-${randomBytes(3).toString("hex")}-${originalName}${extension}`;
  const directory = path.join(process.cwd(), "public", "videos");
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, filename), Buffer.from(await file.arrayBuffer()), { flag: "wx" });
  return NextResponse.json({ ok: true, filename, url: `/videos/${filename}` });
}
