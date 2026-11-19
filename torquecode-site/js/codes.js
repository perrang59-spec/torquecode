/* TorqueCode — diagnostic code library */
(function () {
  "use strict";

  var TC = window.TC;
  var codes = window.OBD_CODES || [];
  var params = new URLSearchParams(window.location.search);

  var VALID_SYSTEMS = ["P", "B", "C", "U"];
  var VALID_SEVERITIES = ["low", "medium", "high", "critical"];
  var VALID_SORTS = ["code", "severity", "cost-asc", "cost-desc", "relevance"];

  function readSystem(value) {
    if (!value) return "all";
    var upper = String(value).toUpperCase();
    return VALID_SYSTEMS.indexOf(upper) !== -1 ? upper : "all";
  }

  function readSeverity(value) {
    var lower = String(value || "").toLowerCase();
    return VALID_SEVERITIES.indexOf(lower) !== -1 ? lower : "all";
  }

  function readSort(value) {
    return VALID_SORTS.indexOf(value) !== -1 ? value : "code";
  }

  function readBrand(value) {
    var lower = String(value || "").toLowerCase();
    if (!lower || lower === "all") return "all";
    var brands = window.TC_BRANDS || [];
    for (var i = 0; i < brands.length; i++) {
      if (brands[i].id === lower) return brands[i].id;
      if ((brands[i].aliases || []).indexOf(lower) !== -1) return brands[i].id;
    }
    return "all";
  }

  function brandById(id) {
    var brands = window.TC_BRANDS || [];
    for (var i = 0; i < brands.length; i++) {
      if (brands[i].id === id) return brands[i];
    }
    return null;
  }

  var state = {
    q: params.get("q") || "",
    system: readSystem(params.get("system")),
    severity: readSeverity(params.get("severity")),
    brand: readBrand(params.get("brand")),
    sort: readSort(params.get("sort")),
    savedOnly: params.get("view") === "saved"
  };

  var els = {
    search: document.getElementById("codeSearch"),
    searchButton: document.getElementById("searchButton"),
    severity: document.getElementById("severityFilter"),
    brand: document.getElementById("brandFilter"),
    brandNote: document.getElementById("brandNote"),
    sort: document.getElementById("sortSelect"),
    savedOnly: document.getElementById("savedOnly"),
    reset: document.getElementById("resetFilters"),
    chips: document.getElementById("systemChips"),
    grid: document.getElementById("codeGrid"),
    resultLine: document.getElementById("resultLine"),
    modal: document.getElementById("codeModal"),
    modalCode: document.getElementById("modalCode"),
    modalTitle: document.getElementById("modalTitle"),
    modalTags: document.getElementById("modalTags"),
    modalBody: document.getElementById("modalBody"),
    modalClose: document.getElementById("modalClose")
  };

  var lastFocused = null;
  var activeCode = null;

  function severityRank(severity) {
    return { low: 0, medium: 1, high: 2, critical: 3 }[severity] || 0;
  }

  function hasFilters() {
    return Boolean(state.q) || state.system !== "all" || state.severity !== "all" || state.brand !== "all" || state.savedOnly;
  }

  function syncURL() {
    var query = new URLSearchParams();
    if (state.q) query.set("q", state.q);
    if (state.system !== "all") query.set("system", state.system);
    if (state.severity !== "all") query.set("severity", state.severity);
    if (state.brand !== "all") query.set("brand", state.brand);
    if (state.sort !== "code") query.set("sort", state.sort);
    if (state.savedOnly) query.set("view", "saved");
    var search = query.toString();
    var next = window.location.pathname + (search ? "?" + search : "") + window.location.hash;
    try {
      window.history.replaceState(null, "", next);
    } catch (err) {
      /* file:// restrictions can block history updates; filtering still works. */
    }
  }

  function cardHTML(code) {
    var saved = TC.isCodeSaved(code.code);
    return (
      '<article class="code-card sev-' + TC.escapeHTML(code.severity) + '" data-code="' + TC.escapeHTML(code.code) + '">' +
      '<div class="code-card-top">' +
      '<span class="code-badge">' + TC.escapeHTML(code.code) + '</span>' +
      '<span class="sev-pill">' + TC.escapeHTML(TC.severityLabels[code.severity]) + '</span>' +
      '</div>' +
      '<div class="card-sys">' + TC.escapeHTML(TC.systems[code.system]) + ' · ' + TC.escapeHTML(code.category) + '</div>' +
      '<h3><a class="stretched-link" href="#' + encodeURIComponent(code.code) + '">' + TC.escapeHTML(code.title) + '</a></h3>' +
      '<div class="card-foot">' +
      '<span class="cost">' + TC.formatCost(code.cost) + '</span>' +
      '<span style="display:inline-flex;align-items:center;gap:4px;">' +
      '<span class="tag" title="' + code.fixes.length + ' documented fix steps">' + code.fixes.length + ' fixes</span>' +
      '<button class="save-btn' + (saved ? " is-saved" : "") + '" type="button" data-save="' + TC.escapeHTML(code.code) + '" aria-pressed="' + saved + '" aria-label="' + (saved ? "Remove " : "Save ") + TC.escapeHTML(code.code) + ' ' + (saved ? "from" : "to") + ' saved codes">' +
      TC.icon("bookmark") +
      '</button></span>' +
      '</div>' +
      '</article>'
    );
  }

  function getFiltered() {
    var searched = state.q ? TC.searchCodes(state.q) : codes.slice();
    var filtered = searched.filter(function (code) {
      if (state.system !== "all" && code.system !== state.system) return false;
      if (state.severity !== "all" && code.severity !== state.severity) return false;
      if (state.brand !== "all") {
        var mapped = window.TC_BRANDS_FOR_CODE && window.TC_BRANDS_FOR_CODE[code.code];
        if (!mapped || !mapped.some(function (brand) { return brand.id === state.brand; })) return false;
      }
      if (state.savedOnly && !TC.isCodeSaved(code.code)) return false;
      return true;
    });

    filtered.sort(function (a, b) {
      if (state.sort === "severity") {
        return severityRank(b.severity) - severityRank(a.severity) || a.code.localeCompare(b.code);
      }
      if (state.sort === "cost-asc") {
        return a.cost[0] - b.cost[0] || a.code.localeCompare(b.code);
      }
      if (state.sort === "cost-desc") {
        return b.cost[1] - a.cost[1] || a.code.localeCompare(b.code);
      }
      if (state.sort === "relevance") {
        return searched.indexOf(a) - searched.indexOf(b);
      }
      return a.code.localeCompare(b.code);
    });

    return filtered;
  }

  function render() {
    var filtered = getFiltered();
    var selectedBrand = state.brand === "all" ? null : brandById(state.brand);

    if (els.brandNote) {
      els.brandNote.textContent = selectedBrand
        ? selectedBrand.name + ": " + selectedBrand.note + " " + (window.TC_BRAND_DISCLAIMER || "")
        : "";
      els.brandNote.hidden = !selectedBrand;
    }

    els.grid.innerHTML = filtered.length
      ? filtered.map(cardHTML).join("")
      : '<div class="empty-state">' +
        '<div class="empty-icon">' + TC.icon("search") + '</div>' +
        '<h3>No codes match those filters</h3>' +
        '<p>Try a shorter search term, a broader system, or clear the saved-only filter. You can also search a symptom like “misfire”, “lean” or “EVAP”.</p>' +
        '<button class="btn btn-primary btn-sm" type="button" data-clear-all>Clear all filters</button>' +
        '</div>';

    var summary = 'Showing <strong>' + filtered.length + '</strong> of ' + codes.length + " codes";
    if (state.q) summary += ' for “<strong>' + TC.escapeHTML(state.q) + '</strong>”';
    if (state.system !== "all") summary += " · " + TC.escapeHTML(TC.systems[state.system]);
    if (state.severity !== "all") summary += " · " + TC.escapeHTML(TC.severityLabels[state.severity]) + " severity";
    if (selectedBrand) summary += " · " + TC.escapeHTML(selectedBrand.name) + " (general guide)";
    if (state.savedOnly) summary += " · saved only";

    els.resultLine.innerHTML =
      "<span>" + summary + "</span>" +
      (hasFilters() ? '<button class="clear-filters" type="button" data-clear-all>Clear filters</button>' : "");

    els.chips.querySelectorAll(".chip").forEach(function (chip) {
      var active = chip.getAttribute("data-system") === state.system;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });

    syncURL();
  }

  function updateCounts() {
    var counts = { all: codes.length, P: 0, B: 0, C: 0, U: 0 };
    codes.forEach(function (code) {
      counts[code.system] = (counts[code.system] || 0) + 1;
    });
    Object.keys(counts).forEach(function (key) {
      var el = document.querySelector('[data-count="' + key + '"]');
      if (el) el.textContent = counts[key];
    });
  }

  function populateBrands() {
    if (!els.brand) return;
    var brands = window.TC_BRANDS || [];
    els.brand.innerHTML = '<option value="all">All brands</option>' + brands.map(function (brand) {
      return '<option value="' + TC.escapeHTML(brand.id) + '">' + TC.escapeHTML(brand.name) + "</option>";
    }).join("");
    els.brand.value = state.brand;
  }

  function clearAll() {
    state = { q: "", system: "all", severity: "all", brand: "all", sort: "code", savedOnly: false };
    els.search.value = "";
    els.severity.value = "all";
    els.brand.value = "all";
    els.sort.value = "code";
    els.savedOnly.checked = false;
    render();
    els.search.focus();
  }

  function updateSavedButtons() {
    els.grid.querySelectorAll("[data-save]").forEach(function (btn) {
      var code = btn.getAttribute("data-save");
      var saved = TC.isCodeSaved(code);
      btn.classList.toggle("is-saved", saved);
      btn.setAttribute("aria-pressed", saved ? "true" : "false");
      btn.setAttribute("aria-label", (saved ? "Remove " : "Save ") + code + (saved ? " from" : " to") + " saved codes");
    });
  }

  /* ---------- modal ---------- */

  function relatedHTML(related) {
    return related.map(function (code) {
      if (TC.getCode(code)) {
        return '<a class="related-link" href="#' + encodeURIComponent(code) + '">' + TC.escapeHTML(code) + "</a>";
      }
      return '<a class="related-link" href="codes.html?q=' + encodeURIComponent(code) + '">' + TC.escapeHTML(code) + "</a>";
    }).join("");
  }

  function listHTML(items) {
    return "<ul class=\"check-list\">" + items.map(function (item) {
      return "<li>" + TC.escapeHTML(item) + "</li>";
    }).join("") + "</ul>";
  }

  function stepsHTML(items) {
    return "<ol class=\"fix-steps\">" + items.map(function (item) {
      return "<li>" + TC.escapeHTML(item) + "</li>";
    }).join("") + "</ol>";
  }

  function severityStyle(severity) {
    if (severity === "critical") return ' style="color: var(--critical)"';
    if (severity === "high") return ' style="color: var(--warn)"';
    if (severity === "medium") return ' style="color: var(--info)"';
    return ' style="color: var(--ok)"';
  }

  function isOpen() {
    return els.modal.classList.contains("is-open");
  }

  function openCode(code) {
    var item = TC.getCode(code);
    if (!item) return;

    var wasOpen = isOpen();
    if (!wasOpen) lastFocused = document.activeElement;

    activeCode = item.code;
    els.modalCode.textContent = item.code;
    els.modalTitle.textContent = item.title;

    var saved = TC.isCodeSaved(item.code);
    els.modalTags.innerHTML =
      '<span class="tag">' + TC.escapeHTML(TC.systems[item.system]) + " · " + TC.escapeHTML(item.category) + "</span>" +
      '<span class="tag">' + TC.escapeHTML(item.urgency) + "</span>" +
      '<span class="tag impact">' + TC.escapeHTML(item.difficulty) + " · " + (item.diy ? "DIY friendly" : "Shop recommended") + "</span>" +
      '<button class="btn btn-ghost btn-sm" type="button" data-modal-save aria-pressed="' + saved + '">' +
      TC.icon("bookmark") + "<span>" + (saved ? "Saved" : "Save code") + "</span></button>";

    els.modalBody.innerHTML =
      '<div class="modal-meta">' +
      '<div class="meta-cell"><span>System</span><strong>' + TC.escapeHTML(TC.systems[item.system]) + "</strong></div>" +
      '<div class="meta-cell"><span>Severity</span><strong' + severityStyle(item.severity) + ">" + TC.escapeHTML(TC.severityLabels[item.severity]) + "</strong></div>" +
      '<div class="meta-cell"><span>DIY difficulty</span><strong' + (item.diy ? ' class="good"' : ' class="warn"') + ">" + TC.escapeHTML(item.difficulty) + "</strong></div>" +
      '<div class="meta-cell"><span>Typical cost</span><strong>' + TC.escapeHTML(TC.formatCost(item.cost)) + "</strong></div>" +
      "</div>" +

      '<div class="detail-block"><h3>' + TC.icon("info") + "What it means</h3><p>" + TC.escapeHTML(item.desc) + "</p></div>" +

      '<div class="detail-grid">' +
      '<div class="detail-block"><h3>' + TC.icon("alert") + "Symptoms you may notice</h3>" + listHTML(item.symptoms) + "</div>" +
      '<div class="detail-block"><h3>' + TC.icon("search") + "Common causes</h3>" + listHTML(item.causes) + "</div>" +
      "</div>" +

      '<div class="detail-block"><h3>' + TC.icon("wrench") + "Step-by-step diagnosis &amp; fixes</h3>" + stepsHTML(item.fixes) + "</div>" +

      '<div class="detail-grid">' +
      (item.tip ? '<div class="detail-block"><h3>' + TC.icon("target") + "Technician tip</h3><div class=\"modal-aside\"><p>" + TC.escapeHTML(item.tip) + "</p></div></div>" : "") +
      '<div class="detail-block"><h3>' + TC.icon("list") + "Related codes</h3><div class=\"related-links\">" + relatedHTML(item.related || []) + "</div></div>" +
      "</div>" +

      '<div class="safety-note">' + TC.icon("alert") + "<span><strong>Before you drive:</strong> " +
      (item.severity === "critical" || item.severity === "high"
        ? "if the check engine light is flashing, the engine is overheating, or the car is unsafe to control, stop driving and arrange a professional diagnosis. Cost ranges are estimates, not quotes."
        : "start with the least invasive tests and confirm the fault before replacing parts. Cost ranges are estimates; use factory service information for your exact vehicle.") +
      "</span></div>";

    els.modal.classList.add("is-open");
    els.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    els.modalBody.scrollTop = 0;

    if (!wasOpen) {
      // The backdrop fades in with a visibility transition; make it focusable
      // immediately so keyboard users land inside the dialog.
      els.modal.style.visibility = "visible";
      els.modalClose.focus({ preventScroll: true });
      window.setTimeout(function () {
        if (isOpen()) els.modalClose.focus({ preventScroll: true });
      }, 260);
    }
  }

  function removeHash() {
    var next = window.location.pathname + window.location.search;
    try {
      window.history.replaceState(null, "", next);
    } catch (err) {
      /* ignore */
    }
  }

  function closeModal() {
    if (!isOpen()) return;
    var closedCode = activeCode;
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden", "true");
    els.modal.style.visibility = "";
    document.body.classList.remove("modal-open");
    activeCode = null;
    removeHash();

    var trigger = closedCode
      ? document.querySelector('#codeGrid .stretched-link[href="#' + closedCode + '"]')
      : null;

    if (trigger) {
      trigger.focus({ preventScroll: true });
    } else if (lastFocused && lastFocused !== document.body && typeof lastFocused.focus === "function") {
      lastFocused.focus({ preventScroll: true });
    } else if (els.search) {
      els.search.focus({ preventScroll: true });
    }
  }

  function handleHash() {
    var hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!hash) {
      closeModal();
      return;
    }
    if (TC.getCode(hash)) {
      openCode(hash);
    }
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || !isOpen()) return;
    var focusable = els.modal.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ---------- events ---------- */

  function bindEvents() {
    var debounce = null;
    els.search.addEventListener("input", function () {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(function () {
        state.q = els.search.value.trim();
        render();
      }, 130);
    });

    els.searchButton.addEventListener("click", function () {
      state.q = els.search.value.trim();
      render();
    });

    els.search.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        state.q = els.search.value.trim();
        render();
      }
    });

    els.severity.addEventListener("change", function () {
      state.severity = readSeverity(els.severity.value);
      render();
    });

    els.brand.addEventListener("change", function () {
      state.brand = readBrand(els.brand.value);
      render();
    });

    els.sort.addEventListener("change", function () {
      state.sort = readSort(els.sort.value);
      render();
    });

    els.savedOnly.addEventListener("change", function () {
      state.savedOnly = els.savedOnly.checked;
      render();
    });

    els.chips.addEventListener("click", function (event) {
      var chip = event.target.closest("[data-system]");
      if (!chip) return;
      state.system = readSystem(chip.getAttribute("data-system"));
      render();
    });

    els.reset.addEventListener("click", clearAll);

    els.grid.addEventListener("click", function (event) {
      var saveBtn = event.target.closest("[data-save]");
      if (saveBtn) {
        event.preventDefault();
        event.stopPropagation();
        var code = saveBtn.getAttribute("data-save");
        var nowSaved = TC.toggleCodeSaved(code);
        TC.toast(nowSaved ? code + " saved to your list" : code + " removed from saved codes");
        if (state.savedOnly) {
          render();
        } else {
          updateSavedButtons();
        }
        return;
      }
      if (event.target.closest("[data-clear-all]")) {
        clearAll();
      }
    });

    els.resultLine.addEventListener("click", function (event) {
      if (event.target.closest("[data-clear-all]")) clearAll();
    });

    els.modalClose.addEventListener("click", closeModal);

    els.modal.addEventListener("click", function (event) {
      if (event.target === els.modal) closeModal();
    });

    els.modalTags.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-modal-save]");
      if (!btn || !activeCode) return;
      var nowSaved = TC.toggleCodeSaved(activeCode);
      btn.setAttribute("aria-pressed", nowSaved ? "true" : "false");
      btn.querySelector("span").textContent = nowSaved ? "Saved" : "Save code";
      TC.toast(nowSaved ? activeCode + " saved to your list" : activeCode + " removed from saved codes");
      updateSavedButtons();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        closeModal();
        return;
      }
      trapFocus(event);

      if (event.key === "/" && !isOpen()) {
        var tag = document.activeElement ? document.activeElement.tagName : "";
        if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
          event.preventDefault();
          els.search.focus();
        }
      }
    });

    document.addEventListener("tc:savedchange", function () {
      updateSavedButtons();
    });

    window.addEventListener("hashchange", handleHash);

    document.addEventListener("tc:savedchange", function (event) {
      if (event.detail && event.detail.code === activeCode) {
        var btn = els.modalTags.querySelector("[data-modal-save]");
        if (btn) {
          btn.setAttribute("aria-pressed", event.detail.saved ? "true" : "false");
          var span = btn.querySelector("span");
          if (span) span.textContent = event.detail.saved ? "Saved" : "Save code";
        }
      }
    });
  }

  function hydrateControls() {
    els.search.value = state.q;
    els.severity.value = state.severity;
    els.brand.value = state.brand;
    els.sort.value = state.sort;
    els.savedOnly.checked = state.savedOnly;
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateCounts();
    populateBrands();
    hydrateControls();
    render();
    bindEvents();
    if (window.location.hash) {
      // Let the browser settle first; then open the deep-linked code.
      window.setTimeout(handleHash, 30);
    }
  });
})();
