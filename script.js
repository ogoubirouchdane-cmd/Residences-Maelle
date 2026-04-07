/* ================================================
   RÉSIDENCES MAËLLE — script.js
   ================================================ */

/* ── TRADUCTIONS ── */
const translations = {
  fr: {
    "nav.home":"Accueil","nav.residences":"Nos Résidences","nav.galerie":"Galerie",
    "nav.tarifs":"Tarifs","nav.avis":"Avis","nav.contact":"Contact",
    "nav.wa":"Réserver via WhatsApp",
    "hero.eyebrow":"Bénin · Cotonou & Abomey-Calavi",
    "hero.sub":"Votre confort, notre priorité — Appartements meublés haut de gamme dans deux adresses d'exception au Bénin",
    "hero.btn1":"Découvrir nos résidences","hero.btn2":"Réserver maintenant",
    "res.label":"Nos Adresses",
    "res.title":"Deux adresses d'exception au Bénin",
    "res.sub":"Choisissez la résidence qui correspond à votre séjour et vivez une expérience de confort unique.",
    "res.djadjo.badge":"Séjour professionnel & long séjour",
    "res.djadjo.loc":"Quartier Djadjo, Abomey-Calavi",
    "res.djadjo.desc":"Un havre de calme idéal pour les professionnels et les résidents longue durée. Appartements meublés avec tout le confort moderne dans un cadre sécurisé.",
    "res.fidjrosse.badge":"Vacances & court séjour",
    "res.fidjrosse.loc":"Togbin, Cotonou — Proche plage & aéroport",
    "res.fidjrosse.desc":"L'adresse idéale pour la diaspora, les familles et les touristes. Villas et appartements spacieux à deux pas de la plage et de l'aéroport de Cotonou.",
    "res.btn.appart":"Voir les appartements →","res.btn.villa":"Voir les villas →",
    "why.label":"Nos Engagements","why.title":"Pourquoi choisir Résidences Maëlle ?",
    "why.1.title":"Confort garanti","why.1.text":"Appartements entièrement meublés, climatisés et équipés pour votre confort total dès votre arrivée.",
    "why.2.title":"Emplacements stratégiques","why.2.text":"En plein cœur d'Abomey-Calavi et à deux pas de la plage et de l'aéroport à Cotonou.",
    "why.3.title":"Sécurité & tranquillité","why.3.text":"Résidences sécurisées, parking privé et gardiennage pour votre sérénité totale.",
    "why.4.title":"Réservation facile","why.4.text":"Réservez en quelques minutes par WhatsApp, sans complication. Une équipe disponible pour vous répondre.",
    "galerie.label":"Galerie","galerie.title":"Nos Espaces",
    "galerie.sub":"Un aperçu de l'intérieur de nos résidences.",
    "gal.tab.all":"Tout voir",
    "gal.salon":"Salon","gal.chambre":"Chambre","gal.cuisine":"Cuisine équipée",
    "gal.villa":"Villa","gal.sdb":"Salle de bain","gal.terrasse":"Terrasse",
    "gal.sejour":"Séjour","gal.appart":"Appartement","gal.ext":"Vue extérieure",
    "gal.tag.both":"Les deux résidences",
    "tarifs.label":"Tarifs","tarifs.title":"Nos Tarifs",
    "tarifs.sub":"Valables pour les deux résidences — Djadjo & Fidjrossè",
    "tarifs.note":"* Tarifs en Francs CFA (FCFA). Nous contacter pour les tarifs groupes ou longs séjours.",
    "tarifs.booking":"Voir aussi sur Booking.com",
    "tarif.type.studio":"Type","tarif.studio":"Studio",
    "tarif.type.standard":"Standard","tarif.standard":"Appartement 1 ch + salon",
    "tarif.type.grand":"Grand Confort","tarif.grand":"Appartement 1 ch + salon (grand)",
    "tarif.type.villa":"Premium","tarif.villa":"Villa / Grand Appart 2 ch + salon",
    "tarif.fcfa.nuit":"FCFA / nuit","tarif.mois":"/ mois","tarif.btn":"Réserver","tarif.popular":"Populaire",
    "avis.label":"Témoignages","avis.title":"Ce que disent nos clients",
    "avis.sub":"Des séjours mémorables racontés par ceux qui nous ont fait confiance.",
    "avis.note.globale":"Note globale","avis.nb.clients":"Clients satisfaits","avis.recommande":"Recommandent",
    "avis.1.text":"« Séjour parfait à la résidence Djadjo ! Appartement propre, bien meublé, Wi-Fi impeccable. Je reviendrai à coup sûr pour mes prochains déplacements professionnels. »",
    "avis.1.nom":"Kofi A.","avis.1.ville":"Cotonou, Bénin",
    "avis.2.text":"« Nous avons séjourné à Fidjrossè en famille. La villa est spacieuse, la terrasse magnifique. À 5 min de la plage, c'est parfait ! »",
    "avis.2.nom":"Marie D.","avis.2.ville":"Paris, France",
    "avis.3.text":"« Accueil chaleureux, logement très propre. La climatisation fonctionnait très bien, crucial en saison chaude ! Je recommande vivement. »",
    "avis.3.nom":"Samuel T.","avis.3.ville":"Lomé, Togo",
    "avis.4.text":"« En déplacement à Abomey-Calavi, j'ai choisi Résidences Maëlle sur recommandation. Excellent rapport qualité-prix, je n'irai plus à l'hôtel ! »",
    "avis.4.nom":"Aminata B.","avis.4.ville":"Dakar, Sénégal",
    "avis.5.text":"« Diaspora de retour au pays — Fidjrossè c'est exactement ce que je cherchais : proche de l'aéroport, confortable, et les propriétaires sont super disponibles. »",
    "avis.5.nom":"Rodrigue M.","avis.5.ville":"Montréal, Canada",
    "resa.label":"Réservation","resa.title":"Réservez votre séjour",
    "resa.sub":"Remplissez le formulaire ou contactez-nous directement.",
    "form.title":"Demande de réservation","form.nom":"Nom complet *","form.email":"Email *",
    "form.tel":"Téléphone / WhatsApp *","form.residence":"Résidence choisie *",
    "form.select":"-- Choisir --",
    "form.djadjo":"Résidence Maëlle Djadjo","form.fidjrosse":"Résidence Maëlle Fidjrossè",
    "form.type":"Type de logement *",
    "form.t.studio":"Studio — 10 000 FCFA/nuit",
    "form.t.standard":"Appartement 1 ch + salon (standard) — 15 000 FCFA/nuit",
    "form.t.grand":"Appartement 1 ch + salon (grand) — 18 000 FCFA/nuit",
    "form.t.villa":"Villa / 2 chambres + salon — 25 000 FCFA/nuit",
    "form.arrive":"Date d'arrivée *","form.depart":"Date de départ *",
    "form.message":"Message (optionnel)","form.submit":"Envoyer via WhatsApp",
    "contact.title":"Contact direct","contact.wa":"Écrire sur WhatsApp",
    "contact.djadjo":"Djadjo :","contact.djadjo.addr":"Quartier Djadjo, Abomey-Calavi, Bénin",
    "contact.fidjrosse":"Fidjrossè :","contact.fidjrosse.addr":"Togbin, Cotonou, Bénin",
    "contact.booking":"Réserver sur Booking.com",
    "footer.slogan":"« Votre confort, notre priorité »",
    "footer.desc":"Location d'appartements meublés haut de gamme au Bénin. Deux résidences d'exception à Abomey-Calavi et Cotonou.",
    "footer.links":"Navigation","footer.galerie":"Galerie","footer.residences":"Résidences",
    "footer.contact":"Contact","footer.fb":"Facebook (à venir)",
    "footer.copy":"© 2025 Résidences Maëlle — Tous droits réservés","footer.made":"Site réalisé pour"
  },
  en: {
    "nav.home":"Home","nav.residences":"Our Properties","nav.galerie":"Gallery",
    "nav.tarifs":"Rates","nav.avis":"Reviews","nav.contact":"Contact",
    "nav.wa":"Book via WhatsApp",
    "hero.eyebrow":"Benin · Cotonou & Abomey-Calavi",
    "hero.sub":"Your comfort, our priority — Premium furnished apartments at two exceptional locations in Benin",
    "hero.btn1":"Discover our properties","hero.btn2":"Book now",
    "res.label":"Our Locations",
    "res.title":"Two exceptional addresses in Benin",
    "res.sub":"Choose the residence that suits your stay and enjoy a unique comfort experience.",
    "res.djadjo.badge":"Professional & long-term stay",
    "res.djadjo.loc":"Djadjo District, Abomey-Calavi",
    "res.djadjo.desc":"A peaceful haven ideal for professionals and long-term residents. Fully furnished apartments with all modern comforts in a secure setting.",
    "res.fidjrosse.badge":"Holidays & short stay",
    "res.fidjrosse.loc":"Togbin, Cotonou — Near beach & airport",
    "res.fidjrosse.desc":"The perfect address for the diaspora, families and tourists. Spacious villas and apartments steps from the beach and Cotonou airport.",
    "res.btn.appart":"View apartments →","res.btn.villa":"View villas →",
    "why.label":"Our Commitments","why.title":"Why choose Résidences Maëlle?",
    "why.1.title":"Guaranteed comfort","why.1.text":"Fully furnished, air-conditioned and equipped apartments for your total comfort from arrival.",
    "why.2.title":"Strategic locations","why.2.text":"In the heart of Abomey-Calavi and steps from the beach and airport in Cotonou.",
    "why.3.title":"Safety & peace of mind","why.3.text":"Secured residences, private parking and on-site security for your total peace of mind.",
    "why.4.title":"Easy booking","why.4.text":"Book in minutes via WhatsApp, hassle-free. A team available to respond quickly.",
    "galerie.label":"Gallery","galerie.title":"Our Spaces",
    "galerie.sub":"A glimpse inside our residences.",
    "gal.tab.all":"View all",
    "gal.salon":"Living room","gal.chambre":"Bedroom","gal.cuisine":"Equipped kitchen",
    "gal.villa":"Villa","gal.sdb":"Bathroom","gal.terrasse":"Terrace",
    "gal.sejour":"Living area","gal.appart":"Apartment","gal.ext":"Exterior view",
    "gal.tag.both":"Both residences",
    "tarifs.label":"Pricing","tarifs.title":"Our Rates",
    "tarifs.sub":"Valid for both residences — Djadjo & Fidjrossè",
    "tarifs.note":"* Rates in West African Francs (FCFA). Contact us for group or long-stay rates.",
    "tarifs.booking":"Also see on Booking.com",
    "tarif.type.studio":"Type","tarif.studio":"Studio",
    "tarif.type.standard":"Standard","tarif.standard":"1-bedroom apartment + lounge",
    "tarif.type.grand":"Grand Comfort","tarif.grand":"Large 1-bedroom apartment + lounge",
    "tarif.type.villa":"Premium","tarif.villa":"Villa / Large 2-bedroom + lounge",
    "tarif.fcfa.nuit":"FCFA / night","tarif.mois":"/ month","tarif.btn":"Book","tarif.popular":"Popular",
    "avis.label":"Testimonials","avis.title":"What our clients say",
    "avis.sub":"Memorable stays told by those who trusted us.",
    "avis.note.globale":"Overall rating","avis.nb.clients":"Satisfied clients","avis.recommande":"Recommend us",
    "avis.1.text":"\"Perfect stay at Djadjo residence! Clean, well-furnished apartment, flawless Wi-Fi. I'll definitely return for my next business trips.\"",
    "avis.1.nom":"Kofi A.","avis.1.ville":"Cotonou, Benin",
    "avis.2.text":"\"We stayed at Fidjrossè as a family. The villa is spacious, the terrace magnificent. 5 minutes from the beach — perfect!\"",
    "avis.2.nom":"Marie D.","avis.2.ville":"Paris, France",
    "avis.3.text":"\"Warm welcome, very clean accommodation. The air conditioning worked perfectly, crucial in the hot season! Highly recommend.\"",
    "avis.3.nom":"Samuel T.","avis.3.ville":"Lomé, Togo",
    "avis.4.text":"\"On a business trip to Abomey-Calavi, I chose Résidences Maëlle on recommendation. Excellent value — I won't stay in hotels anymore!\"",
    "avis.4.nom":"Aminata B.","avis.4.ville":"Dakar, Senegal",
    "avis.5.text":"\"Diaspora returning home — Fidjrossè is exactly what I was looking for: close to the airport, comfortable, and the owners are incredibly responsive.\"",
    "avis.5.nom":"Rodrigue M.","avis.5.ville":"Montreal, Canada",
    "resa.label":"Booking","resa.title":"Book your stay",
    "resa.sub":"Fill out the form or contact us directly.",
    "form.title":"Reservation request","form.nom":"Full name *","form.email":"Email *",
    "form.tel":"Phone / WhatsApp *","form.residence":"Chosen residence *",
    "form.select":"-- Select --",
    "form.djadjo":"Résidence Maëlle Djadjo","form.fidjrosse":"Résidence Maëlle Fidjrossè",
    "form.type":"Unit type *",
    "form.t.studio":"Studio — 10,000 FCFA/night",
    "form.t.standard":"1-bedroom standard apartment — 15,000 FCFA/night",
    "form.t.grand":"Large 1-bedroom apartment — 18,000 FCFA/night",
    "form.t.villa":"Villa / 2-bedroom — 25,000 FCFA/night",
    "form.arrive":"Arrival date *","form.depart":"Departure date *",
    "form.message":"Message (optional)","form.submit":"Send via WhatsApp",
    "contact.title":"Direct contact","contact.wa":"Message on WhatsApp",
    "contact.djadjo":"Djadjo:","contact.djadjo.addr":"Djadjo District, Abomey-Calavi, Benin",
    "contact.fidjrosse":"Fidjrossè:","contact.fidjrosse.addr":"Togbin, Cotonou, Benin",
    "contact.booking":"Book on Booking.com",
    "footer.slogan":"\"Your comfort, our priority\"",
    "footer.desc":"Premium furnished apartment rentals in Benin. Two exceptional residences in Abomey-Calavi and Cotonou.",
    "footer.links":"Navigation","footer.galerie":"Gallery","footer.residences":"Residences",
    "footer.contact":"Contact","footer.fb":"Facebook (coming soon)",
    "footer.copy":"© 2025 Résidences Maëlle — All rights reserved","footer.made":"Website created for"
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (translations[lang][k] !== undefined) el.textContent = translations[lang][k];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isFR = btn.textContent.includes('FR');
    const isEN = btn.textContent.includes('EN');
    btn.classList.toggle('active', (lang === 'fr' && isFR) || (lang === 'en' && isEN));
  });
}

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

/* ── SCROLL ANIMATIONS ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── GALERIE TABS ── */
function switchGallery(filter) {
  document.querySelectorAll('.gallery-tab').forEach(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active',
      (filter === 'all'       && onclick.includes("'all'")) ||
      (filter === 'djadjo'    && onclick.includes("'djadjo'")) ||
      (filter === 'fidjrosse' && onclick.includes("'fidjrosse'"))
    );
  });
  document.querySelectorAll('.gallery-item').forEach(item => {
    const res = item.getAttribute('data-res');
    item.classList.toggle('hidden', filter !== 'all' && res !== filter && res !== 'all');
  });
}

/* ── CARROUSEL AVIS — viewport + track ── */
(function() {
  const viewport   = document.getElementById('avisViewport');
  const track      = document.getElementById('avisTrack');
  const dotsWrap   = document.getElementById('avisDots');
  const btnPrev    = document.getElementById('avisPrev');
  const btnNext    = document.getElementById('avisNext');

  if (!viewport || !track) return;

  const cards = Array.from(track.querySelectorAll('.avis-card'));
  let current = 0;
  let autoplay;

  function getPerPage() {
    if (window.innerWidth <= 600)  return 1;
    if (window.innerWidth <= 900)  return 2;
    return 3;
  }

  function layout() {
    const perPage   = getPerPage();
    const gap       = 20;
    const vpW       = viewport.offsetWidth;
    const cardW     = (vpW - gap * (perPage - 1)) / perPage;

    cards.forEach(c => {
      c.style.width    = cardW + 'px';
      c.style.minWidth = cardW + 'px';
    });

    // Rebuild dots
    dotsWrap.innerHTML = '';
    const pages = Math.ceil(cards.length / perPage);
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.className = 'avis-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Page ' + (i + 1));
      dot.onclick = () => goTo(i);
      dotsWrap.appendChild(dot);
    }

    // Clamp current index
    current = Math.min(current, pages - 1);
    render(false);
  }

  function render(animate = true) {
    const perPage  = getPerPage();
    const gap      = 20;
    const cardW    = cards[0] ? parseFloat(cards[0].style.width) : 0;
    const offset   = current * perPage * (cardW + gap);

    track.style.transition = animate ? 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none';
    track.style.transform  = `translateX(-${offset}px)`;

    document.querySelectorAll('.avis-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function goTo(idx) {
    const perPage = getPerPage();
    const pages   = Math.ceil(cards.length / perPage);
    current = ((idx % pages) + pages) % pages;
    render();
  }

  function startAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => goTo(current + 1), 5000);
  }

  if (btnPrev) btnPrev.onclick = () => { goTo(current - 1); startAutoplay(); };
  if (btnNext) btnNext.onclick = () => { goTo(current + 1); startAutoplay(); };

  viewport.addEventListener('mouseenter', () => clearInterval(autoplay));
  viewport.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let touchX = 0;
  viewport.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', e => {
    const dx = touchX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) { goTo(dx > 0 ? current + 1 : current - 1); startAutoplay(); }
  }, { passive: true });

  window.addEventListener('resize', () => { layout(); });
  window.addEventListener('load', () => { layout(); startAutoplay(); });
  layout();
  startAutoplay();
})();

/* ── FORMULAIRE WHATSAPP ── */
const form = document.getElementById('reservationForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nom      = document.getElementById('f_nom').value.trim();
    const email    = document.getElementById('f_email').value.trim();
    const tel      = document.getElementById('f_tel').value.trim();
    const residence= document.getElementById('f_residence').value;
    const type     = document.getElementById('f_type').value;
    const arrive   = document.getElementById('f_arrive').value;
    const depart   = document.getElementById('f_depart').value;
    const message  = document.getElementById('f_message').value.trim();

    if (!nom || !tel || !residence || !type || !arrive || !depart) {
      showToast(currentLang === 'fr'
        ? '⚠️ Veuillez remplir tous les champs obligatoires.'
        : '⚠️ Please fill in all required fields.');
      return;
    }

    const text = currentLang === 'fr'
      ? `Bonjour, je souhaite réserver aux Résidences Maëlle.\n\n👤 Nom : ${nom}\n📧 Email : ${email}\n📞 Tél : ${tel}\n🏠 Résidence : ${residence}\n🛏️ Logement : ${type}\n📅 Arrivée : ${arrive}\n📅 Départ : ${depart}\n💬 Message : ${message || 'Aucun'}`
      : `Hello, I'd like to book at Résidences Maëlle.\n\n👤 Name: ${nom}\n📧 Email: ${email}\n📞 Phone: ${tel}\n🏠 Residence: ${residence}\n🛏️ Unit: ${type}\n📅 Arrival: ${arrive}\n📅 Departure: ${depart}\n💬 Message: ${message || 'None'}`;

    window.open(`https://wa.me/2290167221594?text=${encodeURIComponent(text)}`, '_blank');
    showToast(currentLang === 'fr' ? '✅ Ouverture de WhatsApp…' : '✅ Opening WhatsApp…');
  });
}

/* ── TOAST ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
