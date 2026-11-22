(function () {
  "use strict";

  const books = Array.isArray(window.STORY_BOOKS) ? window.STORY_BOOKS : [];
  const FOUND_KEY = "story-rocket-found-v1";
  const SOUND_KEY = "story-rocket-sound-v1";
  const LANG_KEY = "story-rocket-lang-v1";
  const I18N = window.STORY_I18N || { ui: { en: {}, zh: {} }, booksZh: {} };

  const els = {
    shelfView: document.getElementById("shelfView"),
    readerView: document.getElementById("readerView"),
    bookGrid: document.getElementById("bookGrid"),
    surpriseBtn: document.getElementById("surpriseBtn"),
    readerBookTitle: document.getElementById("readerBookTitle"),
    backToShelf: document.getElementById("backToShelf"),
    readAloud: document.getElementById("readAloud"),
    soundToggle: document.getElementById("soundToggle"),
    bookPage: document.getElementById("bookPage"),
    pageArt: document.getElementById("pageArt"),
    hotspots: document.getElementById("hotspots"),
    pageKicker: document.getElementById("pageKicker"),
    pageCountChip: document.getElementById("pageCountChip"),
    pageTitle: document.getElementById("pageTitle"),
    pageText: document.getElementById("pageText"),
    endStamp: document.getElementById("endStamp"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    nextLabel: document.getElementById("nextLabel"),
    pageDots: document.getElementById("pageDots"),
    progressFill: document.getElementById("progressFill"),
    foundLine: document.getElementById("foundLine"),
    artHint: document.getElementById("artHint"),
    readerMain: document.querySelector(".reader-main"),
    tinyBackdrop: document.getElementById("tinyBackdrop"),
    tinyPage: document.getElementById("tinyPage"),
    tinyClose: document.getElementById("tinyClose"),
    tinyDone: document.getElementById("tinyDone"),
    tinyDoodle: document.getElementById("tinyDoodle"),
    tinyKicker: document.getElementById("tinyKicker"),
    tinyTitle: document.getElementById("tinyTitle"),
    tinyText: document.getElementById("tinyText"),
    fxLayer: document.getElementById("fxLayer"),
    liveRegion: document.getElementById("liveRegion")
  };

  let found = loadFound();
  let soundEnabled = loadSound();
  let lang = loadLanguage();
  let currentBook = null;
  let currentPage = 0;
  let isTinyOpen = false;
  let activeTinyTrigger = null;
  let activeTinyIndex = -1;
  let audioCtx = null;
  let readSpeaking = false;
  let speechToken = 0;
  let turnTimer = null;
  let swipeStart = null;
  const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

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

  function loadFound() {
    try {
      const raw = window.localStorage.getItem(FOUND_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch (error) {
      /* Private browsing can make local storage unavailable. */
    }
    return {};
  }

  function saveFound() {
    try {
      window.localStorage.setItem(FOUND_KEY, JSON.stringify(found));
    } catch (error) {
      /* Keep the story working without persistence. */
    }
  }

  function loadSound() {
    try {
      return window.localStorage.getItem(SOUND_KEY) !== "off";
    } catch (error) {
      return true;
    }
  }

  function saveSound() {
    try {
      window.localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
    } catch (error) {
      /* Sound preference is optional. */
    }
  }

  function loadLanguage() {
    try {
      const stored = window.localStorage.getItem(LANG_KEY);
      if (stored === "en" || stored === "zh") return stored;
    } catch (error) {
      /* Fall back to the browser language. */
    }
    const browserLanguage = (navigator.language || "en").toLowerCase();
    return browserLanguage.indexOf("zh") === 0 ? "zh" : "en";
  }

  function saveLanguage() {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      /* Language preference is optional. */
    }
  }

  function tr(key) {
    const table = I18N.ui[lang] || I18N.ui.en || {};
    if (table[key] != null) return table[key];
    return (I18N.ui.en && I18N.ui.en[key]) || "";
  }

  function fmt(key, values) {
    let text = tr(key);
    const vars = values || {};
    Object.keys(vars).forEach(function (name) {
      text = text.split("{" + name + "}").join(String(vars[name]));
    });
    return text;
  }

  function localizedBook(book) {
    if (lang !== "zh") return null;
    return I18N.booksZh[book.id] || null;
  }

  function bookField(book, field) {
    const translated = localizedBook(book);
    if (translated && Object.prototype.hasOwnProperty.call(translated, field)) {
      return translated[field];
    }
    return book[field];
  }

  function pageField(book, pageIndex, field) {
    const translated = localizedBook(book);
    const translatedPage = translated && translated.pages && translated.pages[pageIndex];
    if (translatedPage && translatedPage[field] != null) return translatedPage[field];
    return book.pages[pageIndex][field];
  }

  function hotspotField(book, pageIndex, hotspotIndex, field) {
    const translated = localizedBook(book);
    const translatedPage = translated && translated.pages && translated.pages[pageIndex];
    const translatedHotspot = translatedPage && translatedPage.hotspots && translatedPage.hotspots[hotspotIndex];
    if (translatedHotspot && translatedHotspot[field] != null) return translatedHotspot[field];
    return book.pages[pageIndex].hotspots[hotspotIndex][field];
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const text = tr(node.getAttribute("data-i18n"));
      if (text) node.textContent = text;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      const text = tr(node.getAttribute("data-i18n-aria"));
      if (text) node.setAttribute("aria-label", text);
    });
    document.querySelectorAll(".lang-switch").forEach(function (node) {
      node.setAttribute("aria-label", tr("languageLabel"));
    });
  }

  function updateDocumentMeta() {
    document.title = tr("metaTitle");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", tr("metaDescription"));
  }

  function updateLanguageControls() {
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      const isActive = button.getAttribute("data-lang") === lang;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });
  }

  function setLanguage(nextLanguage) {
    if (nextLanguage !== "en" && nextLanguage !== "zh") return;
    if (nextLanguage === lang) return;
    lang = nextLanguage;
    saveLanguage();
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    if (isTinyOpen) closeTiny({ restoreFocus: false, silent: true });
    document.querySelectorAll(".toast").forEach(function (toast) {
      toast.remove();
    });
    stopSpeech();
    applyStaticTranslations();
    updateDocumentMeta();
    updateLanguageControls();
    updateSoundUI();
    updateReadUI();
    renderShelf();

    if (currentBook) {
      els.readerBookTitle.textContent = bookField(currentBook, "title");
      renderPage(currentPage, "none");
    }
    announce(tr("languageChanged"));
  }

  function totalSpots(book) {
    return book.pages.reduce(function (count, page) {
      return count + page.hotspots.length;
    }, 0);
  }

  function bookFoundCount(book) {
    const record = found[book.id];
    if (!record) return 0;
    let count = 0;
    book.pages.forEach(function (page, pageIndex) {
      page.hotspots.forEach(function (hotspot, hotspotIndex) {
        if (record[pageIndex + ":" + hotspotIndex]) count += 1;
      });
    });
    return count;
  }

  function spotFound(pageIndex, hotspotIndex) {
    if (!currentBook) return false;
    const record = found[currentBook.id];
    return Boolean(record && record[pageIndex + ":" + hotspotIndex]);
  }

  function markSpotFound(pageIndex, hotspotIndex) {
    if (!currentBook) return;
    if (!found[currentBook.id]) found[currentBook.id] = {};
    found[currentBook.id][pageIndex + ":" + hotspotIndex] = true;
    saveFound();
  }

  function announce(message) {
    els.liveRegion.textContent = "";
    window.setTimeout(function () {
      els.liveRegion.textContent = message;
    }, 30);
  }

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function renderShelf() {
    if (!els.bookGrid) return;
    if (!books.length) {
      els.bookGrid.innerHTML = '<p class="empty-shelf">' + escapeHtml(tr("emptyShelf")) + "</p>";
      return;
    }

    els.bookGrid.innerHTML = books.map(function (book, index) {
      const count = bookFoundCount(book);
      const total = totalSpots(book);
      const title = bookField(book, "title");
      const foundBadge = count > 0
        ? '<span class="book-found" title="' + escapeHtml(fmt("foundBadgeTitle", { count: count, total: total })) + '"><svg class="icon" aria-hidden="true"><use href="#icon-star"></use></svg>' + count + "</span>"
        : "";
      const ribbonValue = bookField(book, "ribbon");
      const ribbon = ribbonValue ? '<span class="book-ribbon">' + escapeHtml(ribbonValue) + "</span>" : "";
      return '<article class="book-card-wrap">' +
        '<button class="book-card" type="button" data-book-id="' + escapeHtml(book.id) + '"' +
        ' style="--accent:' + book.accent + ";--accent-soft:" + book.accentSoft + ";--tilt:" + book.tilt + ";--delay:" + index * 90 + 'ms"' +
        ' aria-label="' + escapeHtml(fmt("openBookAria", { title: title })) + '">' +
          '<span class="book-cover">' +
            '<span class="book-spine" aria-hidden="true"></span>' +
            '<span class="book-art" aria-hidden="true">' + book.cover + "</span>" +
            ribbon +
            foundBadge +
            '<span class="book-title-panel">' +
              '<span class="book-tag">' + escapeHtml(bookField(book, "tag")) + "</span>" +
              '<span class="book-title">' + escapeHtml(title) + "</span>" +
              '<span class="book-author">' + escapeHtml(bookField(book, "author")) + "</span>" +
            "</span>" +
          "</span>" +
          '<span class="book-card-meta">' +
            '<span><svg class="icon" aria-hidden="true"><use href="#icon-book"></use></svg>' + escapeHtml(fmt("pagesCount", { count: book.pages.length })) + "</span>" +
            '<span class="meta-dot" aria-hidden="true">·</span>' +
            "<span>" + escapeHtml(fmt("tinyPagesCount", { count: total })) + "</span>" +
            '<span class="open-pill">' + escapeHtml(tr("openLabel")) + "</span>" +
          "</span>" +
        "</button>" +
      "</article>";
    }).join("");
  }

  function openBook(book) {
    if (!book) return;
    currentBook = book;
    currentPage = 0;
    stopSpeech();
    closeTiny({ restoreFocus: false, silent: true });
    document.querySelectorAll(".toast").forEach(function (toast) {
      toast.remove();
    });

    els.readerBookTitle.textContent = bookField(book, "title");
    els.shelfView.hidden = true;
    els.readerView.hidden = false;
    document.body.classList.add("reading");
    els.readerMain.scrollTop = 0;

    els.bookPage.style.animation = "none";
    void els.bookPage.offsetWidth;
    els.bookPage.style.animation = "";

    renderPage(0, "none");
    playSound("open");
    announce(fmt("openedAnnounce", { title: bookField(book, "title"), total: book.pages.length }));

    window.requestAnimationFrame(function () {
      els.backToShelf.focus({ preventScroll: true });
    });
  }

  function closeReader() {
    if (!currentBook) return;
    const closedBookId = currentBook.id;
    stopSpeech();
    closeTiny({ restoreFocus: false, silent: true });

    els.readerView.hidden = true;
    els.shelfView.hidden = false;
    document.body.classList.remove("reading");
    currentBook = null;
    currentPage = 0;
    renderShelf();

    window.requestAnimationFrame(function () {
      const card = els.bookGrid.querySelector('[data-book-id="' + closedBookId + '"]');
      if (card) {
        card.focus({ preventScroll: true });
      } else if (els.surpriseBtn) {
        els.surpriseBtn.focus({ preventScroll: true });
      }
    });
    announce(tr("backAnnounce"));
  }

  function hotspotMarkup(hotspot, pageIndex, hotspotIndex) {
    const alreadyFound = spotFound(pageIndex, hotspotIndex);
    const label = hotspotField(currentBook, pageIndex, hotspotIndex, "label");
    const classes = ["hotspot"];
    if (alreadyFound) classes.push("is-found");
    if (hotspot.y > 74) classes.push("near-bottom");
    if (hotspot.x < 20) classes.push("near-left");
    if (hotspot.x > 80) classes.push("near-right");
    return '<button class="' + classes.join(" ") + '" type="button"' +
      ' style="--x:' + hotspot.x + "%;--y:" + hotspot.y + "%;--spot:" + (hotspot.accent || currentBook.accent) + '"' +
      ' data-index="' + hotspotIndex + '"' +
      ' aria-haspopup="dialog"' +
      ' aria-label="' + escapeHtml(fmt("openTinyAria", { label: label })) + '">' +
        '<svg class="icon" aria-hidden="true"><use href="' + (alreadyFound ? "#icon-check" : "#icon-sparkles") + '"></use></svg>' +
        '<span class="hotspot-label">' + escapeHtml(label) + "</span>" +
      "</button>";
  }

  function renderPage(index, direction) {
    if (!currentBook) return;
    const page = currentBook.pages[index];
    if (!page) return;

    stopSpeech();
    closeTiny({ restoreFocus: false, silent: true });
    currentPage = index;

    const pageTitle = pageField(currentBook, index, "title");
    els.pageArt.innerHTML = page.art;
    els.pageKicker.textContent = pageField(currentBook, index, "kicker");
    els.pageCountChip.textContent = index + 1 + " / " + currentBook.pages.length;
    els.pageTitle.textContent = pageTitle;
    els.pageText.textContent = pageField(currentBook, index, "text");
    els.endStamp.hidden = index !== currentBook.pages.length - 1;

    els.hotspots.innerHTML = page.hotspots.map(function (hotspot, hotspotIndex) {
      return hotspotMarkup(hotspot, index, hotspotIndex);
    }).join("");

    els.hotspots.querySelectorAll(".hotspot").forEach(function (button) {
      button.addEventListener("click", function () {
        const hotspotIndex = Number(button.getAttribute("data-index"));
        openTiny(page.hotspots[hotspotIndex], button, index, hotspotIndex);
      });
    });

    els.pageDots.innerHTML = currentBook.pages.map(function (dotPage, dotIndex) {
      const dotTitle = pageField(currentBook, dotIndex, "title");
      return '<button class="page-dot' + (dotIndex === index ? " is-current" : "") + '" type="button"' +
        ' data-page="' + dotIndex + '"' +
        (dotIndex === index ? ' aria-current="page"' : "") +
        ' aria-label="' + escapeHtml(fmt("pageDotAria", { number: dotIndex + 1, title: dotTitle })) + '"></button>';
    }).join("");

    els.pageDots.querySelectorAll(".page-dot").forEach(function (dot) {
      dot.addEventListener("click", function () {
        const pageIndex = Number(dot.getAttribute("data-page"));
        if (pageIndex !== currentPage) {
          renderPage(pageIndex, pageIndex > currentPage ? "next" : "prev");
          playSound("page");
          resetReaderScroll();
        }
      });
    });

    els.prevBtn.disabled = index === 0;
    const isLast = index === currentBook.pages.length - 1;
    els.nextLabel.textContent = isLast ? tr("finishStory") : tr("nextPage");
    els.nextBtn.classList.toggle("is-finish", isLast);
    els.nextBtn.setAttribute("aria-label", isLast ? tr("finishAria") : tr("nextAria"));
    const nextIcon = els.nextBtn.querySelector("use");
    if (nextIcon) nextIcon.setAttribute("href", isLast ? "#icon-star" : "#icon-arrow-right");

    els.progressFill.style.width = ((index + 1) / currentBook.pages.length) * 100 + "%";
    updateFoundUI();
    updatePageHint();

    if (direction !== "none") {
      animatePage(direction);
      announce(fmt("pageAnnounce", { number: index + 1, total: currentBook.pages.length, title: pageTitle }));
    }
  }

  function animatePage(direction) {
    if (reducedMotion()) return;
    els.bookPage.classList.remove("turn-next", "turn-prev");
    void els.bookPage.offsetWidth;
    els.bookPage.classList.add(direction === "next" ? "turn-next" : "turn-prev");
    window.clearTimeout(turnTimer);
    turnTimer = window.setTimeout(function () {
      els.bookPage.classList.remove("turn-next", "turn-prev");
    }, 430);
  }

  function resetReaderScroll() {
    if (!els.readerMain) return;
    if (els.readerMain.scrollTop > 0) {
      els.readerMain.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
    }
  }

  function updateFoundUI() {
    if (!currentBook) return;
    const count = bookFoundCount(currentBook);
    const total = totalSpots(currentBook);
    els.foundLine.textContent = count === total
      ? fmt("foundAll", { total: total })
      : fmt("foundCount", { count: count, total: total });
  }

  function updatePageHint() {
    if (!currentBook) return;
    const page = currentBook.pages[currentPage];
    const label = els.artHint.querySelector("span");
    if (!page || !label) return;
    const foundOnPage = page.hotspots.filter(function (hotspot, hotspotIndex) {
      return spotFound(currentPage, hotspotIndex);
    }).length;
    label.textContent = foundOnPage === page.hotspots.length
      ? tr("pageAllFound")
      : tr("pageHint");
  }

  function nextPage() {
    if (!currentBook) return;
    if (currentPage >= currentBook.pages.length - 1) {
      finishBook();
      return;
    }
    renderPage(currentPage + 1, "next");
    playSound("page");
    resetReaderScroll();
  }

  function previousPage() {
    if (!currentBook || currentPage === 0) return;
    renderPage(currentPage - 1, "prev");
    playSound("page");
    resetReaderScroll();
  }

  function finishBook() {
    if (!currentBook) return;
    const book = currentBook;
    const count = bookFoundCount(book);
    const total = totalSpots(book);
    const title = bookField(book, "title");
    const message = count === total
      ? fmt("finishAllToast", { total: total, title: title })
      : fmt("finishSomeToast", { count: count, total: total, title: title });

    playSound("finish");
    burst(window.innerWidth / 2, window.innerHeight * 0.34, ["#FFC83D", "#FF6B57", "#25BFA6", "#FFF7E7", "#FF8FB1"], 24);
    closeReader();
    announce(message);
    window.setTimeout(function () {
      showToast(message);
    }, 200);
  }

  function openTiny(hotspot, trigger, pageIndex, hotspotIndex) {
    if (!currentBook || !hotspot) return;
    stopSpeech();
    const wasFound = spotFound(pageIndex, hotspotIndex);
    if (!wasFound) {
      markSpotFound(pageIndex, hotspotIndex);
      updateFoundUI();
      updatePageHint();
      const use = trigger.querySelector("use");
      if (use) use.setAttribute("href", "#icon-check");
      trigger.classList.add("is-found");
      playSound("found");
    } else {
      playSound("pop");
    }

    const accent = hotspot.accent || currentBook.accent;
    const spotLabel = hotspotField(currentBook, pageIndex, hotspotIndex, "label");
    const spotTitle = hotspotField(currentBook, pageIndex, hotspotIndex, "title");
    const spotText = hotspotField(currentBook, pageIndex, hotspotIndex, "text");
    els.tinyDoodle.innerHTML = window.StoryArt.doodle(hotspot.doodle, accent);
    els.tinyPage.style.setProperty("--tiny-accent", accent);
    els.tinyKicker.textContent = fmt("tinyKicker", { label: spotLabel });
    els.tinyTitle.textContent = spotTitle;
    els.tinyText.textContent = spotText;

    activeTinyTrigger = trigger;
    activeTinyIndex = hotspotIndex;
    isTinyOpen = true;
    els.tinyBackdrop.hidden = false;
    els.tinyPage.hidden = false;
    els.tinyPage.style.visibility = "hidden";

    if (window.innerWidth < 900 || window.innerHeight < 620) {
      els.tinyPage.classList.add("is-centered");
      els.tinyPage.style.left = "";
      els.tinyPage.style.top = "";
    } else {
      els.tinyPage.classList.remove("is-centered");
      positionTinyPage(trigger);
    }
    els.tinyPage.style.visibility = "";

    const rect = trigger.getBoundingClientRect();
    burst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      [accent, "#FFC83D", "#FFF7E7", "#FF8FB1"],
      wasFound ? 5 : 10
    );

    announce(spotTitle + ". " + spotText);
    window.requestAnimationFrame(function () {
      els.tinyClose.focus({ preventScroll: true });
    });
  }

  function positionTinyPage(trigger) {
    const rect = trigger.getBoundingClientRect();
    const cardRect = els.tinyPage.getBoundingClientRect();
    const margin = 16;
    const gap = 18;
    let left = rect.right + gap;
    let top = rect.top + rect.height / 2 - cardRect.height * 0.36;

    if (left + cardRect.width > window.innerWidth - margin) {
      left = rect.left - gap - cardRect.width;
    }
    if (left < margin) {
      left = rect.left + rect.width / 2 - cardRect.width / 2;
    }
    left = Math.max(margin, Math.min(left, window.innerWidth - cardRect.width - margin));
    top = Math.max(margin, Math.min(top, window.innerHeight - cardRect.height - margin));

    els.tinyPage.style.left = left + "px";
    els.tinyPage.style.top = top + "px";

    const originX = Math.max(12, Math.min(cardRect.width - 12, rect.left + rect.width / 2 - left));
    const originY = Math.max(12, Math.min(cardRect.height - 12, rect.top + rect.height / 2 - top));
    els.tinyPage.style.transformOrigin = originX + "px " + originY + "px";
  }

  function closeTiny(options) {
    if (!isTinyOpen) return;
    const settings = options || {};
    const trigger = activeTinyTrigger;
    isTinyOpen = false;
    activeTinyTrigger = null;
    activeTinyIndex = -1;
    els.tinyBackdrop.hidden = true;
    els.tinyPage.hidden = true;
    els.tinyPage.classList.remove("is-centered");
    els.tinyPage.style.left = "";
    els.tinyPage.style.top = "";
    els.tinyPage.style.transformOrigin = "";
    els.tinyPage.style.visibility = "";

    if (!settings.silent) playSound("close");
    if (settings.restoreFocus !== false && trigger && trigger.isConnected) {
      trigger.focus({ preventScroll: true });
    }
  }

  function updateSoundUI() {
    if (!els.soundToggle) return;
    els.soundToggle.classList.toggle("is-muted", !soundEnabled);
    els.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
    const soundLabel = soundEnabled ? tr("soundOffAria") : tr("soundOnAria");
    els.soundToggle.setAttribute("aria-label", soundLabel);
    els.soundToggle.title = soundLabel;
    const use = els.soundToggle.querySelector("use");
    if (use) use.setAttribute("href", soundEnabled ? "#icon-music" : "#icon-music-off");
  }

  function updateReadUI() {
    if (!els.readAloud) return;
    els.readAloud.classList.toggle("is-active", readSpeaking);
    els.readAloud.setAttribute("aria-pressed", String(readSpeaking));
    const readLabel = readSpeaking ? tr("stopReadAria") : tr("readAria");
    els.readAloud.setAttribute("aria-label", readLabel);
    els.readAloud.title = readLabel;
    const label = els.readAloud.querySelector(".reader-action-label");
    if (label) label.textContent = readSpeaking ? tr("stopReading") : tr("readToMe");
  }

  function speakPage() {
    if (!canSpeak || !currentBook) return;
    if (readSpeaking) {
      stopSpeech();
      return;
    }
    const page = currentBook.pages[currentPage];
    if (!page) return;

    window.speechSynthesis.cancel();
    speechToken += 1;
    const token = speechToken;
    const pageTitle = pageField(currentBook, currentPage, "title");
    const pageText = pageField(currentBook, currentPage, "text");
    const utterance = new SpeechSynthesisUtterance(pageTitle + ". " + pageText);
    utterance.lang = lang === "zh" ? "zh-CN" : "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1.08;
    utterance.volume = 1;
    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const matchingVoice = voices.find(function (voice) {
      return (voice.lang || "").toLowerCase().indexOf(lang === "zh" ? "zh" : "en") === 0;
    });
    if (matchingVoice) utterance.voice = matchingVoice;
    utterance.onend = function () {
      if (token !== speechToken) return;
      readSpeaking = false;
      updateReadUI();
    };
    utterance.onerror = function () {
      if (token !== speechToken) return;
      readSpeaking = false;
      updateReadUI();
    };
    readSpeaking = true;
    updateReadUI();
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if (!canSpeak) return;
    speechToken += 1;
    window.speechSynthesis.cancel();
    if (readSpeaking) {
      readSpeaking = false;
      updateReadUI();
    }
  }

  function ensureAudio() {
    if (!soundEnabled) return null;
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return null;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      return audioCtx;
    } catch (error) {
      return null;
    }
  }

  function tone(from, to, duration, type, volume, delay) {
    const ctx = ensureAudio();
    if (!ctx) return;
    const start = ctx.currentTime + (delay || 0);
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type || "sine";
    oscillator.frequency.setValueAtTime(from, start);
    if (to) oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, to), start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume || 0.035, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  function noiseSweep(duration, from, to, volume, delay) {
    const ctx = ensureAudio();
    if (!ctx) return;
    const start = ctx.currentTime + (delay || 0);
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    filter.frequency.setValueAtTime(from, start);
    filter.frequency.exponentialRampToValueAtTime(Math.max(60, to), start + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume || 0.022, start + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(start);
    source.stop(start + duration + 0.03);
  }

  function playSound(name) {
    if (!soundEnabled) return;
    if (name === "open") {
      noiseSweep(0.42, 900, 180, 0.02);
      tone(320, 620, 0.22, "sine", 0.03, 0.04);
    } else if (name === "page") {
      noiseSweep(0.26, 680, 240, 0.016);
      tone(420, 520, 0.12, "triangle", 0.018, 0.02);
    } else if (name === "pop") {
      tone(520, 780, 0.11, "triangle", 0.035);
    } else if (name === "close") {
      tone(500, 320, 0.12, "sine", 0.025);
    } else if (name === "found") {
      tone(660, 760, 0.1, "triangle", 0.03);
      tone(880, 980, 0.12, "triangle", 0.028, 0.08);
      tone(1108, 1200, 0.14, "sine", 0.024, 0.16);
    } else if (name === "finish") {
      tone(523, 523, 0.14, "triangle", 0.03);
      tone(659, 659, 0.14, "triangle", 0.03, 0.11);
      tone(784, 784, 0.14, "triangle", 0.03, 0.22);
      tone(1046, 1046, 0.26, "sine", 0.028, 0.33);
    }
  }

  function burst(x, y, colors, count) {
    if (reducedMotion() || !els.fxLayer) return;
    const palette = colors && colors.length ? colors : ["#FFC83D", "#FF6B57", "#25BFA6"];
    const numberOfStars = count || 8;
    for (let i = 0; i < numberOfStars; i += 1) {
      const star = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 34 + Math.random() * 92;
      const delay = Math.random() * 70;
      star.className = "fx-star";
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.setProperty("--dx", Math.cos(angle) * distance + "px");
      star.style.setProperty("--dy", Math.sin(angle) * distance + "px");
      star.style.setProperty("--rot", Math.round(Math.random() * 260 - 130) + "deg");
      star.style.setProperty("--size", 6 + Math.random() * 9 + "px");
      star.style.setProperty("--color", palette[i % palette.length]);
      star.style.animationDelay = delay + "ms";
      els.fxLayer.appendChild(star);
      window.setTimeout(function () {
        star.remove();
      }, 900 + delay);
    }
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = '<span class="toast-icon" aria-hidden="true"><svg class="icon"><use href="#icon-star"></use></svg></span>' +
      '<p class="toast-message"></p>' +
      '<button class="toast-close" type="button" aria-label="' + escapeHtml(tr("closeMessageAria")) + '"><svg class="icon" aria-hidden="true"><use href="#icon-close"></use></svg></button>';
    toast.querySelector(".toast-message").textContent = message;
    document.body.appendChild(toast);

    window.requestAnimationFrame(function () {
      toast.classList.add("is-visible");
    });

    let removeTimer = window.setTimeout(removeToast, 5200);
    function removeToast() {
      window.clearTimeout(removeTimer);
      toast.classList.remove("is-visible");
      window.setTimeout(function () {
        toast.remove();
      }, 260);
    }
    toast.querySelector(".toast-close").addEventListener("click", removeToast);
  }

  function handleBookGridClick(event) {
    const button = event.target.closest(".book-card");
    if (!button) return;
    const bookId = button.getAttribute("data-book-id");
    const book = books.find(function (item) {
      return item.id === bookId;
    });
    if (book) openBook(book);
  }

  function handleSurprise() {
    if (!books.length) return;
    let options = books;
    if (books.length > 1) {
      const current = document.activeElement && document.activeElement.closest
        ? document.activeElement.closest(".book-card")
        : null;
      if (current) {
        const currentId = current.getAttribute("data-book-id");
        options = books.filter(function (book) {
          return book.id !== currentId;
        });
      }
    }
    const choice = options[Math.floor(Math.random() * options.length)];
    playSound("pop");
    openBook(choice);
  }

  function handleTinyKeyboard(event) {
    if (!isTinyOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeTiny();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(els.tinyPage.querySelectorAll("button:not([disabled])"));
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

  function handleLanguageClick(event) {
    const button = event.target.closest("[data-lang]");
    if (!button) return;
    setLanguage(button.getAttribute("data-lang"));
  }

  function handleGlobalKeyboard(event) {
    if (isTinyOpen) {
      handleTinyKeyboard(event);
      return;
    }
    if (els.readerView.hidden) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextPage();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousPage();
    }
  }

  function handleSwipeStart(event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest("button, a")) return;
    swipeStart = { x: event.clientX, y: event.clientY };
  }

  function handleSwipeEnd(event) {
    if (!swipeStart) return;
    const deltaX = event.clientX - swipeStart.x;
    const deltaY = event.clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    if (deltaX < 0) nextPage();
    else previousPage();
  }

  function init() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    applyStaticTranslations();
    updateDocumentMeta();
    updateLanguageControls();
    renderShelf();
    updateSoundUI();
    updateReadUI();

    if (!canSpeak) {
      els.readAloud.hidden = true;
    }

    document.addEventListener("click", handleLanguageClick);
    els.bookGrid.addEventListener("click", handleBookGridClick);
    els.surpriseBtn.addEventListener("click", handleSurprise);
    els.backToShelf.addEventListener("click", closeReader);
    els.readAloud.addEventListener("click", speakPage);
    els.soundToggle.addEventListener("click", function () {
      soundEnabled = !soundEnabled;
      saveSound();
      updateSoundUI();
      if (soundEnabled) {
        playSound("pop");
        announce(tr("soundOnAnnounce"));
      } else {
        announce(tr("soundOffAnnounce"));
      }
    });
    els.prevBtn.addEventListener("click", previousPage);
    els.nextBtn.addEventListener("click", function () {
      if (!currentBook) return;
      if (currentPage >= currentBook.pages.length - 1) finishBook();
      else nextPage();
    });
    els.tinyBackdrop.addEventListener("click", function () {
      closeTiny();
    });
    els.tinyClose.addEventListener("click", function () {
      closeTiny();
    });
    els.tinyDone.addEventListener("click", function () {
      closeTiny();
    });
    document.addEventListener("keydown", handleGlobalKeyboard);
    els.bookPage.addEventListener("pointerdown", handleSwipeStart);
    els.bookPage.addEventListener("pointerup", handleSwipeEnd);
    els.bookPage.addEventListener("pointercancel", function () {
      swipeStart = null;
    });
    window.addEventListener("resize", function () {
      if (isTinyOpen && activeTinyTrigger) {
        if (window.innerWidth < 900 || window.innerHeight < 620) {
          els.tinyPage.classList.add("is-centered");
          els.tinyPage.style.left = "";
          els.tinyPage.style.top = "";
        } else {
          els.tinyPage.classList.remove("is-centered");
          positionTinyPage(activeTinyTrigger);
        }
      }
    });
    window.addEventListener("beforeunload", function () {
      if (canSpeak) window.speechSynthesis.cancel();
    });
  }

  init();
})();
