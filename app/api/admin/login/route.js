import { NextResponse } from "next/server";
import { adminCookieName, createAdminSession, passwordMatches } from "../../../../lib/admin-auth.js";

export const runtime = "nodejs";

export async function POST(request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Set ADMIN_PASSWORD in the server environment first." }, { status: 503 });
  }

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (!passwordMatches(body?.password)) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });

  const session = createAdminSession();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName(), session.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: session.maxAge,
  });
  return response;
}
