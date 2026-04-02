(function () {
  "use strict";

  const CAT_LABEL = {
    valorant: "VALORANT",
    fivem: "FIVEM",
    heartopia: "HEARTOPIA",
    serial: "SERIAL",
  };

  const DUR_LABEL = {
    en: { "1day": "1 DAY", "1week": "1 WEEK", "1month": "1 MONTH", lifetime: "LIFETIME" },
    th: { "1day": "1 วัน", "1week": "1 สัปดาห์", "1month": "1 เดือน", lifetime: "ตลอดชีพ" },
  };

  const I18N = {
    en: {
      doc_title: "Serif by signal_02_ — Undetected & Instant Delivery",
      nav_products: "Products",
      nav_status: "Status",
      nav_about: "About",
      nav_team: "Team",
      nav_reviews: "Reviews",
      nav_faq: "FAQ",
      nav_login: "Login",
      hero_trust_html:
        'Trusted by <strong>300+</strong> customers — <strong>5.00</strong> ★ average rating',
      hero_title_html:
        'Unleash Your<br>\n      <span class="hero-glow-accent">Full Potential</span>',
      hero_sub:
        "Premium, undetected tools built for performance and reliability. Instant delivery, 24/7 support, and trusted by hundreds worldwide.",
      hero_browse: "Browse Products",
      hero_learn: "Learn More",
      pill_undetected: "Undetected",
      pill_instant: "Instant Delivery",
      pill_support: "24/7 Support",
      pill_setup: "Easy Setup",
      stat_users: "Active Users",
      stat_undetect: "% Undetection Rate",
      stat_games: "Games Supported",
      products_label: "OUR PRODUCTS",
      products_title_a: "Featured",
      products_title_b: "Products",
      products_sub:
        "Premium tools designed for peak performance, trusted by hundreds worldwide.",
      filter_all: "All",
      filter_valorant: "Valorant",
      filter_fivem: "Fivem",
      filter_serial: "Serial",
      view_details: "View Details",
      add_cart: "Buy Now",
      rating_safety: "Safety",
      about_kicker: "OUR STORY",
      about_headline_html:
        'Built by a team that was <span class="about-gradient">tired of bad tools</span>',
      about_lead:
        "We spent years using fragmented tools that slowed us down. So we built the one we always wished existed — unified, fast, and obsessively maintained.",
      about_owner_html:
        '<span class="text-fg-muted">Owner</span> <strong class="text-white">signal_02_</strong> — product vision, releases, and roadmap.',
      about_team_html:
        'Core team: <strong class="text-fg-text">support</strong>, <strong class="text-fg-text">infra</strong>, and <strong class="text-fg-text">security</strong> — so installs, uptime, and detection posture stay ahead of patches.',
      team_title_a: "Team",
      team_title_b: "Overview",
      team_sub: "Live snapshot of what we are shipping and who is online.",
      team_panel_heading: "Team Overview",
      team_active_now: "Active Now",
      live_badge: "Live",
      status_page_title_main: "Product",
      status_page_sub:
        "Live operational feed — same layout as team overview, updated continuously.",
      status_panel_title: "Product",
      status_maint: "Maintenance in progress — VALORANT | VAL External",
      status_name_1: "VALORANT | VAL Private",
      status_name_2: "VALORANT | VAL External",
      status_name_3: "VALORANT | VGC Bypass",
      status_name_8: "VALORANT | VAL Aim Color",
      status_name_4: "Fivem | CMD Melvin",
      status_name_5: "Fivem | G SPOOF",
      status_name_6: "PERM V1",
      status_name_7: "PEAM V2",
      cat_valorant: "Valorant",
      cat_fivem: "Fivem",
      cat_heartopia: "Heartopia",
      cat_serial: "Serial",
      modal_discord_hint: "Opens our Discord — complete purchase with staff in tickets.",
      modal_info_support_kicker: "SUPPORT",
      modal_info_support: "Priority Discord tickets — median reply under 30 minutes at peak.",
      modal_info_updates_kicker: "UPDATES",
      modal_info_updates: "Scheduled drops after major patches — changelog posted in Discord.",
      modal_info_delivery_kicker: "DELIVERY",
      modal_info_delivery: "Automated handoff right after payment confirmation.",
      modal_info_compat_kicker: "COMPATIBILITY",
      modal_info_compat: "Windows 10 & 11 · 64-bit · admin rights for loader",
      state_ok: "Undetected",
      state_warn: "Updating",
      reviews_title_a: "Customer",
      reviews_title_b: "Reviews",
      reviews_sub: "Trusted by competitive players worldwide.",
      faq_label: "QUESTIONS",
      faq_title: "FAQ",
      modal_back: "Back to Products",
      modal_rating_label: "5.0 Safety Rating",
      modal_select_duration: "SELECT DURATION",
      modal_qty: "QUANTITY",
      modal_buy: "Buy Now",
      modal_view_faq: "View FAQ",
      lang_btn_en: "English (ENG)",
      lang_btn_th: "Thailand (TH)",
    },
    th: {
      doc_title: "Serif by signal_02_ — ปลอดภัย & ส่งทันที",
      nav_products: "สินค้า",
      nav_status: "สถานะ",
      nav_about: "เกี่ยวกับ",
      nav_team: "ทีม",
      nav_reviews: "รีวิว",
      nav_faq: "คำถาม",
      nav_login: "เข้าสู่ระบบ",
      hero_trust_html:
        'ได้รับความไว้วางใจจาก <strong>300+</strong> ลูกค้า — <strong>5.00</strong> ★ คะแนนเฉลี่ย',
      hero_title_html:
        'ปลดปล่อย<br>\n      <span class="hero-glow-accent">ศักยภาพเต็มที่</span>',
      hero_sub:
        "เครื่องมือพรีเมียม ปลอดภัย มั่นคง ส่งทันที ซัพพอร์ต 24/7 ไว้วางใจได้จากผู้ใช้ทั่วโลก",
      hero_browse: "ดูสินค้า",
      hero_learn: "เรียนรู้เพิ่ม",
      pill_undetected: "ไม่ถูกตรวจจับ",
      pill_instant: "ส่งทันที",
      pill_support: "ซัพพอร์ต 24/7",
      pill_setup: "ติดตั้งง่าย",
      stat_users: "ผู้ใช้ที่ใช้งาน",
      stat_undetect: "% อัตราไม่ถูกตรวจจับ",
      stat_games: "เกมที่รองรับ",
      products_label: "สินค้าของเรา",
      products_title_a: "สินค้า",
      products_title_b: "แนะนำ",
      products_sub: "เครื่องมือคุณภาพสูง ออกแบบเพื่อประสิทธิภาพสูงสุด ไว้วางใจได้จากผู้ใช้ทั่วโลก",
      filter_all: "ทั้งหมด",
      filter_valorant: "Valorant",
      filter_fivem: "Fivem",
      filter_serial: "Serial",
      view_details: "ดูรายละเอียด",
      add_cart: "ซื้อเลย",
      rating_safety: "ความปลอดภัย",
      about_kicker: "เรื่องราวของเรา",
      about_headline_html:
        'สร้างโดยทีมที่เบื่อ <span class="about-gradient">เครื่องมือแย่ๆ</span>',
      about_lead:
        "เราใช้เวลาหลายปีกับเครื่องมือที่กระจัดกระจาย จึงสร้างสิ่งที่เราอยากได้ — รวมศูนย์ เร็ว และดูแลอย่างต่อเนื่อง",
      about_owner_html:
        '<span class="text-fg-muted">เจ้าของ</span> <strong class="text-white">signal_02_</strong> — วิสัยทัศน์ผลิตภัณฑ์ การออกเวอร์ชัน และแผนงาน',
      about_team_html:
        'ทีมหลัก: <strong class="text-fg-text">ซัพพอร์ต</strong> <strong class="text-fg-text">โครงสร้าง</strong> และ <strong class="text-fg-text">ความปลอดภัย</strong> — เพื่อให้ติดตั้ง อัปไทม์ และสถานะการตรวจจับอยู่เหนือแพตช์',
      team_title_a: "ภาพรวม",
      team_title_b: "ทีม",
      team_sub: "สถานะสดว่ากำลังพัฒนาอะไร และใครออนไลน์",
      team_panel_heading: "ภาพรวมทีม",
      team_active_now: "ออนไลน์ตอนนี้",
      live_badge: "สด",
      status_page_title_main: "สินค้า",
      status_page_sub: "ฟีดสถานะแบบเดียวกับภาพรวมทีม — อัปเดตต่อเนื่อง",
      status_panel_title: "สินค้า",
      status_maint: "กำลังบำรุงรักษา — VALORANT | VAL External",
      status_name_1: "VALORANT | VAL Private",
      status_name_2: "VALORANT | VAL External",
      status_name_3: "VALORANT | VGC Bypass",
      status_name_8: "VALORANT | VAL Aim Color",
      status_name_4: "Fivem | CMD Melvin",
      status_name_5: "Fivem | G SPOOF",
      status_name_6: "PERM V1",
      status_name_7: "PEAM V2",
      cat_valorant: "Valorant",
      cat_fivem: "Fivem",
      cat_heartopia: "Heartopia",
      cat_serial: "Serial",
      modal_discord_hint: "เปิด Discord — ซื้อและคุยกับทีมผ่านตั๋วได้เลย",
      modal_info_support_kicker: "ซัพพอร์ต",
      modal_info_support: "ตั๋ว Discord ลำดับความสำคัญ — ตอบกลับโดยประมาณภายใน 30 นาทีในช่วงพีค",
      modal_info_updates_kicker: "อัปเดต",
      modal_info_updates: "ปล่อยหลังแพตช์ใหญ่ — มี changelog ใน Discord",
      modal_info_delivery_kicker: "การส่งมอบ",
      modal_info_delivery: "ส่งมอบอัตโนมัติหลังยืนยันการชำระเงิน",
      modal_info_compat_kicker: "ความเข้ากันได้",
      modal_info_compat: "Windows 10 และ 11 · 64-bit · สิทธิ์ผู้ดูแลระบบสำหรับโหลดเดอร์",
      state_ok: "ไม่ถูกตรวจจับ",
      state_warn: "กำลังอัปเดต",
      reviews_title_a: "รีวิว",
      reviews_title_b: "ลูกค้า",
      reviews_sub: "ได้รับความไว้วางใจจากผู้เล่นในระดับแข่งขันทั่วโลก",
      faq_label: "คำถาม",
      faq_title: "FAQ",
      modal_back: "กลับไปสินค้า",
      modal_rating_label: "คะแนนความปลอดภัย 5.0",
      modal_select_duration: "เลือกระยะเวลา",
      modal_qty: "จำนวน",
      modal_buy: "ซื้อเลย",
      modal_view_faq: "ดู FAQ",
      lang_btn_en: "English (ENG)",
      lang_btn_th: "ไทย (TH)",
    },
  };

  var currentLang = "en";

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    try {
      localStorage.setItem("siteLang", lang);
    } catch (e) {}
    document.documentElement.lang = lang === "th" ? "th" : "en";
    document.body.classList.toggle("lang-th", lang === "th");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || !I18N[lang][key]) return;
      if (el.tagName === "TITLE") {
        document.title = I18N[lang][key];
        return;
      }
      el.textContent = I18N[lang][key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });

    document.querySelectorAll("#productsGrid .product-card").forEach(function (card) {
      updateCardPrice(card);
    });

    if (productModal && productModal.classList.contains("open") && modalCard) {
      buildModalDurations(modalCard);
      syncModalPrice();
    }
  }

  document.querySelectorAll(".lang-switch-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (!lang) return;
      applyLang(lang);
      document.querySelectorAll(".lang-switch-btn").forEach(function (b) {
        var on = b.getAttribute("data-lang") === lang;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    });
  });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const productModal = document.getElementById("productModal");
  const modalBack = document.getElementById("modalBack");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalCategory = document.getElementById("modalCategory");
  const modalBadge = document.getElementById("modalBadge");
  const modalPlaceholder = document.getElementById("modalPlaceholder");
  const modalProductImg = document.getElementById("modalProductImg");
  const modalDurations = document.getElementById("modalDurations");
  const modalPrice = document.getElementById("modalPrice");
  const modalPricePeriod = document.getElementById("modalPricePeriod");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  const qtyValue = document.getElementById("qtyValue");

  let modalCard = null;
  let modalQty = 1;

  function slugFromHash() {
    var m = /^#product\/([^/?#]+)/.exec(location.hash);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function setProductHash(slug) {
    if (!slug) return;
    var next = "#product/" + encodeURIComponent(slug);
    if (location.hash !== next) {
      history.replaceState(null, "", location.pathname + location.search + next);
    }
  }

  function clearProductHash() {
    if (/^#product\//.test(location.hash)) {
      history.replaceState(null, "", location.pathname + location.search + "#products");
    }
  }

  function findCardBySlug(slug) {
    if (!slug || !/^[a-z0-9-]+$/i.test(slug)) return null;
    return document.querySelector('#productsGrid [data-product-slug="' + slug + '"]');
  }

  function setMobileMenuOpen(open) {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      setMobileMenuOpen(!mobileMenu.classList.contains("open"));
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMobileMenuOpen(false);
      });
    });
  }

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.getAttribute("data-filter");
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      document.querySelectorAll("#productsGrid .product-card").forEach(function (card) {
        const cat = card.getAttribute("data-category");
        const show = filter === "all" || cat === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  function updateCardPrice(card) {
    const active = card.querySelector(".duration-tab.active");
    if (!active) return;
    const price = active.getAttribute("data-price");
    const dur = active.getAttribute("data-duration");
    var label =
      dur && DUR_LABEL[currentLang] && DUR_LABEL[currentLang][dur]
        ? DUR_LABEL[currentLang][dur]
        : active.textContent.trim();
    if (currentLang === "en") label = String(label).toUpperCase();
    const priceEl = card.querySelector(".price-value");
    const labelEl = card.querySelector(".price-label");
    if (priceEl) priceEl.textContent = "$" + price;
    if (labelEl) labelEl.textContent = label;
  }

  document.querySelectorAll("#productsGrid .product-card").forEach(function (card) {
    card.querySelectorAll(".duration-tab").forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        e.stopPropagation();
        card.querySelectorAll(".duration-tab").forEach(function (t) {
          t.classList.toggle("active", t === tab);
        });
        updateCardPrice(card);
      });
    });
  });

  document.querySelectorAll(".faq-item").forEach(function (item) {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.classList.remove("open");
        const oq = other.querySelector(".faq-q");
        if (oq) oq.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  function parsePrice(str) {
    return parseFloat(String(str).replace(/[^0-9.]/g, "")) || 0;
  }

  function formatMoney(n) {
    return "$" + n.toFixed(2);
  }

  function buildModalDurations(card) {
    modalDurations.innerHTML = "";
    const tabs = card.querySelectorAll(".duration-tab");
    if (!tabs.length) {
      const pv = card.querySelector(".price-value");
      if (pv && modalPrice && modalPricePeriod) {
        modalPrice.textContent = pv.textContent.trim();
        modalPricePeriod.textContent = "";
      }
      return;
    }
    tabs.forEach(function (tab, i) {
      const dur = tab.getAttribute("data-duration");
      const price = tab.getAttribute("data-price");
      const label =
        dur && DUR_LABEL[currentLang] && DUR_LABEL[currentLang][dur]
          ? DUR_LABEL[currentLang][dur]
          : tab.textContent.trim();
      const div = document.createElement("button");
      div.type = "button";
      div.className = "modal-dur-card" + (tab.classList.contains("active") ? " active" : "");
      div.setAttribute("data-duration", dur || "");
      div.setAttribute("data-price", price || "0");
      div.innerHTML =
        '<span class="dur-label">' +
        label +
        '</span><span class="dur-price">' +
        formatMoney(parsePrice(price)) +
        "</span>";
      div.addEventListener("click", function () {
        modalDurations.querySelectorAll(".modal-dur-card").forEach(function (c) {
          c.classList.remove("active");
        });
        div.classList.add("active");
        syncModalPrice();
      });
      modalDurations.appendChild(div);
    });
  }

  function getSelectedModalDuration() {
    const el = modalDurations.querySelector(".modal-dur-card.active");
    if (!el) return null;
    return {
      price: parsePrice(el.getAttribute("data-price")),
      label: el.querySelector(".dur-label")
        ? el.querySelector(".dur-label").textContent.trim()
        : "",
    };
  }

  function syncModalPrice() {
    const sel = getSelectedModalDuration();
    if (!sel) return;
    modalPrice.textContent = formatMoney(sel.price * modalQty);
    modalPricePeriod.textContent = "/ " + sel.label;
  }

  function openModalFromCard(card, opts) {
    opts = opts || {};
    modalCard = card;
    modalQty = 1;
    if (qtyValue) qtyValue.textContent = "1";

    modalTitle.textContent = card.querySelector(".product-title").textContent.trim();
    modalDesc.textContent = card.querySelector(".product-desc").textContent.trim();

    var label = card.getAttribute("data-category-label");
    var cat = card.getAttribute("data-category") || "";
    var catKey = cat ? "cat_" + cat : "";
    if (catKey && I18N[currentLang][catKey]) {
      modalCategory.textContent = I18N[currentLang][catKey];
    } else {
      modalCategory.textContent = label || CAT_LABEL[cat] || (cat ? String(cat).toUpperCase() : "");
    }

    const badgeSrc = card.querySelector(".product-badge");
    modalBadge.className = badgeSrc ? badgeSrc.className : "product-badge in-stock";
    modalBadge.textContent = badgeSrc ? badgeSrc.textContent.trim() : "";

    const ph = card.querySelector(".placeholder-box");
    const thumbImg = card.querySelector(".product-thumb-img");
    if (modalProductImg && thumbImg && thumbImg.getAttribute("src")) {
      modalProductImg.src = thumbImg.currentSrc || thumbImg.src;
      modalProductImg.alt = thumbImg.getAttribute("alt") || "";
      modalProductImg.classList.remove("is-hidden");
      if (modalPlaceholder) {
        modalPlaceholder.classList.add("is-hidden");
      }
    } else {
      if (modalProductImg) {
        modalProductImg.classList.add("is-hidden");
        modalProductImg.removeAttribute("src");
      }
      if (modalPlaceholder) {
        modalPlaceholder.classList.remove("is-hidden");
        modalPlaceholder.textContent = ph ? ph.textContent.trim() : "";
      }
    }

    const img = card.querySelector(".product-image");
    const modalImg = document.querySelector(".modal-image");
    if (img && modalImg) {
      if (img.getAttribute("style")) {
        modalImg.setAttribute("style", img.getAttribute("style"));
      } else {
        modalImg.removeAttribute("style");
      }
    }

    buildModalDurations(card);
    syncModalPrice();

    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalBack.focus();

    if (!opts.fromRoute) {
      var slug = card.getAttribute("data-product-slug");
      if (slug) setProductHash(slug);
    }
  }

  function closeModal() {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalCard = null;
    clearProductHash();
  }

  document.querySelectorAll("#productsGrid .product-overlay").forEach(function (overlay) {
    overlay.setAttribute("role", "button");
    overlay.setAttribute("tabindex", "0");
    overlay.setAttribute("aria-label", "View product details");
    function open(e) {
      const card = overlay.closest(".product-card");
      if (card) openModalFromCard(card, { fromRoute: false });
    }
    overlay.addEventListener("click", open);
    overlay.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(e);
      }
    });
  });

  if (modalBack) {
    modalBack.addEventListener("click", closeModal);
  }

  if (productModal) {
    productModal.addEventListener("click", function (e) {
      if (e.target === productModal) closeModal();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && productModal && productModal.classList.contains("open")) {
      closeModal();
    }
  });

  if (qtyMinus && qtyPlus && qtyValue) {
    qtyMinus.addEventListener("click", function () {
      modalQty = Math.max(1, modalQty - 1);
      qtyValue.textContent = String(modalQty);
      syncModalPrice();
    });
    qtyPlus.addEventListener("click", function () {
      modalQty = Math.min(99, modalQty + 1);
      qtyValue.textContent = String(modalQty);
      syncModalPrice();
    });
  }

  function animateValue(el, target) {
    if (!el) return;
    const duration = 1500;
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = target >= 1000 ? val.toLocaleString() : String(val);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const stats = document.querySelectorAll(".stat-num");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stats.forEach(function (el) {
      const target = parseInt(el.getAttribute("data-target"), 10);
      el.textContent = target >= 1000 ? target.toLocaleString() : String(target);
    });
  } else if (stats.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          if (el.getAttribute("data-animated")) return;
          el.setAttribute("data-animated", "1");
          animateValue(el, target);
        });
      },
      { threshold: 0.3 }
    );
    stats.forEach(function (s) {
      io.observe(s);
    });
  }

  if ("IntersectionObserver" in window) {
    var revealIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      revealIo.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("reveal-visible");
    });
  }

  function tryOpenFromHash() {
    if (!productModal) return;
    var slug = slugFromHash();
    if (slug) {
      var card = findCardBySlug(slug);
      if (card) {
        openModalFromCard(card, { fromRoute: true });
        return;
      }
    }
    if (productModal.classList.contains("open") && !slug) {
      productModal.classList.remove("open");
      productModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      modalCard = null;
    }
  }

  window.addEventListener("hashchange", tryOpenFromHash);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      tryOpenFromHash();
    });
  } else {
    tryOpenFromHash();
  }

  function runInitLang() {
    var saved = "en";
    try {
      saved = localStorage.getItem("siteLang") || "en";
    } catch (e) {}
    applyLang(saved);
    document.querySelectorAll(".lang-switch-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === saved;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runInitLang);
  } else {
    runInitLang();
  }
})();
