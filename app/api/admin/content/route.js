import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { isAdminSession } from "../../../../lib/admin-auth.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const contentPath = path.join(process.cwd(), "data", "site-content.json");

function validContent(content) {
  if (!content || typeof content !== "object" || Array.isArray(content)) return false;
  if (!content.home?.brandLogo || !Array.isArray(content.home.doctors) || content.home.doctors.length < 2 || !content.home.orthopaedic || !content.home.ent || !Array.isArray(content.home.facilities) || typeof content.home.video?.videoPath !== "string" || !Array.isArray(content.home.physio?.videos)) return false;
  for (const section of [content.home.orthopaedic, content.home.ent]) {
    if (!Array.isArray(section.items) || !Array.isArray(section.order) || section.items.length !== section.order.length) return false;
    const ids = section.order;
    if (ids.some((id) => !Number.isInteger(id) || id < 1 || id > section.items.length) || new Set(ids).size !== ids.length) return false;
  }
  if (!content.contact || !content.doctors?.jagadish || !content.doctors?.shilpa || !Array.isArray(content.faqs) || !Array.isArray(content.fees)) return false;
  if (content.faqs.some((item) => typeof item.question !== "string" || typeof item.answer !== "string")) return false;
  if (content.fees.some((item) => typeof item.doctor !== "string" || typeof item.specialty !== "string" || !Array.isArray(item.followUps))) return false;
  if (!Number.isFinite(Number(content.patientCount)) || Number(content.patientCount) < 0) return false;
  return true;
}

export async function GET(request) {
  if (!isAdminSession(request)) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  try {
    return NextResponse.json(JSON.parse(await readFile(contentPath, "utf8")));
  } catch {
    return NextResponse.json({ error: "Could not load site content." }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isAdminSession(request)) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  let content;
  try { content = await request.json(); } catch { return NextResponse.json({ error: "Invalid JSON." }, { status: 400 }); }
  if (!validContent(content)) return NextResponse.json({ error: "Some required fields or image orders are missing or invalid." }, { status: 400 });
  const tempPath = `${contentPath}.${process.pid}.tmp`;
  try {
    await mkdir(path.dirname(contentPath), { recursive: true });
    await writeFile(tempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
    await rename(tempPath, contentPath);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not save site content." }, { status: 500 });
  }
}
