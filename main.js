(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");
  var TR = root.lang === "tr";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var conn = navigator.connection || {};
  var autoplay = !reduce && !conn.saveData;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  function each(sel, fn, ctx) { Array.prototype.forEach.call((ctx || document).querySelectorAll(sel), fn); }
  function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

  // Analytics (gtag loaded async in <head>)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "G-K9XZ9B08V9");
  function track(name, params) { try { window.gtag("event", name, params || {}); } catch (e) { /* optional */ } }

  // Intro choreography: two frames so the initial state paints first
  window.requestAnimationFrame(function () { window.requestAnimationFrame(function () { root.classList.add("is-ready"); }); });

  // Header hairline once scrolled
  var top = document.querySelector(".top");
  function onScroll() { top.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Hero loop respects reduced motion / data saver
  each(".hero-video", function (v) { if (!autoplay) { v.removeAttribute("autoplay"); v.pause(); } });

  // ---------- Reel theatre ----------
  each("[data-theatre]", function (th) {
    var strip = th.querySelector(".reels");
    var cards = Array.prototype.slice.call(th.querySelectorAll(".reel-card"));
    var now = th.querySelector(".theatre-now");
    var bar = th.querySelector(".progress-bar");
    var details = th.querySelector("[data-details]");
    var active = -1;

    function toPreview(card) {
      var v = card.querySelector("video");
      card.classList.remove("is-full");
      v.controls = false; v.muted = true; v.loop = true;
      if (v.getAttribute("src") !== card.dataset.preview) v.src = card.dataset.preview;
    }
    function setActive(i) {
      if (i === active || i < 0 || i >= cards.length) return;
      if (active > -1) { var old = cards[active]; old.classList.remove("is-active"); if (old.classList.contains("is-full")) toPreview(old); old.querySelector("video").pause(); }
      active = i;
      var c = cards[i];
      c.classList.add("is-active");
      now.textContent = c.dataset.kunye + " · " + c.dataset.label;
      details.href = c.dataset.href;
      bar.className = "progress-bar p" + (i + 1);
      if (autoplay) { var v = c.querySelector("video"); if (!v.getAttribute("src")) v.src = c.dataset.preview; play(v); }
    }
    function go(i) {
      i = Math.max(0, Math.min(cards.length - 1, i));
      var c = cards[i];
      strip.scrollTo({ left: c.offsetLeft - cards[0].offsetLeft, behavior: reduce ? "auto" : "smooth" });
    }
    function full(i) {
      var c = cards[i], v = c.querySelector("video");
      c.classList.add("is-full");
      v.src = c.dataset.full; v.muted = false; v.loop = false; v.controls = true;
      play(v); v.focus();
      track("reel_sound_on", { reel: c.dataset.full.split("/").pop() });
    }

    // Active card = the one snapped to the leading edge (index from scroll position)
    var raf = 0;
    strip.addEventListener("scroll", function () {
      if (raf) return;
      raf = window.requestAnimationFrame(function () {
        raf = 0;
        var step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
        var i = Math.round(strip.scrollLeft / step);
        if (strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 4) i = Math.max(i, Math.round((strip.scrollWidth - strip.clientWidth) / step));
        setActive(Math.min(cards.length - 1, i));
      });
    }, { passive: true });
    cards.forEach(function (c, i) {
      var v = c.querySelector("video");
      v.addEventListener("click", function () {
        if (i !== active) { go(i); return; }
        if (!c.classList.contains("is-full")) full(i);
      });
      v.addEventListener("ended", function () { toPreview(c); if (autoplay && i === active) play(v); });
      v.addEventListener("error", function () { if (c.classList.contains("is-full")) toPreview(c); });
    });
    th.querySelector("[data-prev]").addEventListener("click", function () { go(active - 1); });
    th.querySelector("[data-next]").addEventListener("click", function () { go(active + 1); });
    th.querySelector("[data-sound]").addEventListener("click", function () { full(active); });
    strip.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    });
    // Pause the theatre when it leaves the viewport
    new IntersectionObserver(function (en) {
      var c = cards[active]; if (!c) return;
      var v = c.querySelector("video");
      if (!en[0].isIntersecting) v.pause(); else if (autoplay && !c.classList.contains("is-full")) play(v);
    }, { threshold: 0.15 }).observe(th);
    setActive(0);
  });

  // ---------- Contact sheet: hover plays (fine pointer), centre-of-screen plays (touch) ----------
  var cells = Array.prototype.slice.call(document.querySelectorAll("[data-loop]"));
  function start(cell) { var v = cell.querySelector("video"); if (!v.getAttribute("src")) v.src = v.dataset.src; cell.classList.add("is-playing"); play(v); }
  function stop(cell) { cell.classList.remove("is-playing"); cell.querySelector("video").pause(); }
  if (autoplay && cells.length) {
    if (finePointer) {
      cells.forEach(function (c) {
        c.addEventListener("mouseenter", function () { start(c); });
        c.addEventListener("mouseleave", function () { stop(c); });
      });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) start(en.target); else stop(en.target); });
      }, { rootMargin: "-35% 0px -35% 0px" });
      cells.forEach(function (c) { cio.observe(c); });
    }
  }

  // ---------- Scroll reveal ----------
  if (!reduce) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    each(".sec-head, .cell, .pkg, .tables > *, .steps li, .about-in, .faq-list, .brief-in", function (el) { el.classList.add("rv"); ro.observe(el); });
  }

  // ---------- Brief form ----------
  var form = document.getElementById("brief-form");
  if (!form) return;
  each("[data-pick]", function (a) {
    a.addEventListener("click", function () {
      form.elements.goal.value = a.dataset.pick;
      track("package_pick", { pkg: a.dataset.pick });
      window.setTimeout(function () { form.elements.email.focus({ preventScroll: true }); }, 500);
    });
  });

  var M = TR ? {
    email: "Lütfen geçerli bir e-posta yazın.", product: "Lütfen ürünü veya mekânı yazın.", sending: "Gönderiliyor…",
    ok: "Teşekkürler, brief'iniz ulaştı. 24 saat içinde dönüyorum.",
    err: "Buradan gönderilemedi. Brief dolu şekilde e-posta uygulamanız açılıyor; dilerseniz mineexplora@gmail.com adresine yazın.",
    auto: function (first, product) { return "Merhaba" + (first ? " " + first : "") + ", brief'iniz için teşekkürler" + (product ? " (" + product + ")" : "") + ". 24 saat içinde iki üç içerik fikri ve sabit bir teklifle dönüyorum. Mine Koçak, UGC içerik üreticisi, Antalya. ugc-mine.vibecodingturkey.com/tr / @mineexplora"; }
  } : {
    email: "Please add a valid email.", product: "Please tell me the product or venue.", sending: "Sending…",
    ok: "Thank you. Your brief is in, I'll reply within 24 hours.",
    err: "Couldn't send from here. Opening your email app with the brief filled in, or write to mineexplora@gmail.com.",
    auto: function (first, product) { return "Hi" + (first ? " " + first : "") + ", thanks for your brief" + (product ? " about " + product : "") + ". I'll reply within 24 hours with two or three content angles and a fixed quote. Mine Koçak, UGC creator in Antalya, Türkiye. ugc-mine.vibecodingturkey.com / @mineexplora"; }
  };

  var ENDPOINT = "https://ugc-mine-lead.onur-vct-20260722.workers.dev"; // Cloudflare Worker + D1
  var MAILER = "https://formsubmit.co/ajax/49170d744b48fd4a858d60beaa94e7a1"; // notifies info@ + Mine, auto-replies to the brand
  var status = form.querySelector(".form-status");
  var button = form.querySelector("button[type=submit]");
  var params = new URLSearchParams(location.search);
  var utm = ["utm_source", "utm_medium", "utm_campaign", "utm_content"].map(function (k) { return params.get(k) ? k + "=" + params.get(k) : ""; }).filter(Boolean).join("&");

  function say(text, kind) { status.textContent = text; status.className = "form-status" + (kind ? " is-" + kind : ""); }
  function mailFallback(fd) {
    var body = ["Name: " + fd.get("name"), "Brand: " + fd.get("company"), "Email: " + fd.get("email"), "Product: " + fd.get("product"), "Package: " + fd.get("goal"), "Timeline: " + fd.get("timeframe"), "Runs as: " + fd.get("budget"), "", fd.get("message")].join("\n");
    return "mailto:mineexplora@gmail.com?subject=" + encodeURIComponent("UGC brief: " + (fd.get("company") || fd.get("product"))) + "&body=" + encodeURIComponent(body);
  }
  function asJson(r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    if (fd.get("website")) return; // bot
    var email = String(fd.get("email") || "").trim();
    var product = String(fd.get("product") || "").trim();
    form.elements.email.setAttribute("aria-invalid", /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "false" : "true");
    form.elements.product.setAttribute("aria-invalid", product ? "false" : "true");
    var bad = form.querySelector("[aria-invalid=true]");
    if (bad) { say(bad.name === "email" ? M.email : M.product, "err"); bad.focus(); return; }

    button.disabled = true;
    say(M.sending);
    var lead = {
      action: "submit", kind: "contact", lang: TR ? "tr" : "en",
      name: fd.get("name") || "", company: fd.get("company") || "", email: email, product: product,
      goal: fd.get("goal") || "", budget: fd.get("budget") || "", timeframe: fd.get("timeframe") || "",
      message: fd.get("message") || "", channel: "ugc-mine-portfolio", entry_referrer: document.referrer || "", utm: utm
    };
    var first = lead.name ? String(lead.name).split(" ")[0] : "";
    var store = fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) })
      .then(asJson).then(function (x) { if (!x.ok || !x.j.ok) throw new Error(x.j.error || "failed"); });
    var mail = fetch(MAILER, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "[Mine UGC] New brief" + (TR ? " (TR)" : "") + ": " + (lead.company || lead.name || email),
        _cc: "mineexplora@gmail.com", _template: "table", _captcha: "false", _replyto: email,
        _autoresponse: M.auto(first, product),
        Name: lead.name, email: email, Brand: lead.company, Product: product, Package: lead.goal,
        "Runs as": lead.budget, Timeline: lead.timeframe, Message: lead.message, Language: lead.lang, Source: utm || lead.entry_referrer || "direct"
      })
    }).then(asJson).then(function (x) { if (!x.ok || String(x.j.success) !== "true") throw new Error(x.j.message || "failed"); });
    // Success if either path lands: D1 keeps the record, FormSubmit delivers the email.
    Promise.allSettled([store, mail]).then(function (res) {
      if (res[0].status !== "fulfilled" && res[1].status !== "fulfilled") throw new Error("both failed");
      form.reset();
      say(M.ok, "ok");
      track("generate_lead", { channel: "ugc-mine-portfolio", lang: lead.lang });
    }).catch(function () {
      say(M.err, "err");
      window.location.href = mailFallback(fd);
    }).then(function () { button.disabled = false; });
  });
})();
