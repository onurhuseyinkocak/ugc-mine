// Brief form backend for ugc-mine.vibecodingturkey.com.
// Stores every lead in D1 (source of truth). Email notification is sent from the browser via
// FormSubmit, which rate-limits Cloudflare egress IPs (429) when called from here.
const ORIGINS = new Set(["https://ugc-mine.vibecodingturkey.com", "http://localhost:8000", "http://127.0.0.1:8000"]);
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const LIMIT_PER_HOUR = 5;

const cors = (origin) => ({
  "Access-Control-Allow-Origin": ORIGINS.has(origin) ? origin : "https://ugc-mine.vibecodingturkey.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
  Vary: "Origin",
});
const json = (body, status, headers) => new Response(JSON.stringify(body), { status, headers: { ...headers, "Content-Type": "application/json" } });
const clip = (v, n) => String(v ?? "").trim().slice(0, n);

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const h = cors(origin);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: h });
    if (req.method !== "POST") return json({ error: "method not allowed" }, 405, h);
    if (!ORIGINS.has(origin)) return json({ error: "forbidden" }, 403, h);

    let body;
    try { body = await req.json(); } catch { return json({ error: "invalid json" }, 400, h); }
    if (body.website) return json({ ok: true }, 200, h); // honeypot: pretend success

    const lead = {
      name: clip(body.name, 200), email: clip(body.email, 200), company: clip(body.company, 200),
      product: clip(body.product, 2000), goal: clip(body.goal, 200), budget: clip(body.budget, 100),
      timeframe: clip(body.timeframe, 200), message: clip(body.message, 4000), lang: clip(body.lang, 8),
      utm: clip(body.utm, 400), entry_referrer: clip(body.entry_referrer, 400),
    };
    if (!EMAIL_RE.test(lead.email)) return json({ error: "valid email required" }, 400, h);
    if (!lead.product && !lead.message) return json({ error: "tell me about your product" }, 400, h);

    const ipHash = await sha256((req.headers.get("CF-Connecting-IP") || "") + (env.IP_SALT || "ugc-mine"));
    const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM leads WHERE ip_hash = ? AND created_at > strftime('%Y-%m-%dT%H:%M:%SZ','now','-1 hour')").bind(ipHash).first();
    if (recent && recent.n >= LIMIT_PER_HOUR) return json({ error: "too many requests" }, 429, h);

    const row = await env.DB.prepare(
      "INSERT INTO leads (name,email,company,product,goal,budget,timeframe,message,lang,utm,entry_referrer,ip_hash) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id"
    ).bind(lead.name, lead.email, lead.company, lead.product, lead.goal, lead.budget, lead.timeframe, lead.message, lead.lang, lead.utm, lead.entry_referrer, ipHash).first();

    return json({ ok: true, id: row.id }, 200, h);
  },
};
