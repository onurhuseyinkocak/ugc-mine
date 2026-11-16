CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now')),
  name TEXT, email TEXT NOT NULL, company TEXT, product TEXT, goal TEXT,
  budget TEXT, timeframe TEXT, message TEXT, lang TEXT, utm TEXT,
  entry_referrer TEXT, ip_hash TEXT, notified INTEGER NOT NULL DEFAULT 0, status TEXT NOT NULL DEFAULT 'new'
);
CREATE INDEX IF NOT EXISTS leads_ip_time ON leads (ip_hash, created_at);
