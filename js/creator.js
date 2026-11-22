(function () {
  "use strict";

  const STORAGE_KEY = "story-rocket-custom-rocket-v1";
  const INK = "#26324B";
  const ART = window.StoryArt;
  const BODY_COLORS = [
    { value: "#FF6B57", key: "colorCoral" },
    { value: "#FF8A3D", key: "colorTangerine" },
    { value: "#25BFA6", key: "colorMint" },
    { value: "#4B7BFF", key: "colorSky" },
    { value: "#FF8FB1", key: "colorBubblegum" },
    { value: "#9C8BE0", key: "colorGrape" }
  ];
  const NOSE_COLORS = [
    { value: "#FFE0A6", key: "colorCream" },
    { value: "#FFC83D", key: "colorSunshine" },
    { value: "#9BE3D2", key: "colorMint" },
    { value: "#FFB5C7", key: "colorBubblegum" },
    { value: "#BFEAF7", key: "colorSky" },
    { value: "#FFF7E7", key: "colorCloud" }
  ];
  const FIN_COLORS = [
    { value: "#25BFA6", key: "colorMint" },
    { value: "#4B7BFF", key: "colorSky" },
    { value: "#FF6B57", key: "colorCoral" },
    { value: "#FFC83D", key: "colorSunshine" },
    { value: "#9C8BE0", key: "colorGrape" },
    { value: "#7BC88B", key: "colorLeaf" }
  ];
  const STICKERS = [
    { id: "none", key: "stickerNone" },
    { id: "star", key: "stickerStar" },
    { id: "stripes", key: "stickerStripes" },
    { id: "planet", key: "stickerPlanet" },
    { id: "bolt", key: "stickerBolt" }
  ];
  const CARGOS = [
    { id: "sandwich", key: "cargoSandwich", doodle: "snack", color: "#FFC83D" },
    { id: "teddy", key: "cargoTeddy", doodle: "paw", color: "#FF8FB1" },
    { id: "camera", key: "cargoCamera", doodle: "gift", color: "#4B7BFF" },
    { id: "plant", key: "cargoPlant", doodle: "plant", color: "#7BC88B" }
  ];
  const DEFAULTS = {
    version: 1,
    body: "#FF6B57",
    nose: "#FFE0A6",
    fin: "#25BFA6",
    sticker: "star",
    cargo: "sandwich"
  };

  let memoryDesign = null;
  let overlay = null;
  const state = {
    open: false,
    draft: null,
    context: "read",
    afterSave: null,
    lastFocus: null,
    saving: false
  };

  function getLanguage() {
    return document.documentElement.lang === "zh-CN" ? "zh" : "en";
  }

  function t(key) {
    const all = window.STORY_I18N && window.STORY_I18N.ui ? window.STORY_I18N.ui : null;
    if (!all) return "";
    const table = all[getLanguage()] || all.en || {};
    return table[key] != null ? table[key] : (all.en && all.en[key]) || "";
  }

  function fmt(key, values) {
    let text = t(key);
    const vars = values || {};
    Object.keys(vars).forEach(function (name) {
      text = text.split("{" + name + "}").join(String(vars[name]));
    });
    return text;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

  function cleanName(value) {
    return Array.from(String(value || "").replace(/\s+/g, " ").trim()).slice(0, 18).join("");
  }

  function colorValue(value, palette) {
    const found = palette.find(function (color) {
      return color.value.toLowerCase() === String(value || "").toLowerCase();
    });
    return found ? found.value : palette[0].value;
  }

  function optionId(value, options, fallback) {
    return options.some(function (item) { return item.id === value; }) ? value : fallback;
  }

  function normalizeDesign(raw) {
    if (!raw || typeof raw !== "object") return null;
    return {
      version: 1,
      name: cleanName(raw.name) || t("defaultRocketName"),
      body: colorValue(raw.body, BODY_COLORS),
      nose: colorValue(raw.nose, NOSE_COLORS),
      fin: colorValue(raw.fin, FIN_COLORS),
      sticker: optionId(raw.sticker, STICKERS, "star"),
      cargo: optionId(raw.cargo, CARGOS, "sandwich")
    };
  }

  function defaultDesign() {
    return {
      version: 1,
      name: t("defaultRocketName"),
      body: DEFAULTS.body,
      nose: DEFAULTS.nose,
      fin: DEFAULTS.fin,
      sticker: DEFAULTS.sticker,
      cargo: DEFAULTS.cargo
    };
  }

  function getDesign() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? normalizeDesign(JSON.parse(raw)) : null;
      if (parsed) return parsed;
    } catch (error) {
      /* Private browsing can block storage. */
    }
    return memoryDesign ? normalizeDesign(memoryDesign) : null;
  }

  function saveDesign(design) {
    memoryDesign = design;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(design));
    } catch (error) {
      /* Keep the design for this session. */
    }
  }

  function hasDesign() {
    return Boolean(getDesign());
  }

  function cargoOption(id) {
    return CARGOS.find(function (item) { return item.id === id; }) || CARGOS[0];
  }

  function cargoLabel(id) {
    return t(cargoOption(id).key);
  }

  function visibleRocketName(name) {
    const chars = Array.from(cleanName(name) || t("defaultRocketName"));
    return chars.length > 14 ? chars.slice(0, 13).join("") + "…" : chars.join("");
  }

  function stickerArt(kind) {
    if (kind === "star") {
      return ART.fiveStar(31, -114, 10, "#FFD85E", INK, 3);
    }
    if (kind === "stripes") {
      return `<path d="M-43 -113 L36 -129 M-43 -96 L36 -112" fill="none" stroke="#FFF7E7" stroke-width="8" stroke-linecap="round" opacity=".9"/>`;
    }
    if (kind === "planet") {
      return `<circle cx="30" cy="-112" r="9" fill="#BFEAF7" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="30" cy="-112" rx="15" ry="5" fill="none" stroke="${INK}" stroke-width="2.5" transform="rotate(-18 30 -112)"/>
        <circle cx="27" cy="-115" r="2" fill="${INK}" opacity=".35"/>`;
    }
    if (kind === "bolt") {
      return `<path d="M38 -130 L22 -108 L33 -108 L19 -84 L43 -112 L32 -112Z" fill="#FFD85E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
    }
    return "";
  }

  function rocketArt(design, options) {
    const face = Boolean(options && options.face);
    const flame = options && options.flame !== false;
    const name = visibleRocketName(design.name);
    const fontSize = Math.max(5.5, Math.min(9.2, 74 / Math.max(4, Array.from(name).length))).toFixed(1);
    const flameMarkup = flame
      ? `<g class="rocket-flame">
          <path d="M-27 -14 C-20 31 0 72 0 72 C0 72 20 31 27 -14Z" fill="#FF9A3D" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
          <path d="M-14 2 C-8 25 0 48 0 48 C0 48 8 25 14 2Z" fill="#FFD85E"/>
        </g>`
      : "";
    const faceMarkup = face
      ? `<circle cx="-12" cy="-166" r="4.5" fill="${INK}"/>
        <circle cx="12" cy="-166" r="4.5" fill="${INK}"/>
        <path d="M-11 -154 Q0 -145 11 -154" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`
      : `<path d="M-25 -183 Q-8 -192 8 -187" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".75"/>`;
    return `<g>
      ${flameMarkup}
      <g stroke="${INK}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-47 -105 L-96 -39 L-49 -55Z" fill="${design.fin}"/>
        <path d="M47 -105 L96 -39 L49 -55Z" fill="${design.fin}"/>
        <path d="M0 -298 C50 -236 63 -122 49 -19 L-49 -19 C-63 -122 -50 -236 0 -298Z" fill="${design.body}"/>
        <path d="M0 -298 C18 -275 32 -247 39 -218 L-39 -218 C-32 -247 -18 -275 0 -298Z" fill="${design.nose}"/>
        <circle cx="0" cy="-164" r="43" fill="#C7EFF7"/>
        <circle cx="0" cy="-164" r="34" fill="#E9FBFF"/>
        ${faceMarkup}
        ${stickerArt(design.sticker)}
        <rect x="-38" y="-72" width="76" height="22" rx="10" fill="#FFFDF4" stroke="${INK}" stroke-width="3"/>
        <text x="0" y="-56" text-anchor="middle" font-family="'Trebuchet MS', 'Microsoft YaHei', sans-serif" font-size="${fontSize}" font-weight="900" fill="${INK}">${escapeHtml(name)}</text>
        <rect x="-34" y="-22" width="68" height="19" rx="7" fill="#3E4A62"/>
      </g>
    </g>`;
  }

  function previewSvg(design) {
    return `<svg viewBox="0 0 420 520" aria-hidden="true" focusable="false">
      <ellipse cx="210" cy="436" rx="112" ry="18" fill="#09122B" opacity=".35"/>
      <path d="M88 442 C124 426 164 426 199 440 C236 426 284 426 333 444" fill="none" stroke="#FFF7E7" stroke-width="3" opacity=".22" stroke-linecap="round"/>
      ${ART.sparkle(93, 148, 8, "#FFE170", 18, 0.8)}
      ${ART.sparkle(333, 189, 6, "#BFEAF7", -18, 0.85)}
      ${ART.sparkle(309, 354, 5, "#FFF4C2", 10, 0.7)}
      <g transform="translate(210 430) scale(1.12)">
        ${rocketArt(design, { face: true, flame: true })}
      </g>
      <g transform="translate(210 482)">
        <rect x="-76" y="-14" width="152" height="28" rx="14" fill="#0F1A3A" opacity=".72" stroke="#6C7192" stroke-width="2"/>
        <text x="0" y="5" text-anchor="middle" font-family="'Trebuchet MS', 'Microsoft YaHei', sans-serif" font-size="10.5" font-weight="900" fill="#FFF7E7">${escapeHtml(visibleRocketName(design.name))}</text>
      </g>
    </svg>`;
  }

  function cargoChip(cargoId) {
    const cargo = cargoOption(cargoId);
    return '<span class="creator-cargo-icon">' + ART.doodle(cargo.doodle, cargo.color) + "</span>" +
      '<span class="creator-cargo-text">' + escapeHtml(fmt("previewCargo", { cargo: t(cargo.key) })) + "</span>";
  }

  function stickerIcon(kind) {
    const art = {
      none: '<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3"/>',
      star: ART.fiveStar(16, 16, 11, "#FFC83D", INK, 2),
      stripes: '<path d="M5 21L26 8M8 27L29 14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      planet: '<circle cx="16" cy="16" r="8" fill="#BFEAF7" stroke="currentColor" stroke-width="2.5"/><ellipse cx="16" cy="16" rx="13" ry="4.5" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(-18 16 16)"/>',
      bolt: '<path d="M19 3L7 18h7l-3 11 12-16h-7Z" fill="#FFC83D" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
    };
    return '<svg viewBox="0 0 32 32" aria-hidden="true">' + (art[kind] || art.none) + "</svg>";
  }

  function colorRow(field, label, palette, selected) {
    return '<div class="creator-color-row">' +
      '<span class="creator-color-label">' + escapeHtml(label) + "</span>" +
      '<div class="creator-swatches" role="group" aria-label="' + escapeHtml(label) + '">' +
        palette.map(function (color) {
          return '<button class="creator-swatch" type="button" data-field="' + field + '" data-value="' + color.value + '"' +
            ' aria-label="' + escapeHtml(t(color.key)) + '" title="' + escapeHtml(t(color.key)) + '"' +
            ' aria-pressed="' + String(color.value === selected) + '" style="--swatch:' + color.value + '">' +
            '<span class="sr-only">' + escapeHtml(t(color.key)) + "</span></button>";
        }).join("") +
      "</div></div>";
  }

  function createOverlay(design, context) {
    const backdrop = document.createElement("div");
    backdrop.className = "creator-backdrop";
    backdrop.id = "rocketCreator";
    backdrop.innerHTML = '<div class="creator-shell" role="dialog" aria-modal="true" aria-labelledby="creatorTitle">' +
      '<header class="creator-header">' +
        '<div><p class="creator-kicker">' + escapeHtml(t("workshopKicker")) + '</p>' +
        '<h2 id="creatorTitle">' + escapeHtml(t("workshopTitle")) + "</h2></div>" +
        '<button class="creator-close" type="button" data-creator-close aria-label="' + escapeHtml(t("closeWorkshopAria")) + '">' +
          '<svg class="icon" aria-hidden="true"><use href="#icon-close"></use></svg>' +
        "</button>" +
      "</header>" +
      '<div class="creator-body">' +
        '<section class="creator-preview-pane" aria-hidden="true">' +
          '<span class="creator-blueprint-label">' + escapeHtml(t("previewLabel")) + "</span>" +
          '<div class="creator-stage" id="creatorStage">' + previewSvg(design) + "</div>" +
          '<div class="creator-preview-info">' +
            '<span class="creator-preview-name" id="creatorPreviewName">' + escapeHtml(design.name) + "</span>" +
            '<span class="creator-preview-cargo" id="creatorPreviewCargo">' + cargoChip(design.cargo) + "</span>" +
          "</div>" +
        "</section>" +
        '<section class="creator-controls">' +
          '<p class="creator-intro">' + escapeHtml(t("workshopIntro")) + "</p>" +
          '<label class="creator-field-label" for="rocketNameInput">' + escapeHtml(t("nameLabel")) + "</label>" +
          '<input class="creator-name-input" id="rocketNameInput" type="text" maxlength="18" autocomplete="off" spellcheck="false"' +
            ' value="' + escapeHtml(design.name) + '" placeholder="' + escapeHtml(t("namePlaceholder")) + '">' +
          '<p class="creator-hint" id="creatorNameHint">' + escapeHtml(t("nameHint")) + "</p>" +
          '<fieldset class="creator-section"><legend>' + escapeHtml(t("paintLabel")) + "</legend>" +
            colorRow("body", t("bodyColor"), BODY_COLORS, design.body) +
            colorRow("nose", t("noseColor"), NOSE_COLORS, design.nose) +
            colorRow("fin", t("finColor"), FIN_COLORS, design.fin) +
          "</fieldset>" +
          '<fieldset class="creator-section"><legend>' + escapeHtml(t("stickerLabel")) + "</legend>" +
            '<div class="creator-choices">' + STICKERS.map(function (sticker) {
              return '<button class="creator-choice" type="button" data-sticker="' + sticker.id + '" aria-pressed="' + String(sticker.id === design.sticker) + '">' +
                '<span class="creator-choice-icon">' + stickerIcon(sticker.id) + "</span>" +
                "<span>" + escapeHtml(t(sticker.key)) + "</span></button>";
            }).join("") + "</div>" +
          "</fieldset>" +
          '<fieldset class="creator-section"><legend>' + escapeHtml(t("cargoLabel")) + "</legend>" +
            '<div class="creator-choices creator-cargo-choices">' + CARGOS.map(function (cargo) {
              return '<button class="creator-choice" type="button" data-cargo="' + cargo.id + '" aria-pressed="' + String(cargo.id === design.cargo) + '">' +
                '<span class="creator-choice-icon">' + ART.doodle(cargo.doodle, cargo.color) + "</span>" +
                "<span>" + escapeHtml(t(cargo.key)) + "</span></button>";
            }).join("") + "</div>" +
          "</fieldset>" +
        "</section>" +
      "</div>" +
      '<footer class="creator-footer">' +
        '<button class="creator-save" type="button" data-creator-save>' +
          (context === "edit" ? escapeHtml(t("saveRocket")) : escapeHtml(t("buildAndRead"))) +
        "</button>" +
      "</footer>" +
    "</div>";
    return backdrop;
  }

  function updatePreview() {
    if (!overlay || !state.draft) return;
    const stage = overlay.querySelector("#creatorStage");
    const nameNode = overlay.querySelector("#creatorPreviewName");
    const cargoNode = overlay.querySelector("#creatorPreviewCargo");
    if (stage) stage.innerHTML = previewSvg(state.draft);
    if (nameNode) nameNode.textContent = cleanName(state.draft.name) || t("defaultRocketName");
    if (cargoNode) cargoNode.innerHTML = cargoChip(state.draft.cargo);
    overlay.querySelectorAll("[data-field]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-value") === state.draft[button.getAttribute("data-field")]));
    });
    overlay.querySelectorAll("[data-sticker]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-sticker") === state.draft.sticker));
    });
    overlay.querySelectorAll("[data-cargo]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-cargo") === state.draft.cargo));
    });
  }

  function closeCreator() {
    if (!state.open || state.saving) return;
    const focusTarget = state.lastFocus;
    document.body.classList.remove("creator-open");
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
    state.open = false;
    state.draft = null;
    state.afterSave = null;
    state.saving = false;
    if (focusTarget && focusTarget.isConnected) {
      focusTarget.focus({ preventScroll: true });
    }
  }

  function saveCreator() {
    if (!overlay || !state.draft || state.saving) return;
    state.saving = true;
    const input = overlay.querySelector("#rocketNameInput");
    const design = normalizeDesign(Object.assign({}, state.draft, {
      name: cleanName(input ? input.value : state.draft.name) || t("defaultRocketName")
    }));
    saveDesign(design);
    const callback = state.afterSave;
    const saveButton = overlay.querySelector("[data-creator-save]");
    const shell = overlay.querySelector(".creator-shell");
    if (saveButton) {
      saveButton.disabled = true;
      saveButton.textContent = t("buildingRocket");
    }
    if (shell) shell.classList.add("is-building");
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 40 : 620;
    window.setTimeout(function () {
      state.saving = false;
      closeCreator();
      if (callback) callback(design);
    }, delay);
  }

  function handleOverlayClick(event) {
    if (event.target === overlay) {
      closeCreator();
      return;
    }
    const closeButton = event.target.closest("[data-creator-close]");
    if (closeButton) {
      closeCreator();
      return;
    }
    const saveButton = event.target.closest("[data-creator-save]");
    if (saveButton) {
      saveCreator();
      return;
    }
    const colorButton = event.target.closest("[data-field]");
    if (colorButton) {
      state.draft[colorButton.getAttribute("data-field")] = colorButton.getAttribute("data-value");
      updatePreview();
      return;
    }
    const stickerButton = event.target.closest("[data-sticker]");
    if (stickerButton) {
      state.draft.sticker = stickerButton.getAttribute("data-sticker");
      updatePreview();
      return;
    }
    const cargoButton = event.target.closest("[data-cargo]");
    if (cargoButton) {
      state.draft.cargo = cargoButton.getAttribute("data-cargo");
      updatePreview();
    }
  }

  function handleOverlayKeydown(event) {
    if (!state.open) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeCreator();
      return;
    }
    if (event.key !== "Tab" || !overlay) return;
    const focusable = Array.from(overlay.querySelectorAll("button:not([disabled]), input:not([disabled])"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openCreator(options) {
    const settings = options || {};
    if (state.open) closeCreator();
    const saved = getDesign();
    state.draft = saved || defaultDesign();
    state.context = settings.context === "edit" ? "edit" : "read";
    state.afterSave = typeof settings.afterSave === "function" ? settings.afterSave : null;
    state.lastFocus = document.activeElement;
    overlay = createOverlay(state.draft, state.context);
    document.body.appendChild(overlay);
    document.body.classList.add("creator-open");
    state.open = true;
    overlay.addEventListener("click", handleOverlayClick);
    overlay.addEventListener("keydown", handleOverlayKeydown);
    const input = overlay.querySelector("#rocketNameInput");
    if (input) {
      input.addEventListener("input", function () {
        state.draft.name = input.value;
        updatePreview();
      });
    }
    window.requestAnimationFrame(function () {
      overlay.classList.add("is-open");
      const currentInput = overlay.querySelector("#rocketNameInput");
      if (currentInput) {
        currentInput.focus({ preventScroll: true });
        const end = currentInput.value.length;
        if (currentInput.setSelectionRange) currentInput.setSelectionRange(end, end);
      }
    });
  }

  function decorateSlots(root) {
    if (!root) return;
    const design = getDesign();
    if (!design) return;
    root.querySelectorAll(".story-rocket-art").forEach(function (slot) {
      const face = slot.getAttribute("data-rocket-face") === "1";
      const flame = slot.getAttribute("data-rocket-flame") === "1";
      slot.innerHTML = rocketArt(design, { face: face, flame: flame });
    });
  }

  function isOpen() {
    return state.open;
  }

  window.StoryCreator = {
    open: openCreator,
    close: closeCreator,
    hasDesign: hasDesign,
    getDesign: getDesign,
    decorateSlots: decorateSlots,
    cargoLabel: cargoLabel,
    isOpen: isOpen
  };
})();
