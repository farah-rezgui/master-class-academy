/* ===========================================================
   MASTER CLASS ACADEMY — script.js (Vanilla JS only)
=========================================================== */
(function(){
  'use strict';

  /* ---------------------------------------------------------
     1. NAVBAR SCROLL EFFECT
  --------------------------------------------------------- */
  var navbar = document.getElementById('navbar');
  function onScroll(){
    if(window.scrollY > 40){ navbar.classList.add('scrolled'); }
    else{ navbar.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------------------------------------------------------
     2. MOBILE MENU
  --------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function(){
    var isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ---------------------------------------------------------
     3. SCROLL REVEAL (IntersectionObserver)
  --------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var revealObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(function(el){ revealObserver.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }

  /* ---------------------------------------------------------
     5. LANGUAGE SWITCH (FR / AR) + RTL
  --------------------------------------------------------- */
  var translations = {
    nav_home:{fr:"Accueil",ar:"الرئيسية"},
    nav_academy:{fr:"À propos de nous",ar:"من نحن"},
    nav_formations:{fr:"Formations",ar:"التكوينات"},
    nav_chefs:{fr:"Nos Chefs",ar:"طهاتنا"},
    nav_gallery:{fr:"Galerie",ar:"معرض الصور"},
    nav_registration:{fr:"Inscription",ar:"التسجيل"},
    nav_contact:{fr:"Contact",ar:"اتصل بنا"},
    nav_register_btn:{fr:"Inscription",ar:"سجّل الآن"},

    hero_eyebrow:{fr:"Centre de formation professionnelle · Bardo, Tunis",ar:"مركز تكوين مهني · باردو، تونس"},
    hero_title_1:{fr:"MASTER CLASS",ar:"ماستر كلاس"},
    hero_title_2:{fr:"ACADEMY",ar:"أكاديمي"},
    hero_tagline:{fr:"Formez-vous aux métiers de la cuisine et de la pâtisserie",ar:"تكوّن في مهن الطبخ والحلويات"},
    hero_subtitle:{fr:"Développez vos compétences, apprenez auprès de professionnels et construisez votre avenir dans l'univers de la gastronomie.",ar:"طوّر مهاراتك، وتعلّم على يد محترفين، وابنِ مستقبلك في عالم فنون الطهي."},
    hero_btn1:{fr:"Découvrir nos formations",ar:"اكتشف تكويناتنا"},
    hero_btn2:{fr:"Je m'inscris maintenant",ar:"سجّل الآن"},
    hero_badge1:{fr:"Chefs professionnels",ar:"طهاة محترفون"},
    hero_badge2:{fr:"Formations professionnelles",ar:"تكوينات مهنية"},
    hero_badge3:{fr:"Formation pratique",ar:"تكوين تطبيقي"},

    intro_title:{fr:"Votre avenir commence en cuisine",ar:"مستقبلك يبدأ من المطبخ"},
    intro_text:{fr:"Master Class Academy est un centre spécialisé dans la formation professionnelle en cuisine et pâtisserie. Nous accompagnons les passionnés et les futurs professionnels dans l'acquisition de compétences pratiques et professionnelles.",ar:"ماستر كلاس أكاديمي مركز متخصص في التكوين المهني في الطبخ والحلويات. نرافق المتحمسين والمهنيين المستقبليين لاكتساب مهارات تطبيقية واحترافية."},
    stat1_title:{fr:"Formation pratique",ar:"تكوين تطبيقي"},
    stat1_text:{fr:"Des ateliers concrets en cuisine professionnelle, dès le premier jour.",ar:"ورشات عملية في مطبخ احترافي منذ اليوم الأول."},
    stat2_title:{fr:"Chefs professionnels",ar:"طهاة محترفون"},
    stat2_text:{fr:"Un encadrement assuré par des formateurs issus du métier.",ar:"تأطير من طرف مكوّنين من أهل المهنة."},
    stat3_title:{fr:"Certifications",ar:"شهائد معترف بها"},
    stat3_text:{fr:"Des diplômes reconnus, du CAP au BTS.",ar:"شهائد معترف بها من CAP إلى BTS."},
    stat4_title:{fr:"Opportunités professionnelles",ar:"فرص مهنية"},
    stat4_text:{fr:"Une insertion facilitée en Tunisie et à l'étranger.",ar:"إدماج مهني ميسّر داخل تونس وخارجها."},

    formations_eyebrow:{fr:"Parcours de formation",ar:"مسارات التكوين"},
    formations_title:{fr:"Nos formations",ar:"تكويناتنا"},
    formations_subtitle:{fr:"Des parcours adaptés à votre niveau et à votre projet professionnel.",ar:"مسارات ملائمة لمستواك ومشروعك المهني."},

    f1_title:{fr:"CAP Cuisine & Pâtisserie",ar:"CAP في الطبخ والحلويات"},
    f1_text:{fr:"Une formation pratique pour acquérir les fondamentaux de la cuisine et de la pâtisserie.",ar:"تكوين تطبيقي لاكتساب أساسيات الطبخ والحلويات."},
    f1_elig:{fr:"Accessible à partir du niveau 9ème année de base.",ar:"متاح ابتداءً من المستوى التاسعة أساسي."},
    f2_title:{fr:"BTP Cuisine",ar:"BTP في الطبخ"},
    f2_text:{fr:"Une formation professionnelle destinée aux futurs professionnels de la cuisine.",ar:"تكوين مهني موجّه لمحترفي الطبخ المستقبليين."},
    f2_elig:{fr:"Accessible à partir du niveau 2ème secondaire ou CAP.",ar:"متاح ابتداءً من الثانية ثانوي أو شهادة CAP."},
    f3_title:{fr:"BTP Pâtisserie",ar:"BTP في الحلويات"},
    f3_text:{fr:"Développez vos compétences en pâtisserie et maîtrisez les techniques professionnelles.",ar:"طوّر مهاراتك في الحلويات وأتقن التقنيات الاحترافية."},
    f3_elig:{fr:"Accessible à partir du niveau 2ème secondaire ou CAP.",ar:"متاح ابتداءً من الثانية ثانوي أو شهادة CAP."},
    f4_title:{fr:"BTS Cuisine",ar:"BTS في الطبخ"},
    f4_text:{fr:"Une formation avancée pour développer une véritable expertise professionnelle en cuisine.",ar:"تكوين متقدم لبناء خبرة احترافية حقيقية في الطبخ."},
    f4_elig:{fr:"Accessible avec le Baccalauréat ou un BTP.",ar:"متاح لحاملي البكالوريا أو BTP."},
    f5_title:{fr:"BTS Pâtisserie",ar:"BTS في الحلويات"},
    f5_text:{fr:"Perfectionnez vos techniques et préparez votre avenir dans le monde de la pâtisserie.",ar:"طوّر تقنياتك وابنِ مستقبلك في عالم الحلويات."},
    f5_elig:{fr:"Accessible avec le Baccalauréat ou un BTP.",ar:"متاح لحاملي البكالوريا أو BTP."},
    f6_title:{fr:"Certificat de fin de formation",ar:"شهادة ختم تكوين"},
    f6_text:{fr:"Une formation adaptée aux personnes souhaitant développer rapidement leurs compétences.",ar:"تكوين ملائم لمن يرغب في تطوير مهاراته بسرعة."},
    f6_elig:{fr:"Accessible quel que soit le niveau.",ar:"متاح مهما كان المستوى."},
    f7_title:{fr:"Formations accélérées",ar:"دورات تكوين سريعة"},
    f7_text:{fr:"Des formations intensives et pratiques pour apprendre rapidement un métier.",ar:"دورات مكثفة وتطبيقية لتعلّم مهنة بسرعة."},
    formation_cta:{fr:"S'informer",ar:"معرفة المزيد"},
    tag_pizza:{fr:"Pizza",ar:"بيتزا"},
    tag_fastfood:{fr:"Fast Food",ar:"وجبات سريعة"},
    tag_boulangerie:{fr:"Boulangerie",ar:"مخبزة"},
    tag_viennoiserie:{fr:"Viennoiserie",ar:"معجنات"},
    tag_patisserie_tn:{fr:"Pâtisserie tunisienne",ar:"حلويات تونسية"},
    tag_cuisine_int:{fr:"Cuisine internationale",ar:"مطبخ عالمي"},
    tag_sushi:{fr:"Sushi",ar:"سوشي"},

    flavors_eyebrow:{fr:"Voyage gastronomique",ar:"رحلة الأذواق"},
    flavors_title:{fr:"Explorez les saveurs du monde",ar:"اكتشف نكهات العالم"},
    flavor_italian:{fr:"Cuisine Italienne",ar:"مطبخ إيطالي"},
    flavor_pasta:{fr:"Pasta",ar:"باستا"},
    flavor_sushi:{fr:"Sushi",ar:"سوشي"},
    flavor_pastry:{fr:"Pâtisserie",ar:"حلويات"},
    flavor_bakery:{fr:"Boulangerie & Viennoiserie",ar:"مخبزة ومعجنات"},
    flavor_fastfood:{fr:"Fast Food",ar:"وجبات سريعة"},
    flavor_tunisian:{fr:"Cuisine Tunisienne",ar:"مطبخ تونسي"},
    flavor_international:{fr:"Cuisine Internationale",ar:"مطبخ عالمي"},

    chefs_eyebrow:{fr:"L'équipe pédagogique",ar:"الفريق التربوي"},
    chefs_title:{fr:"Nos chefs formateurs",ar:"طهاتنا المكوّنون"},
    chefs_slogan:{fr:"Notre force, c'est nos formateurs",ar:"قوّتنا هي مكوّنونا"},
    chef1_name:{fr:"Chef Karim B.",ar:"الشيف كريم ب."},
    chef1_role:{fr:"Chef Cuisine",ar:"شيف طبخ"},
    chef1_text:{fr:"Spécialiste de la cuisine gastronomique et du dressage d'assiette.",ar:"مختص في المطبخ الفني وتنسيق الأطباق."},
    chef2_name:{fr:"Chef Yassine T.",ar:"الشيف ياسين ت."},
    chef2_role:{fr:"Chef Pâtissier",ar:"شيف حلويات"},
    chef2_text:{fr:"Expert en pâtisserie fine et techniques de dressage moderne.",ar:"خبير في الحلويات الراقية وتقنيات التزيين الحديثة."},
    chef3_name:{fr:"Chef Mounir S.",ar:"الشيف منير س."},
    chef3_role:{fr:"Chef Formateur",ar:"شيف مكوّن"},
    chef3_text:{fr:"Plus de 20 ans d'expérience en cuisine tunisienne et internationale.",ar:"أكثر من 20 سنة خبرة في المطبخ التونسي والعالمي."},
    chef4_name:{fr:"Chef Nour A.",ar:"الشيف نور ع."},
    chef4_role:{fr:"Chef Sushi",ar:"شيف سوشي"},
    chef4_text:{fr:"Formée aux techniques japonaises traditionnelles du sushi.",ar:"متكوّنة في التقنيات اليابانية التقليدية لصنع السوشي."},

    practice_eyebrow:{fr:"Notre pédagogie",ar:"منهجنا"},
    practice_title:{fr:"Apprendre en pratiquant",ar:"التعلّم بالممارسة"},
    practice_text:{fr:"Une formation basée sur la pratique pour vous préparer aux réalités du métier.",ar:"تكوين قائم على الممارسة لإعدادك لواقع المهنة."},

    why_title:{fr:"Pourquoi choisir Master Class Academy ?",ar:"لماذا تختار ماستر كلاس أكاديمي؟"},
    why1:{fr:"Formation pratique et professionnelle",ar:"تكوين تطبيقي ومهني"},
    why2:{fr:"Avec ou sans Baccalauréat",ar:"مع أو بدون شهادة البكالوريا"},
    why3:{fr:"Certifications reconnues",ar:"شهائد معترف بها"},
    why4:{fr:"Encadrement par des chefs professionnels",ar:"تأطير من قبل طهاة محترفين"},
    why5:{fr:"Formations adaptées à différents niveaux",ar:"تكوينات ملائمة لمختلف المستويات"},
    why6:{fr:"Opportunités d'insertion professionnelle en Tunisie et à l'étranger",ar:"فرص إدماج مهني داخل تونس وخارجها"},

    gallery_eyebrow:{fr:"Notre univers",ar:"عالمنا"},
    gallery_title:{fr:"Le goût de la passion",ar:"طعم الشغف"},
    filter_all:{fr:"Tous",ar:"الكل"},
    filter_cuisine:{fr:"Cuisine",ar:"الطبخ"},
    filter_patisserie:{fr:"Pâtisserie",ar:"الحلويات"},
    filter_sushi:{fr:"Sushi",ar:"سوشي"},
    filter_pizza:{fr:"Pizza",ar:"بيتزا"},
    filter_desserts:{fr:"Desserts",ar:"حلويات"},
    filter_chefs:{fr:"Nos Chefs",ar:"طهاتنا"},

    testi_eyebrow:{fr:"Ils témoignent",ar:"آراء طلابنا"},
    testi_title:{fr:"Nos étudiants parlent de leur expérience",ar:"طلابنا يتحدثون عن تجربتهم"},
    testi1_text:{fr:"« Une excellente expérience, beaucoup de pratique et des formateurs très professionnels. »",ar:"« تجربة رائعة، الكثير من الممارسة ومكوّنون محترفون جداً. »"},
    testi1_name:{fr:"Aymen M.",ar:"أيمن م."},
    testi1_role:{fr:"CAP Cuisine & Pâtisserie",ar:"CAP في الطبخ والحلويات"},
    testi2_text:{fr:"« J'ai appris énormément en peu de temps. L'ambiance et le sérieux des chefs font toute la différence. »",ar:"« تعلّمت الكثير في وقت قصير. الأجواء وجدّية الطهاة تصنع الفرق. »"},
    testi2_name:{fr:"Salma R.",ar:"سلمى ر."},
    testi2_role:{fr:"BTP Pâtisserie",ar:"BTP في الحلويات"},
    testi3_text:{fr:"« Grâce à Master Class Academy, j'ai décroché mon premier poste en cuisine avant même la fin de ma formation. »",ar:"« بفضل ماستر كلاس أكاديمي، حصلت على أول وظيفة في الطبخ قبل نهاية تكويني. »"},
    testi3_name:{fr:"Youssef B.",ar:"يوسف ب."},
    testi3_role:{fr:"BTS Cuisine",ar:"BTS في الطبخ"},
    testi4_text:{fr:"« La formation accélérée en pâtisserie tunisienne m'a permis de me lancer très rapidement. »",ar:"« الدورة السريعة في الحلويات التونسية مكّنتني من الانطلاق بسرعة. »"},
    testi4_name:{fr:"Ines H.",ar:"إينس ح."},
    testi4_role:{fr:"Formation accélérée",ar:"دورة سريعة"},

    reg_title:{fr:"Inscrivez-vous à Master Class Academy",ar:"سجّل في ماستر كلاس أكاديمي"},
    reg_subtitle:{fr:"Votre première étape vers une carrière dans les métiers de la cuisine et de la pâtisserie.",ar:"خطوتك الأولى نحو مهنة في عالم الطبخ والحلويات."},
    reg_badge:{fr:"Diplôme homologué",ar:"شهائد منظرة"},
    lbl_fullname:{fr:"Nom et prénom *",ar:"الاسم واللقب *"},
    err_fullname:{fr:"Merci d'indiquer votre nom complet.",ar:"يرجى إدخال الاسم الكامل."},
    lbl_dob:{fr:"Date de naissance *",ar:"تاريخ الميلاد *"},
    err_dob:{fr:"Merci d'indiquer votre date de naissance.",ar:"يرجى إدخال تاريخ الميلاد."},
    lbl_phone:{fr:"Numéro de téléphone *",ar:"رقم الهاتف *"},
    err_phone:{fr:"Merci d'indiquer un numéro de téléphone valide.",ar:"يرجى إدخال رقم هاتف صحيح."},
    lbl_email:{fr:"Adresse e-mail",ar:"البريد الإلكتروني"},
    err_email:{fr:"Merci d'indiquer une adresse e-mail valide.",ar:"يرجى إدخال بريد إلكتروني صحيح."},
    lbl_address:{fr:"Adresse *",ar:"العنوان *"},
    err_address:{fr:"Merci d'indiquer votre adresse.",ar:"يرجى إدخال العنوان."},
    lbl_specialty:{fr:"Spécialité souhaitée *",ar:"الاختصاص المطلوب *"},
    err_specialty:{fr:"Merci de choisir une spécialité.",ar:"يرجى اختيار الاختصاص."},
    opt_choose:{fr:"Sélectionnez une option",ar:"اختر خياراً"},
    opt_cap:{fr:"CAP en cuisine et pâtisserie (accessible dès la 9ème année de base)",ar:"CAP في الحلويات والطبخ (يمكن الالتحاق بالتكوين ابتداءً من مستوى السنة التاسعة أساسي منهاة)"},
    opt_btp_cuisine:{fr:"BTP en cuisine (accessible dès la 2ème année secondaire ou CAP)",ar:"BTP في الطبخ (يمكن الالتحاق بالتكوين ابتداءً من مستوى السنة الثانية ثانوي منهاة أو CAP)"},
    opt_btp_patisserie:{fr:"BTP en pâtisserie (accessible dès la 2ème année secondaire ou CAP)",ar:"BTP في الحلويات (يمكن الالتحاق بالتكوين ابتداءً من مستوى السنة الثانية ثانوي منهاة أو CAP)"},
    opt_bts_cuisine:{fr:"BTS en cuisine (accessible avec le Baccalauréat ou un BTP)",ar:"BTS في الطبخ (يمكن الالتحاق بالتكوين ابتداءً من مستوى بكالوريا أو BTP)"},
    opt_bts_patisserie:{fr:"BTS en pâtisserie (accessible avec le Baccalauréat ou un BTP)",ar:"BTS في الحلويات (يمكن الالتحاق بالتكوين ابتداءً من مستوى بكالوريا أو BTP)"},
    opt_certificat:{fr:"Certificat de fin de formation (tous niveaux)",ar:"شهادة في ختم تكوين (أي مستوى)"},
    opt_rapide:{fr:"Formations accélérées",ar:"دورات تكوين سريعة"},
    lbl_source:{fr:"Comment avez-vous connu Master Class Academy ?",ar:"كيف تعرفت على ماستر كلاس أكاديمي؟"},
    opt_recommandation:{fr:"Recommandation",ar:"توصية"},
    opt_autre:{fr:"Autre",ar:"أخرى"},
    lbl_consent:{fr:"J'accepte d'être contacté(e) par l'équipe de Master Class Academy concernant ma demande.",ar:"أوافق على أن يتم الاتصال بي من طرف فريق ماستر كلاس أكاديمي بخصوص طلبي."},
    err_consent:{fr:"Merci d'accepter d'être contacté(e).",ar:"يرجى الموافقة على أن يتم الاتصال بك."},
    btn_submit:{fr:"Envoyer ma demande",ar:"إرسال طلبي"},
    success_title:{fr:"Merci pour votre inscription !",ar:"شكراً لتسجيلك!"},
    success_text:{fr:"Notre équipe vous contactera prochainement pour vous communiquer toutes les informations concernant votre formation.",ar:"سيتصل بك فريقنا قريباً لتزويدك بكل المعلومات المتعلقة بتكوينك."},

    loc_title:{fr:"Venez nous rencontrer",ar:"تعالوا لمقابلتنا"},
    loc_address_label:{fr:"Adresse",ar:"العنوان"},
    loc_phone_label:{fr:"Téléphone",ar:"الهاتف"},
    loc_email_label:{fr:"Email",ar:"البريد الإلكتروني"},
    loc_cta:{fr:"Nous contacter",ar:"اتصل بنا"},

    footer_slogan:{fr:"Formez-vous. Pratiquez. Réussissez.",ar:"تكوّن. مارس. انجح."},
    footer_nav_title:{fr:"Navigation",ar:"روابط"},
    footer_contact_title:{fr:"Contact",ar:"اتصل بنا"},
    footer_rights:{fr:"Tous droits réservés.",ar:"جميع الحقوق محفوظة."}
  };

  var currentLang = 'fr';

  function applyLang(lang){
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'fr');
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var entry = translations[key];
      if(entry && entry[lang]){
        el.innerHTML = entry[lang];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  /* ---------------------------------------------------------
     6. FLAVORS CAROUSEL (touch/swipe + buttons)
  --------------------------------------------------------- */
  var carTrack = document.getElementById('carTrack');
  var carViewport = document.getElementById('carViewport');
  var carPrev = document.getElementById('carPrev');
  var carNext = document.getElementById('carNext');
  var carIndex = 0;

  function getSlidesPerView(){
    var w = window.innerWidth;
    if(w <= 560) return 1;
    if(w <= 900) return 2;
    return 4;
  }

  function getSlideStep(){
    var slide = carTrack.querySelector('.flavor-slide');
    if(!slide) return 0;
    var style = window.getComputedStyle(slide);
    var marginRight = parseFloat(style.marginRight) || 0;
    return slide.getBoundingClientRect().width + marginRight;
  }

  function updateCarousel(){
    var total = carTrack.children.length;
    var perView = getSlidesPerView();
    var maxIndex = Math.max(0, total - perView);
    carIndex = Math.min(Math.max(carIndex,0), maxIndex);
    var step = getSlideStep();
    var offset = carIndex * step;
    if(document.documentElement.getAttribute('dir') === 'rtl'){
      carTrack.style.transform = 'translateX(' + offset + 'px)';
    } else {
      carTrack.style.transform = 'translateX(-' + offset + 'px)';
    }
  }

  if(carTrack){
    carNext.addEventListener('click', function(){ carIndex++; updateCarousel(); });
    carPrev.addEventListener('click', function(){ carIndex--; updateCarousel(); });
    window.addEventListener('resize', updateCarousel);

    // touch swipe
    var startX = 0, isDown = false;
    carViewport.addEventListener('touchstart', function(e){
      startX = e.touches[0].clientX; isDown = true;
    }, {passive:true});
    carViewport.addEventListener('touchend', function(e){
      if(!isDown) return;
      var diff = e.changedTouches[0].clientX - startX;
      var rtl = document.documentElement.getAttribute('dir') === 'rtl';
      if(diff < -40){ rtl ? carIndex-- : carIndex++; }
      else if(diff > 40){ rtl ? carIndex++ : carIndex--; }
      isDown = false;
      updateCarousel();
    }, {passive:true});

    updateCarousel();
  }

  /* ---------------------------------------------------------
     7. LIGHTBOX (masonry + gallery)
  --------------------------------------------------------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, alt){
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.lightbox-trigger').forEach(function(item){
    item.addEventListener('click', function(){
      var full = item.getAttribute('data-full');
      var img = item.querySelector('img');
      openLightbox(full, img ? img.alt : '');
    });
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeLightbox();
  });

  /* ---------------------------------------------------------
     8. GALLERY FILTER
  --------------------------------------------------------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function(item){
        if(filter === 'tous' || item.getAttribute('data-cat') === filter){
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  /* ---------------------------------------------------------
     9. TESTIMONIALS SLIDER (auto-rotating)
  --------------------------------------------------------- */
  var testiTrack = document.getElementById('testiTrack');
  var testiDotsWrap = document.getElementById('testiDots');
  var testiCards = testiTrack ? testiTrack.children : [];
  var testiIndex = 0;
  var testiTimer;

  if(testiTrack){
    for(var t=0;t<testiCards.length;t++){
      var dot = document.createElement('span');
      if(t===0) dot.classList.add('active');
      (function(idx){
        dot.addEventListener('click', function(){ goToTesti(idx); });
      })(t);
      testiDotsWrap.appendChild(dot);
    }

    function goToTesti(idx){
      testiIndex = idx;
      var rtl = document.documentElement.getAttribute('dir') === 'rtl';
      var offset = idx * 100;
      testiTrack.style.transform = 'translateX(' + (rtl ? offset : -offset) + '%)';
      Array.prototype.forEach.call(testiDotsWrap.children, function(d,i){
        d.classList.toggle('active', i===idx);
      });
    }

    function nextTesti(){
      testiIndex = (testiIndex + 1) % testiCards.length;
      goToTesti(testiIndex);
    }

    function startAutoSlide(){
      testiTimer = setInterval(nextTesti, 5500);
    }
    function stopAutoSlide(){
      clearInterval(testiTimer);
    }

    startAutoSlide();
    testiTrack.addEventListener('mouseenter', stopAutoSlide);
    testiTrack.addEventListener('mouseleave', startAutoSlide);
    window.addEventListener('resize', function(){ goToTesti(testiIndex); });
  }

  /* ---------------------------------------------------------
     10. REGISTRATION FORM VALIDATION
  --------------------------------------------------------- */
  var form = document.getElementById('registrationForm');
  var formSuccess = document.getElementById('formSuccess');

  function setInvalid(row, invalid){
    if(!row) return;
    row.classList.toggle('invalid', invalid);
  }

  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  function isValidPhone(value){
    return /^[0-9+\s-]{6,}$/.test(value);
  }

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var valid = true;

      var fullname = document.getElementById('fullname');
      var fnRow = fullname.closest('.form-row');
      if(!fullname.value.trim()){ setInvalid(fnRow,true); valid=false; } else { setInvalid(fnRow,false); }

      var dob = document.getElementById('dob');
      var dobRow = dob.closest('.form-row');
      if(!dob.value){ setInvalid(dobRow,true); valid=false; } else { setInvalid(dobRow,false); }

      var phone = document.getElementById('phone');
      var phoneRow = phone.closest('.form-row');
      if(!phone.value.trim() || !isValidPhone(phone.value.trim())){ setInvalid(phoneRow,true); valid=false; } else { setInvalid(phoneRow,false); }

      var email = document.getElementById('email');
      var emailRow = email.closest('.form-row');
      if(email.value.trim() && !isValidEmail(email.value.trim())){ setInvalid(emailRow,true); valid=false; } else { setInvalid(emailRow,false); }

      var address = document.getElementById('address');
      var addressRow = address.closest('.form-row');
      if(!address.value.trim()){ setInvalid(addressRow,true); valid=false; } else { setInvalid(addressRow,false); }

      var specialty = document.getElementById('specialty');
      var specialtyRow = specialty.closest('.form-row');
      if(!specialty.value){ setInvalid(specialtyRow,true); valid=false; } else { setInvalid(specialtyRow,false); }

      var consent = document.getElementById('consent');
      var consentErr = document.querySelector('.err-msg-check');
      if(!consent.checked){ consentErr.classList.add('show'); valid=false; } else { consentErr.classList.remove('show'); }

      if(!valid){
        var firstInvalid = form.querySelector('.invalid, .err-msg-check.show');
        if(firstInvalid){ firstInvalid.scrollIntoView({behavior:'smooth', block:'center'}); }
        return;
      }

      // Frontend-only: no backend configured. Show success state.
      form.style.display = 'none';
      formSuccess.classList.add('show');
    });

    // live-clear validation state as user types
    form.querySelectorAll('input, select').forEach(function(field){
      field.addEventListener('input', function(){
        var row = field.closest('.form-row');
        if(row) setInvalid(row, false);
        if(field.id === 'consent'){
          document.querySelector('.err-msg-check').classList.remove('show');
        }
      });
    });
  }

  /* ---------------------------------------------------------
     11. SMOOTH SCROLL for in-page anchors (extra safety for older browsers)
  --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var targetId = this.getAttribute('href');
      if(targetId.length > 1){
        var target = document.querySelector(targetId);
        if(target){
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({top: top, behavior:'smooth'});
        }
      }
    });
  });

})();
