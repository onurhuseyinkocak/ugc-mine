(() => {
  const grid = document.getElementById("ugcFeedGrid");
  const count = document.getElementById("ugcFeedCount");
  if (!grid || !count) return;

  const escape = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
  const date = (value) => {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? "Curated collaboration" : `Updated ${parsed.toLocaleDateString()}`;
  };

  fetch("ugc-feed.json", { cache: "no-store" })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("feed unavailable")))
    .then((feed) => {
      const items = (Array.isArray(feed.items) ? feed.items : [])
        .filter((item) => item && item.permalink && item.thumbnail && item.isUGC)
        .sort((a, b) => Number(b.ugcScore || 0) - Number(a.ugcScore || 0) || Date.parse(b.publishedAt || 0) - Date.parse(a.publishedAt || 0));
      count.textContent = `${items.length} verified UGC example${items.length === 1 ? "" : "s"} · ${date(feed.lastSuccessfulSyncAt)}`;
      grid.innerHTML = items.length ? items.map((item) => `
        <a class="ugc-feed-card" href="${escape(item.permalink)}" target="_blank" rel="noopener noreferrer" aria-label="Open original Instagram post: ${escape(item.title)}">
          <img src="${escape(item.thumbnail)}" alt="${escape(item.title)}" loading="lazy" decoding="async">
          <span class="ugc-feed-card-copy"><span>Verified UGC</span><strong>${escape(item.title)}</strong></span>
        </a>`).join("") : '<p class="ugc-feed-empty">No verified UGC examples are available yet.</p>';
    })
    .catch(() => {
      count.textContent = "The collaboration feed is temporarily unavailable.";
      grid.innerHTML = '<p class="ugc-feed-empty">Open the portfolio below to view published work.</p>';
    });
})();
