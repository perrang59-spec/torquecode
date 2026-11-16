/* TorqueCode — fuel-saving tips, checklist and savings calculator */
(function () {
  "use strict";

  var TC = window.TC;
  var TIPS = window.TC_TIPS || [];
  var FACTS = window.TC_FACTS || [];
  var category = "all";
  var DONE_KEY = "tc-tips-done";

  var list = document.getElementById("tipList");
  var chips = document.getElementById("tipChips");
  var progressText = document.getElementById("tipProgressText");
  var progressFill = document.getElementById("tipProgressFill");
  var progressBar = document.getElementById("tipProgressBar");
  var resetButton = document.getElementById("resetTips");

  function getDone() {
    var done = TC.storage.get(DONE_KEY, []);
    return Array.isArray(done) ? done : [];
  }

  function setDone(done) {
    TC.storage.set(DONE_KEY, done);
  }

  function isDone(id) {
    return getDone().indexOf(id) !== -1;
  }

  function updateProgress() {
    var done = getDone().filter(function (id) {
      return TIPS.some(function (tip) { return tip.id === id; });
    });
    var total = TIPS.length;
    var count = done.length;
    var pct = total ? Math.round((count / total) * 100) : 0;
    if (progressText) progressText.textContent = count + " / " + total + " marked";
    if (progressFill) progressFill.style.width = pct + "%";
    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(count));
      progressBar.setAttribute("aria-valuemax", String(total));
      progressBar.setAttribute("aria-label", "Eco checklist: " + count + " of " + total + " habits marked");
    }
  }

  function checkButton(tip) {
    var done = isDone(tip.id);
    return (
      '<button class="tip-check' + (done ? " is-done" : "") + '" type="button" data-tip="' + TC.escapeHTML(tip.id) + '" aria-pressed="' + done + '">' +
      '<span class="box">' + TC.icon("check") + '</span>' +
      '<span class="tip-check-label">' + (done ? "Done" : "I do this") + "</span>" +
      "</button>"
    );
  }

  function tipHTML(tip) {
    return (
      '<article class="tip-detail' + (isDone(tip.id) ? " is-done" : "") + '" id="tip-' + TC.escapeHTML(tip.id) + '">' +
      '<div class="tip-detail-head">' +
      '<div class="tip-icon">' + TC.icon(tip.icon) + "</div>" +
      "<h3>" + TC.escapeHTML(tip.title) + "</h3>" +
      "</div>" +
      "<p>" + TC.escapeHTML(tip.body) + "</p>" +
      '<div class="tip-why"><strong>Why it works</strong>' + TC.escapeHTML(tip.why) + "</div>" +
      '<div class="tip-detail-foot">' +
      '<div class="tip-tags">' +
      '<span class="tag impact">' + TC.escapeHTML(tip.impact) + "</span>" +
      '<span class="tag">' + TC.escapeHTML(tip.effort) + "</span>" +
      '<span class="tag">' + TC.escapeHTML(tip.category) + "</span>" +
      "</div>" +
      checkButton(tip) +
      "</div>" +
      "</article>"
    );
  }

  function renderTips() {
    if (!list) return;
    var visible = category === "all" ? TIPS : TIPS.filter(function (tip) {
      return tip.category === category;
    });

    list.innerHTML = visible.length
      ? visible.map(tipHTML).join("")
      : '<div class="empty-state" style="grid-column:1/-1;">' +
        '<div class="empty-icon">' + TC.icon("leaf") + '</div>' +
        '<h3>No tips in this category yet</h3>' +
        '<p>Choose “All tips” to see the full checklist.</p>' +
        "</div>";

    if (window.location.hash.indexOf("#tip-") === 0) {
      var target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        window.setTimeout(function () {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 60);
      }
    }
  }

  function bindTips() {
    if (chips) {
      chips.addEventListener("click", function (event) {
        var chip = event.target.closest("[data-category]");
        if (!chip) return;
        category = chip.getAttribute("data-category");
        chips.querySelectorAll(".chip").forEach(function (item) {
          var active = item === chip;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });
        renderTips();
      });
    }

    if (list) {
      list.addEventListener("click", function (event) {
        var btn = event.target.closest("[data-tip]");
        if (!btn) return;
        var id = btn.getAttribute("data-tip");
        var done = getDone();
        var index = done.indexOf(id);
        var nowDone = index === -1;
        if (nowDone) {
          done.push(id);
        } else {
          done.splice(index, 1);
        }
        setDone(done);

        btn.classList.toggle("is-done", nowDone);
        btn.setAttribute("aria-pressed", nowDone ? "true" : "false");
        var label = btn.querySelector(".tip-check-label");
        if (label) label.textContent = nowDone ? "Done" : "I do this";
        var card = btn.closest(".tip-detail");
        if (card) card.classList.toggle("is-done", nowDone);
        updateProgress();
      });
    }

    if (resetButton) {
      resetButton.addEventListener("click", function () {
        TC.storage.remove(DONE_KEY);
        renderTips();
        updateProgress();
        TC.toast("Eco checklist reset");
      });
    }
  }

  function renderFacts() {
    var target = document.getElementById("facts");
    if (!target) return;
    target.innerHTML = FACTS.map(function (fact) {
      return (
        '<div class="fact">' +
        '<div class="fact-label">' + TC.escapeHTML(fact.label) + "</div>" +
        "<h4>" + TC.escapeHTML(fact.title) + "</h4>" +
        "<p>" + TC.escapeHTML(fact.body) + "</p>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------- savings calculator ---------- */

  var units = "us";
  var calc = {
    distance: document.getElementById("calcDistance"),
    economy: document.getElementById("calcEconomy"),
    price: document.getElementById("calcPrice"),
    reduction: document.getElementById("calcReduction"),
    reductionValue: document.getElementById("calcReductionValue"),
    distanceLabel: document.getElementById("distanceLabel"),
    distanceUnit: document.getElementById("distanceUnit"),
    economyLabel: document.getElementById("economyLabel"),
    economyUnit: document.getElementById("economyUnit"),
    priceLabel: document.getElementById("priceLabel"),
    priceUnit: document.getElementById("priceUnit"),
    newEconomy: document.getElementById("calcNewEconomy"),
    newEconomyUnit: document.getElementById("newEconomyUnit"),
    big: document.getElementById("calcBig"),
    caption: document.getElementById("calcCaption"),
    fuel: document.getElementById("calcFuel"),
    co2: document.getElementById("calcCo2"),
    newValue: document.getElementById("calcNew"),
    perDistance: document.getElementById("calcPerMile")
  };

  var UNIT_CONFIG = {
    us: { distance: 12000, economy: 25, price: 3.5, distanceUnit: "mi", economyUnit: "MPG", priceUnit: "$ / gal", perUnit: "/ mi" },
    metric: { distance: 19000, economy: 9.4, price: 1.55, distanceUnit: "km", economyUnit: "L/100 km", priceUnit: "$ / L", perUnit: "/ km" }
  };

  function round(value, decimals) {
    var factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

  function readNumber(input) {
    var value = parseFloat(input.value);
    return isFinite(value) && value > 0 ? value : 0;
  }

  function formatMoney(value) {
    return "$" + Math.round(value).toLocaleString("en-US");
  }

  function formatDistance(value) {
    return Math.round(value).toLocaleString("en-US");
  }

  function updateLabels() {
    var config = UNIT_CONFIG[units];
    if (calc.distanceLabel) calc.distanceLabel.textContent = units === "us" ? "Annual distance" : "Annual distance";
    if (calc.economyLabel) calc.economyLabel.textContent = units === "us" ? "Fuel economy" : "Fuel consumption";
    if (calc.priceLabel) calc.priceLabel.textContent = units === "us" ? "Fuel price" : "Fuel price";
    if (calc.distanceUnit) calc.distanceUnit.textContent = config.distanceUnit;
    if (calc.economyUnit) calc.economyUnit.textContent = config.economyUnit;
    if (calc.priceUnit) calc.priceUnit.textContent = config.priceUnit;
    if (calc.newEconomyUnit) calc.newEconomyUnit.textContent = units === "us" ? "MPG" : "L/100 km";
    document.querySelectorAll("[data-units]").forEach(function (btn) {
      var active = btn.getAttribute("data-units") === units;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function convertValues(from, to) {
    if (from === to) return;
    var distance = readNumber(calc.distance);
    var economy = readNumber(calc.economy);
    var price = readNumber(calc.price);

    if (to === "metric") {
      if (distance) calc.distance.value = String(Math.round(distance * 1.609344));
      if (economy) calc.economy.value = String(round(235.215 / economy, 1));
      if (price) calc.price.value = String(round(price / 3.785412, 2));
    } else {
      if (distance) calc.distance.value = String(Math.round(distance / 1.609344));
      if (economy) calc.economy.value = String(round(235.215 / economy, 1));
      if (price) calc.price.value = String(round(price * 3.785412, 2));
    }
  }

  function updateRangeFill() {
    if (!calc.reduction) return;
    var min = Number(calc.reduction.min || 0);
    var max = Number(calc.reduction.max || 100);
    var value = Number(calc.reduction.value || 0);
    var pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
    calc.reduction.style.setProperty("--range-pct", pct + "%");
  }

  function calculate() {
    var distance = readNumber(calc.distance);
    var economy = readNumber(calc.economy);
    var price = readNumber(calc.price);
    var reduction = Number(calc.reduction.value) || 0;
    var fraction = reduction / 100;

    var annualFuel = 0;
    var savedFuel = 0;
    var money = 0;
    var co2 = 0;
    var newEconomy = 0;
    var costPerDistance = 0;

    if (units === "us") {
      annualFuel = economy > 0 ? distance / economy : 0;
      savedFuel = annualFuel * fraction;
      money = savedFuel * price;
      co2 = savedFuel * 8.887;
      newEconomy = economy > 0 ? economy / (1 - fraction) : 0;
      costPerDistance = economy > 0 ? price / economy : 0;
    } else {
      annualFuel = distance * (economy / 100);
      savedFuel = annualFuel * fraction;
      money = savedFuel * price;
      co2 = savedFuel * 2.31;
      newEconomy = economy * (1 - fraction);
      costPerDistance = (economy / 100) * price;
    }

    if (calc.reductionValue) calc.reductionValue.textContent = reduction + "%";
    if (calc.big) calc.big.innerHTML = formatMoney(money) + "<small> / year</small>";
    if (calc.caption) {
      calc.caption.textContent =
        "Cutting fuel use by " + reduction + "% at " +
        formatDistance(distance) + " " + UNIT_CONFIG[units].distanceUnit + ", " +
        (economy || 0) + " " + UNIT_CONFIG[units].economyUnit + " and " +
        "$" + (price || 0).toFixed(2) + " " + UNIT_CONFIG[units].priceUnit.replace("$ ", "") + ".";
    }
    if (calc.fuel) {
      calc.fuel.textContent = Math.round(savedFuel).toLocaleString("en-US") + (units === "us" ? " gal" : " L");
    }
    if (calc.co2) {
      calc.co2.textContent = co2 >= 1000 ? round(co2 / 1000, 1).toFixed(1) + " t" : Math.round(co2) + " kg";
    }
    if (calc.newValue) {
      calc.newValue.textContent = newEconomy ? newEconomy.toFixed(1) + " " + (units === "us" ? "MPG" : "L/100 km") : "—";
    }
    if (calc.newEconomy) {
      calc.newEconomy.value = newEconomy ? newEconomy.toFixed(1) : "—";
    }
    if (calc.perDistance) {
      calc.perDistance.textContent = costPerDistance ? "$" + costPerDistance.toFixed(2) + " " + UNIT_CONFIG[units].perUnit : "—";
    }
    updateRangeFill();
  }

  function setUnits(next, convert) {
    if (next !== "us" && next !== "metric") return;
    if (convert && next !== units) convertValues(units, next);
    units = next;
    TC.storage.set("tc-calc-units", units);
    updateLabels();
    calculate();
  }

  function initCalculator() {
    if (!calc.distance || !calc.reduction) return;

    var savedUnits = TC.storage.get("tc-calc-units", "us");
    units = savedUnits === "metric" ? "metric" : "us";
    var config = UNIT_CONFIG[units];
    calc.distance.value = String(config.distance);
    calc.economy.value = String(config.economy);
    calc.price.value = String(config.price);

    document.querySelectorAll("[data-units]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setUnits(btn.getAttribute("data-units"), true);
      });
    });

    [calc.distance, calc.economy, calc.price].forEach(function (input) {
      input.addEventListener("input", calculate);
      input.addEventListener("change", calculate);
    });

    calc.reduction.addEventListener("input", calculate);
    updateLabels();
    calculate();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderTips();
    renderFacts();
    updateProgress();
    bindTips();
    initCalculator();
    document.querySelectorAll("#tipChips .chip").forEach(function (chip) {
      chip.setAttribute("aria-pressed", chip.classList.contains("is-active") ? "true" : "false");
    });
  });
})();
