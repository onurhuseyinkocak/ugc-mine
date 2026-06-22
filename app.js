/* Mine Koçak — portfolio behaviour: i18n (EN/TR) + geo default, nav, reveal, mobile menu, marquee, lead form */
(function () {
  "use strict";

  var I18N = {
    en: {
      "nav.services": "Services", "nav.portfolio": "Portfolio", "nav.bangkok": "Bangkok", "nav.packages": "Packages", "nav.faq": "FAQ", "nav.cta": "Work With Me",

      "hero.kicker": "Bangkok · Beauty · Fashion · Lifestyle",
      "hero.h": "Bangkok-based UGC creator for <em>beauty, fashion &amp; lifestyle</em> brands.",
      "hero.sub": "I'm Mine — I create authentic, aesthetic short-form content that helps brands tell their product story. Beauty, skincare, fashion, lifestyle, travel and hospitality, made in Bangkok for social ads, organic posts, Reels and TikTok.",
      "hero.cta1": "Work With Me <span class=\"arrow\">→</span>", "hero.cta2": "View portfolio",
      "hero.chip1": "Bangkok, Thailand", "hero.chip2": "English &amp; Turkish content", "hero.chip3": "Brands worldwide",

      "mq.beauty": "Beauty", "mq.skincare": "Skincare", "mq.fashion": "Fashion", "mq.lifestyle": "Lifestyle", "mq.travel": "Travel", "mq.hotels": "Hotels &amp; Cafés", "mq.wellness": "Wellness", "mq.apps": "Apps",

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

      "pf.kicker": "Portfolio", "pf.h": "Selected concepts.",
      "pf.p": "A look at the formats I shoot. Real campaign work is added here as collaborations go live.",
      "pf.c.beauty": "Beauty", "pf.c.fashion": "Fashion", "pf.c.lifestyle": "Lifestyle", "pf.c.skincare": "Skincare", "pf.c.hosp": "Hospitality", "pf.c.app": "App", "pf.c.travel": "Travel",
      "pf1.t": "Beauty UGC concept", "pf2.t": "Fashion reel concept", "pf3.t": "Bangkok café lifestyle", "pf4.t": "Skincare product demo",
      "pf5.t": "Hotel lifestyle content", "pf6.t": "App UGC demo", "pf7.t": "GRWM routine", "pf8.t": "Bangkok travel lifestyle",
      "pf.note": "Concept placeholders — replace with real Reels/TikToks as campaigns publish.",

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
      "t.vo": "Voiceover UGC", "t.testi": "Testimonial-style", "t.life": "Lifestyle integration", "t.travel": "Café / hotel / travel", "t.app": "App walkthrough", "t.couple": "Couple lifestyle",

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
      "pkg3.t": "Monthly Content Package", "pkg3.d": "A steady stream of on-brand content, planned and delivered monthly.",
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

      "contact.kicker": "Let's collaborate", "contact.h": "Tell me about your brand.",
      "contact.sub": "Share your brand, product, timeline and content needs — I'll come back with content angles and a custom quote, usually within 24 hours.",
      "contact.response": "Available for collaborations · replies within 24h",
      "form.name": "Name", "form.name.ph": "Your name", "form.email": "Email <span class=\"req\">*</span>",
      "form.brand": "Brand", "form.brand.ph": "Brand name", "form.niche": "Niche <span class=\"req\">*</span>", "form.select": "Select…",
      "form.n.beauty": "Beauty / Skincare", "form.n.fashion": "Fashion / Clothing", "form.n.lifestyle": "Lifestyle", "form.n.travel": "Travel / Hospitality", "form.n.hotel": "Hotel / Café / Restaurant", "form.n.wellness": "Wellness", "form.n.app": "Mobile app", "form.n.other": "Other",
      "form.need": "What do you need?", "form.need.ads": "UGC video ads", "form.need.organic": "Organic reels / TikTok", "form.need.photo": "Product photography", "form.need.shoot": "Bangkok location shoot", "form.need.monthly": "Monthly content",
      "form.msg": "Tell me about it", "form.msg.ph": "Brand, product, timeline and the kind of content you're after.",
      "form.send": "Send inquiry <span class=\"arrow\">→</span>",
      "form.sending": "Sending…", "form.ok": "Thank you — got it. I'll reply within 24 hours.", "form.err": "Add your email and niche, then try again.",

      "footer.tag": "Bangkok-based beauty, fashion &amp; lifestyle UGC creator. Authentic, aesthetic content for global brands.",
      "footer.explore": "Explore", "footer.connect": "Connect", "footer.email": "Email", "footer.made": "Bangkok, Thailand · Working worldwide"
    },

    tr: {
      "nav.services": "Hizmetler", "nav.portfolio": "Portfolyo", "nav.bangkok": "Bangkok", "nav.packages": "Paketler", "nav.faq": "SSS", "nav.cta": "Birlikte çalışalım",

      "hero.kicker": "Bangkok · Güzellik · Moda · Yaşam Tarzı",
      "hero.h": "<em>Güzellik, moda &amp; yaşam tarzı</em> markaları için Bangkok merkezli UGC içerik üreticisi.",
      "hero.sub": "Ben Mine — markaların ürün hikâyesini anlatmasına yardımcı olan, samimi ve estetik kısa videolar üretiyorum. Güzellik, cilt bakımı, moda, yaşam tarzı, seyahat ve ağırlama; sosyal reklam, organik içerik, Reels ve TikTok için Bangkok'ta çekiliyor.",
      "hero.cta1": "Birlikte çalışalım <span class=\"arrow\">→</span>", "hero.cta2": "Portfolyoya bak",
      "hero.chip1": "Bangkok, Tayland", "hero.chip2": "İngilizce &amp; Türkçe içerik", "hero.chip3": "Dünya geneli markalar",

      "mq.beauty": "Güzellik", "mq.skincare": "Cilt Bakımı", "mq.fashion": "Moda", "mq.lifestyle": "Yaşam Tarzı", "mq.travel": "Seyahat", "mq.hotels": "Otel &amp; Kafe", "mq.wellness": "Wellness", "mq.apps": "Uygulamalar",

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

      "pf.kicker": "Portfolyo", "pf.h": "Seçili konseptler.",
      "pf.p": "Çektiğim formatlara bir bakış. Gerçek kampanya işleri, iş birlikleri yayınlandıkça buraya eklenir.",
      "pf.c.beauty": "Güzellik", "pf.c.fashion": "Moda", "pf.c.lifestyle": "Yaşam Tarzı", "pf.c.skincare": "Cilt Bakımı", "pf.c.hosp": "Ağırlama", "pf.c.app": "Uygulama", "pf.c.travel": "Seyahat",
      "pf1.t": "Güzellik UGC konsepti", "pf2.t": "Moda reel konsepti", "pf3.t": "Bangkok kafe yaşam tarzı", "pf4.t": "Cilt bakımı ürün demosu",
      "pf5.t": "Otel yaşam tarzı içeriği", "pf6.t": "Uygulama UGC demosu", "pf7.t": "GRWM rutini", "pf8.t": "Bangkok seyahat yaşam tarzı",
      "pf.note": "Konsept placeholder'ları — kampanyalar yayınlandıkça gerçek Reels/TikTok ile değiştir.",

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
      "t.vo": "Voiceover UGC", "t.testi": "Testimonial tarzı", "t.life": "Yaşam tarzı entegrasyonu", "t.travel": "Kafe / otel / seyahat", "t.app": "Uygulama tanıtımı", "t.couple": "Çift yaşam tarzı",

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
      "pkg3.t": "Aylık İçerik Paketi", "pkg3.d": "Markana uygun içeriğin aylık, düzenli akışı.",
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

      "contact.kicker": "Hadi çalışalım", "contact.h": "Markandan bahset.",
      "contact.sub": "Markanı, ürününü, zaman planını ve içerik ihtiyaçlarını paylaş — içerik açıları ve özel bir teklifle, genelde 24 saat içinde dönerim.",
      "contact.response": "İş birliklerine açık · 24 saat içinde yanıt",
      "form.name": "İsim", "form.name.ph": "Adın", "form.email": "E-posta <span class=\"req\">*</span>",
      "form.brand": "Marka", "form.brand.ph": "Marka adı", "form.niche": "Niş <span class=\"req\">*</span>", "form.select": "Seç…",
      "form.n.beauty": "Güzellik / Cilt Bakımı", "form.n.fashion": "Moda / Giyim", "form.n.lifestyle": "Yaşam Tarzı", "form.n.travel": "Seyahat / Ağırlama", "form.n.hotel": "Otel / Kafe / Restoran", "form.n.wellness": "Wellness", "form.n.app": "Mobil uygulama", "form.n.other": "Diğer",
      "form.need": "Neye ihtiyacın var?", "form.need.ads": "UGC reklam videoları", "form.need.organic": "Organik reels / TikTok", "form.need.photo": "Ürün fotoğrafçılığı", "form.need.shoot": "Bangkok mekan çekimi", "form.need.monthly": "Aylık içerik",
      "form.msg": "Biraz anlat", "form.msg.ph": "Marka, ürün, zaman planı ve istediğin içerik türü.",
      "form.send": "Mesaj gönder <span class=\"arrow\">→</span>",
      "form.sending": "Gönderiliyor…", "form.ok": "Teşekkürler — aldım. 24 saat içinde döneceğim.", "form.err": "E-posta ve niş ekleyip tekrar dene.",

      "footer.tag": "Bangkok merkezli güzellik, moda &amp; yaşam tarzı UGC içerik üreticisi. Global markalar için samimi, estetik içerik.",
      "footer.explore": "Keşfet", "footer.connect": "Bağlan", "footer.email": "E-posta", "footer.made": "Bangkok, Tayland · Dünya geneli çalışıyorum"
    }
  };

  var LS_KEY = "mine_lang";
  function getStored() { try { return localStorage.getItem(LS_KEY); } catch (e) { return null; } }
  function setStored(l) { try { localStorage.setItem(LS_KEY, l); } catch (e) {} }

  function applyLang(lang) {
    if (lang !== "tr") lang = "en";
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
  var initial = stored || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  applyLang(initial);
  if (!stored) {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then(function (r) { return r.json(); })
      .then(function (j) { if (getStored()) return; var cc = ((j && (j.country || j.country_code)) || "").toUpperCase(); applyLang(cc === "TR" ? "tr" : "en"); })
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
        .then(function (res) { if (res.ok && res.j && res.j.ok) { status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset(); } else { status.textContent = trS("form.err"); status.className = "form-status err"; } })
        .catch(function () { status.textContent = trS("form.err"); status.className = "form-status err"; })
        .then(function () { btn.disabled = false; });
    });
  }
})();
