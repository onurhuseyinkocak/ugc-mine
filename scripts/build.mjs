// Generates every page of the site from content.mjs + strings.mjs. Run: node scripts/build.mjs
import { writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, WORK, FORMATS, BRANDS, PRICES, TRY } from "./content.mjs";
import { STR } from "./strings.mjs";

const VENUE = "/tr/antalya-mekan-tanitim-videosu/";
const wpath = (w, L) => (L === "tr" ? `/tr/is/${w.slug}/` : `/work/${w.slug}/`);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = (s) => String(s).replace(/<[^>]+>/g, "");
const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const en = (s) => (s === "Mine Koçak" ? esc(s) : `<span lang="en">${esc(s)}</span>`);
const own = (w) => w.kind === "own";
const who = (w, L) => (own(w) ? w[L].fmt : w.brand); // own posts are titled by format, not by a fake "brand"
const short = (w, L) => (own(w) ? esc(strip(w[L].title)) : en(w.brand)); // HTML; only brand names get lang="en" // keeps English names out of Turkish uppercasing (i→İ)
const out = (rel, html) => { const f = join(ROOT, rel); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); };

const CSP = "default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self'; font-src 'self'; img-src 'self' data: https:; media-src 'self'; connect-src 'self' https://ugc-mine-lead.onur-vct-20260722.workers.dev https://formsubmit.co https://academy.vibecodingturkey.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.google.com https://*.doubleclick.net; base-uri 'self'; form-action 'self' mailto:";

function head({ lang, title, desc, path, og, ogW = 1200, ogH = 630, alternates = [], ld, preload = [] }) {
  const url = SITE + path;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${alternates.map(([l, p]) => `<link rel="alternate" hreflang="${l}" href="${SITE + p}">`).join("\n")}
<meta name="theme-color" content="#F7F3EE">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Mine Koçak UGC">
<meta property="og:locale" content="${lang === "tr" ? "tr_TR" : "en_US"}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE + og}">
<meta property="og:image:width" content="${ogW}">
<meta property="og:image:height" content="${ogH}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/bodoni-moda-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/bodoni-moda-latin-wght-italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
${preload.join("\n")}
<link rel="stylesheet" href="/style.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K9XZ9B08V9"></script>
<script src="/main.js" defer></script>
<script src="/vct-control.js" data-site="ugc-mine" defer></script>
</head>`;
}

function header(t, home, cta) {
  const ids = ["work", "formats", "rates", "process", "faq"];
  const base = home ? "" : t.path;
  return `<a class="skip" href="#main">${t.skip}</a>
<header class="top">
  <div class="top-in">
    <a class="mark" href="${t.path}">Mine Koçak<span class="mark-dot" aria-hidden="true">.</span></a>
    <nav aria-label="Primary"><ul class="nav">${t.nav.map((n, i) => `<li><a href="${base}#${ids[i]}">${n}</a></li>`).join("")}</ul></nav>
    <div class="top-end">
      <a class="lang" href="${t.other}" hreflang="${t.other === "/" ? "en" : "tr"}" lang="${t.other === "/" ? "en" : "tr"}" aria-label="${t.otherLabel} · ${t.otherName}">${t.otherLabel}</a>
      <a class="btn btn-sm" href="${cta || base + "#brief"}">${t.cta}</a>
    </div>
  </div>
</header>`;
}

const tiles = (hidden) => BRANDS.map((b) => `<li class="tile tile-${b.tile}"><img src="/assets/brands/${b.img}" alt="${hidden ? "" : esc(b.name)}" width="${Math.round(b.w / 4)}" height="24" loading="lazy" decoding="async"></li>`).join("");
// Two identical lists; the track slides by exactly one list width, so the loop is seamless. The copy is hidden from AT.
const brandItems = () => `<div class="marquee"><div class="marquee-track"><ul class="brand-row">${tiles(false)}</ul><ul class="brand-row" aria-hidden="true">${tiles(true)}${tiles(true)}</ul></div></div>`;

function hero(t) {
  return `<section class="hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow rise" data-d="0">${t.eyebrow}</p>
    <h1 id="hero-title" class="display">${t.h1.map((l, i) => `<span class="ln"><span class="rise" data-d="${i + 1}">${l}</span></span>`).join("")}</h1>
    <p class="lede rise" data-d="4"><span class="lede-full">${t.lede}</span><span class="lede-short">${t.ledeShort}</span></p>
    <div class="hero-cta rise" data-d="5"><a class="btn" href="#brief">${t.cta}</a><a class="link-arrow" href="#rates">${t.rateLink}</a></div>
    <div class="brands brands-hero rise" data-d="6"><p class="kunye">${t.brandsTitle}</p>${brandItems()}</div>
  </div>
  <figure class="hero-frame">
    <div class="frame-clip">
      <video class="hero-video" autoplay muted loop playsinline preload="auto" poster="/assets/work/hero-loop.webp" aria-hidden="true" tabindex="-1"><source src="/assets/work/hero-loop.mp4" type="video/mp4"></video>
    </div>
    <figcaption class="kunye"><span>${t.heroCap[0]}</span><span>${t.heroCap[1]}</span></figcaption>
  </figure>
</section>
<section class="brands brands-band" aria-label="${esc(t.brandsTitle)}"><p class="kunye">${t.brandsTitle}</p>${brandItems()}</section>`;
}

function theatre(t, items = WORK, id = "work", head = true) {
  const L = t.lang;
  return `<section class="work" id="${id}" aria-labelledby="${id}-title">
  ${head ? `<div class="wrap sec-head"><p class="kunye">${t.workKicker}</p><h2 id="${id}-title">${t.workH}</h2><p class="sec-note">${t.workNote}</p></div>` : `<h2 id="${id}-title" class="sr-only">${t.workKicker}</h2>`}
  <div class="theatre" data-theatre>
    <ol class="reels" tabindex="0" aria-label="${esc(strip(t.workKicker))}">
${items.map((w, i) => `      <li class="reel-card" data-i="${i}" data-full="/assets/work/${w.file}.mp4" data-preview="/assets/work/${w.file}-preview.mp4" data-kunye="${String(i + 1).padStart(2, "0")} ${t.of} ${String(items.length).padStart(2, "0")} · ${esc(who(w, L))} · ${esc(w[L].title)} · ${mmss(w.secs)}" data-label="${esc(w[L].label)}" data-href="${wpath(w, L)}">
        <div class="reel"><video muted playsinline loop preload="none" poster="/assets/work/${w.file}.webp" aria-label="${esc(who(w, L) + " " + strip(w[L].title))}"></video></div>
        <div class="reel-info"><p class="kunye">${esc(w[L].niche)} · ${esc(w[L].fmt)}</p><h3>${esc(who(w, L))} <span>${esc(w[L].title)}</span></h3><p class="reel-line">${esc(w[L].line)}</p><a class="reel-src" href="https://www.instagram.com/p/${w.ig}/" target="_blank" rel="noopener">${esc(w[L].label)}</a></div>
      </li>`).join("\n")}
    </ol>
    <div class="wrap theatre-bar">
      <p class="kunye theatre-now" aria-live="polite"></p>
      <div class="theatre-ctl">
        <button type="button" class="ctl" data-prev aria-label="${t.prev}"><span aria-hidden="true">←</span></button>
        <button type="button" class="ctl" data-next aria-label="${t.next}"><span aria-hidden="true">→</span></button>
        <button type="button" class="btn btn-sm btn-line" data-sound>${t.sound}</button>
        <a class="link-arrow" data-details href="${wpath(items[0], L)}">${t.details}</a>
      </div>
    </div>
    <div class="wrap"><div class="progress"><span class="progress-bar"></span></div></div>
  </div>
</section>`;
}

function formats(t) {
  const L = t.lang;
  return `<section class="formats" id="formats" aria-labelledby="formats-title">
  <div class="wrap sec-head"><p class="kunye">${t.fmtKicker}</p><h2 id="formats-title">${t.fmtH}</h2><p class="sec-note">${t.fmtNote}</p></div>
  <ol class="wrap sheet">
${FORMATS.map((f, i) => `    <li class="cell" data-loop>
      <div class="cell-media"><video muted playsinline loop preload="none" poster="/assets/formats/${f.file}.webp" aria-hidden="true" tabindex="-1" data-src="/assets/formats/${f.file}.mp4"></video></div>
      <p class="kunye"><span class="n">${String(i + 1).padStart(2, "0")}</span> · ${en(f.src)} · <span class="t">${f.t}</span></p>
      <h3>${esc(f[L][0])}</h3><p>${esc(f[L][1])}</p>${f.file === "venue" ? `<a class="cell-link" href="${VENUE}">${t.venueLink}</a>` : ""}
    </li>`).join("\n")}
    <li class="cell cell-text"><p class="kunye">06</p><h3>${t.fmtLast[0]}</h3><p>${t.fmtLast[1]}</p><a class="link-arrow" href="#brief">${t.cta}</a></li>
  </ol>
</section>`;
}

function rates(t) {
  const row = ([a, b]) => `<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td></tr>`;
  return `<section class="rates" id="rates" aria-labelledby="rates-title">
  <div class="wrap">
    <div class="sec-head"><p class="kunye">${t.ratesKicker}</p><h2 id="rates-title">${t.ratesH}</h2><p class="sec-note">${t.ratesNote}</p></div>
    <div class="packages">
${t.pk.map((p) => `      <article class="pkg${p.flag ? " pkg-main" : ""}">${p.flag ? `<p class="pkg-flag">${p.flag}</p>` : ""}<h3 class="kunye">${p.name}</h3><p class="price">${p.price}${p.per ? `<span>${p.per}</span>` : ""}</p>${p.usd ? `<p class="price-usd">${p.usd}</p>` : ""}<p class="pkg-what">${p.what}</p><p class="pkg-p">${p.p}</p><a class="btn${p.flag ? "" : " btn-line"}" href="#brief" data-pick="${esc(p.pick)}">${t.choose(p.name)}</a></article>`).join("\n")}
    </div>
    <div class="tables">
      <div><h3 class="tbl-title">${t.t1}</h3><table class="tbl"><tbody>${t.t1rows.map(row).join("")}</tbody></table></div>
      <details class="tbl-more" open><summary class="tbl-title">${t.t2}</summary><table class="tbl"><tbody>${t.t2rows.map(row).join("")}</tbody></table></details>
    </div>
    <p class="terms">${t.terms}</p>
  </div>
</section>`;
}

const processSec = (t) => `<section class="process wrap" id="process" aria-labelledby="process-title">
  <div class="sec-head"><p class="kunye">${t.procKicker}</p><h2 id="process-title">${t.procH}</h2></div>
  <ol class="steps">${t.steps.map(([h, p], i) => `<li><span class="step-n">${String(i + 1).padStart(2, "0")}</span><h3>${h}</h3><p>${p}</p></li>`).join("")}</ol>
</section>`;

const about = (t) => `<section class="about" aria-labelledby="about-title">
  <div class="wrap about-in">
    <figure class="about-fig"><img src="/assets/about.webp" width="900" height="1125" alt="${esc(t.aboutImgAlt)}" loading="lazy" decoding="async"><figcaption class="kunye">Mine Koçak · ${en("@mineexplora")}</figcaption></figure>
    <div class="about-copy"><p class="kunye">${t.aboutKicker}</p><h2 id="about-title">${t.aboutH}</h2>${t.about.map((p) => `<p>${p}</p>`).join("")}<a class="link-arrow" href="https://www.instagram.com/mineexplora/" target="_blank" rel="noopener">${t.igLink}</a></div>
  </div>
</section>`;

const faq = (t, list = t.faq, id = "faq") => `<section class="faq wrap" id="${id}" aria-labelledby="${id}-title">
  <div class="sec-head"><p class="kunye">${t.faqKicker}</p><h2 id="${id}-title">${t.faqH}</h2></div>
  <div class="faq-list">${list.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div>
</section>`;

function brief(t) {
  const f = t.f;
  return `<section class="brief" id="brief" aria-labelledby="brief-title">
  <div class="wrap brief-in">
    <div class="brief-copy"><p class="kunye">${t.briefKicker}</p><h2 id="brief-title">${t.briefH}</h2><p>${t.briefP}</p><p class="brief-alt">${t.briefAlt}</p><p class="brief-alt">${t.prefer} <a href="mailto:mineexplora@gmail.com?subject=UGC%20brief">mineexplora@gmail.com</a></p></div>
    <form class="form" id="brief-form" novalidate>
      <div class="row2"><label>${f.name}<input name="name" autocomplete="name"></label><label>${f.brand}<input name="company" autocomplete="organization"></label></div>
      <label>${f.email} <span class="req">${f.req}</span><input name="email" type="email" autocomplete="email" required></label>
      <label>${f.product} <span class="req">${f.req}</span><input name="product" required placeholder="${esc(f.ph)}"></label>
      <div class="row2">
        <label>${f.pkg}<select name="goal"><option value="">${f.notsure}</option>${f.pkgs.map((o) => `<option>${esc(o)}</option>`).join("")}</select></label>
        <label>${f.time}<select name="timeframe"><option value="">${f.flex}</option>${f.tm.map((o) => `<option>${esc(o)}</option>`).join("")}</select></label>
      </div>
      <label>${f.run}<select name="budget"><option value="">${f.notsure}</option>${f.runs.map((o) => `<option>${esc(o)}</option>`).join("")}</select></label>
      <label>${f.msg}<textarea name="message" rows="4" placeholder="${esc(f.msgph)}"></textarea></label>
      <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <button class="btn btn-light" type="submit">${f.send}</button>
      <p class="form-legal">${t.legal}</p>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>`;
}

const footer = (t) => `<footer class="foot"><div class="wrap foot-in">
  <p>${t.foot}</p>
  <p><a href="${VENUE}" lang="tr">${t.venueLink}</a> · <a href="https://www.instagram.com/mineexplora/" target="_blank" rel="noopener">Instagram</a> · <a href="mailto:mineexplora@gmail.com">${t.lang === "tr" ? "E-posta" : "Email"}</a> · <a href="${t.other}" lang="${t.other === "/" ? "en" : "tr"}">${t.otherName}</a> · <a href="https://ugc-onur.vibecodingturkey.com/">${t.sister}</a></p>
</div></footer>
</body>
</html>
`;

// ---------- structured data ----------
const person = (t) => ({
  "@type": "Person", "@id": `${SITE}/#mine`, name: "Mine Koçak", jobTitle: t.lang === "tr" ? "UGC İçerik Üreticisi" : "UGC Creator",
  description: t.desc, url: SITE + t.path, image: `${SITE}/assets/about.webp`, email: "mineexplora@gmail.com",
  homeLocation: { "@type": "City", name: "Antalya", containedInPlace: { "@type": "Country", name: "Türkiye" } },
  knowsLanguage: ["tr", "en"], sameAs: ["https://www.instagram.com/mineexplora/"],
});
const service = (t) => ({
  "@type": "Service", "@id": `${SITE}/#ugc`, name: t.lang === "tr" ? "UGC video prodüksiyonu" : "UGC video production",
  serviceType: "User-generated content (UGC) videos", provider: { "@id": `${SITE}/#mine` },
  areaServed: [{ "@type": "City", name: "Antalya" }, { "@type": "Country", name: "Türkiye" }, "Worldwide"],
  offers: t.lang === "tr"
    ? [["Tekli video", 9000], ["Üçlü", 24000], ["Aylık", 45000], ["Antalya mekân tanıtım videosu", 11000]].map(([name, price]) => ({ "@type": "Offer", name, price: String(price), priceCurrency: "TRY" }))
    : [["Single video", PRICES.single], ["Trio", PRICES.trio], ["Monthly", PRICES.monthly], ["Antalya venue visit video", PRICES.venue]].map(([name, price]) => ({ "@type": "Offer", name, price: String(price), priceCurrency: "USD" })),
});
const proService = (t) => ({
  "@type": "ProfessionalService", "@id": `${SITE}/#studio`, name: "Mine Koçak UGC", url: SITE + t.path, image: `${SITE}/assets/og.jpg`,
  description: t.desc, priceRange: t.lang === "tr" ? "₺9.000–₺45.000" : "$180–$900", email: "mineexplora@gmail.com", founder: { "@id": `${SITE}/#mine` },
  address: { "@type": "PostalAddress", addressLocality: "Antalya", addressCountry: "TR" },
  areaServed: [{ "@type": "City", name: "Antalya" }, { "@type": "Country", name: "Türkiye" }], knowsLanguage: ["tr", "en"],
  sameAs: ["https://www.instagram.com/mineexplora/"],
});
const faqLd = (list) => ({ "@type": "FAQPage", mainEntity: list.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
const video = (w, L = "en") => ({
  "@type": "VideoObject", name: `${own(w) ? strip(w[L].title) + " (" + w[L].fmt + ")" : w.brand + ": " + strip(w[L].title)} · ${L === "tr" ? "Mine Koçak UGC videosu" : "UGC video by Mine Koçak"}`, description: w[L].line,
  thumbnailUrl: `${SITE}/assets/work/${w.file}.webp`, contentUrl: `${SITE}/assets/work/${w.file}.mp4`,
  uploadDate: `${w.date}T12:00:00+03:00`, duration: `PT${w.secs}S`, inLanguage: L, creator: { "@id": `${SITE}/#mine` },
});

// ---------- pages ----------
function home(lang) {
  const t = STR[lang];
  const alts = [["en", "/"], ["tr", "/tr/"], ["x-default", "/"]];
  const html = head({ lang, title: t.title, desc: t.desc, path: t.path, og: t.og, alternates: alts,
    preload: [`<link rel="preload" href="/assets/work/hero-loop.webp" as="image" fetchpriority="high">`],
    ld: { "@context": "https://schema.org", "@graph": [person(t), proService(t), service(t), faqLd(t.faq)] } })
    + `\n<body class="page-home">\n${header(t, true)}\n<main id="main">\n${hero(t)}\n${theatre(t)}\n${formats(t)}\n${rates(t)}\n${processSec(t)}\n${about(t)}\n${faq(t)}\n${brief(t)}\n</main>\n${footer(t)}`;
  out(lang === "en" ? "index.html" : "tr/index.html", html);
}

function watch(w, i, lang) {
  const t = STR[lang], W = t.watch, L = lang;
  const prev = WORK[(i + WORK.length - 1) % WORK.length], next = WORK[(i + 1) % WORK.length];
  const path = wpath(w, L);
  const head1 = own(w) ? strip(w[L].title) : `${w.brand}: ${strip(w[L].title)}`;
  const title = L === "tr" ? `${head1} · ${w.tr.fmt} UGC videosu · Mine Koçak` : `${head1} · ${w.en.fmt} UGC video · Mine Koçak`;
  const desc = L === "tr" ? `${w.tr.line} Mine Koçak, Antalya'da UGC içerik üreticisi.` : `${w.en.line} ${w.en.niche} UGC video by Mine Koçak, UGC creator in Antalya, Türkiye.`;
  const home = L === "tr" ? "/tr/" : "/";
  const ld = { "@context": "https://schema.org", "@graph": [video(w, L), { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Mine Koçak UGC", item: SITE + home },
    { "@type": "ListItem", position: 2, name: W.back, item: SITE + home + "#work" },
    { "@type": "ListItem", position: 3, name: head1, item: SITE + path }] }] };
  const rows = [[W.meta[0], own(w) ? "@mineexplora" : en(w.brand)], [W.meta[1], esc(w[L].fmt)], [W.meta[2], mmss(w.secs)], [W.meta[3], w.date]].concat(w.where ? [[W.meta[4], esc(w.where)]] : []);
  const alts = [["en", wpath(w, "en")], ["tr", wpath(w, "tr")], ["x-default", wpath(w, "en")]];
  const html = head({ lang: L, title, desc, path, og: `/assets/og/${L === "tr" ? "tr/" : ""}${w.slug}.jpg`, alternates: alts, ld,
    preload: [`<link rel="preload" href="/assets/work/${w.file}.webp" as="image" fetchpriority="high">`] })
    + `\n<body class="page-watch">\n${header({ ...t, other: wpath(w, L === "tr" ? "en" : "tr") }, false)}\n<main id="main" class="watch wrap">
  <nav class="crumbs kunye" aria-label="Breadcrumb"><a href="${home}">Mine Koçak</a> / <a href="${home}#work">${W.back}</a> / ${short(w, L)}</nav>
  <div class="watch-in">
    <div class="watch-video"><video controls playsinline preload="metadata" poster="/assets/work/${w.file}.webp"><source src="/assets/work/${w.file}.mp4" type="video/mp4"></video></div>
    <div class="watch-copy">
      <p class="kunye">${esc(w[L].niche)} · ${esc(w[L].fmt)}</p>
      <h1 class="watch-h">${esc(who(w, L))} <em>${esc(w[L].title)}</em></h1>
      <p class="watch-line">${esc(w[L].line)}</p>
      <dl class="watch-meta">${rows.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}</dl>
      <p class="watch-links"><a class="reel-src" href="https://www.instagram.com/p/${w.ig}/" target="_blank" rel="noopener">${esc(w[L].label)}</a><a class="reel-src" href="https://www.instagram.com/p/${w.ig}/" target="_blank" rel="noopener">${W.view}</a></p>
      <div class="hero-cta"><a class="btn" href="${home}#brief">${W.brief}</a><a class="link-arrow" href="${home}#rates">${t.rateLink}</a></div>
      <nav class="watch-nav kunye" aria-label="${W.more}"><a href="${wpath(prev, L)}">← ${short(prev, L)}</a><a href="${wpath(next, L)}">${short(next, L)} →</a></nav>
    </div>
  </div>
</main>\n${footer(t)}`;
  out(path.slice(1) + "index.html", html);
}

function venuePage() {
  const t = STR.tr;
  const path = "/tr/antalya-mekan-tanitim-videosu/";
  const k = WORK.find((w) => w.file === "kiwamiya");
  const vf = [
    ["Mekân tanıtım videosu ne işe yarar?", "Misafir gelmeden önce mekânı telefonunda görür: konum, atmosfer, imza tabak ya da manzara. Kısa dikey video Instagram ve TikTok'ta hem organik paylaşım hem reklam olarak kullanılır."],
    ["Çekim nasıl planlanıyor?", "Brief'ten sonra 48 saat içinde çekim listesi gönderirim. Çekim, mekânın en sakin ve ışığın en iyi olduğu saatte yapılır; misafirleri rahatsız etmeden 1–2 saat sürer."],
    ["Fiyat ne kadar?", `Bir mekân tanıtım videosu ${TRY.venue} ($${PRICES.venue}). Altyazı, bir tur düzeltme ve 12 ay kendi kanallarınızda kullanım dahil. Reklam kullanımı ayrıca fiyatlandırılır.`],
    ["Hangi mekânlarla çalışıyorsunuz?", "Antalya'da kafe, restoran, otel, beach club ve güzellik salonları. Antalya dışı için yol ve konaklama teklife eklenir."],
  ];
  const ld = { "@context": "https://schema.org", "@graph": [person(t), { "@type": "Service", name: "Antalya mekân tanıtım videosu", serviceType: "Mekân tanıtım videosu (UGC)", provider: { "@id": `${SITE}/#mine` }, areaServed: { "@type": "City", name: "Antalya" },
    offers: { "@type": "Offer", price: "11000", priceCurrency: "TRY", name: "Antalya mekân tanıtım videosu" } }, faqLd(vf), video(k, "tr")] };
  const html = head({ lang: "tr", title: "Antalya Mekân Tanıtım Videosu · Kafe, Restoran, Otel · Mine Koçak UGC", desc: `Antalya'daki kafe, restoran, otel ve beach club'lar için dikey mekân tanıtım videosu. Konum, atmosfer ve imza lezzet; Instagram ve TikTok'a hazır. ${TRY.venue}.`, path, og: "/assets/og-tr.jpg", ld,
    preload: [`<link rel="preload" href="/assets/work/kiwamiya.webp" as="image" fetchpriority="high">`] })
    + `\n<body class="page-venue">\n${header(t, false, "#brief")}\n<main id="main">
<section class="watch wrap" aria-labelledby="venue-title">
  <nav class="crumbs kunye" aria-label="Breadcrumb"><a href="/tr/">Mine Koçak</a> / <span>Antalya mekân tanıtım videosu</span></nav>
  <div class="watch-in venue-in">
    <div class="watch-video"><video controls playsinline preload="metadata" poster="/assets/work/kiwamiya.webp"><source src="/assets/work/kiwamiya.mp4" type="video/mp4"></video><p class="kunye">Örnek: ${en("Kiwamiya, Siam Paragon")} (Bangkok) · ${mmss(k.secs)}</p></div>
    <div class="watch-copy">
      <p class="kunye">Kafe · Restoran · Otel · Beach club</p>
      <h1 class="watch-h">Antalya <em>mekân tanıtım videosu.</em></h1>
      <p class="watch-line">Misafirin mekânınıza gelmeden önce görmesi gereken her şey: konum, atmosfer, imza tabak ya da manzara. Telefonla, gerçek bir misafir gözüyle çekilir; Instagram ve TikTok'a hazır teslim edilir.</p>
      <dl class="watch-meta"><div><dt>Fiyat</dt><dd>${TRY.venue} ($${PRICES.venue})</dd></div><div><dt>Teslim</dt><dd>Çekimden sonra 5 iş günü</dd></div><div><dt>Dil</dt><dd>Türkçe veya İngilizce</dd></div><div><dt>Bölge</dt><dd>Antalya; talep üzerine diğer şehirler</dd></div></dl>
      <div class="hero-cta"><a class="btn" href="#brief">Çekim için yazın</a><a class="link-arrow" href="/tr/#rates">Tüm fiyatlar</a></div>
    </div>
  </div>
</section>
${faq({ ...t, faqKicker: "SSS", faqH: "Mekân videoları <em>hakkında.</em>" }, vf, "venue-faq")}
${brief(t)}
</main>\n${footer(t)}`;
  out(path.slice(1) + "index.html", html);
}

function notFound() {
  const t = STR.en;
  out("404.html", head({ lang: "en", title: "Page not found · Mine Koçak UGC", desc: "This page doesn't exist.", path: "/404.html", og: t.og, ld: { "@context": "https://schema.org", "@type": "WebPage", name: "Not found" } }).replace('<link rel="canonical" href="' + SITE + '/404.html">', '<meta name="robots" content="noindex">')
    + `\n<body class="page-404">\n${header(t, false)}\n<main id="main" class="watch wrap"><p class="kunye">404</p><h1 class="watch-h">This page <em>doesn't exist.</em></h1><p class="watch-line"><span lang="tr">Aradığınız sayfa bulunamadı.</span></p><div class="hero-cta"><a class="btn" href="/">See the work</a><a class="link-arrow" href="/tr/">Türkçe</a></div></main>\n${footer(t)}`);
}

function sitemap() {
  const u = (loc, extra = "") => `  <url><loc>${SITE}${loc}</loc><lastmod>${TODAY}</lastmod>${extra}</url>`;
  const hl = `\n    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/"/>\n    <xhtml:link rel="alternate" hreflang="tr" href="${SITE}/tr/"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;
  const vid = (w, L = "en") => `\n    <video:video><video:thumbnail_loc>${SITE}/assets/work/${w.file}.webp</video:thumbnail_loc><video:title>${esc(w.brand + ": " + strip(w[L].title))}</video:title><video:description>${esc(w[L].line)}</video:description><video:content_loc>${SITE}/assets/work/${w.file}.mp4</video:content_loc><video:duration>${w.secs}</video:duration><video:publication_date>${w.date}T12:00:00+03:00</video:publication_date></video:video>`;
  const k = WORK.find((w) => w.file === "kiwamiya");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${u("/", hl)}
${u("/tr/", hl)}
${u(VENUE, vid(k, "tr"))}
${WORK.map((w) => { const p = (L) => `\n    <xhtml:link rel="alternate" hreflang="${L}" href="${SITE}${wpath(w, L)}"/>`; const h = p("en") + p("tr"); return u(wpath(w, "en"), h + vid(w)) + "\n" + u(wpath(w, "tr"), h + vid(w, "tr")); }).join("\n")}
</urlset>
`;
  out("sitemap.xml", xml);
}

function llms() {
  const txt = `# Mine Koçak — UGC creator in Antalya, Türkiye

> Mine Koçak is a Turkish UGC (user-generated content) creator based in Antalya, Türkiye. She writes, films and edits short vertical videos for beauty, nails, fashion and wellness brands, and for cafés, restaurants, hotels and beach clubs in Antalya. She films in English and Turkish.

- Site (EN): ${SITE}/
- Site (TR): ${SITE}/tr/
- Antalya venue videos (TR): ${SITE}/tr/antalya-mekan-tanitim-videosu/
- Instagram: https://www.instagram.com/mineexplora/
- Email: mineexplora@gmail.com

## Published work
Paid collaborations: Wilder (2 videos, electrolyte drink mix), ICA Makeup Academy (Bangkok), Kiwamiya at Siam Paragon (restaurant), Impress (press-on nails). The two Get Ready With Me videos are Mine's own posts.
${WORK.map((w) => `- ${w.brand}: ${strip(w.en.title)} (${w.en.niche}, ${w.en.fmt}, ${w.secs}s) — ${w.en.label}. ${SITE}/work/${w.slug}/`).join("\n")}
Several of these were filmed in Bangkok, where Mine lived before returning to Antalya.

## Formats
Unboxing & first try; Get Ready With Me (a getting-ready routine filmed around the product); demo & how-to; talking to camera; venue visit.

## Rates (USD; TRY equivalents on the Turkish page)
- Single video up to 30 s: $${PRICES.single} (${TRY.single})
- Trio, 3 videos + 3 alternative openings: $${PRICES.trio} (${TRY.trio})
- Monthly, 6 videos + 6 openings + 10 photos: $${PRICES.monthly}/month (${TRY.monthly})
- Antalya venue visit video: $${PRICES.venue} (${TRY.venue})
- Paid ads usage: +30% (30 days), +50% (90 days), +100% (12 months); Meta Partnership Ads from her account $100 per video per 30 days.
- Included: captions, one round of changes, 12 months of organic use on the brand's own channels.

## Process
Brief → opening lines and shot list in 48 hours → filmed and edited within 5 working days of the product arriving → delivery with one round of changes.

## Türkçe özet
Mine Koçak, Antalya'da yaşayan bir UGC içerik üreticisidir. Güzellik, tırnak, moda ve wellness markaları ile Antalya'daki kafe, restoran, otel ve beach club'lar için Türkçe veya İngilizce dikey video çeker. Fiyatlar ${TRY.single}'den başlar.
`;
  out("llms.txt", txt);
}

for (const legacy of ["work", "tr"]) if (existsSync(join(ROOT, legacy))) rmSync(join(ROOT, legacy), { recursive: true });
home("en"); home("tr"); WORK.forEach((w, i) => { watch(w, i, "en"); watch(w, i, "tr"); }); venuePage(); notFound(); sitemap(); llms();
console.log("built", 4 + WORK.length * 2, "pages");
