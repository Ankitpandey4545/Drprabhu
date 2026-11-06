import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "clinic_admin_session";
const SESSION_SECONDS = 60 * 60 * 12;

function signature(expires) {
  return createHmac("sha256", process.env.ADMIN_PASSWORD || "")
    .update(`clinic-admin:${expires}`)
    .digest("hex");
}

export function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  return { value: `${expires}.${signature(expires)}`, maxAge: SESSION_SECONDS };
}

export function isAdminSession(request) {
  if (!process.env.ADMIN_PASSWORD) return false;
  const value = request.cookies.get(COOKIE_NAME)?.value || "";
  const [expires, supplied] = value.split(".");
  if (!/^\d+$/.test(expires || "") || !/^[a-f\d]{64}$/i.test(supplied || "")) return false;
  if (Number(expires) <= Math.floor(Date.now() / 1000)) return false;
  const expected = signature(expires);
  return timingSafeEqual(Buffer.from(supplied, "hex"), Buffer.from(expected, "hex"));
}

export function adminCookieName() {
  return COOKIE_NAME;
}

export function passwordMatches(candidate) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || typeof candidate !== "string") return false;
  const supplied = Buffer.from(candidate);
  const expected = Buffer.from(password);
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}
