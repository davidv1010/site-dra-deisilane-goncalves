/* =========================================================
   Comportamento do site. Os conteúdos vêm de config.js.
   Normalmente você não precisa editar este arquivo.
   ========================================================= */
(function () {
  "use strict";
  var S = window.SITE;
  document.documentElement.classList.add("js");

  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var waUrl = function (msg) {
    return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(msg);
  };
  // Textos ainda não preenchidos (com [colchetes]) não aparecem no site
  var isPh = function (v) { return /\[[^\]]*\]/.test(String(v || "")); };
  var filled = function (list, keys) {
    return (list || []).filter(function (o) { return keys.every(function (k) { return !isPh(o[k]); }); });
  };
  var icon = function (id, cls) {
    return '<svg class="' + (cls || "ico") + '" aria-hidden="true"><use href="#' + id + '"/></svg>';
  };

  /* ---------- Renderização das listas ---------- */
  var render = {
    premios: function () {
      return filled(S.premios, ["nome", "ano"]).map(function (p) {
        return '<article class="award reveal"><div class="seal">' + icon("i-award", "") + '</div><div>' +
          '<span class="award__year">' + esc(p.ano) + '</span><h3>' + esc(p.nome) + '</h3>' + (isPh(p.contexto) ? "" : '<p>' + esc(p.contexto) + '</p>') + '</div></article>';
      }).join("");
    },
    numeros: function () {
      return filled(S.numeros, ["valor", "rotulo"]).map(function (n) {
        return '<div class="reveal"><dt>' + esc(n.valor) + '</dt><dd>' + esc(n.rotulo) + '</dd></div>';
      }).join("");
    },
    tratamentos: function () {
      return S.tratamentos.map(function (t, i) {
        return '<a class="treat__item reveal" href="' + waUrl(t.msg) + '" data-wa-origin="tratamento-' + (i + 1) + '" target="_blank" rel="noopener">' +
          '<span class="treat__n">' + String(i + 1).padStart(2, "0") + '</span>' +
          '<h3>' + esc(t.nome) + '</h3><p>' + esc(t.frase) + '</p><span class="treat__link">' + icon("i-wa") + 'Saber mais<span class="treat__arrow">' + icon("i-arrow") + '</span></span></a>';
      }).join("");
    },
    antesDepois: function () {
      return S.antesDepois.map(function (b, i) {
        var before = b.antes
          ? '<img class="ba__img" src="' + esc(b.antes) + '" alt="Antes do tratamento ' + (i + 1) + '" loading="lazy" width="800" height="1000">'
          : '<div class="ba__img ba__ph">[FOTO: antes]</div>';
        var after = b.depois
          ? '<img class="ba__img ba__after" src="' + esc(b.depois) + '" alt="Depois do tratamento ' + (i + 1) + '" loading="lazy" width="800" height="1000">'
          : '<div class="ba__img ba__after ba__ph ba__ph--after"><span>[FOTO: depois]</span></div>';
        var ratio = /^[\d.]+\/[\d.]+$/.test(b.proporcao || "") ? ' style="aspect-ratio:' + b.proporcao + '"' : "";
        return '<figure class="ba reveal"><div class="ba__frame"' + ratio + '>' + before + after +
          '<span class="ba__tag ba__tag--a">Antes</span><span class="ba__tag ba__tag--b">Depois</span>' +
          '<span class="ba__line"></span><span class="ba__knob" aria-hidden="true">◂▸</span>' +
          '<input class="ba__range" type="range" min="0" max="100" value="50" aria-label="Comparar antes e depois, resultado ' + (i + 1) + '">' +
          '</div><figcaption>' + esc(b.legenda) + '</figcaption></figure>';
      }).join("");
    },
    depoimentos: function () {
      return S.depoimentos.filter(function (d) { return d.print || (!isPh(d.texto) && !isPh(d.nome)); }).map(function (d) {
        var body = d.print
          ? '<img src="' + esc(d.print) + '" alt="Depoimento de ' + esc(d.nome) + '" loading="lazy">'
          : '<blockquote>' + esc(d.texto) + '</blockquote>';
        return '<figure class="testi__item reveal">' + body + '<figcaption><strong>' + esc(d.nome) + '</strong>' + (isPh(d.cidade) ? "" : ' • ' + esc(d.cidade)) + '</figcaption></figure>';
      }).join("");
    },
    faq: function () {
      return S.faq.map(function (f) {
        var cta = f.cta ? '<p><a href="' + waUrl(S.mensagens[f.cta]) + '" data-wa-origin="' + f.cta + '" target="_blank" rel="noopener">Agendar minha avaliação →</a></p>' : "";
        return '<details class="reveal"><summary>' + esc(f.p) + icon("i-plus") + '</summary><div class="faq__body"><p>' + esc(f.r) + '</p>' + cta + '</div></details>';
      }).join("");
    }
  };
  document.querySelectorAll("[data-render]").forEach(function (el) {
    var fn = render[el.getAttribute("data-render")];
    if (fn) el.innerHTML = fn();
  });

  /* Seções sem conteúdo preenchido ficam ocultas */
  document.querySelectorAll("[data-hide-if-empty]").forEach(function (sec) {
    var box = sec.querySelector("[data-render]");
    if (box && !box.children.length) sec.hidden = true;
  });
  document.querySelectorAll("[data-filter-placeholders] li").forEach(function (li) { if (isPh(li.textContent)) li.remove(); });

  /* ---------- Textos e links simples ---------- */
  var fallback = { horario: "Atendimento com hora marcada. Consulte pelo WhatsApp." };
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var k = el.getAttribute("data-text"), v = S[k] || "";
    el.textContent = isPh(v) ? (fallback[k] || v) : v;
  });
  document.querySelectorAll("[data-hide-placeholder]").forEach(function (el) { if (isPh(el.textContent)) el.hidden = true; });
  document.querySelectorAll("[data-href]").forEach(function (el) { el.href = S[el.getAttribute("data-href")] || "#"; });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Botões do WhatsApp ---------- */
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var key = el.getAttribute("data-wa");
    el.href = waUrl(S.mensagens[key] || S.mensagens.final);
    el.target = "_blank";
    el.rel = "noopener";
    el.setAttribute("data-wa-origin", key);
  });

  /* ---------- Eventos de clique (Pixel + GA4) ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-wa-origin]");
    if (!a) return;
    var origem = a.getAttribute("data-wa-origin");
    if (window.fbq) {
      window.fbq("track", "Contact", { content_name: origem });
      window.fbq("trackCustom", "WhatsAppClick", { origem: origem });
    }
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", { origem: origem, link_url: a.href });
    }
  });

  /* ---------- Slider antes/depois ---------- */
  document.querySelectorAll(".ba__frame").forEach(function (f) {
    var r = f.querySelector(".ba__range");
    var set = function () { f.style.setProperty("--pos", r.value + "%"); };
    r.addEventListener("input", set);
    set();
  });

  /* ---------- Mapa (carrega só quando pedido ou visível) ---------- */
  var map = document.querySelector("[data-map]");
  var loadMap = function () {
    if (!map || map.querySelector("iframe")) return;
    var f = document.createElement("iframe");
    f.src = "https://www.google.com/maps?q=" + encodeURIComponent(S.mapaBusca) + "&output=embed";
    f.title = "Mapa da clínica Deisilane Gonçalves";
    f.loading = "lazy";
    f.referrerPolicy = "no-referrer-when-downgrade";
    map.appendChild(f);
  };
  if (map) map.querySelector(".map__load").addEventListener("click", loadMap);

  /* ---------- Revelar ao rolar ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Cookies (LGPD) + carregamento do rastreamento ---------- */
  var KEY = "dg_cookie_consent";
  var banner = document.querySelector(".cookie");
  var getConsent = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  var setConsent = function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} };

  function loadTracking() {
    var A = S.analytics || {};
    if (A.ga4Id && !window.gtag) {
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + A.ga4Id;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", A.ga4Id);
    }
    if (A.metaPixelId && !window.fbq) {
      /* Código oficial do Meta Pixel */
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
        t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", A.metaPixelId);
      window.fbq("track", "PageView");
    }
  }

  var consent = getConsent();
  if (consent === "accept") loadTracking();
  else if (!consent && banner) banner.hidden = false;

  document.querySelectorAll("[data-cookie]").forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.getAttribute("data-cookie");
      setConsent(v);
      banner.hidden = true;
      if (v === "accept") loadTracking();
    });
  });
  document.querySelectorAll("[data-cookie-reopen]").forEach(function (b) {
    b.addEventListener("click", function () { banner.hidden = false; });
  });
})();
