// Renders 1200x630 OG images for every work page (EN + TR) into assets/og/ and assets/og/tr/.
// Run: PW=/path/to/playwright-core CHROME=/path/to/chrome node scripts/og.mjs
// Waits for fonts and the poster image before each screenshot (a broken-image OG shipped once).
import { writeFileSync, mkdirSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { WORK } from "./content.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const pw = createRequire(import.meta.url)(process.env.PW || "/Users/jinx/.npm/_npx/9833c18b2d85bc59/node_modules/playwright-core");
const CHROME = process.env.CHROME || "/Users/jinx/Library/Caches/ms-playwright/chromium_headless_shell-1254/chrome-headless-shell-mac-arm64/chrome-headless-shell";
const url = (rel) => pathToFileURL(join(ROOT, rel)).href;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const font = (fam, file, style = "normal", range = "") => `@font-face{font-family:${fam};font-style:${style};src:url(${url("assets/fonts/" + file)});${range ? "unicode-range:" + range : ""}}`;
const EXT = "U+0100-02AF";
const css = [
  font("B", "bodoni-moda-latin-wght-normal.woff2"), font("B", "bodoni-moda-latin-ext-wght-normal.woff2", "normal", EXT),
  font("B", "bodoni-moda-latin-wght-italic.woff2", "italic"), font("B", "bodoni-moda-latin-ext-wght-italic.woff2", "italic", EXT),
  font("M", "manrope-latin-wght-normal.woff2"), font("M", "manrope-latin-ext-wght-normal.woff2", "normal", EXT),
  "body{margin:0;width:1200px;height:630px;background:#F7F3EE;color:#1C1614;display:grid;grid-template-columns:1fr 330px;gap:56px;padding:56px 64px;box-sizing:border-box;font-family:M}",
  ".k{font:500 15px M;letter-spacing:.14em;text-transform:uppercase;color:#6B5F58}h1{font:400 64px/1.02 B;letter-spacing:-.03em;margin:22px 0 0}",
  "em{color:#6E1F2B;display:block}.c{display:flex;flex-direction:column;height:100%}.p{font:500 17px M;color:#6B5F58;margin-top:18px;max-width:600px}",
  ".n{margin-top:auto;font:500 30px B}.n i{font-style:normal;color:#6E1F2B}.n small{font:500 14px M;letter-spacing:.14em;color:#6B5F58;margin-left:14px}",
  "img{width:330px;height:518px;object-fit:cover;border-radius:2px}",
].join("\n");

const dir = mkdtempSync(join(tmpdir(), "ugc-og-"));
const browser = await pw.chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const L of ["en", "tr"]) {
  mkdirSync(join(ROOT, "assets/og", L === "tr" ? "tr" : ""), { recursive: true });
  for (const w of WORK) {
    const t = w[L], name = w.kind === "own" ? t.fmt : w.brand;
    const tag = L === "tr" ? "UGC İÇERİK ÜRETİCİSİ · ANTALYA" : "UGC CREATOR · ANTALYA";
    const html = `<!doctype html><html lang="${L}"><head><meta charset="utf-8"><style>${css}</style></head><body><div class="c"><div class="k">${esc(t.niche)} · ${esc(t.fmt)}</div><h1>${esc(name)}<em>${esc(t.title)}</em></h1><div class="p">${esc(t.label)}</div><div class="n">Mine Koçak<i>.</i><small>${tag}</small></div></div><img src="${url("assets/work/" + w.file + ".webp")}"></body></html>`;
    const file = join(dir, `${L}-${w.slug}.html`);
    writeFileSync(file, html);
    await page.goto(pathToFileURL(file).href, { waitUntil: "load" });
    const ok = await page.evaluate(async () => { await document.fonts.ready; const i = document.images[0]; return i.complete && i.naturalWidth > 0; });
    if (!ok) throw new Error(`poster failed to load for ${w.slug}`);
    await page.screenshot({ path: join(ROOT, "assets/og", L === "tr" ? "tr" : "", `${w.slug}.jpg`), type: "jpeg", quality: 84 });
  }
}
await browser.close();
console.log("og images:", WORK.length * 2);
