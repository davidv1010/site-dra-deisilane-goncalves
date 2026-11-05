/* =========================================================
   Animações extras: sequência nas listas, contadores,
   demonstração do slider antes/depois, barra de progresso.
   Tudo desliga com "reduzir movimento" no celular.
   ========================================================= */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Itens de cada lista entram um após o outro */
  [".awards", ".treat", ".timeline", ".flow", ".faq", ".ba-list", ".stats", ".testi", ".two-col", ".photo-pair"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (box) {
      var n = 0;
      Array.prototype.forEach.call(box.children, function (el) {
        if (el.classList.contains("reveal")) el.style.setProperty("--i", n++);
      });
    });
  });

  /* Barra de progresso + topo com sombra */
  var bar = document.createElement("div");
  bar.className = "progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var top = document.querySelector(".topbar");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
      if (top) top.classList.toggle("is-scrolled", scrollY > 12);
      ticking = false;
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (reduce || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".timeline").forEach(function (t) { t.classList.add("is-drawn"); });
    return;
  }

  function once(els, fn, opts) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { fn(e.target); io.unobserve(e.target); }
      });
    }, opts || { threshold: 0.35 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Linha do tempo se desenha */
  once(document.querySelectorAll(".timeline"), function (t) { t.classList.add("is-drawn"); }, { threshold: 0.2 });

  /* Números sobem até o valor final (ex.: 2,6 mil) */
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
  once(document.querySelectorAll(".stats dt"), function (dt) {
    var m = dt.textContent.trim().match(/^([\d.,]+)(.*)$/);
    if (!m) return;
    var raw = m[1], rest = m[2];
    var dec = raw.indexOf(",") > -1 ? raw.split(",")[1].length : 0;
    var end = parseFloat(raw.replace(/\./g, "").replace(",", "."));
    var t0 = performance.now(), dur = 1400;
    (function step(now) {
      var p = Math.min(1, (now - t0) / dur);
      dt.textContent = (end * ease(p)).toFixed(dec).replace(".", ",") + rest;
      if (p < 1) requestAnimationFrame(step); else dt.textContent = raw + rest;
    })(t0);
  }, { threshold: 0.6 });

  /* Antes/depois: demonstra o arraste uma vez ao aparecer */
  once(document.querySelectorAll(".ba__frame"), function (f) {
    var r = f.querySelector(".ba__range");
    var touched = false;
    r.addEventListener("pointerdown", function () { touched = true; }, { once: true });
    var keys = [50, 22, 78, 50], seg = 650, t0 = performance.now() + 300;
    (function step(now) {
      if (touched) return;
      var t = Math.max(0, now - t0), i = Math.floor(t / seg);
      if (i >= keys.length - 1) { f.style.setProperty("--pos", "50%"); r.value = 50; return; }
      var p = (t % seg) / seg, e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      var v = keys[i] + (keys[i + 1] - keys[i]) * e;
      f.style.setProperty("--pos", v + "%");
      r.value = v;
      requestAnimationFrame(step);
    })(performance.now());
  }, { threshold: 0.6 });
})();
