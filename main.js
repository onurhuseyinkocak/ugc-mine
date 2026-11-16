(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  // Analytics (loaded async in <head>)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "G-K9XZ9B08V9");
  function track(name, params) { try { window.gtag("event", name, params || {}); } catch (e) { /* analytics is optional */ } }

  // Header border once the page scrolls
  var top = document.querySelector(".top");
  function onScroll() { top.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reels: muted preview loops while visible; "Sound on" swaps to the full 1080p cut.
  var conn = navigator.connection || {};
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var autoplay = !reduce && !conn.saveData;
  var reels = Array.prototype.slice.call(document.querySelectorAll("[data-reel]"));
  var active = null;

  function stopFull(reel) {
    var v = reel.querySelector("video");
    v.pause();
    v.muted = true;
    v.controls = false;
    reel.classList.remove("is-full");
    v.loop = true;
    v.src = v.dataset.preview;
    v.load();
    if (autoplay) v.play().catch(function () {});
  }

  reels.forEach(function (reel) {
    var v = reel.querySelector("video");
    var btn = reel.querySelector(".reel-sound");
    btn.addEventListener("click", function () {
      if (active && active !== reel) stopFull(active);
      active = reel;
      reel.classList.add("is-full");
      v.src = v.dataset.full;
      v.muted = false;
      v.loop = false;
      v.controls = true;
      v.play().catch(function () { /* user can press play in native controls */ });
      v.focus();
      track("reel_sound_on", { reel: v.dataset.full.split("/").pop() });
    });
    function back() { if (reel.classList.contains("is-full")) { stopFull(reel); if (active === reel) active = null; } }
    v.addEventListener("ended", back);
    v.addEventListener("error", back);
    // Tapping a muted preview pauses / resumes it (WCAG 2.2.2)
    v.addEventListener("click", function () { if (!reel.classList.contains("is-full")) { if (v.paused) { if (!v.getAttribute("src")) v.src = v.dataset.preview; v.play().catch(function () {}); } else v.pause(); } });
  });

  if (autoplay && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var reel = en.target;
        var v = reel.querySelector("video");
        if (reel.classList.contains("is-full")) { if (!en.isIntersecting) v.pause(); return; }
        if (en.isIntersecting) {
          if (!v.getAttribute("src")) v.src = v.dataset.preview;
          v.play().catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    reels.forEach(function (r) { io.observe(r); });
  }

  // Reveal on scroll
  var rv = document.querySelectorAll(".sec-head, .item, .formats > div, .pkg, .steps li, .about-in, .faq-list, .brief-in");
  if (!reduce && "IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(rv, function (el) { el.classList.add("rv"); ro.observe(el); });
  }

  // Package buttons prefill the brief
  var form = document.getElementById("brief-form");
  Array.prototype.forEach.call(document.querySelectorAll("[data-pick]"), function (a) {
    a.addEventListener("click", function () {
      form.elements.goal.value = a.dataset.pick;
      track("package_pick", { pkg: a.dataset.pick });
      window.setTimeout(function () { form.elements.email.focus({ preventScroll: true }); }, 450);
    });
  });

  // Brief form -> ugc-lead (Supabase). Mail draft is the fallback.
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

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    if (fd.get("website")) return; // bot
    var email = String(fd.get("email") || "").trim();
    var product = String(fd.get("product") || "").trim();
    form.elements.email.setAttribute("aria-invalid", /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "false" : "true");
    form.elements.product.setAttribute("aria-invalid", product ? "false" : "true");
    var bad = form.querySelector("[aria-invalid=true]");
    if (bad) { say(bad.name === "email" ? "Please add a valid email." : "Please tell me the product.", "err"); bad.focus(); return; }

    button.disabled = true;
    say("Sending…");
    var lead = {
      action: "submit", kind: "contact", lang: "en",
      name: fd.get("name") || "", company: fd.get("company") || "", email: email, product: product,
      goal: fd.get("goal") || "", budget: fd.get("budget") || "", timeframe: fd.get("timeframe") || "",
      message: fd.get("message") || "", channel: "ugc-mine-portfolio",
      entry_referrer: document.referrer || "", utm: utm
    };
    var first = lead.name ? String(lead.name).split(" ")[0] : "";
    var store = fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.ok) throw new Error(j.error || "failed"); return j; }); });
    var mail = fetch(MAILER, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "[Mine UGC] New brief: " + (lead.company || lead.name || lead.email),
        _cc: "mineexplora@gmail.com", _template: "table", _captcha: "false", _replyto: email,
        _autoresponse: "Hi" + (first ? " " + first : "") + ", thanks for your brief" + (product ? " about " + product : "") + ". I'll reply within 24 hours with two or three content angles and a fixed quote. Mine Koçak, UGC creator in Bangkok. ugc-mine.vibecodingturkey.com / @mineexplora",
        Name: lead.name, email: email, Brand: lead.company, Product: product, Package: lead.goal,
        "Runs as": lead.budget, Timeline: lead.timeframe, Message: lead.message, Source: utm || lead.entry_referrer || "direct"
      })
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || String(j.success) !== "true") throw new Error(j.message || "failed"); return j; }); });
    // Success if either path lands: D1 keeps the record, FormSubmit delivers the email.
    Promise.allSettled([store, mail]).then(function (res) {
      if (res[0].status !== "fulfilled" && res[1].status !== "fulfilled") throw new Error("both failed");
    })
      .then(function () {
        form.reset();
        say("Thank you. Your brief is in, I'll reply within 24 hours.", "ok");
        track("generate_lead", { channel: "ugc-mine-portfolio" });
      })
      .catch(function () {
        say("Couldn't send from here. Opening your email app with the brief filled in, or write to mineexplora@gmail.com.", "err");
        window.location.href = mailFallback(fd);
      })
      .then(function () { button.disabled = false; });
  });
})();
