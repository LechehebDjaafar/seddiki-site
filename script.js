/* =====================================================================
   وكالة صديقي للسياحة والأسفار — behaviour
   Edit the two constants below to change the phone number or the countdown date.
   ===================================================================== */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "213660989838";               // international format, no + sign
  var COUNTDOWN_TARGET = Date.UTC(2026, 9, 14, 23, 0, 0); // 15 Oct 2026 00:00 Algeria time (UTC+1)

  /* ------------------------------------------------------------------
     Translations  (ar = default, fr, en)
     ------------------------------------------------------------------ */
  var T = {
    ar: {
      "meta.title": "وكالة صديقي للسياحة والأسفار",
      "meta.desc": "وكالة صديقي للسياحة والأسفار في ورقلة. عمرة 15 أكتوبر 2026 بفندق الديوان، تذاكر طيران ورحلات.",
      "skip": "انتقل إلى المحتوى",
      "brand.name": "وكالة صديقي",
      "nav.omra": "عمرة 15 أكتوبر", "nav.services": "الخدمات", "nav.gallery": "الصور", "nav.agency": "الوكالة", "nav.contact": "تواصل معنا",
      "lang.label": "اللغة", "theme.toggle": "تبديل الوضع الفاتح والداكن",
      "btn.call": "اتصل الآن", "btn.book": "احجز مكانك", "btn.wa": "واتساب", "btn.waopen": "فتح واتساب",
      "btn.copy": "نسخ", "btn.copied": "تم النسخ", "btn.directions": "الاتجاهات على الخرائط",
      "hero.badge": "الأماكن الأخيرة لعمرة 15 أكتوبر",
      "hero.title": "من ورقلة إلى مكة المكرمة، نرافقكم خطوة بخطوة",
      "hero.lead": "عمرة تجمع بين الراحة والتنظيم والقرب من الحرم. من لحظة السفر حتى الوصول، فريق الوكالة معكم.",
      "cap.aria": "ملخص عرض العمرة", "cap.dest": "الوجهة", "cap.destv": "مكة المكرمة", "cap.date": "الانطلاق", "cap.datev": "15 أكتوبر 2026",
      "cap.stay": "الإقامة", "cap.stayv": "فندق الديوان، أجياد السد", "cap.go": "احجز مكانك",
      "trust.1": "شعار IATA على واجهة الوكالة", "trust.2": "6 شركات طيران", "trust.3": "مكتب في حي الشرفة، ورقلة",
      "route.from": "ورقلة", "route.to": "مكة المكرمة",
      "omra.title": "عمرة 15 أكتوبر 2026",
      "omra.sub": "سعر تنافسي وعدد أماكن محدود. تواصلوا معنا للحجز والاستفسار.",
      "omra.posteralt": "إعلان عمرة 15 أكتوبر 2026 بفندق الديوان",
      "omra.details": "تفاصيل الرحلة",
      "omra.stay": "الإقامة", "omra.stayv": "فندق الديوان، شارع أجياد السد",
      "omra.date": "الانطلاق", "omra.datev": "15 أكتوبر 2026",
      "omra.price": "السعر", "omra.pricev": "سعر تنافسي، اتصلوا لمعرفة التفاصيل",
      "omra.seats": "الأماكن", "omra.seatsv": "الأماكن الأخيرة متاحة",
      "count.title": "المتبقي على 15 أكتوبر", "count.note": "الأماكن تُحجز بحسب الأسبقية.",
      "count.d": "يوم", "count.h": "ساعة", "count.m": "دقيقة", "count.s": "ثانية",
      "count.ended": "انطلق فوج 15 أكتوبر. اسألونا عن الرحلة القادمة.",
      "svc.title": "خدماتنا", "svc.sub": "كل ما يخص سفركم في مكان واحد داخل ورقلة.",
      "svc.1.t": "العمرة", "svc.1.p": "رحلات منظمة مع مرافقة من لحظة السفر حتى الوصول إلى مكة، وإقامة قريبة من الحرم.",
      "svc.2.t": "تذاكر الطيران", "svc.2.p": "حجز على الخطوط التركية والتونسية والجوية الجزائرية والقطرية والإماراتية والسعودية.",
      "svc.3.t": "السياحة والأسفار", "svc.3.p": "اسألونا عن وجهتكم. نقترح عليكم الرحلة المناسبة ونتابع معكم إلى لحظة الانطلاق.",
      "why.title": "لماذا تسافرون معنا",
      "why.1.t": "وكالة بمكتب حقيقي", "why.1.p": "تجدوننا في حي الشرفة بورقلة وتتحدثون مع فريقنا وجهاً لوجه.",
      "why.2.t": "مرافقة خطوة بخطوة", "why.2.p": "من لحظة السفر حتى الوصول إلى مكة، لا تسافرون وحدكم.",
      "why.3.t": "إقامة قريبة من الحرم", "why.3.p": "فندق الديوان في شارع أجياد السد لهذا الفوج.",
      "why.4.t": "أماكن محدودة", "why.4.p": "عدد المقاعد محدود لنضمن تنظيماً أفضل لكل فوج.",
      "air.title": "شركات الطيران التي نحجز عليها", "air.sub": "كما تظهر على واجهة الوكالة.",
      "air.tk": "الخطوط التركية", "air.tn": "الخطوط التونسية", "air.dz": "الجوية الجزائرية", "air.qa": "القطرية", "air.ae": "الإماراتية", "air.sa": "السعودية",
      "gal.title": "لحظات من رحلاتنا", "gal.sub": "صور حقيقية من رحلات العمرة مع الوكالة.", "gal.alt": "صورة من رحلات وكالة صديقي",
      "ag.title": "الوكالة في ورقلة", "ag.alt": "واجهة وكالة صديقي للسياحة والأسفار في ورقلة",
      "ag.rating": "على خرائط جوجل، من مراجعتين",
      "ag.addr.t": "حي الشرفة، ورقلة", "ag.addr.p": "زورونا في المكتب أو اتصلوا بنا قبل الحضور.",
      "com.title": "حضور في المجتمع",
      "com.p": "في 12 سبتمبر ساهمت الوكالة في حفل تكريم الفائزين والمشاركين في مسابقة السيرة النبوية ﷺ.",
      "com.alt": "حفل تكريم مسابقة السيرة النبوية",
      "rev.title": "ما يقوله من سافروا معنا",
      "rev.1.src": "مراجعة على خرائط جوجل، 5 نجوم", "rev.2.src": "تعليق على صفحة الوكالة في فيسبوك",
      "ct.title": "احجزوا مكانكم", "ct.sub": "اتصلوا بنا أو راسلونا على واتساب.",
      "ct.phone": "الهاتف", "ct.email": "البريد الإلكتروني", "ct.addr.k": "العنوان", "ct.addr.v": "حي الشرفة، ورقلة، الجزائر",
      "ct.wa.t": "راسلونا على واتساب", "ct.wa.p": "اكتبوا لنا اسمكم وعدد الأشخاص، ونرد عليكم بتفاصيل عمرة 15 أكتوبر.",
      "footer.name": "وكالة صديقي للسياحة والأسفار", "footer.tag": "نرافقكم في السفر ونشارككم أجمل المحطات",
      "rights": "© {year} جميع الحقوق محفوظة",
      "dock.home": "الرئيسية", "dock.omra": "عمرة", "dock.photos": "الصور", "dock.contact": "تواصل",
      "lb.close": "إغلاق", "lb.left": "الصورة على اليسار", "lb.right": "الصورة على اليمين",
      "wa.msg": "السلام عليكم، أريد الاستفسار عن عمرة 15 أكتوبر 2026."
    },

    fr: {
      "meta.title": "Seddiki Tourism et Voyages | Omra depuis Ouargla",
      "meta.desc": "Agence de voyages Seddiki à Ouargla. Omra du 15 octobre 2026 à l'hôtel Al Diwan, billets d'avion et voyages.",
      "skip": "Aller au contenu",
      "brand.name": "Agence Seddiki",
      "nav.omra": "Omra 15 octobre", "nav.services": "Services", "nav.gallery": "Photos", "nav.agency": "L'agence", "nav.contact": "Contact",
      "lang.label": "Langue", "theme.toggle": "Basculer entre mode clair et sombre",
      "btn.call": "Appeler", "btn.book": "Réserver ma place", "btn.wa": "WhatsApp", "btn.waopen": "Ouvrir WhatsApp",
      "btn.copy": "Copier", "btn.copied": "Copié", "btn.directions": "Itinéraire sur la carte",
      "hero.badge": "Dernières places pour la Omra du 15 octobre",
      "hero.title": "D'Ouargla à La Mecque, nous vous accompagnons pas à pas",
      "hero.lead": "Une Omra qui allie confort, organisation et proximité du Haram. Du départ jusqu'à l'arrivée à La Mecque, notre équipe est à vos côtés.",
      "cap.aria": "Résumé de l'offre Omra", "cap.dest": "Destination", "cap.destv": "La Mecque", "cap.date": "Départ", "cap.datev": "15 octobre 2026",
      "cap.stay": "Hébergement", "cap.stayv": "Hôtel Al Diwan, Ajyad Es-Sad", "cap.go": "Réserver ma place",
      "trust.1": "Logo IATA sur la façade de l'agence", "trust.2": "6 compagnies aériennes", "trust.3": "Agence au quartier Echorfa, Ouargla",
      "route.from": "Ouargla", "route.to": "La Mecque",
      "omra.title": "Omra du 15 octobre 2026",
      "omra.sub": "Prix compétitif et places limitées. Contactez-nous pour réserver ou vous renseigner.",
      "omra.posteralt": "Affiche de la Omra du 15 octobre 2026 à l'hôtel Al Diwan",
      "omra.details": "Détails du voyage",
      "omra.stay": "Hébergement", "omra.stayv": "Hôtel Al Diwan, rue Ajyad Es-Sad",
      "omra.date": "Départ", "omra.datev": "15 octobre 2026",
      "omra.price": "Prix", "omra.pricev": "Prix compétitif, appelez-nous pour les détails",
      "omra.seats": "Places", "omra.seatsv": "Dernières places disponibles",
      "count.title": "Compte à rebours jusqu'au 15 octobre", "count.note": "Les places sont attribuées par ordre d'inscription.",
      "count.d": "jours", "count.h": "heures", "count.m": "min", "count.s": "sec",
      "count.ended": "Le groupe du 15 octobre est parti. Renseignez-vous sur le prochain voyage.",
      "svc.title": "Nos services", "svc.sub": "Tout pour votre voyage, au même endroit à Ouargla.",
      "svc.1.t": "Omra", "svc.1.p": "Voyages organisés avec accompagnement du départ jusqu'à l'arrivée à La Mecque, et un hébergement proche du Haram.",
      "svc.2.t": "Billets d'avion", "svc.2.p": "Réservation sur Turkish Airlines, Tunisair, Air Algérie, Qatar Airways, Emirates et Saudia.",
      "svc.3.t": "Tourisme et voyages", "svc.3.p": "Dites-nous où vous voulez aller. Nous vous proposons le voyage adapté et vous suivons jusqu'au départ.",
      "why.title": "Pourquoi voyager avec nous",
      "why.1.t": "Une vraie agence", "why.1.p": "Retrouvez-nous au quartier Echorfa à Ouargla et parlez à notre équipe en face à face.",
      "why.2.t": "Accompagnement pas à pas", "why.2.p": "Du départ jusqu'à l'arrivée à La Mecque, vous ne voyagez pas seuls.",
      "why.3.t": "Hébergement proche du Haram", "why.3.p": "Hôtel Al Diwan, rue Ajyad Es-Sad, pour ce groupe.",
      "why.4.t": "Places limitées", "why.4.p": "Le nombre de places est limité pour mieux organiser chaque groupe.",
      "air.title": "Compagnies aériennes de réservation", "air.sub": "Telles qu'elles figurent sur la façade de l'agence.",
      "air.tk": "Turkish Airlines", "air.tn": "Tunisair", "air.dz": "Air Algérie", "air.qa": "Qatar Airways", "air.ae": "Emirates", "air.sa": "Saudia",
      "gal.title": "Moments de nos voyages", "gal.sub": "De vraies photos de nos voyages de Omra.", "gal.alt": "Photo d'un voyage avec l'agence Seddiki",
      "ag.title": "L'agence à Ouargla", "ag.alt": "Façade de l'agence Seddiki Tourism et Voyages à Ouargla",
      "ag.rating": "sur Google Maps, d'après 2 avis",
      "ag.addr.t": "Quartier Echorfa, Ouargla", "ag.addr.p": "Passez nous voir à l'agence ou appelez-nous avant de venir.",
      "com.title": "Présence dans la communauté",
      "com.p": "Le 12 septembre, l'agence a contribué à la cérémonie en l'honneur des gagnants et participants du concours sur la Sîra du Prophète ﷺ.",
      "com.alt": "Cérémonie du concours sur la Sîra",
      "rev.title": "Ce que disent nos voyageurs",
      "rev.1.src": "Avis Google Maps, 5 étoiles", "rev.2.src": "Commentaire sur la page Facebook de l'agence",
      "ct.title": "Réservez votre place", "ct.sub": "Appelez-nous ou écrivez-nous sur WhatsApp.",
      "ct.phone": "Téléphone", "ct.email": "E-mail", "ct.addr.k": "Adresse", "ct.addr.v": "Quartier Echorfa, Ouargla, Algérie",
      "ct.wa.t": "Écrivez-nous sur WhatsApp", "ct.wa.p": "Indiquez votre nom et le nombre de personnes, nous vous répondons avec les détails de la Omra du 15 octobre.",
      "footer.name": "Seddiki Tourism et Voyages", "footer.tag": "Nous vous accompagnons en voyage et partageons vos plus beaux moments",
      "rights": "© {year} Tous droits réservés",
      "dock.home": "Accueil", "dock.omra": "Omra", "dock.photos": "Photos", "dock.contact": "Contact",
      "lb.close": "Fermer", "lb.left": "Photo à gauche", "lb.right": "Photo à droite",
      "wa.msg": "Bonjour, je souhaite des informations sur la Omra du 15 octobre 2026."
    },

    en: {
      "meta.title": "Seddiki Tourism & Travel | Umrah from Ouargla",
      "meta.desc": "Seddiki travel agency in Ouargla. Umrah on 15 October 2026 at Al Diwan Hotel, flight tickets and trips.",
      "skip": "Skip to content",
      "brand.name": "Seddiki Agency",
      "nav.omra": "Umrah 15 Oct", "nav.services": "Services", "nav.gallery": "Photos", "nav.agency": "The agency", "nav.contact": "Contact",
      "lang.label": "Language", "theme.toggle": "Switch between light and dark mode",
      "btn.call": "Call now", "btn.book": "Book my seat", "btn.wa": "WhatsApp", "btn.waopen": "Open WhatsApp",
      "btn.copy": "Copy", "btn.copied": "Copied", "btn.directions": "Directions on the map",
      "hero.badge": "Last seats for the 15 October Umrah",
      "hero.title": "From Ouargla to Makkah, with you every step of the way",
      "hero.lead": "An Umrah that combines comfort, organization and closeness to the Haram. From departure to arrival in Makkah, our team is with you.",
      "cap.aria": "Umrah offer summary", "cap.dest": "Destination", "cap.destv": "Makkah", "cap.date": "Departure", "cap.datev": "15 October 2026",
      "cap.stay": "Stay", "cap.stayv": "Al Diwan Hotel, Ajyad Al-Sad", "cap.go": "Book my seat",
      "trust.1": "IATA logo on our storefront", "trust.2": "6 airlines", "trust.3": "Office in Echorfa district, Ouargla",
      "route.from": "Ouargla", "route.to": "Makkah",
      "omra.title": "Umrah, 15 October 2026",
      "omra.sub": "Competitive price and limited seats. Contact us to book or ask a question.",
      "omra.posteralt": "Poster for the 15 October 2026 Umrah at Al Diwan Hotel",
      "omra.details": "Trip details",
      "omra.stay": "Stay", "omra.stayv": "Al Diwan Hotel, Ajyad Al-Sad Street",
      "omra.date": "Departure", "omra.datev": "15 October 2026",
      "omra.price": "Price", "omra.pricev": "Competitive price, call us for details",
      "omra.seats": "Seats", "omra.seatsv": "Last seats available",
      "count.title": "Countdown to 15 October", "count.note": "Seats are booked on a first-come basis.",
      "count.d": "days", "count.h": "hours", "count.m": "min", "count.s": "sec",
      "count.ended": "The 15 October group has departed. Ask us about the next trip.",
      "svc.title": "Our services", "svc.sub": "Everything for your trip in one place in Ouargla.",
      "svc.1.t": "Umrah", "svc.1.p": "Organized trips with support from departure to arrival in Makkah, and a stay close to the Haram.",
      "svc.2.t": "Flight tickets", "svc.2.p": "Bookings on Turkish Airlines, Tunisair, Air Algérie, Qatar Airways, Emirates and Saudia.",
      "svc.3.t": "Tourism and travel", "svc.3.p": "Tell us where you want to go. We suggest the right trip and follow up with you until departure.",
      "why.title": "Why travel with us",
      "why.1.t": "A real office", "why.1.p": "Find us in the Echorfa district of Ouargla and talk to our team in person.",
      "why.2.t": "Step-by-step support", "why.2.p": "From departure to arrival in Makkah, you never travel alone.",
      "why.3.t": "A stay near the Haram", "why.3.p": "Al Diwan Hotel on Ajyad Al-Sad Street for this group.",
      "why.4.t": "Limited seats", "why.4.p": "Seats are limited so every group is better organized.",
      "air.title": "Airlines we book with", "air.sub": "As shown on the agency storefront.",
      "air.tk": "Turkish Airlines", "air.tn": "Tunisair", "air.dz": "Air Algérie", "air.qa": "Qatar Airways", "air.ae": "Emirates", "air.sa": "Saudia",
      "gal.title": "Moments from our trips", "gal.sub": "Real photos from our Umrah trips.", "gal.alt": "Photo from a trip with Seddiki agency",
      "ag.title": "The agency in Ouargla", "ag.alt": "Storefront of Seddiki Tourism Et Voyages in Ouargla",
      "ag.rating": "on Google Maps, from 2 reviews",
      "ag.addr.t": "Echorfa district, Ouargla", "ag.addr.p": "Visit us at the office or call before you come.",
      "com.title": "In the community",
      "com.p": "On 12 September the agency supported the ceremony honoring the winners and participants of the Prophet's biography (Sira) competition ﷺ.",
      "com.alt": "Sira competition ceremony",
      "rev.title": "What our travelers say",
      "rev.1.src": "Google Maps review, 5 stars", "rev.2.src": "Comment on the agency's Facebook page",
      "ct.title": "Book your seat", "ct.sub": "Call us or message us on WhatsApp.",
      "ct.phone": "Phone", "ct.email": "Email", "ct.addr.k": "Address", "ct.addr.v": "Echorfa district, Ouargla, Algeria",
      "ct.wa.t": "Message us on WhatsApp", "ct.wa.p": "Send your name and the number of people, and we will reply with the details of the 15 October Umrah.",
      "footer.name": "Seddiki Tourism & Travel", "footer.tag": "With you on the journey, sharing the best stops",
      "rights": "© {year} All rights reserved",
      "dock.home": "Home", "dock.omra": "Umrah", "dock.photos": "Photos", "dock.contact": "Contact",
      "lb.close": "Close", "lb.left": "Photo on the left", "lb.right": "Photo on the right",
      "wa.msg": "Hello, I would like information about the 15 October 2026 Umrah."
    }
  };

  /* ------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------ */
  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  var store = {
    get: function (k, f) { try { return localStorage.getItem(k) || f; } catch (e) { return f; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ------------------------------------------------------------------
     Language
     ------------------------------------------------------------------ */
  var lang = store.get("sd-lang", "ar");
  if (!T[lang]) lang = "ar";

  function tr(key) {
    var v = (T[lang] && T[lang][key]);
    if (v === undefined) v = T.ar[key];
    return v === undefined ? key : v;
  }

  function applyLang(l, animate) {
    lang = T[l] ? l : "ar";
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    store.set("sd-lang", lang);

    $$("[data-i18n]").forEach(function (el) { el.textContent = tr(el.getAttribute("data-i18n")); });
    $$("[data-i18n-alt]").forEach(function (el) { el.alt = tr(el.getAttribute("data-i18n-alt")); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", tr(el.getAttribute("data-i18n-aria"))); });

    document.title = tr("meta.title");
    var md = $("meta[name='description']");
    if (md) md.setAttribute("content", tr("meta.desc"));
    var ogt = $("meta[property='og:title']");
    if (ogt) ogt.setAttribute("content", tr("meta.title"));

    var wa = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(tr("wa.msg"));
    $$(".wa-link, .fab").forEach(function (a) { a.href = wa; });

    $$(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    $("#rights").textContent = tr("rights").replace("{year}", new Date().getFullYear());

    if (animate && !reduced) {
      var m = $("#main");
      if (m && m.animate) m.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: 320, easing: "ease-out" });
    }
  }

  $$(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang"), true); });
  });

  /* ------------------------------------------------------------------
     Theme (circular reveal where the browser supports View Transitions)
     ------------------------------------------------------------------ */
  var themeMeta = $("meta[name='theme-color']");
  function paintThemeColor() {
    if (themeMeta) themeMeta.setAttribute("content", root.getAttribute("data-theme") === "dark" ? "#1b1b1b" : "#ffffff");
  }
  paintThemeColor();

  function setTheme(next, x, y) {
    function apply() {
      root.setAttribute("data-theme", next);
      store.set("sd-theme", next);
      paintThemeColor();
    }
    if (!document.startViewTransition || reduced) { apply(); return; }
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    var t = document.startViewTransition(apply);
    t.ready.then(function () {
      root.animate(
        { clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + radius + "px at " + x + "px " + y + "px)"] },
        { duration: 650, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" }
      );
    }).catch(function () {});
  }

  $("#themeBtn").addEventListener("click", function (e) {
    var r = e.currentTarget.getBoundingClientRect();
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next, r.left + r.width / 2, r.top + r.height / 2);
  });

  /* ------------------------------------------------------------------
     Header shadow, scroll reveal, scroll spy
     ------------------------------------------------------------------ */
  var header = $(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  var spyLinks = $$(".tabs a, .dock a");
  var spyIds = ["top", "omra", "services", "gallery", "agency", "contact"];
  var spyTargets = spyIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = "#" + en.target.id;
        spyLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    spyTargets.forEach(function (el) { so.observe(el); });
  }

  /* ------------------------------------------------------------------
     Countdown
     ------------------------------------------------------------------ */
  var cEls = { d: $("#cD"), h: $("#cH"), m: $("#cM"), s: $("#cS") };
  var cLive = $("#countLive"), cEnded = $("#countEnded");
  function pad(n) { return String(n).padStart(2, "0"); }
  function setUnit(el, val) {
    if (el.textContent === val) return;
    el.textContent = val;
    if (reduced) return;
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
  }
  function tick() {
    var diff = COUNTDOWN_TARGET - Date.now();
    if (diff <= 0) { cLive.hidden = true; cEnded.hidden = false; return false; }
    var s = Math.floor(diff / 1000);
    setUnit(cEls.d, pad(Math.floor(s / 86400)));
    setUnit(cEls.h, pad(Math.floor((s % 86400) / 3600)));
    setUnit(cEls.m, pad(Math.floor((s % 3600) / 60)));
    setUnit(cEls.s, pad(s % 60));
    return true;
  }
  if (tick()) {
    var timer = setInterval(function () { if (!tick()) clearInterval(timer); }, 1000);
  }

  /* ------------------------------------------------------------------
     Flight route (plane stops moving when the visitor prefers reduced motion)
     ------------------------------------------------------------------ */
  var routeSvg = $("#routeSvg");
  if (reduced && routeSvg && routeSvg.pauseAnimations) {
    try { routeSvg.setCurrentTime(6); routeSvg.pauseAnimations(); } catch (e) {}
  }

  /* ------------------------------------------------------------------
     Poster tilt (mouse devices only)
     ------------------------------------------------------------------ */
  var poster = $("#poster");
  if (poster && !reduced && window.matchMedia("(hover: hover)").matches) {
    var pimg = $("img", poster);
    poster.addEventListener("pointermove", function (e) {
      var r = poster.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      pimg.style.setProperty("--ry", (px * 9).toFixed(2) + "deg");
      pimg.style.setProperty("--rx", (-py * 9).toFixed(2) + "deg");
    });
    poster.addEventListener("pointerleave", function () {
      pimg.style.setProperty("--ry", "0deg");
      pimg.style.setProperty("--rx", "0deg");
    });
  }

  /* ------------------------------------------------------------------
     Missing images: show a dashed placeholder with the expected path
     ------------------------------------------------------------------ */
  function markMissing(img) {
    var fig = img.closest(".ph");
    if (!fig) return;
    fig.classList.add("missing");
    fig.setAttribute("data-path", img.getAttribute("src"));
  }
  $$(".ph img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) markMissing(img);
    img.addEventListener("error", function () { markMissing(img); });
  });

  var logo = $(".brand-logo");
  if (logo) {
    var mark = logo.parentNode;
    logo.addEventListener("load", function () { mark.classList.add("has-logo"); });
    logo.addEventListener("error", function () { logo.remove(); });
    if (logo.complete) {
      if (logo.naturalWidth) mark.classList.add("has-logo"); else logo.remove();
    }
  }

  /* ------------------------------------------------------------------
     Copy buttons
     ------------------------------------------------------------------ */
  $$("[data-copy]").forEach(function (btn) {
    var label = $(".copy-t", btn);
    function say(key) {
      label.textContent = tr(key);
      setTimeout(function () { label.textContent = tr("btn.copy"); }, 1800);
    }
    function fallback(value) {
      var ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      if (ok) say("btn.copied");
    }
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () { say("btn.copied"); }, function () { fallback(value); });
      } else {
        fallback(value);
      }
    });
  });

  /* ------------------------------------------------------------------
     Lightbox (keyboard, swipe, direction-aware)
     ------------------------------------------------------------------ */
  var lb = $("#lightbox"), lbImg = $("#lbImg");
  var current = -1;
  var touchX = null;

  function items() {
    return $$("[data-lightbox]").filter(function (img) { return !img.closest(".ph.missing"); });
  }
  function show(i) {
    var list = items();
    if (!list.length) return;
    current = (i + list.length) % list.length;
    lbImg.src = list[current].currentSrc || list[current].src;
    lbImg.alt = list[current].alt;
    lbImg.style.animation = "none";
    void lbImg.offsetWidth;
    lbImg.style.animation = "";
  }
  function openAt(img) {
    var list = items();
    var i = list.indexOf(img);
    if (i < 0) return;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    show(i);
    $("#lbClose").focus();
  }
  function closeLb() {
    lb.hidden = true;
    lbImg.removeAttribute("src");
    document.body.style.overflow = "";
  }
  // The button on the left shows the neighbour on the left: previous in LTR, next in RTL.
  function go(side) {
    var rtl = root.dir === "rtl";
    var step = side === "left" ? (rtl ? 1 : -1) : (rtl ? -1 : 1);
    show(current + step);
  }

  $$("[data-lightbox]").forEach(function (img) {
    var host = img.closest(".ph") || img;
    host.addEventListener("click", function () { openAt(img); });
  });
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbLeft").addEventListener("click", function () { go("left"); });
  $("#lbRight").addEventListener("click", function () { go("right"); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") go("left");
    else if (e.key === "ArrowRight") go("right");
  });
  lb.addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 50) return;
    go(dx > 0 ? "left" : "right");
  }, { passive: true });

  /* ------------------------------------------------------------------
     Start
     ------------------------------------------------------------------ */
  applyLang(lang, false);
})();
