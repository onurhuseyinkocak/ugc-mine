/* Mine Koçak — portfolio behaviour: nav, reveal, mobile menu, marquee, lead form */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 12); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    function closeMenu() { burger.classList.remove("open"); menu.classList.remove("open"); document.body.classList.remove("no-scroll"); }
    burger.addEventListener("click", function () {
      var open = burger.classList.toggle("open");
      menu.classList.toggle("open", open);
      document.body.classList.toggle("no-scroll", open);
    });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  var mq = document.getElementById("marquee");
  if (mq) mq.innerHTML += mq.innerHTML;

  var y = document.getElementById("year"); if (y) y.textContent = String(new Date().getFullYear());

  /* lead form -> shared Supabase edge fn (feeds the same manager dashboard, tagged 'mine') */
  var LEAD_ENDPOINT = "https://bajrnvusqzllvsvipitr.supabase.co/functions/v1/ugc-lead";
  var LEAD_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhanJudnVzcXpsbHZzdmlwaXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MzMwNDQsImV4cCI6MjA4OTQwOTA0NH0.ao8f5YlNpbDnVdty5O6QwJaTSQS5cV8VEx2OE8gRa1k";

  var ENTRY = (function () {
    var p = new URLSearchParams(location.search), utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) { var v = p.get(k); if (v) utm[k] = v; });
    var ref = document.referrer || "", channel = "direct";
    if (Object.keys(utm).length) channel = utm.utm_source || "utm";
    else if (ref) {
      if (/instagram/i.test(ref)) channel = "instagram";
      else if (/tiktok/i.test(ref)) channel = "tiktok";
      else if (/google/i.test(ref)) channel = "google";
      else channel = "referral";
    }
    return { channel: channel, entry_referrer: ref, utm: utm };
  })();

  var MSG = {
    sending: "Sending…",
    ok: "Thank you — got it. I'll reply within 24 hours.",
    err: "Add your email and niche, then try again.",
  };

  var leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = document.getElementById("formStatus");
      var btn = leadForm.querySelector("button[type=submit]");
      var fd = new FormData(leadForm);
      if (fd.get("website")) { status.textContent = MSG.ok; status.className = "form-status ok"; leadForm.reset(); return; }
      var email = (fd.get("email") || "").trim();
      var product = (fd.get("product") || "").trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !product) {
        status.textContent = MSG.err; status.className = "form-status err"; return;
      }
      btn.disabled = true; status.textContent = MSG.sending; status.className = "form-status";
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: LEAD_ANON, Authorization: "Bearer " + LEAD_ANON },
        body: JSON.stringify({
          action: "submit", kind: "mine-booking", lang: "en", site: "ugc-mine",
          name: fd.get("name") || "", email: email, company: fd.get("company") || "",
          product: product, goal: fd.get("goal") || "", message: fd.get("message") || "",
          channel: ENTRY.channel, entry_referrer: ENTRY.entry_referrer, utm: ENTRY.utm
        })
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      }).then(function (res) {
        if (res.ok && res.j && res.j.ok) { status.textContent = MSG.ok; status.className = "form-status ok"; leadForm.reset(); }
        else { status.textContent = MSG.err; status.className = "form-status err"; }
      }).catch(function () { status.textContent = MSG.err; status.className = "form-status err"; })
        .then(function () { btn.disabled = false; });
    });
  }
})();
