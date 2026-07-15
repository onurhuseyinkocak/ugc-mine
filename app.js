/* Mine Koçak — portfolio behaviour: i18n (EN/TR) + geo default, nav, reveal, mobile menu, marquee, lead form */
(function () {
  "use strict";

  var I18N = {
    en: {
      "nav.services": "Services", "nav.portfolio": "Portfolio", "nav.bangkok": "Bangkok", "nav.packages": "Packages", "nav.faq": "FAQ", "nav.cta": "Work With Me",

      "hero.kicker": "Bangkok · Beauty-first · Canvas UGC",
      "hero.h": "Bangkok-based UGC creator for <em>beauty, fashion &amp; lifestyle</em> brands.",
      "hero.sub": "Beauty-first UGC plus recurring Canvas UGC for products, apps, places and services, created by our Bangkok network.",
      "hero.cta1": "Work With Me <span class=\"arrow\">→</span>", "hero.cta2": "View portfolio",
      "hero.chip1": "Bangkok, Thailand", "hero.chip2": "English &amp; Turkish content", "hero.chip3": "Brands worldwide",

      "mq.beauty": "Beauty", "mq.skincare": "Skincare", "mq.fashion": "Fashion", "mq.lifestyle": "Lifestyle", "mq.travel": "Travel", "mq.hotels": "Hotels &amp; Cafés", "mq.wellness": "Wellness", "mq.apps": "Apps", "mq.food": "Food &amp; Beverage", "mq.products": "Consumer Products", "mq.services": "Services", "mq.canvas": "Canvas UGC",

      "pos.kicker": "Who I am",
      "pos.big": "A female UGC creator based in Bangkok — available for local shoots and global product campaigns, with content that feels natural, polished and brand-safe.",
      "pos.p": "I help beauty, skincare, fashion, lifestyle, travel, wellness, café, hotel and app brands turn products into content people actually want to watch. Everything is shot to feel like a real recommendation — aesthetic, warm and on-brand — not a stiff advertisement.",
      "pos.li1": "Based in Bangkok — available for on-location lifestyle shoots",
      "pos.li2": "Global-ready: brands ship products to Bangkok for content",
      "pos.li3": "Beauty, fashion, lifestyle, travel, wellness, hospitality &amp; apps",
      "pos.li4": "Authentic, polished, brand-safe — built for ads and organic social",

      "svc.kicker": "Services", "svc.h": "Content made to look effortless.",
      "svc.p": "From a single UGC video to a full content package — every deliverable is shot, edited and delivered ready to post or run as an ad.",
      "svc1.t": "UGC Video Ads", "svc1.d": "Hook-first videos built to convert on paid social — TikTok, Reels and Meta.",
      "svc2.t": "Organic Reels &amp; TikTok", "svc2.d": "Native short-form that feels at home on the feed and earns watch-time.",
      "svc3.t": "Product Photography", "svc3.d": "Clean, editorial stills for product pages, ads and social — add-on or standalone.",
      "svc4.t": "Beauty &amp; Skincare Content", "svc4.d": "Demos, routines and application shots that show texture, result and feel.",
      "svc5.t": "Fashion Try-On &amp; Outfit", "svc5.d": "Try-on hauls and outfit storytelling that make pieces feel wearable.",
      "svc6.t": "Lifestyle Storytelling", "svc6.d": "Warm, day-in-the-life integration that places a product in a real moment.",
      "svc7.t": "Travel / Hotel / Café Content", "svc7.d": "On-location hospitality content from Bangkok's most photogenic spaces.",
      "svc8.t": "Couple Lifestyle Content", "svc8.d": "Relatable couple and travel content for lifestyle and hospitality brands.",
      "svc9.t": "App / Digital Product UGC", "svc9.d": "Natural, lifestyle-style walkthroughs for beauty, wellness and lifestyle apps.",
      "svc10.t": "Canvas UGC Programs", "svc10.d": "Recurring concepts, scripts, videos and optional posting for a brand-owned or dedicated ambassador account in any category.",

      "pf.kicker": "Live creator work", "pf.h": "Watch Mine on Instagram.",
      "pf.p": "Real, published creator work. Open any card to watch the original post or Reel with sound.",
      "pf.c.beauty": "Beauty", "pf.c.fashion": "Fashion", "pf.c.lifestyle": "Lifestyle", "pf.c.skincare": "Skincare", "pf.c.hosp": "Hospitality", "pf.c.app": "App", "pf.c.travel": "Travel",
      "pf1.t": "Makeup and hair creator Reel", "pf2.t": "Press-on nails product demo", "pf3.t": "Creator introduction", "pf4.t": "Outdoor lifestyle storytelling",
      "pf5.t": "Beach lifestyle visual", "pf6.t": "Natural lifestyle hook",
      "pf.note": "Published on @mineexplora · live work checked 15 July 2026.",

      "why.kicker": "Why brands work with me", "why.h": "Easy to brief, lovely to watch.",
      "why1.q": "Natural <span>on camera</span>", "why1.p": "A warm, real presence that makes a product feel recommended, not advertised.",
      "why2.q": "A clean <span>aesthetic</span>", "why2.p": "Beauty- and lifestyle-led visuals that sit beautifully on a brand's feed and ads.",
      "why3.q": "Bangkok <span>visuals</span>", "why3.p": "Cafés, hotels and lifestyle locations that give global brands fresh, Asia-based content.",
      "why4.q": "Fast &amp; <span>professional</span>", "why4.p": "Clear communication, agreed scope and on-time delivery — easy to work with.",
      "why5.q": "Made for <span>ads &amp; organic</span>", "why5.p": "Hook-first content that works as a paid creative or an organic post.",
      "why6.q": "Brand-safe &amp; <span>flexible</span>", "why6.p": "Polished, on-brand presentation that adapts across beauty, fashion and lifestyle niches.",

      "bkk.kicker": "The Bangkok advantage",
      "bkk.big": "A creative city that gives your brand fresh, warm, internationally-aesthetic content.",
      "bkk.p1": "Bangkok is full of light-filled cafés, design-led hotels and lifestyle spaces that photograph beautifully. For a global beauty, fashion or lifestyle brand, that means content that feels current and travel-inspired — shot efficiently, on location, without the cost of a Western production.",
      "bkk.p2": "It's an Asia base with a global eye: relatable enough to feel authentic, polished enough to sit next to your brand's best work.",

      "types.kicker": "What I create", "types.h": "Formats brands ask for.",
      "t.unbox": "Unboxing", "t.demo": "Product demo", "t.ps": "Problem / solution ad", "t.morning": "Morning routine", "t.grwm": "GRWM", "t.tryon": "Try-on haul",
      "t.vo": "Voiceover UGC", "t.testi": "Testimonial-style", "t.life": "Lifestyle integration", "t.travel": "Café / hotel / travel", "t.app": "App walkthrough", "t.couple": "Couple lifestyle", "t.canvas": "Canvas UGC series",

      "proc.kicker": "Process", "proc.h": "Simple, from brief to delivery.",
      "step1.t": "Brand brief", "step1.d": "You share the product, goal, references and timeline.",
      "step2.t": "Concept &amp; script", "step2.d": "I plan the angle, hook and shot list around your product.",
      "step3.t": "Shoot in Bangkok", "step3.d": "Filmed on location, at home or in a lifestyle setting.",
      "step4.t": "Delivery-ready", "step4.d": "Edited, captioned content delivered for ads or organic — raw files on request.",

      "pkg.kicker": "Collaboration options", "pkg.h": "Pick a starting point.",
      "pkg.p": "Flexible scopes shaped to your brief. Custom quote available — contact for rates.",
      "pkg.rates": "Contact for rates", "pkg.addon": "Add-on",
      "pkg1.t": "Single UGC Video", "pkg1.d": "One concept, one video, edited + raw. Best for a first test.",
      "pkg2.t": "UGC Video Bundle", "pkg2.d": "A set of videos with multiple hooks for organic + paid testing.",
      "pkg3.t": "Canvas UGC / Monthly Content", "pkg3.d": "A recurring short-form system for your brand or ambassador account, with concepts, scripts, edits and optional posting.",
      "pkg4.t": "Product Photography", "pkg4.d": "Editorial product stills to pair with your video deliverables.",
      "pkg5.t": "Bangkok Location Shoot", "pkg5.d": "On-location café, hotel or lifestyle content shot in Bangkok.",
      "pkg6.t": "Couple / Travel Lifestyle", "pkg6.d": "Warm couple and travel content for lifestyle and hospitality brands.",

      "faq.kicker": "FAQ", "faq.h": "Questions brands ask.",
      "faq.q1": "Can I hire a Bangkok-based UGC creator for my beauty brand?",
      "faq.a1": "Yes. I'm a Bangkok-based female UGC creator specialising in beauty, skincare, fashion and lifestyle content — authentic, aesthetic short-form for ads, reels and TikTok. I work with local Bangkok businesses and with international brands that ship products to Thailand.",
      "faq.q2": "Do you create UGC videos for fashion and lifestyle brands?",
      "faq.a2": "Yes — try-ons, outfit content, lifestyle storytelling and product integration are core formats, shot to feel natural and brand-safe and delivered ready for organic posts and paid social.",
      "faq.q3": "Can you shoot content in cafés, hotels or lifestyle locations in Bangkok?",
      "faq.a3": "Yes. Bangkok's cafés, hotels and lifestyle spaces are a real advantage. I shoot on location for hospitality, travel, café and lifestyle campaigns, giving brands fresh, Asia-based visuals.",
      "faq.q4": "Can international brands send products to Bangkok for UGC content?",
      "faq.a4": "Yes — that's a common way to work. Once the product arrives, I handle concept, shoot and delivery remotely, with usage rights agreed up front.",
      "faq.q5": "Do you create content for TikTok, Instagram Reels and paid ads?",
      "faq.a5": "Yes. Content is built native for TikTok, Reels and Shorts, and can be delivered as organic posts or paid ad creatives, with raw footage and usage rights available.",
      "faq.q6": "Can you create couple lifestyle content?",
      "faq.a6": "Yes — couple, travel and lifestyle content is available, great for travel, hospitality and lifestyle brands. For dedicated travel and hospitality campaigns there's also a sister studio, <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a>.",
      "faq.q7": "Can you create UGC for mobile apps?",
      "faq.a7": "Yes. Lifestyle-style app UGC — walkthroughs, problem-solution and integration content — framed in a natural, everyday way that suits beauty, wellness and lifestyle apps.",
      "faq.q8": "How do brands collaborate with you?",
      "faq.a8": "Send the brand, product, timeline and content needs through the form below, by email, or via Instagram DM. I'll reply with content angles, scope and a custom quote based on deliverables.",
      "faq.q9": "Do you offer Canvas UGC for every brand category?",
      "faq.a9": "Yes. We create recurring Canvas UGC for brand-owned or dedicated ambassador accounts across beauty, apps, food, travel, hospitality, wellness, fashion, education, services and everyday consumer products. The brief is matched to the right creator and setting.",

      "contact.kicker": "Let's collaborate", "contact.h": "Tell me about your brand.",
      "contact.sub": "Share your brand, product, timeline and content needs — I'll come back with content angles and a custom quote, usually within 24 hours.",
      "contact.response": "Available for collaborations · replies within 24h",
      "net.kicker": "Creator network", "net.h": "Every category. The right lead creator.", "net.p": "All three creators handle broad briefs and Canvas UGC. We lead with the strongest fit instead of presenting a generic one-size-fits-all team.",
      "net.mine.tag": "Beauty · Lifestyle · Travel", "net.mine.p": "Warm female-led UGC for beauty, everyday products, lifestyle, travel and consumer apps.",
      "net.onur.tag": "Tech · SaaS · Apps", "net.onur.p": "Product-fluent explainers, demos and founder-style UGC for technical products.",
      "net.movia.tag": "Couple Travel · Places", "net.movia.p": "Couple travel and venue videos for hotels, cafés, restaurants, destinations and travel apps.",
      "net.current": "You are here", "net.visit": "Visit portfolio →",
      "form.name": "Name", "form.name.ph": "Your name", "form.email": "Email <span class=\"req\">*</span>",
      "form.brand": "Brand", "form.brand.ph": "Brand name", "form.niche": "Niche <span class=\"req\">*</span>", "form.select": "Select…",
      "form.n.beauty": "Beauty / Skincare", "form.n.fashion": "Fashion / Clothing", "form.n.lifestyle": "Lifestyle", "form.n.travel": "Travel / Hospitality", "form.n.hotel": "Hotel / Café / Restaurant", "form.n.wellness": "Wellness", "form.n.app": "Mobile app", "form.n.food": "Food / Beverage", "form.n.consumer": "Consumer product / service", "form.n.other": "Other",
      "form.need": "What do you need?", "form.need.ads": "UGC video ads", "form.need.organic": "Organic reels / TikTok", "form.need.photo": "Product photography", "form.need.shoot": "Bangkok location shoot", "form.need.monthly": "Monthly content", "form.need.canvas": "Canvas UGC / brand account",
      "form.msg": "Tell me about it", "form.msg.ph": "Brand, product, timeline and the kind of content you're after.",
      "form.send": "Send inquiry <span class=\"arrow\">→</span>",
      "form.sending": "Sending…", "form.ok": "Thank you — got it. I'll reply within 24 hours.", "form.err": "Add your email and niche, then try again.",
      "form.fallback": "Automatic delivery is temporarily unavailable. Your completed brief is ready as an email draft:", "form.fallback.cta": "Open email",

      "footer.tag": "Beauty-first UGC and recurring Canvas UGC for products, apps, places and services across every brand category.",
      "footer.explore": "Explore", "footer.connect": "Connect", "footer.network": "Creator network", "footer.email": "Email", "footer.made": "Bangkok, Thailand · Working worldwide"
    },

    tr: {
      "nav.services": "Hizmetler", "nav.portfolio": "Portfolyo", "nav.bangkok": "Bangkok", "nav.packages": "Paketler", "nav.faq": "SSS", "nav.cta": "Birlikte çalışalım",

      "hero.kicker": "Bangkok · Beauty-first · Canvas UGC",
      "hero.h": "<em>Güzellik, moda &amp; yaşam tarzı</em> markaları için Bangkok merkezli UGC içerik üreticisi.",
      "hero.sub": "Ürün, uygulama, mekân ve hizmetler için beauty-first UGC ve düzenli Canvas UGC; Bangkok üretici ağımızla.",
      "hero.cta1": "Birlikte çalışalım <span class=\"arrow\">→</span>", "hero.cta2": "Portfolyoya bak",
      "hero.chip1": "Bangkok, Tayland", "hero.chip2": "İngilizce &amp; Türkçe içerik", "hero.chip3": "Dünya geneli markalar",

      "mq.beauty": "Güzellik", "mq.skincare": "Cilt Bakımı", "mq.fashion": "Moda", "mq.lifestyle": "Yaşam Tarzı", "mq.travel": "Seyahat", "mq.hotels": "Otel &amp; Kafe", "mq.wellness": "Wellness", "mq.apps": "Uygulamalar", "mq.food": "Yeme İçme", "mq.products": "Tüketici Ürünleri", "mq.services": "Hizmetler", "mq.canvas": "Canvas UGC",

      "pos.kicker": "Ben kimim",
      "pos.big": "Bangkok merkezli bir kadın UGC içerik üreticisi — yerel çekimler ve global ürün kampanyaları için müsait; doğal, özenli ve markaya güvenli içerikler.",
      "pos.p": "Güzellik, cilt bakımı, moda, yaşam tarzı, seyahat, wellness, kafe, otel ve uygulama markalarının ürünlerini, insanların gerçekten izlemek istediği içeriğe çeviriyorum. Her şey gerçek bir tavsiye gibi hissettirecek şekilde çekiliyor — estetik, sıcak ve markaya uygun; sıkıcı bir reklam değil.",
      "pos.li1": "Bangkok merkezli — mekânında yaşam tarzı çekimleri için müsait",
      "pos.li2": "Global hazır: markalar içerik için ürünlerini Bangkok'a gönderiyor",
      "pos.li3": "Güzellik, moda, yaşam tarzı, seyahat, wellness, ağırlama &amp; uygulamalar",
      "pos.li4": "Samimi, özenli, markaya güvenli — reklam ve organik sosyal için kurgulanmış",

      "svc.kicker": "Hizmetler", "svc.h": "Zahmetsiz görünen içerikler.",
      "svc.p": "Tek bir UGC videodan eksiksiz bir içerik paketine kadar — her teslimat çekilir, kurgulanır ve paylaşıma ya da reklama hazır teslim edilir.",
      "svc1.t": "UGC Reklam Videoları", "svc1.d": "Paid sosyalde dönüşüm için kanca-öncelikli videolar — TikTok, Reels ve Meta.",
      "svc2.t": "Organik Reels &amp; TikTok", "svc2.d": "Feed'de doğal duran, izlenme süresi kazanan yerel kısa videolar.",
      "svc3.t": "Ürün Fotoğrafçılığı", "svc3.d": "Ürün sayfaları, reklam ve sosyal için temiz, editoryal kareler — ek ya da tek başına.",
      "svc4.t": "Güzellik &amp; Cilt Bakımı İçeriği", "svc4.d": "Dokuyu, sonucu ve hissi gösteren demo, rutin ve uygulama çekimleri.",
      "svc5.t": "Moda Try-On &amp; Kombin", "svc5.d": "Parçaları giyilebilir hissettiren try-on haul ve kombin anlatımı.",
      "svc6.t": "Yaşam Tarzı Anlatımı", "svc6.d": "Ürünü gerçek bir ana yerleştiren sıcak, günlük-hayat entegrasyonu.",
      "svc7.t": "Seyahat / Otel / Kafe İçeriği", "svc7.d": "Bangkok'un en fotojenik mekânlarından, yerinde ağırlama içeriği.",
      "svc8.t": "Çift Yaşam Tarzı İçeriği", "svc8.d": "Yaşam tarzı ve ağırlama markaları için samimi çift ve seyahat içeriği.",
      "svc9.t": "Uygulama / Dijital Ürün UGC", "svc9.d": "Güzellik, wellness ve yaşam tarzı uygulamaları için doğal, yaşam-tarzı tanıtımlar.",
      "svc10.t": "Canvas UGC Programları", "svc10.d": "Marka hesabı veya özel ambassador hesabı için düzenli konsept, senaryo, video ve isteğe bağlı yayınlama. Her kategoriye açık.",

      "pf.kicker": "Canlı üretici işleri", "pf.h": "Mine'ı Instagram'da izle.",
      "pf.p": "Gerçek, yayınlanmış üretici işleri. Orijinal gönderiyi veya Reels videosunu sesli izlemek için bir karta dokun.",
      "pf.c.beauty": "Güzellik", "pf.c.fashion": "Moda", "pf.c.lifestyle": "Yaşam Tarzı", "pf.c.skincare": "Cilt Bakımı", "pf.c.hosp": "Ağırlama", "pf.c.app": "Uygulama", "pf.c.travel": "Seyahat",
      "pf1.t": "Makyaj ve saç üretici Reels'i", "pf2.t": "Takma tırnak ürün demosu", "pf3.t": "Üretici tanıtımı", "pf4.t": "Outdoor lifestyle hikâyesi",
      "pf5.t": "Sahil lifestyle görseli", "pf6.t": "Doğal lifestyle kancası",
      "pf.note": "@mineexplora'da yayında · canlı işler 15 Temmuz 2026'da kontrol edildi.",

      "why.kicker": "Markalar neden benimle çalışıyor", "why.h": "Brief vermesi kolay, izlemesi keyifli.",
      "why1.q": "Kamera <span>önünde doğal</span>", "why1.p": "Ürünü reklam değil, tavsiye gibi hissettiren sıcak ve gerçek bir duruş.",
      "why2.q": "Temiz bir <span>estetik</span>", "why2.p": "Markanın feed'inde ve reklamlarında güzel duran güzellik ve yaşam tarzı odaklı görseller.",
      "why3.q": "Bangkok <span>görselleri</span>", "why3.p": "Global markalara taze, Asya merkezli içerik veren kafeler, oteller ve yaşam tarzı mekânları.",
      "why4.q": "Hızlı &amp; <span>profesyonel</span>", "why4.p": "Net iletişim, anlaşılmış kapsam ve zamanında teslim — çalışması kolay.",
      "why5.q": "Reklam &amp; <span>organik için</span>", "why5.p": "Paid içerik ya da organik gönderi olarak çalışan kanca-öncelikli içerik.",
      "why6.q": "Markaya güvenli &amp; <span>esnek</span>", "why6.p": "Güzellik, moda ve yaşam tarzı nişlerine uyum sağlayan özenli, markaya uygun sunum.",

      "bkk.kicker": "Bangkok avantajı",
      "bkk.big": "Markana taze, sıcak ve uluslararası estetikte içerik veren yaratıcı bir şehir.",
      "bkk.p1": "Bangkok; ışıkla dolu kafeler, tasarım odaklı oteller ve güzel fotoğraflanan yaşam tarzı mekânlarıyla dolu. Global bir güzellik, moda ya da yaşam tarzı markası için bu, güncel ve seyahat ilhamlı hissettiren içerik demek — verimli, mekânında ve Batı prodüksiyonunun maliyeti olmadan çekilmiş.",
      "bkk.p2": "Global bir bakışla bir Asya üssü: samimi hissettirecek kadar gerçek, markanın en iyi işinin yanında durabilecek kadar özenli.",

      "types.kicker": "Ne üretiyorum", "types.h": "Markaların istediği formatlar.",
      "t.unbox": "Unboxing", "t.demo": "Ürün demosu", "t.ps": "Problem / çözüm reklamı", "t.morning": "Sabah rutini", "t.grwm": "GRWM", "t.tryon": "Try-on haul",
      "t.vo": "Voiceover UGC", "t.testi": "Testimonial tarzı", "t.life": "Yaşam tarzı entegrasyonu", "t.travel": "Kafe / otel / seyahat", "t.app": "Uygulama tanıtımı", "t.couple": "Çift yaşam tarzı", "t.canvas": "Canvas UGC serisi",

      "proc.kicker": "Süreç", "proc.h": "Brief'ten teslime, basit.",
      "step1.t": "Marka brief'i", "step1.d": "Ürünü, hedefi, referansları ve zaman planını paylaşırsın.",
      "step2.t": "Konsept &amp; senaryo", "step2.d": "Ürünün etrafında açıyı, kancayı ve çekim listesini planlarım.",
      "step3.t": "Bangkok'ta çekim", "step3.d": "Mekânında, evde ya da bir yaşam tarzı ortamında çekilir.",
      "step4.t": "Teslime hazır", "step4.d": "Reklam ya da organik için kurgulu, altyazılı içerik teslim edilir — ham dosyalar istek üzerine.",

      "pkg.kicker": "İş birliği seçenekleri", "pkg.h": "Bir başlangıç noktası seç.",
      "pkg.p": "Brief'ine göre şekillenen esnek kapsamlar. Özel teklif mevcut — fiyat için iletişime geç.",
      "pkg.rates": "Fiyat için iletişim", "pkg.addon": "Ek",
      "pkg1.t": "Tek UGC Video", "pkg1.d": "Tek konsept, tek video, kurgu + ham. İlk test için ideal.",
      "pkg2.t": "UGC Video Paketi", "pkg2.d": "Organik + paid test için çoklu kancalı bir video seti.",
      "pkg3.t": "Canvas UGC / Aylık İçerik", "pkg3.d": "Marka veya ambassador hesabın için konsept, senaryo, kurgu ve isteğe bağlı yayınlamayı kapsayan düzenli kısa video sistemi.",
      "pkg4.t": "Ürün Fotoğrafçılığı", "pkg4.d": "Video teslimatlarınla eşleşecek editoryal ürün kareleri.",
      "pkg5.t": "Bangkok Mekan Çekimi", "pkg5.d": "Bangkok'ta yerinde çekilen kafe, otel ya da yaşam tarzı içeriği.",
      "pkg6.t": "Çift / Seyahat Yaşam Tarzı", "pkg6.d": "Yaşam tarzı ve ağırlama markaları için sıcak çift ve seyahat içeriği.",

      "faq.kicker": "SSS", "faq.h": "Markaların sorduğu sorular.",
      "faq.q1": "Güzellik markam için Bangkok merkezli bir UGC içerik üreticisi tutabilir miyim?",
      "faq.a1": "Evet. Bangkok merkezli bir kadın UGC içerik üreticisiyim; güzellik, cilt bakımı, moda ve yaşam tarzı içeriğinde uzmanım — reklam, reels ve TikTok için samimi, estetik kısa video. Hem yerel Bangkok işletmeleriyle hem de Tayland'a ürün gönderen uluslararası markalarla çalışıyorum.",
      "faq.q2": "Moda ve yaşam tarzı markaları için UGC video üretiyor musun?",
      "faq.a2": "Evet — try-on, kombin içeriği, yaşam tarzı anlatımı ve ürün entegrasyonu temel formatlar; doğal ve markaya güvenli çekilir, organik gönderi ve paid sosyale hazır teslim edilir.",
      "faq.q3": "Bangkok'taki kafelerde, otellerde ya da yaşam tarzı mekânlarında çekim yapabilir misin?",
      "faq.a3": "Evet. Bangkok'un kafeleri, otelleri ve yaşam tarzı mekânları gerçek bir avantaj. Ağırlama, seyahat, kafe ve yaşam tarzı kampanyaları için mekânında çekiyorum; markalara taze, Asya merkezli görseller veriyorum.",
      "faq.q4": "Uluslararası markalar UGC içerik için Bangkok'a ürün gönderebilir mi?",
      "faq.a4": "Evet — yaygın bir çalışma şekli. Ürün geldiğinde konsept, çekim ve teslimi uzaktan yönetiyorum; kullanım hakları baştan netleşiyor.",
      "faq.q5": "TikTok, Instagram Reels ve paid reklamlar için içerik üretiyor musun?",
      "faq.a5": "Evet. İçerik TikTok, Reels ve Shorts için yerel kurgulanır; organik gönderi ya da reklam içeriği olarak teslim edilebilir, ham görüntü ve kullanım hakları mevcuttur.",
      "faq.q6": "Çift yaşam tarzı içeriği üretebilir misin?",
      "faq.a6": "Evet — çift, seyahat ve yaşam tarzı içeriği mevcut; seyahat, ağırlama ve yaşam tarzı markaları için ideal. Özel seyahat ve ağırlama kampanyaları için ayrıca bir kardeş stüdyo var: <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a>.",
      "faq.q7": "Mobil uygulamalar için UGC üretebilir misin?",
      "faq.a7": "Evet. Yaşam-tarzı tarzında uygulama UGC'si — tanıtım, problem-çözüm ve entegrasyon içeriği — güzellik, wellness ve yaşam tarzı uygulamalarına uyan doğal, gündelik bir tonda.",
      "faq.q8": "Markalar seninle nasıl iş birliği yapar?",
      "faq.a8": "Markayı, ürünü, zaman planını ve içerik ihtiyaçlarını aşağıdaki formdan, e-posta ya da Instagram DM ile gönder. İçerik açıları, kapsam ve teslimatlara göre özel bir teklifle dönerim.",
      "faq.q9": "Her marka kategorisi için Canvas UGC yapıyor musunuz?",
      "faq.a9": "Evet. Güzellik, uygulama, yeme içme, seyahat, hospitality, wellness, moda, eğitim, hizmet ve gündelik tüketici ürünleri için marka hesabı veya özel ambassador hesabına düzenli Canvas UGC üretiriz. Brief doğru üretici ve mekânla eşleştirilir.",

      "contact.kicker": "Hadi çalışalım", "contact.h": "Markandan bahset.",
      "contact.sub": "Markanı, ürününü, zaman planını ve içerik ihtiyaçlarını paylaş — içerik açıları ve özel bir teklifle, genelde 24 saat içinde dönerim.",
      "contact.response": "İş birliklerine açık · 24 saat içinde yanıt",
      "net.kicker": "Üretici ağı", "net.h": "Her kategori. Doğru lider üretici.", "net.p": "Üç üretici de geniş brief ve Canvas UGC işi yapar. Tek tip ekip gibi görünmek yerine her işte en güçlü eşleşmeyle liderlik ederiz.",
      "net.mine.tag": "Güzellik · Lifestyle · Travel", "net.mine.p": "Güzellik, gündelik ürünler, lifestyle, travel ve tüketici uygulamaları için sıcak kadın üretici bakışı.",
      "net.onur.tag": "Tech · SaaS · App", "net.onur.p": "Teknik ürünler için ürüne hâkim anlatım, demo ve founder-style UGC.",
      "net.movia.tag": "Couple Travel · Mekân", "net.movia.p": "Otel, kafe, restoran, destinasyon ve travel app'ler için çift seyahat ve mekân videoları.",
      "net.current": "Şu an buradasın", "net.visit": "Portfolyoya git →",
      "form.name": "İsim", "form.name.ph": "Adın", "form.email": "E-posta <span class=\"req\">*</span>",
      "form.brand": "Marka", "form.brand.ph": "Marka adı", "form.niche": "Niş <span class=\"req\">*</span>", "form.select": "Seç…",
      "form.n.beauty": "Güzellik / Cilt Bakımı", "form.n.fashion": "Moda / Giyim", "form.n.lifestyle": "Yaşam Tarzı", "form.n.travel": "Seyahat / Ağırlama", "form.n.hotel": "Otel / Kafe / Restoran", "form.n.wellness": "Wellness", "form.n.app": "Mobil uygulama", "form.n.food": "Yeme içme", "form.n.consumer": "Tüketici ürünü / hizmet", "form.n.other": "Diğer",
      "form.need": "Neye ihtiyacın var?", "form.need.ads": "UGC reklam videoları", "form.need.organic": "Organik reels / TikTok", "form.need.photo": "Ürün fotoğrafçılığı", "form.need.shoot": "Bangkok mekan çekimi", "form.need.monthly": "Aylık içerik", "form.need.canvas": "Canvas UGC / marka hesabı",
      "form.msg": "Biraz anlat", "form.msg.ph": "Marka, ürün, zaman planı ve istediğin içerik türü.",
      "form.send": "Mesaj gönder <span class=\"arrow\">→</span>",
      "form.sending": "Gönderiliyor…", "form.ok": "Teşekkürler — aldım. 24 saat içinde döneceğim.", "form.err": "E-posta ve niş ekleyip tekrar dene.",
      "form.fallback": "Otomatik gönderim geçici olarak kapalı. Doldurduğun brief e-posta taslağı olarak hazır:", "form.fallback.cta": "E-postayı aç",

      "footer.tag": "Her marka kategorisinde ürün, uygulama, mekân ve hizmetler için beauty-first UGC ve düzenli Canvas UGC.",
      "footer.explore": "Keşfet", "footer.connect": "Bağlan", "footer.network": "Üretici ağı", "footer.email": "E-posta", "footer.made": "Bangkok, Tayland · Dünya geneli çalışıyorum"
    },

    th: {
      "nav.services": "บริการ", "nav.portfolio": "พอร์ตโฟลิโอ", "nav.bangkok": "กรุงเทพ", "nav.packages": "แพ็กเกจ", "nav.faq": "คำถามที่พบบ่อย", "nav.cta": "ทำงานกับฉัน",

      "hero.kicker": "กรุงเทพฯ · Beauty-first · Canvas UGC",
      "hero.h": "UGC ที่ทำให้แบรนด์<br><em>ดูจริงและน่าเลือก</em>",
      "hero.sub": "Beauty-first UGC และ Canvas UGC ต่อเนื่องสำหรับสินค้า แอป สถานที่ และบริการ โดยเครือข่ายครีเอเตอร์ในกรุงเทพฯ",
      "hero.cta1": "ทำงานกับฉัน <span class=\"arrow\">→</span>", "hero.cta2": "ดูพอร์ตโฟลิโอ",
      "hero.chip1": "กรุงเทพ ประเทศไทย", "hero.chip2": "คอนเทนต์ภาษาอังกฤษและตุรกี · ส่งบรีฟภาษาไทยได้", "hero.chip3": "แบรนด์ทั่วโลก",

      "mq.beauty": "ความงาม", "mq.skincare": "ผลิตภัณฑ์บำรุงผิว", "mq.fashion": "แฟชั่น", "mq.lifestyle": "ไลฟ์สไตล์", "mq.travel": "การเดินทาง", "mq.hotels": "โรงแรม &amp; คาเฟ่", "mq.wellness": "สุขภาพและ wellness", "mq.apps": "แอปพลิเคชัน", "mq.food": "อาหารและเครื่องดื่ม", "mq.products": "สินค้าอุปโภคบริโภค", "mq.services": "บริการ", "mq.canvas": "Canvas UGC",

      "pos.kicker": "ฉันคือใคร",
      "pos.big": "ผู้สร้างเนื้อหา UGC หญิงที่ตั้งอยู่ในกรุงเทพ — พร้อมสำหรับการถ่ายภาพในสถานที่และแคมเปญผลิตภัณฑ์ระดับโลก มีเนื้อหาที่รู้สึกเป็นธรรมชาติ ประณีต และปลอดภัยสำหรับแบรนด์",
      "pos.p": "ฉันช่วยให้แบรนด์ความงาม ผลิตภัณฑ์บำรุงผิว แฟชั่น ไลฟ์สไตล์ การเดินทาง สุขภาพ คาเฟ่ โรงแรม และแอปพลิเคชันเปลี่ยนผลิตภัณฑ์เป็นเนื้อหาที่คนจริงๆ อยากดู ทุกอย่างถ่ายเพื่อให้รู้สึกเหมือนเป็นคำแนะนำที่แท้จริง — สวยงาม อบอุ่น และสอดคล้องกับแบรนด์ — ไม่ใช่โฆษณาที่เข้มงวด",
      "pos.li1": "ตั้งอยู่ในกรุงเทพ — พร้อมสำหรับการถ่ายภาพไลฟ์สไตล์ในสถานที่",
      "pos.li2": "พร้อมสำหรับโลก: แบรนด์ส่งผลิตภัณฑ์มาที่กรุงเทพเพื่อสร้างเนื้อหา",
      "pos.li3": "ความงาม แฟชั่น ไลฟ์สไตล์ การเดินทาง สุขภาพ การท่องเที่ยว &amp; แอปพลิเคชัน",
      "pos.li4": "แท้จริง ประณีต ปลอดภัยสำหรับแบรนด์ — สร้างขึ้นสำหรับโฆษณาและโซเชียลแบบปกติ",

      "svc.kicker": "บริการ", "svc.h": "เนื้อหาที่ดูไร้เรื่องราว",
      "svc.p": "จากวิดีโอ UGC เดียวไปจนถึงแพ็กเกจเนื้อหาที่สมบูรณ์ — ทุกส่วนการนำส่งถ่ายและตัดต่อแล้วและพร้อมสำหรับการโพสต์หรือเรียกใช้เป็นโฆษณา",
      "svc1.t": "วิดีโอโฆษณา UGC", "svc1.d": "วิดีโอที่ห้ามก่อนสร้างขึ้นเพื่อให้เกิดการแปลงบนโซเชียลที่จ่ายเงิน — TikTok, Reels และ Meta",
      "svc2.t": "Reels &amp; TikTok แบบปกติ", "svc2.d": "วิดีโอสั้นเนตีฟที่รู้สึกอยู่ที่บ้านในฟีด และได้รับเวลาดู",
      "svc3.t": "ถ่ายภาพผลิตภัณฑ์", "svc3.d": "ภาพนิ่งบริหารสะอาด สำหรับหน้าผลิตภัณฑ์ โฆษณา และโซเชียล — เพิ่มเติมหรือแบบสแตนด์โลน",
      "svc4.t": "ความงาม &amp; เนื้อหาผลิตภัณฑ์บำรุงผิว", "svc4.d": "สาธิต กิจวัตรและการใช้งานภาพที่แสดงเนื้อสัมผัส ผลลัพธ์ และความรู้สึก",
      "svc5.t": "แฟชั่น Try-On &amp; เสื้อผ้า", "svc5.d": "การลองห้องสมุดหนังสือและการเล่าเรื่องเสื้อผ้าที่ทำให้ชิ้นส่วนรู้สึกสวมใส่ได้",
      "svc6.t": "การเล่าเรื่องไลฟ์สไตล์", "svc6.d": "การรวมไลฟ์สไตล์ที่อบอุ่นและในแต่ละวันซึ่งวางผลิตภัณฑ์ไว้ในช่วงเวลาที่แท้จริง",
      "svc7.t": "เนื้อหาการเดินทาง / โรงแรม / คาเฟ่", "svc7.d": "เนื้อหาการท่องเที่ยวในสถานที่จากพื้นที่ที่มีฟটูนิกมากที่สุดของกรุงเทพ",
      "svc8.t": "เนื้อหาไลฟ์สไตล์คู่", "svc8.d": "เนื้อหาคู่และการเดินทางที่เกี่ยวข้องสำหรับแบรนด์ไลฟ์สไตล์และการท่องเที่ยว",
      "svc9.t": "แอป / เนื้อหา UGC ผลิตภัณฑ์ดิจิทัล", "svc9.d": "วิธีใช้งานวิดีโอแนวไลฟ์สไตล์ที่เป็นธรรมชาติสำหรับแอปความงาม สุขภาพ และไลฟ์สไตล์",
      "svc10.t": "โปรแกรม Canvas UGC", "svc10.d": "คอนเซปต์ สคริปต์ วิดีโอ และการลงโพสต์ตามตกลงแบบต่อเนื่อง สำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์เฉพาะในทุกหมวด",

      "pf.kicker": "ผลงานจริงของครีเอเตอร์", "pf.h": "ดูผลงาน Mine บน Instagram",
      "pf.p": "ผลงานจริงที่เผยแพร่แล้ว เปิดแต่ละการ์ดเพื่อดูโพสต์หรือ Reel ต้นฉบับพร้อมเสียง",
      "pf.c.beauty": "ความงาม", "pf.c.fashion": "แฟชั่น", "pf.c.lifestyle": "ไลฟ์สไตล์", "pf.c.skincare": "ผลิตภัณฑ์บำรุงผิว", "pf.c.hosp": "การท่องเที่ยว", "pf.c.app": "แอพพลิเคชั่น", "pf.c.travel": "การเดินทาง",
      "pf1.t": "Reel แต่งหน้าและทำผม", "pf2.t": "เดโมเล็บปลอม", "pf3.t": "แนะนำตัวครีเอเตอร์", "pf4.t": "เล่าเรื่องไลฟ์สไตล์กลางแจ้ง",
      "pf5.t": "ภาพไลฟ์สไตล์ริมทะเล", "pf6.t": "ฮุกไลฟ์สไตล์แบบธรรมชาติ",
      "pf.note": "เผยแพร่บน @mineexplora · ตรวจสอบผลงานล่าสุด 15 กรกฎาคม 2026",

      "why.kicker": "ทำไมแบรนด์ถึงทำงานกับฉัน", "why.h": "ง่ายในการให้คำสั่ง น่าดู",
      "why1.q": "ธรรมชาติ <span>หน้ากล้อง</span>", "why1.p": "การปรากฏตัวที่อบอุ่นและแท้จริงที่ทำให้ผลิตภัณฑ์รู้สึกแนะนำ ไม่ใช่โฆษณา",
      "why2.q": "สวย <span>สไตล์</span>", "why2.p": "ภาพที่นำโดยความงามและไลฟ์สไตล์ซึ่งนั่งอย่างสวยงามในฟีดและโฆษณาของแบรนด์",
      "why3.q": "กรุงเทพ <span>ภาพ</span>", "why3.p": "คาเฟ่ โรงแรม และสถานที่ไลฟ์สไตล์ที่ให้เนื้อหาที่สดใหม่และมีศูนย์กลางในเอเชียแก่แบรนด์ทั่วโลก",
      "why4.q": "เร็ว &amp; <span>มืออาชีพ</span>", "why4.p": "การสื่อสารที่ชัดเจน ขอบเขตที่ตกลงกันและการนำส่งในเวลา — ทำงานได้ง่ายๆ",
      "why5.q": "สร้างสำหรับ <span>โฆษณา &amp; ปกติ</span>", "why5.p": "เนื้อหาที่ห้ามก่อนซึ่งทำงานเป็นทรัพย์สินสร้างสรรค์ที่จ่ายหรือโพสต์แบบปกติ",
      "why6.q": "ปลอดภัยสำหรับแบรนด์ &amp; <span>ยืดหยุ่น</span>", "why6.p": "การนำเสนอที่ประณีตและสอดคล้องกับแบรนด์ซึ่งปรับให้เข้ากับหลุมความงาม แฟชั่น และไลฟ์สไตล์",

      "bkk.kicker": "ข้อได้เปรียบของกรุงเทพ",
      "bkk.big": "เมืองที่สร้างสรรค์ที่ให้เนื้อหาที่สดใหม่ อบอุ่น และสวยงามโดยนานาชาติแก่แบรนด์ของคุณ",
      "bkk.p1": "กรุงเทพเต็มไปด้วยคาเฟ่ที่เต็มไปด้วยแสง โรงแรมที่นำด้านการออกแบบและสถานที่ไลฟ์สไตล์ที่ถ่ายภาพได้สวยงาม สำหรับแบรนด์ความงาม แฟชั่น หรือไลฟ์สไตล์ทั่วโลก นั่นหมายถึงเนื้อหาที่รู้สึกว่าเป็นปัจจุบันและได้รับแรงบันดาลใจจากการเดินทาง — ถ่ายอย่างมีประสิทธิภาพ ในสถานที่ และไม่มีต้นทุนการผลิตแบบตะวันตก",
      "bkk.p2": "มันเป็นฐาน Asian ที่มีสายตาโลก: น่าเชื่อพอที่จะรู้สึกว่าเป็นของแท้ ประณีตพอที่จะนั่งข้างเคียงกับงานที่เหมาะสมของแบรนด์ของคุณ",

      "types.kicker": "สิ่งที่ฉันสร้าง", "types.h": "รูปแบบที่แบรนด์ขอ",
      "t.unbox": "การแกะกล่อง", "t.demo": "สาธิตผลิตภัณฑ์", "t.ps": "โฆษณาปัญหา / โซลูชัน", "t.morning": "กิจวัตรเช้า", "t.grwm": "GRWM", "t.tryon": "ลองห้องสมุดหนังสือ",
      "t.vo": "UGC บรรยายเสียง", "t.testi": "สไตล์การรับรอง", "t.life": "การรวมไลฟ์สไตล์", "t.travel": "คาเฟ่ / โรงแรม / การเดินทาง", "t.app": "คำแนะนำแอพพลิเคชั่น", "t.couple": "ไลฟ์สไตล์คู่", "t.canvas": "ซีรีส์ Canvas UGC",

      "proc.kicker": "กระบวนการ", "proc.h": "ง่าย จากสั่งให้นำส่ง",
      "step1.t": "สั่งแบรนด์", "step1.d": "คุณแบ่งปันผลิตภัณฑ์ เป้าหมาย การอ้างอิง และไทม์ไลน์",
      "step2.t": "แนวคิด &amp; สคริปต์", "step2.d": "ฉันวางแผนมุม โครมหลัก และรายชื่อภาพถ่ายรอบผลิตภัณฑ์",
      "step3.t": "ถ่ายในกรุงเทพ", "step3.d": "ถ่ายในสถานที่ ที่บ้าน หรือในสภาพแวดล้อมไลฟ์สไตล์",
      "step4.t": "พร้อมสำหรับการนำส่ง", "step4.d": "เนื้อหาที่ตัดต่อและมีคำบรรยายนำส่งสำหรับโฆษณาหรือโซเชียลแบบปกติ — ไฟล์ดิบขอได้",

      "pkg.kicker": "ตัวเลือกความร่วมมือ", "pkg.h": "เลือกจุดเริ่มต้น",
      "pkg.p": "ขอบเขตที่ยืดหยุ่นซึ่งกำหนดรูปร่างตามสั่ง เสนอราคาแบบกำหนดเองพร้อมใช้งาน — ติดต่อสำหรับอัตรา",
      "pkg.rates": "ติดต่อสำหรับอัตรา", "pkg.addon": "เพิ่มเติม",
      "pkg1.t": "วิดีโอ UGC เดียว", "pkg1.d": "แนวคิดเดียว วิดีโอเดียว ตัดต่อ + ดิบ เหมาะสมสำหรับการทดสอบครั้งแรก",
      "pkg2.t": "แพ็กเกจวิดีโอ UGC", "pkg2.d": "ชุดวิดีโอที่มีหลายขั้วสำหรับการทดสอบแบบปกติ + จ่าย",
      "pkg3.t": "Canvas UGC / คอนเทนต์รายเดือน", "pkg3.d": "ระบบวิดีโอสั้นต่อเนื่องสำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์ พร้อมคอนเซปต์ สคริปต์ ตัดต่อ และลงโพสต์ตามตกลง",
      "pkg4.t": "ถ่ายภาพผลิตภัณฑ์", "pkg4.d": "ภาพนิ่งผลิตภัณฑ์บริหารเพื่อจับคู่กับส่วนการนำส่งวิดีโอของคุณ",
      "pkg5.t": "การถ่ายภาพสถานที่กรุงเทพ", "pkg5.d": "เนื้อหาคาเฟ่ โรงแรม หรือไลฟ์สไตล์ที่ถ่ายในสถานที่ที่กรุงเทพ",
      "pkg6.t": "คู่ / การเดินทางไลฟ์สไตล์", "pkg6.d": "เนื้อหาคู่และการเดินทางที่อบอุ่นสำหรับแบรนด์ไลฟ์สไตล์และการท่องเที่ยว",

      "faq.kicker": "คำถามที่พบบ่อย", "faq.h": "คำถามที่แบรนด์ถาม",
      "faq.q1": "ฉันสามารถว่าจ้างผู้สร้างเนื้อหา UGC ที่ตั้งอยู่ในกรุงเทพสำหรับแบรนด์ความงามของฉันได้หรือไม่",
      "faq.a1": "ใช่ ฉันเป็นผู้สร้างเนื้อหา UGC หญิงที่ตั้งอยู่ในกรุงเทพซึ่งเชี่ยวชาญด้านเนื้อหาความงาม ผลิตภัณฑ์บำรุงผิว แฟชั่น และไลฟ์สไตล์ — วิดีโอสั้นที่แท้จริงและสวยงามสำหรับโฆษณา reels และ TikTok ฉันทำงานกับธุรกิจกรุงเทพในพื้นที่และแบรนด์นานาชาติที่ส่งผลิตภัณฑ์ไปยังประเทศไทย",
      "faq.q2": "คุณสร้างวิดีโอ UGC สำหรับแบรนด์แฟชั่นและไลฟ์สไตล์หรือไม่",
      "faq.a2": "ใช่ — การลองห้องสมุดหนังสือ เนื้อหาเสื้อผ้า การเล่าเรื่องไลฟ์สไตล์ และการรวมผลิตภัณฑ์เป็นรูปแบบหลัก ถ่ายเพื่อให้รู้สึกเป็นธรรมชาติและปลอดภัยสำหรับแบรนด์ และส่งมอบพร้อมสำหรับโพสต์แบบปกติและโซเชียลที่จ่าย",
      "faq.q3": "คุณสามารถถ่ายภาพเนื้อหาในคาเฟ่ โรงแรม หรือสถานที่ไลฟ์สไตล์ในกรุงเทพได้หรือไม่",
      "faq.a3": "ใช่ คาเฟ่ โรงแรม และสถานที่ไลฟ์สไตล์ของกรุงเทพเป็นข้อได้เปรียบที่แท้จริง ฉันถ่ายในสถานที่สำหรับแคมเปญการท่องเที่ยว การเดินทาง คาเฟ่ และไลฟ์สไตล์ ให้แบรนด์เนื้อหาที่สดใหม่และมีศูนย์กลางในเอเชีย",
      "faq.q4": "แบรนด์นานาชาติสามารถส่งผลิตภัณฑ์ไปที่กรุงเทพเพื่อสร้างเนื้อหา UGC ได้หรือไม่",
      "faq.a4": "ใช่ — นั่นเป็นวิธีการทำงานทั่วไป เมื่อผลิตภัณฑ์มาถึง ฉันจัดการแนวคิด การถ่ายภาพ และการนำส่งจากระยะไกล โดยตกลงสิทธิ์การใช้งานล่วงหน้า",
      "faq.q5": "คุณสร้างเนื้อหาสำหรับ TikTok, Instagram Reels และโฆษณาจ่ายหรือไม่",
      "faq.a5": "ใช่ เนื้อหาถูกสร้างขึ้นเนื้อหาดั้งเดิมสำหรับ TikTok, Reels และ Shorts และสามารถส่งมอบเป็นโพสต์แบบปกติหรือเป็นทรัพย์สินสร้างสรรค์ที่จ่ายเงิน โดยมีฟุตเทจดิบและสิทธิ์การใช้งานพร้อมใช้งาน",
      "faq.q6": "คุณสามารถสร้างเนื้อหาไลฟ์สไตล์คู่ได้หรือไม่",
      "faq.a6": "ใช่ — เนื้อหาคู่ การเดินทาง และไลฟ์สไตล์พร้อมใช้งาน ยอดเยี่ยมสำหรับแบรนด์การท่องเที่ยว การท่องเที่ยว และไลฟ์สไตล์ สำหรับแคมเปญการท่องเที่ยวและการท่องเที่ยวที่เฉพาะเจาะจง มีสตูดิโอน้องสาว <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a>",
      "faq.q7": "คุณสามารถสร้าง UGC สำหรับแอปมือถือได้หรือไม่",
      "faq.a7": "ใช่ UGC แอปแบบไลฟ์สไตล์ — วิธีใช้ เนื้อหาปัญหา-โซลูชัน และเนื้อหาการรวม — กำหนดไว้ในวิธีที่เป็นธรรมชาติและประจำวันซึ่งเหมาะสำหรับแอปความงาม สุขภาพ และไลฟ์สไตล์",
      "faq.q8": "แบรนด์จะทำงานร่วมกับคุณได้อย่างไร",
      "faq.a8": "ส่งแบรนด์ ผลิตภัณฑ์ ไทม์ไลน์ และความต้องการเนื้อหาผ่านแบบฟอร์มด้านล่าง อีเมล หรือ Instagram DM ฉันจะตอบกลับด้วยมุมเนื้อหา ขอบเขต และราคาแบบกำหนดเองตามผลผลิต",
      "faq.q9": "รับทำ Canvas UGC สำหรับทุกหมวดแบรนด์ไหม",
      "faq.a9": "รับ เราสร้าง Canvas UGC ต่อเนื่องสำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์เฉพาะ ครอบคลุมความงาม แอป อาหาร ท่องเที่ยว hospitality wellness แฟชั่น การศึกษา บริการ และสินค้าในชีวิตประจำวัน พร้อมเลือกครีเอเตอร์กับโลเคชันให้เหมาะกับบรีฟ",

      "contact.kicker": "ลองทำงานร่วมกัน", "contact.h": "บอกฉันเกี่ยวกับแบรนด์ของคุณ",
      "contact.sub": "แบ่งปันแบรนด์ ผลิตภัณฑ์ ไทม์ไลน์ และความต้องการเนื้อหาของคุณ — ฉันจะกลับมาพร้อมมุมเนื้อหา และราคาแบบกำหนดเอง โดยปกติภายใน 24 ชั่วโมง",
      "contact.response": "พร้อมใช้งานสำหรับความร่วมมือ · ตอบกลับภายใน 24 ชั่วโมง",
      "net.kicker": "เครือข่ายครีเอเตอร์", "net.h": "ทุกหมวดแบรนด์ เลือกครีเอเตอร์นำให้ตรงงาน", "net.p": "ครีเอเตอร์ทั้งสามรับบรีฟได้หลายหมวดและทำ Canvas UGC ได้ เราเลือกคนที่เหมาะที่สุดเป็นผู้นำในแต่ละงาน",
      "net.mine.tag": "ความงาม · ไลฟ์สไตล์ · ท่องเที่ยว", "net.mine.p": "UGC โดยครีเอเตอร์หญิงสำหรับความงาม สินค้าในชีวิตประจำวัน ไลฟ์สไตล์ ท่องเที่ยว และแอปผู้บริโภค",
      "net.onur.tag": "เทค · SaaS · แอป", "net.onur.p": "วิดีโออธิบาย เดโม และ founder-style UGC สำหรับผลิตภัณฑ์เทค",
      "net.movia.tag": "คู่รักท่องเที่ยว · สถานที่", "net.movia.p": "วิดีโอคู่รักท่องเที่ยวและรีวิวสถานที่สำหรับโรงแรม คาเฟ่ ร้านอาหาร จุดหมาย และแอปท่องเที่ยว",
      "net.current": "คุณอยู่ที่นี่", "net.visit": "ดูพอร์ตโฟลิโอ →",
      "form.name": "ชื่อ", "form.name.ph": "ชื่อของคุณ", "form.email": "อีเมล <span class=\"req\">*</span>",
      "form.brand": "แบรนด์", "form.brand.ph": "ชื่อแบรนด์", "form.niche": "ข้อมูลเฉพาะ <span class=\"req\">*</span>", "form.select": "เลือก…",
      "form.n.beauty": "ความงาม / ผลิตภัณฑ์บำรุงผิว", "form.n.fashion": "แฟชั่น / เสื้อผ้า", "form.n.lifestyle": "ไลฟ์สไตล์", "form.n.travel": "การเดินทาง / การท่องเที่ยว", "form.n.hotel": "โรงแรม / คาเฟ่ / ร้านอาหาร", "form.n.wellness": "สุขภาพและ wellness", "form.n.app": "แอปมือถือ", "form.n.food": "อาหาร / เครื่องดื่ม", "form.n.consumer": "สินค้าอุปโภคบริโภค / บริการ", "form.n.other": "อื่น ๆ",
      "form.need": "คุณต้องการอะไร", "form.need.ads": "วิดีโอโฆษณา UGC", "form.need.organic": "reels / TikTok แบบปกติ", "form.need.photo": "ถ่ายภาพผลิตภัณฑ์", "form.need.shoot": "การถ่ายภาพสถานที่กรุงเทพ", "form.need.monthly": "เนื้อหารายเดือน", "form.need.canvas": "Canvas UGC / บัญชีแบรนด์",
      "form.msg": "บอกฉันเกี่ยวกับมัน", "form.msg.ph": "แบรนด์ ผลิตภัณฑ์ ไทม์ไลน์ และประเภทของเนื้อหาที่คุณชาต",
      "form.send": "ส่งสอบถาม <span class=\"arrow\">→</span>",
      "form.sending": "กำลังส่ง…", "form.ok": "ขอบคุณ — ได้รับ ฉันจะตอบกลับภายใน 24 ชั่วโมง", "form.err": "เพิ่มอีเมลและข้อมูลเฉพาะของคุณ แล้วลองอีกครั้ง",
      "form.fallback": "ระบบส่งอัตโนมัติไม่พร้อมใช้งานชั่วคราว บรีฟของคุณถูกเตรียมเป็นอีเมลแล้ว:", "form.fallback.cta": "เปิดอีเมล",

      "footer.tag": "Beauty-first UGC และ Canvas UGC ต่อเนื่องสำหรับสินค้า แอป สถานที่ และบริการในทุกหมวดแบรนด์",
      "footer.explore": "สำรวจ", "footer.connect": "เชื่อมต่อ", "footer.network": "เครือข่ายครีเอเตอร์", "footer.email": "อีเมล", "footer.made": "กรุงเทพ ประเทศไทย · ทำงานทั่วโลก"
    }
  };

  var LS_KEY = "mine_lang";
  function getStored() { try { return localStorage.getItem(LS_KEY); } catch (e) { return null; } }
  function setStored(l) { try { localStorage.setItem(LS_KEY, l); } catch (e) {} }

  function applyLang(lang) {
    if (lang !== "tr" && lang !== "th") lang = "en";
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] == null) return;
      if (/<|&amp;/.test(dict[k])) el.innerHTML = dict[k]; else el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html"); if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph"); if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    window.__lang = lang;
  }

  var stored = getStored();
  var initial = stored || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : (navigator.language || "en").toLowerCase().indexOf("th") === 0 ? "th" : "en");
  applyLang(initial);
  if (!stored) {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then(function (r) { return r.json(); })
      .then(function (j) { if (getStored()) return; var cc = ((j && (j.country || j.country_code)) || "").toUpperCase(); applyLang(cc === "TR" ? "tr" : cc === "TH" ? "th" : "en"); })
      .catch(function () { if (!getStored()) applyLang("en"); });
  }
  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { var l = b.getAttribute("data-lang"); setStored(l); applyLang(l); });
  });
  function trS(key) { var l = window.__lang || "en"; return (I18N[l] && I18N[l][key]) || I18N.en[key] || key; }

  /* nav + mobile menu */
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 12); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  var burger = document.getElementById("burger"), menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    function closeMenu() { burger.classList.remove("open"); menu.classList.remove("open"); document.body.classList.remove("no-scroll"); }
    burger.addEventListener("click", function () { var o = burger.classList.toggle("open"); menu.classList.toggle("open", o); document.body.classList.toggle("no-scroll", o); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  /* reveal */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  var mq = document.getElementById("marquee"); if (mq) mq.innerHTML += mq.innerHTML;
  var y = document.getElementById("year"); if (y) y.textContent = String(new Date().getFullYear());

  /* lead form -> shared Supabase edge fn (tagged 'mine') */
  var LEAD_ENDPOINT = "https://bajrnvusqzllvsvipitr.supabase.co/functions/v1/ugc-lead";
  var LEAD_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhanJudnVzcXpsbHZzdmlwaXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MzMwNDQsImV4cCI6MjA4OTQwOTA0NH0.ao8f5YlNpbDnVdty5O6QwJaTSQS5cV8VEx2OE8gRa1k";
  var ENTRY = (function () {
    var p = new URLSearchParams(location.search), utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) { var v = p.get(k); if (v) utm[k] = v; });
    var ref = document.referrer || "", channel = "direct";
    if (Object.keys(utm).length) channel = utm.utm_source || "utm";
    else if (ref) { if (/instagram/i.test(ref)) channel = "instagram"; else if (/tiktok/i.test(ref)) channel = "tiktok"; else if (/google/i.test(ref)) channel = "google"; else channel = "referral"; }
    return { channel: channel, entry_referrer: ref, utm: utm };
  })();

  var leadForm = document.getElementById("leadForm");
  if (leadForm) {
    function mailFallback(status, fd) {
      var rows = [
        ["Name", fd.get("name")], ["Email", fd.get("email")], ["Brand", fd.get("company")],
        ["Niche", fd.get("product")], ["Need", fd.get("goal")], ["Brief", fd.get("message")]
      ];
      var body = rows.map(function (row) { return row[0] + ": " + String(row[1] || "").trim(); }).join("\n");
      var href = "mailto:mineexplora@gmail.com?subject=" + encodeURIComponent("UGC collaboration brief for Mine") + "&body=" + encodeURIComponent(body);
      status.textContent = trS("form.fallback") + " ";
      var link = document.createElement("a");
      link.href = href; link.textContent = trS("form.fallback.cta"); link.style.textDecoration = "underline";
      status.appendChild(link); status.className = "form-status err";
      window.location.href = href;
    }

    leadForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = document.getElementById("formStatus"), btn = leadForm.querySelector("button[type=submit]"), fd = new FormData(leadForm);
      if (fd.get("website")) { status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset(); return; }
      var email = (fd.get("email") || "").trim(), product = (fd.get("product") || "").trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !product) { status.textContent = trS("form.err"); status.className = "form-status err"; return; }
      btn.disabled = true; status.textContent = trS("form.sending"); status.className = "form-status";
      fetch(LEAD_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json", apikey: LEAD_ANON, Authorization: "Bearer " + LEAD_ANON },
        body: JSON.stringify({ action: "submit", kind: "mine-booking", lang: window.__lang || "en", site: "ugc-mine", name: fd.get("name") || "", email: email, company: fd.get("company") || "", product: product, goal: fd.get("goal") || "", message: fd.get("message") || "", channel: ENTRY.channel, entry_referrer: ENTRY.entry_referrer, utm: ENTRY.utm })
      }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) { if (res.ok && res.j && res.j.ok) { status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset(); } else { mailFallback(status, fd); } })
        .catch(function () { mailFallback(status, fd); })
        .then(function () { btn.disabled = false; });
    });
  }
})();
