/* TorqueCode — home page interactions */
(function () {
  "use strict";

  var codes = window.OBD_CODES || [];
  var tips = window.TC_TIPS || [];
  var TC = window.TC;

  function setCounts() {
    var codeCount = codes.length;
    var tipCount = tips.length;
    document.querySelectorAll("#heroCodeCount, #statCodeCount, #libraryCount").forEach(function (el) {
      el.textContent = codeCount;
    });
    document.querySelectorAll("#statTipCount").forEach(function (el) {
      el.textContent = tipCount;
    });
  }

  function popularCard(code) {
    return (
      '<article class="code-card sev-' + TC.escapeHTML(code.severity) + '" style="--sev-color: var(--' + (code.severity === "critical" ? "critical" : code.severity === "high" ? "warn" : code.severity === "medium" ? "info" : "ok") + ')">' +
      '<div class="code-card-top">' +
      '<span class="code-badge">' + TC.escapeHTML(code.code) + '</span>' +
      '<span class="sev-pill">' + TC.escapeHTML(TC.severityLabels[code.severity]) + '</span>' +
      '</div>' +
      '<div class="card-sys">' + TC.escapeHTML(TC.systems[code.system]) + ' · ' + TC.escapeHTML(code.category) + '</div>' +
      '<h3><a class="stretched-link" href="codes.html#' + encodeURIComponent(code.code) + '">' + TC.escapeHTML(code.title) + '</a></h3>' +
      '<div class="card-foot">' +
      '<span>Est. <span class="cost">' + TC.formatCost(code.cost) + '</span></span>' +
      '<span class="tag">' + code.fixes.length + ' fixes</span>' +
      '</div>' +
      '</article>'
    );
  }

  function renderPopular() {
    var target = document.getElementById("popularCodes");
    if (!target) return;
    var popular = ["P0300", "P0171", "P0420", "P0455", "P0301", "P0101"];
    var items = popular.map(TC.getCode).filter(Boolean);
    target.innerHTML = items.map(popularCard).join("");
  }

  function renderTipsPreview() {
    var target = document.getElementById("tipsPreview");
    if (!target) return;
    var picks = ["smooth", "idle", "tires"].map(function (id) {
      return tips.filter(function (tip) { return tip.id === id; })[0];
    }).filter(Boolean);

    target.innerHTML = picks.map(function (tip) {
      return (
        '<article class="tip-card">' +
        '<div class="tip-icon">' + TC.icon(tip.icon) + '</div>' +
        '<h3>' + TC.escapeHTML(tip.title) + '</h3>' +
        '<p>' + TC.escapeHTML(tip.body) + '</p>' +
        '<div class="tip-meta">' +
        '<span class="tag impact">' + TC.escapeHTML(tip.impact) + '</span>' +
        '<span class="tag">' + TC.escapeHTML(tip.category) + '</span>' +
        '</div>' +
        '</article>'
      );
    }).join("");
  }

  function initScanner() {
    var demos = ["P0300", "P0420", "P0171", "P0455"];
    var index = 0;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var scanner = document.querySelector(".scanner");
    if (!scanner) return;

    function show(code) {
      var item = TC.getCode(code);
      if (!item) return;
      var severityEl = document.getElementById("demoSeverity");
      document.getElementById("demoCode").textContent = item.code;
      document.getElementById("demoTitle").textContent = item.title;
      document.getElementById("demoSystem").textContent = TC.systems[item.system];
      document.getElementById("demoCost").textContent = TC.formatCost(item.cost);
      document.getElementById("demoFixes").textContent = item.fixes.length;
      document.getElementById("demoFixLabel").textContent = item.fixes.length + " documented fixes";
      severityEl.textContent = TC.severityLabels[item.severity];
      severityEl.className = item.severity === "critical" || item.severity === "high" ? "hot" : "";
    }

    show(demos[0]);
    if (reduceMotion) return;

    var timer = window.setInterval(function () {
      index = (index + 1) % demos.length;
      show(demos[index]);
    }, 4200);

    scanner.addEventListener("mouseenter", function () {
      window.clearInterval(timer);
    });

    scanner.addEventListener("mouseleave", function () {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        index = (index + 1) % demos.length;
        show(demos[index]);
      }, 4200);
    });
  }

  function initHeroSearch() {
    var form = document.getElementById("heroSearchForm");
    var input = document.getElementById("heroSearchInput");
    var panel = document.getElementById("heroSuggest");
    if (!form || !input || !panel) return;

    var activeIndex = -1;
    var results = [];

    function close() {
      panel.classList.remove("is-open");
      input.setAttribute("aria-expanded", "false");
      activeIndex = -1;
    }

    function open() {
      if (results.length) {
        panel.classList.add("is-open");
        input.setAttribute("aria-expanded", "true");
      } else {
        close();
      }
    }

    function render(term) {
      results = TC.searchCodes(term).slice(0, 6);
      if (!term.trim()) {
        close();
        return;
      }
      if (!results.length) {
        panel.innerHTML = '<div class="suggest-empty">No matching code. Try a symptom like “misfire” or “EVAP”.</div>';
        open();
        return;
      }
      panel.innerHTML = results.map(function (code) {
        return (
          '<button class="suggest-item" type="button" role="option" data-code="' + TC.escapeHTML(code.code) + '">' +
          '<span class="suggest-code">' + TC.escapeHTML(code.code) + '</span>' +
          '<span class="suggest-title">' + TC.escapeHTML(code.title) + '</span>' +
          '</button>'
        );
      }).join("");
      open();
    }

    function go(code) {
      window.location.href = "codes.html#" + encodeURIComponent(code);
    }

    input.addEventListener("input", function () {
      activeIndex = -1;
      render(input.value);
    });

    input.addEventListener("focus", function () {
      if (input.value.trim()) render(input.value);
    });

    input.addEventListener("keydown", function (event) {
      var options = panel.querySelectorAll(".suggest-item");
      if (!options.length) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = (activeIndex + 1) % options.length;
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = (activeIndex - 1 + options.length) % options.length;
      } else if (event.key === "Enter" && activeIndex >= 0) {
        event.preventDefault();
        go(options[activeIndex].getAttribute("data-code"));
        return;
      } else if (event.key === "Escape") {
        close();
        return;
      } else {
        return;
      }

      options.forEach(function (option, i) {
        option.classList.toggle("is-active", i === activeIndex);
      });
      if (options[activeIndex]) options[activeIndex].scrollIntoView({ block: "nearest" });
    });

    panel.addEventListener("mousedown", function (event) {
      var item = event.target.closest("[data-code]");
      if (!item) return;
      event.preventDefault();
      go(item.getAttribute("data-code"));
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = input.value.trim();
      if (!value) {
        window.location.href = "codes.html";
        return;
      }
      var exact = TC.getCode(value.toUpperCase());
      if (exact) {
        go(exact.code);
        return;
      }
      window.location.href = "codes.html?q=" + encodeURIComponent(value);
    });

    document.addEventListener("click", function (event) {
      if (!form.contains(event.target)) close();
    });

    document.querySelectorAll(".hint-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        go(chip.getAttribute("data-code"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setCounts();
    renderPopular();
    renderTipsPreview();
    initScanner();
    initHeroSearch();
  });
})();
