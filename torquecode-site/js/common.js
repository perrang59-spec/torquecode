/* TorqueCode — shared utilities, theme, navigation, icons, saved codes */
(function () {
  "use strict";

  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.6-.7-.7-2.6 2.5-2.5z"/>',
    gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-4"/><circle cx="12" cy="14" r="1"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
    fuel: '<path d="M3 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18"/><path d="M3 10h10"/><path d="M15 8h2a2 2 0 0 1 2 2v7a2 2 0 0 0 4 0V9l-3-3"/>',
    tire: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    map: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/>',
    car: '<path d="M5 17h14M6 17l-1.5-5.5L7 7h10l2.5 4.5L18 17"/><path d="M4 17v2h3v-2M17 17v2h3v-2"/><circle cx="8" cy="13.5" r="1"/><circle cx="16" cy="13.5" r="1"/>',
    thermo: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    bolt: '<path d="M13 2 3 14h8l-1 8 11-13h-9l1-7z"/>',
    box: '<path d="M21 8v8a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.7l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
    wind: '<path d="M3 8h9a3 3 0 1 0-3-3M3 12h13a3 3 0 1 1-3 3M3 16h6"/>',
    dollar: '<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h7"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    brake: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6 9 9M18.4 5.6 15 9M5.6 18.4 9 15M18.4 18.4 15 15"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    slash: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'
  };

  var storage = {
    get: function (key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (err) {
        return fallback;
      }
    },
    set: function (key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        /* Storage may be blocked; the UI still works for this session. */
      }
    },
    remove: function (key) {
      try {
        window.localStorage.removeItem(key);
      } catch (err) {
        /* no-op */
      }
    }
  };

  var severityLabels = {
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical"
  };

  var systems = {
    P: "Powertrain",
    B: "Body",
    C: "Chassis",
    U: "Network"
  };

  function icon(name, cls) {
    var body = ICONS[name] || ICONS.info;
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + body + "</svg>";
  }

  function escapeHTML(value) {
    return String(value === null || value === undefined ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatCost(range) {
    if (!range || range.length < 2) return "Varies";
    if (range[0] === 0 && range[1] === 0) return "Free";
    var fmt = function (n) {
      return "$" + Number(n).toLocaleString("en-US");
    };
    return fmt(range[0]) + "–" + fmt(range[1]);
  }

  function getCode(code) {
    if (!window.OBD_CODES) return null;
    for (var i = 0; i < window.OBD_CODES.length; i++) {
      if (window.OBD_CODES[i].code === code) return window.OBD_CODES[i];
    }
    return null;
  }

  function savedCodes() {
    var list = storage.get("tc-saved-codes", []);
    return Array.isArray(list) ? list : [];
  }

  function isCodeSaved(code) {
    return savedCodes().indexOf(code) !== -1;
  }

  function toggleCodeSaved(code) {
    var list = savedCodes();
    var index = list.indexOf(code);
    if (index === -1) {
      list.push(code);
    } else {
      list.splice(index, 1);
    }
    storage.set("tc-saved-codes", list);
    document.dispatchEvent(new CustomEvent("tc:savedchange", { detail: { code: code, saved: index === -1, list: list } }));
    return index === -1;
  }

  var toastTimer = null;
  function toast(message) {
    var el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.innerHTML = icon("check", "icon-sm") + "<span></span>";
    el.querySelector("span").textContent = message;
    el.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      el.classList.remove("is-visible");
    }, 2400);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    storage.set("tc-theme", theme);
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
      btn.setAttribute("title", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    }
  }

  function initTheme() {
    var saved = storage.get("tc-theme", null);
    if (saved !== "light" && saved !== "dark") {
      // Keep the dark "garage" look as the default brand experience.
      saved = "dark";
    }
    setTheme(saved);
  }

  /* ---------- measurement units (miles/gallons vs kilometres/litres) ---------- */

  var UNITS_KEY = "tc-units";
  var units = null;

  function detectUnits() {
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    for (var i = 0; i < languages.length; i++) {
      if (/^en[-_]?(us|lr|mm)\b/i.test(languages[i])) return "us";
    }
    return "metric";
  }

  function getUnits() {
    if (units) return units;
    var saved = storage.get(UNITS_KEY, null);
    if (saved !== "us" && saved !== "metric") {
      // Respect a preference saved by the older calculator-only toggle.
      var legacy = storage.get("tc-calc-units", null);
      saved = legacy === "us" || legacy === "metric" ? legacy : detectUnits();
    }
    units = saved;
    return units;
  }

  function unitsCopy(next) {
    return next === "metric"
      ? { label: "km · L", action: "Switch to miles and gallons" }
      : { label: "mi · gal", action: "Switch to kilometres and litres" };
  }

  function applyUnits() {
    var current = getUnits();
    document.documentElement.setAttribute("data-units-mode", current);

    var copy = unitsCopy(current);
    document.querySelectorAll("[data-units-toggle]").forEach(function (btn) {
      var label = btn.querySelector("[data-units-label]");
      if (label) label.textContent = copy.label;
      btn.setAttribute("aria-label", copy.label + " " + copy.action);
      btn.setAttribute("title", copy.action);
      btn.setAttribute("data-current-units", current);
    });

    document.querySelectorAll("[data-units]").forEach(function (btn) {
      var active = btn.getAttribute("data-units") === current;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setUnits(next) {
    if (next !== "us" && next !== "metric") return;
    var previous = getUnits();
    if (next === previous) return;
    units = next;
    storage.set(UNITS_KEY, units);
    applyUnits();
    document.dispatchEvent(new CustomEvent("tc:unitschange", { detail: { units: units, previous: previous } }));
  }

  function initUnits() {
    applyUnits();
    document.querySelectorAll("[data-units-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setUnits(getUnits() === "metric" ? "us" : "metric");
      });
    });
    document.querySelectorAll("[data-units]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setUnits(btn.getAttribute("data-units"));
      });
    });
  }

  /* ---------- currency (auto-detected from the visitor's region) ---------- */

  // Rough example pump prices are per litre; the calculator opens with them
  // and the visitor is expected to type their own local price.
  var CURRENCY_BY_REGION = {
    ZA: { code: "ZAR", symbol: "R", perLitre: 22.5 },
    US: { code: "USD", symbol: "$", perLitre: 0.93 },
    GB: { code: "GBP", symbol: "£", perLitre: 1.45 },
    IE: { code: "EUR", symbol: "€", perLitre: 1.7 },
    DE: { code: "EUR", symbol: "€", perLitre: 1.7 },
    FR: { code: "EUR", symbol: "€", perLitre: 1.7 },
    ES: { code: "EUR", symbol: "€", perLitre: 1.7 },
    IT: { code: "EUR", symbol: "€", perLitre: 1.7 },
    NL: { code: "EUR", symbol: "€", perLitre: 1.7 },
    BE: { code: "EUR", symbol: "€", perLitre: 1.7 },
    AT: { code: "EUR", symbol: "€", perLitre: 1.7 },
    PT: { code: "EUR", symbol: "€", perLitre: 1.7 },
    FI: { code: "EUR", symbol: "€", perLitre: 1.7 },
    GR: { code: "EUR", symbol: "€", perLitre: 1.7 },
    SK: { code: "EUR", symbol: "€", perLitre: 1.7 },
    SI: { code: "EUR", symbol: "€", perLitre: 1.7 },
    LT: { code: "EUR", symbol: "€", perLitre: 1.7 },
    LV: { code: "EUR", symbol: "€", perLitre: 1.7 },
    EE: { code: "EUR", symbol: "€", perLitre: 1.7 },
    LU: { code: "EUR", symbol: "€", perLitre: 1.7 },
    CY: { code: "EUR", symbol: "€", perLitre: 1.7 },
    MT: { code: "EUR", symbol: "€", perLitre: 1.7 },
    AU: { code: "AUD", symbol: "A$", perLitre: 1.9 },
    NZ: { code: "NZD", symbol: "NZ$", perLitre: 2.6 },
    CA: { code: "CAD", symbol: "C$", perLitre: 1.55 },
    IN: { code: "INR", symbol: "₹", perLitre: 105 },
    JP: { code: "JPY", symbol: "¥", perLitre: 175 },
    CN: { code: "CNY", symbol: "¥", perLitre: 7.6 },
    BR: { code: "BRL", symbol: "R$", perLitre: 6.1 },
    MX: { code: "MXN", symbol: "MX$", perLitre: 24 },
    AE: { code: "AED", symbol: "AED ", perLitre: 2.8 },
    SA: { code: "SAR", symbol: "SAR ", perLitre: 2.33 },
    CH: { code: "CHF", symbol: "CHF ", perLitre: 1.75 },
    SE: { code: "SEK", symbol: "kr ", perLitre: 18.5 },
    NO: { code: "NOK", symbol: "kr ", perLitre: 21 },
    DK: { code: "DKK", symbol: "kr ", perLitre: 13.5 },
    PL: { code: "PLN", symbol: "zł ", perLitre: 6.3 },
    TR: { code: "TRY", symbol: "₺", perLitre: 45 },
    SG: { code: "SGD", symbol: "S$", perLitre: 2.9 },
    HK: { code: "HKD", symbol: "HK$", perLitre: 24 },
    KR: { code: "KRW", symbol: "₩", perLitre: 1650 },
    TH: { code: "THB", symbol: "฿", perLitre: 38 },
    PH: { code: "PHP", symbol: "₱", perLitre: 60 },
    ID: { code: "IDR", symbol: "Rp ", perLitre: 10000 },
    MY: { code: "MYR", symbol: "RM ", perLitre: 2.05 },
    NG: { code: "NGN", symbol: "₦", perLitre: 900 },
    KE: { code: "KES", symbol: "KSh ", perLitre: 190 },
    EG: { code: "EGP", symbol: "E£", perLitre: 15 },
    GH: { code: "GHS", symbol: "GH₵", perLitre: 16 }
  };

  var CURRENCY_FALLBACK = { code: "USD", symbol: "$", perLitre: 1.6 };
  var currency = null;

  function detectRegion() {
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    for (var i = 0; i < languages.length; i++) {
      try {
        if (window.Intl && window.Intl.Locale) {
          var locale = new window.Intl.Locale(languages[i]);
          if (locale.region) return String(locale.region).toUpperCase();
        }
      } catch (err) {
        /* fall through to the string parse */
      }
      var match = /^[a-z]{2,3}[-_]([a-z]{2})\b/i.exec(languages[i] || "");
      if (match) return match[1].toUpperCase();
    }
    return "";
  }

  function getCurrency() {
    if (currency) return currency;
    var region = detectRegion();
    var found = CURRENCY_BY_REGION[region] || CURRENCY_FALLBACK;
    currency = {
      code: found.code,
      symbol: found.symbol,
      perLitre: found.perLitre,
      region: region || null
    };
    return currency;
  }

  function formatCurrency(value) {
    var amount = Math.round(Number(value) || 0).toLocaleString("en-US");
    return getCurrency().symbol + amount;
  }

  function defaultFuelPrice(nextUnits) {
    var perLitre = getCurrency().perLitre;
    var price = nextUnits === "us" ? perLitre * 3.785412 : perLitre;
    return Math.round(price * 100) / 100;
  }

  function initCurrency() {
    var current = getCurrency();
    document.documentElement.setAttribute("data-currency", current.code);
  }

  function initNav() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.getElementById("site-nav") || document.querySelector(".nav");
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) close();
    });
  }

  function initReveal() {
    var elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.12 });

    elements.forEach(function (el) { observer.observe(el); });
  }

  function initThemeButtons() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        setTheme(next);
      });
    });
  }

  function initSavedCount() {
    var count = savedCodes().length;
    document.querySelectorAll("[data-saved-count]").forEach(function (el) {
      el.textContent = count;
      el.hidden = count === 0;
    });
  }

  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function searchCodes(term, list) {
    var query = String(term || "").trim().toLowerCase();
    var source = list || window.OBD_CODES || [];
    if (!query) return source.slice();

    var words = query.split(/\s+/).filter(Boolean);

    return source
      .map(function (code) {
        var brandText = (window.TC_BRANDS_FOR_CODE && window.TC_BRANDS_FOR_CODE[code.code] || [])
          .map(function (brand) { return brand.name + " " + brand.aliases.join(" "); })
          .join(" ");

        var haystack = [
          code.code,
          code.title,
          code.category,
          code.desc,
          (code.symptoms || []).join(" "),
          (code.causes || []).join(" "),
          (code.fixes || []).join(" "),
          brandText
        ].join(" ").toLowerCase();

        var matched = words.every(function (word) { return haystack.indexOf(word) !== -1; });
        if (!matched) return null;

        var score = 0;
        if (code.code.toLowerCase() === query) score += 100;
        if (code.code.toLowerCase().indexOf(query) === 0) score += 40;
        if (code.title.toLowerCase().indexOf(query) !== -1) score += 12;
        if (code.code.toLowerCase().indexOf(query) !== -1) score += 20;
        return { code: code, score: score };
      })
      .filter(Boolean)
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (item) { return item.code; });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initUnits();
    initCurrency();
    initTheme();
    initThemeButtons();
    initNav();
    initReveal();
    initSavedCount();
    initYear();
  });

  window.TC = {
    icon: icon,
    escapeHTML: escapeHTML,
    formatCost: formatCost,
    getCode: getCode,
    severityLabels: severityLabels,
    systems: systems,
    storage: storage,
    savedCodes: savedCodes,
    isCodeSaved: isCodeSaved,
    toggleCodeSaved: toggleCodeSaved,
    toast: toast,
    searchCodes: searchCodes,
    setTheme: setTheme,
    units: {
      get: getUnits,
      set: setUnits,
      apply: applyUnits,
      detect: detectUnits
    },
    currency: {
      get: getCurrency,
      format: formatCurrency,
      defaultPrice: defaultFuelPrice,
      detectRegion: detectRegion
    }
  };
})();
