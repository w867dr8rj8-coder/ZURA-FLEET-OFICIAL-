/**
 * ZURA FLEET — Landing page
 * Comportamento da vitrine de planos e do formulário de orçamento via WhatsApp.
 */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5585991256290";

  var planButtons = document.querySelectorAll(".plan-button");
  var planPreview = document.getElementById("plan-preview");
  var previewBackButtons = document.querySelectorAll(".preview-back");
  var quoteForm = document.getElementById("quote-form");

  function openPlan(planId) {
    planButtons.forEach(function (button) {
      var isActive = button.dataset.planId === planId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    document.querySelectorAll(".plan-panel").forEach(function (panel) {
      panel.hidden = panel.dataset.planId !== planId;
    });

    document.getElementById("plan-preview-empty").hidden = true;
    planPreview.classList.add("is-visible");

    window.setTimeout(function () {
      var target = document.getElementById("plan-preview");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  }

  function closePlan() {
    planButtons.forEach(function (button) {
      button.classList.remove("is-active");
      button.setAttribute("aria-selected", "false");
    });
    document.querySelectorAll(".plan-panel").forEach(function (panel) {
      panel.hidden = true;
    });
    document.getElementById("plan-preview-empty").hidden = false;
    planPreview.classList.remove("is-visible");
  }

  planButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openPlan(button.dataset.planId);
    });
  });

  previewBackButtons.forEach(function (button) {
    button.addEventListener("click", closePlan);
  });

  function buildWhatsAppUrl(data) {
    var message = [
      'PEDIDO DE OR\u00c7AMENTO OR\u00c7AMENTO \u201c' + data.name.trim() + '\u201d',
      "",
      "Nome: " + data.name.trim(),
      "Nome da empresa: " + data.company.trim(),
      "Tipo de opera\u00e7\u00e3o: " + data.operation.trim(),
      "Quantos ve\u00edculos tem: " + data.vehicles.trim(),
      "Cidade principal da opera\u00e7\u00e3o: " + data.city.trim(),
    ].join("\n");

    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  if (quoteForm) {
    quoteForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = {
        name: quoteForm.elements["name"].value,
        company: quoteForm.elements["company"].value,
        operation: quoteForm.elements["operation"].value,
        vehicles: quoteForm.elements["vehicles"].value,
        city: quoteForm.elements["city"].value,
      };

      window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");
    });
  }

  // Botão "Ver planos" no hero
  var scrollToPlansButton = document.getElementById("scroll-to-plans");
  if (scrollToPlansButton) {
    scrollToPlansButton.addEventListener("click", function () {
      var target = document.getElementById("plans");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
})();
