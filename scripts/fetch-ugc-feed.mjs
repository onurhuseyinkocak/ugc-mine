#!/usr/bin/env node
import { readFile, rename, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const output = resolve(root, "ugc-feed.json");
const token = process.env.IG_ACCESS_TOKEN?.trim();
const userId = process.env.IG_USER_ID?.trim();
const now = new Date().toISOString();

if (!token || !userId) {
  throw new Error("Instagram Graph credentials are not configured. The existing verified feed was not changed.");
}

async function getJson(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(url, { headers: { Accept: "application/json" }, signal: controller.signal });
    if (!response.ok) throw new Error(`Instagram Graph returned ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}

const clean = (value) => String(value ?? "").replace(/\s+/g, " ").trim();
function classify(media) {
  const text = clean(media.caption).toLowerCase();
  const isVideo = media.media_type === "VIDEO" || media.media_product_type === "REELS";
  const signals = ["ugc", "collab", "collaboration", "ad", "product", "demo", "makeup", "nail", "beauty", "skincare", "fashion", "hotel", "travel"].filter((signal) => text.includes(signal));
  const categories = [/makeup|beauty|skincare|nail|hair/.test(text) ? "beauty" : null, /travel|hotel|cafe|restaurant|bangkok/.test(text) ? "travel" : null].filter(Boolean);
  return { isUGC: isVideo, ugcScore: Number(Math.min(0.99, 0.6 + signals.length * 0.06).toFixed(2)), categories: categories.length ? categories : ["lifestyle"], reasons: ["published video", ...signals.slice(0, 3).map((signal) => `caption signal: ${signal}`)] };
}

const previous = JSON.parse(await readFile(output, "utf8"));
const url = new URL(`https://graph.instagram.com/${encodeURIComponent(userId)}/media`);
url.searchParams.set("fields", "id,caption,media_type,media_product_type,permalink,thumbnail_url,media_url,timestamp");
url.searchParams.set("limit", "50");
url.searchParams.set("access_token", token);
const payload = await getJson(url);
const media = Array.isArray(payload.data) ? payload.data : null;
if (!media) throw new Error("Instagram Graph returned no media array. The existing verified feed was not changed.");

const fallback = previous.items?.[0]?.thumbnail || "assets/portfolio/mine-06.jpg";
const items = media
  .filter((item) => item && item.permalink)
  .map((item) => {
    const result = classify(item);
    return { id: String(item.id), publishedAt: item.timestamp || now, permalink: item.permalink, thumbnail: item.thumbnail_url || item.media_url || fallback, title: clean(item.caption).split(/[.!?]/)[0].slice(0, 100) || "Published creator work", categories: result.categories, mediaType: result.isUGC ? "video" : String(item.media_type || "image").toLowerCase(), isUGC: result.isUGC, ugcScore: result.ugcScore, classification: "instagram-graph-api", classificationReasons: result.reasons };
  })
  .filter((item, index, all) => all.findIndex((candidate) => candidate.id === item.id) === index)
  .slice(0, 50);

const next = { schemaVersion: 1, site: "ugc-mine", profile: "mineexplora", lastSuccessfulSyncAt: now, source: "instagram-graph-api", items };
const temporary = `${output}.tmp`;
await writeFile(temporary, `${JSON.stringify(next, null, 2)}\n`);
await rename(temporary, output);
console.log(`UGC feed synced: ${items.length} published posts, ${items.filter((item) => item.isUGC).length} UGC videos.`);
