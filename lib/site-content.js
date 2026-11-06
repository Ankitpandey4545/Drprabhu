import { readFile } from "node:fs/promises";
import path from "node:path";

const contentPath = path.join(process.cwd(), "data", "site-content.json");

export async function getSiteContent() {
  try {
    return JSON.parse(await readFile(contentPath, "utf8"));
  } catch (error) {
    console.error("Could not read site content:", error);
    throw new Error("Site content is unavailable");
  }
}
