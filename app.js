(function () {
  "use strict";

  var I18N = {
    en: {
      "nav.portfolio": "Work", "nav.services": "Services", "nav.about": "About", "nav.packages": "Packages", "nav.faq": "FAQ", "nav.cta": "Work With Me",

      "hero.kicker": "Bangkok · UGC creator",
      "hero.h": "UGC creator in Bangkok<br>for <em>beauty, fashion &amp; lifestyle.</em>",
      "hero.sub": "I make short-form content that feels like a real recommendation — filmed in Bangkok for beauty, food, travel and lifestyle brands.",
      "hero.cta1": "Start a project <span class=\"arrow\">→</span>", "hero.cta2": "See the work",
      "hero.chip1": "Bangkok, Thailand", "hero.chip2": "EN / TR content · TH briefs", "hero.chip3": "@mineexplora",
      "hero.stamp": "Open for new projects", "hero.caption": "On location · Kaş, Türkiye",

      "mq.beauty": "Beauty", "mq.skincare": "Skincare", "mq.fashion": "Fashion", "mq.lifestyle": "Lifestyle", "mq.food": "Food", "mq.travel": "Travel", "mq.hotels": "Hotels & Cafés", "mq.apps": "Apps",

      "pf.kicker": "Selected work", "pf.h": "Recent work,<br><em>published.</em>",
      "pf.p": "Six recent posts from @mineexplora, newest first. Tap a card to watch the original with sound.",
      "pf.kind.reel": "Reel", "pf.kind.photo": "Photo",
      "pf.c.beauty": "Beauty", "pf.c.lifestyle": "Lifestyle", "pf.c.travel": "Travel", "pf.c.food": "Food", "pf.c.photo": "Photo", "pf.collab": "Collab",
      "pf1.t": "3 AM in Bangkok", "pf2.t": "Chinatown after dark", "pf3.t": "ICA Makeup Academy", "pf4.t": "The Bangkok move", "pf5.t": "Kiwamiya, Siam Paragon", "pf6.t": "Kaş, Türkiye",
      "pf.more": "See the full feed on Instagram",

      "about.kicker": "About", "about.h": "A Bangkok base.<br><em>A global eye.</em>",
      "about.big": "I'm Mine — I make beauty, fashion and lifestyle content that feels like a real recommendation.",
      "about.p": "I moved to Bangkok from Turkey and now shoot for brands that want warm, current content without a full production. I write the idea, shoot it, edit it and deliver it ready to post.",
      "about.f1": "Based in Bangkok", "about.f2": "EN / TR content · TH briefs", "about.f3": "Beauty, fashion, food & travel",
      "about.cta": "Start a project", "about.caption": "Bangkok, 2026",

      "svc.kicker": "Services", "svc.h": "What I can make for you.",
      "svc.p": "One creator, from first idea to final cut. Pick a format or combine them.",
      "svc1.t": "UGC video ads", "svc1.d": "Hook-first vertical video for paid social — TikTok, Reels and Meta.",
      "svc2.t": "Organic Reels & TikTok", "svc2.d": "Native short-form that doesn't look like an ad.",
      "svc3.t": "Beauty & skincare", "svc3.d": "Routines, texture shots, demos and before/after.",
      "svc4.t": "Fashion & lifestyle", "svc4.d": "Try-ons, outfits and day-in-the-life storytelling.",
      "svc5.t": "Food, travel & hospitality", "svc5.d": "Cafés, hotels, restaurants and destination content.",
      "svc6.t": "Canvas UGC", "svc6.d": "Recurring content for a brand or ambassador account.",
      "svc.note": "Product photography and Bangkok location shoots are available as add-ons.",

      "why.kicker": "Why work with me", "why.h": "A real person,<br><em>not a content mill.</em>",
      "why.p": "The same person plans, shoots and edits your content — so the idea survives all the way to the final cut.",
      "why1.h": "I shoot it myself", "why1.p": "Same person in the concept, on camera and in the edit.",
      "why2.h": "Bangkok, on location", "why2.p": "Cafés, hotels and streets that don't look like a studio.",
      "why3.h": "Brief-friendly", "why3.p": "Clear scope, one reply, no account-manager telephone game.",
      "why4.h": "Ready to run", "why4.p": "Vertical, captioned and delivered for organic or paid.",

      "proc.kicker": "Process", "proc.h": "From DM to delivery.",
      "step1.t": "Brief", "step1.d": "You send the product, goal and references.",
      "step2.t": "Angle", "step2.d": "I come back with a concept, hook and shot list.",
      "step3.t": "Shoot", "step3.d": "Filmed in Bangkok, on location or at home.",
      "step4.t": "Deliver", "step4.d": "Edited, captioned and ready to post or run.",

      "pkg.kicker": "Ways to work together", "pkg.h": "Start small.<br><em>Scale what works.</em>",
      "pkg.p": "Every project is quoted to scope. These are the three starting points most brands choose.",
      "pkg1.t": "One video", "pkg1.d": "One concept, one vertical video. Best for a first test.",
      "pkg2.t": "Content set", "pkg2.d": "Three videos with different hooks, built for organic and paid testing.",
      "pkg3.t": "Monthly", "pkg3.d": "Recurring Canvas UGC for a brand or ambassador account.",
      "pkg.note": "Add-ons: product photography, Bangkok location shoots, couple/travel content.",
      "pkg.cta": "Request rates",

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

      "net.kicker": "Creator network", "net.h": "Every category. The right lead creator.",
      "net.p": "All three creators handle broad briefs and Canvas UGC. We lead with the strongest fit instead of presenting a generic one-size-fits-all team.",
      "net.mine.tag": "Beauty · Lifestyle · Travel", "net.mine.p": "Warm female-led UGC for beauty, everyday products, lifestyle, travel and consumer apps.",
      "net.onur.tag": "Tech · SaaS · Apps", "net.onur.p": "Product-fluent explainers, demos and founder-style UGC for technical products.",
      "net.movia.tag": "Couple Travel · Places", "net.movia.p": "Couple travel and venue videos for hotels, cafés, restaurants, destinations and travel apps.",
      "net.current": "You are here", "net.visit": "Visit portfolio →",

      "contact.kicker": "Let's collaborate", "contact.h": "Tell me what you're launching.",
      "contact.sub": "Share the brand, product, timeline and the kind of content you need. I'll reply with angles, scope and a quote — usually within 24 hours.",
      "contact.response": "Available for collaborations · replies within 24h",

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
      "nav.portfolio": "İşler", "nav.services": "Hizmetler", "nav.about": "Hakkımda", "nav.packages": "Paketler", "nav.faq": "SSS", "nav.cta": "Birlikte Çalışalım",

      "hero.kicker": "Bangkok · UGC içerik üreticisi",
      "hero.h": "Bangkok'ta UGC içerik üreticisi<br><em>güzellik, moda &amp; yaşam tarzı için.</em>",
      "hero.sub": "Gerçek bir tavsiye gibi hissettiren kısa videolar üretiyorum — Bangkok'ta güzellik, yemek, seyahat ve yaşam tarzı markaları için.",
      "hero.cta1": "Bir proje başlat <span class=\"arrow\">→</span>", "hero.cta2": "İşlere göz at",
      "hero.chip1": "Bangkok, Tayland", "hero.chip2": "EN / TR içerik · TH brief", "hero.chip3": "@mineexplora",
      "hero.stamp": "Yeni projelere açık", "hero.caption": "Çekimde · Kaş, Türkiye",

      "mq.beauty": "Güzellik", "mq.skincare": "Cilt Bakımı", "mq.fashion": "Moda", "mq.lifestyle": "Yaşam Tarzı", "mq.food": "Yemek", "mq.travel": "Seyahat", "mq.hotels": "Otel & Kafe", "mq.apps": "Uygulamalar",

      "pf.kicker": "Seçili işler", "pf.h": "Son işler,<br><em>yayında.</em>",
      "pf.p": "@mineexplora'dan en yeni altı gönderi. Orijinalini sesli izlemek için bir karta dokun.",
      "pf.kind.reel": "Reel", "pf.kind.photo": "Fotoğraf",
      "pf.c.beauty": "Güzellik", "pf.c.lifestyle": "Yaşam Tarzı", "pf.c.travel": "Seyahat", "pf.c.food": "Yemek", "pf.c.photo": "Fotoğraf", "pf.collab": "İş birliği",
      "pf1.t": "Bangkok'ta gece 3", "pf2.t": "Karanlıkta Chinatown", "pf3.t": "ICA Makeup Academy", "pf4.t": "Bangkok'a taşınmak", "pf5.t": "Kiwamiya, Siam Paragon", "pf6.t": "Kaş, Türkiye",
      "pf.more": "Instagram'da tüm akışı gör",

      "about.kicker": "Hakkımda", "about.h": "Bangkok'ta bir üs.<br><em>Global bir bakış.</em>",
      "about.big": "Ben Mine — güzellik, moda ve yaşam tarzı içeriklerini gerçek bir tavsiye gibi hissettirecek şekilde üretiyorum.",
      "about.p": "Türkiye'den Bangkok'a taşındım; şimdi tam prodüksiyon gerektirmeden sıcak ve güncel içerik isteyen markalar için çekim yapıyorum. Fikri yazıyorum, çekiyorum, kurguluyorum ve paylaşıma hazır teslim ediyorum.",
      "about.f1": "Bangkok merkezli", "about.f2": "EN / TR içerik · TH brief", "about.f3": "Güzellik, moda, yemek & seyahat",
      "about.cta": "Bir proje başlat", "about.caption": "Bangkok, 2026",

      "svc.kicker": "Hizmetler", "svc.h": "Senin için neler üretebilirim.",
      "svc.p": "Tek üretici, ilk fikirden son kurguya. Bir format seç ya da birkaçını birleştir.",
      "svc1.t": "UGC reklam videoları", "svc1.d": "Paid sosyal için kanca-öncelikli dikey video — TikTok, Reels ve Meta.",
      "svc2.t": "Organik Reels & TikTok", "svc2.d": "Reklam gibi durmayan, akışa ait kısa videolar.",
      "svc3.t": "Güzellik & cilt bakımı", "svc3.d": "Rutinler, doku çekimleri, demolar ve öncesi/sonrası.",
      "svc4.t": "Moda & yaşam tarzı", "svc4.d": "Try-on, kombin ve günlük hayat anlatımı.",
      "svc5.t": "Yemek, seyahat & ağırlama", "svc5.d": "Kafeler, oteller, restoranlar ve destinasyon içerikleri.",
      "svc6.t": "Canvas UGC", "svc6.d": "Marka veya ambassador hesabı için düzenli içerik.",
      "svc.note": "Ürün fotoğrafçılığı ve Bangkok mekân çekimleri ek hizmet olarak alınabilir.",

      "why.kicker": "Neden benimle çalışmalı", "why.h": "Gerçek bir insan,<br><em>içerik fabrikası değil.</em>",
      "why.p": "İçeriğini aynı kişi planlıyor, çekiyor ve kurguluyor — böylece fikir son kurguya kadar yaşıyor.",
      "why1.h": "Çekimi kendim yapıyorum", "why1.p": "Konseptte de, kamera önünde de, kurguda da aynı kişi.",
      "why2.h": "Bangkok, yerinde", "why2.p": "Stüdyoya benzemeyen kafeler, oteller ve sokaklar.",
      "why3.h": "Brief'e uygun", "why3.p": "Net kapsam, tek yanıt; aracı bir hesap yöneticisi yok.",
      "why4.h": "Çalışmaya hazır", "why4.p": "Dikey, altyazılı; organik ya da paid için teslim.",

      "proc.kicker": "Süreç", "proc.h": "DM'den teslime.",
      "step1.t": "Brief", "step1.d": "Ürünü, hedefi ve referansları gönderirsin.",
      "step2.t": "Açı", "step2.d": "Konsept, kanca ve çekim listesiyle dönerim.",
      "step3.t": "Çekim", "step3.d": "Bangkok'ta, mekânda ya da evde çekilir.",
      "step4.t": "Teslim", "step4.d": "Kurgulanmış, altyazılı ve paylaşıma ya da yayına hazır.",

      "pkg.kicker": "Birlikte çalışma yolları", "pkg.h": "Küçük başla.<br><em>İşleyeni büyüt.</em>",
      "pkg.p": "Her proje kapsamına göre fiyatlanır. Markaların çoğu bu üç başlangıç noktasından birini seçiyor.",
      "pkg1.t": "Tek video", "pkg1.d": "Tek konsept, tek dikey video. İlk test için ideal.",
      "pkg2.t": "İçerik seti", "pkg2.d": "Farklı kancalarla üç video; organik ve paid test için.",
      "pkg3.t": "Aylık", "pkg3.d": "Marka veya ambassador hesabı için düzenli Canvas UGC.",
      "pkg.note": "Ekler: ürün fotoğrafçılığı, Bangkok mekân çekimleri, çift/seyahat içeriği.",
      "pkg.cta": "Fiyat iste",

      "faq.kicker": "SSS", "faq.h": "Markaların sorduğu sorular.",
      "faq.q1": "Güzellik markam için Bangkok merkezli bir UGC üreticisi tutabilir miyim?",
      "faq.a1": "Evet. Bangkok merkezli, güzellik, cilt bakımı, moda ve yaşam tarzına odaklanan bir kadın UGC üreticisiyim. Reklam, Reels ve TikTok için doğal ve estetik kısa videolar üretiyorum; hem Bangkok'taki yerel işletmelerle hem de Tayland'a ürün gönderen uluslararası markalarla çalışıyorum.",
      "faq.q2": "Moda ve yaşam tarzı markaları için UGC videosu üretiyor musun?",
      "faq.a2": "Evet — try-on, kombin, yaşam tarzı anlatımı ve ürün entegrasyonu temel formatlar. Doğal ve markaya güvenli çekilir; organik gönderi ve paid sosyal için hazır teslim edilir.",
      "faq.q3": "Bangkok'taki kafe, otel veya yaşam tarzı mekânlarında çekim yapabilir misin?",
      "faq.a3": "Evet. Bangkok'un kafeleri, otelleri ve yaşam tarzı mekânları gerçek bir avantaj. Ağırlama, seyahat, kafe ve yaşam tarzı kampanyaları için mekânda çekim yapıyor, markalara taze ve Asya merkezli görseller sunuyorum.",
      "faq.q4": "Uluslararası markalar UGC için Bangkok'a ürün gönderebilir mi?",
      "faq.a4": "Evet, sık çalıştığımız bir yöntem. Ürün geldikten sonra konsept, çekim ve teslimi uzaktan yönetiyorum; kullanım hakları baştan netleşiyor.",
      "faq.q5": "TikTok, Instagram Reels ve reklamlar için içerik üretiyor musun?",
      "faq.a5": "Evet. İçerik TikTok, Reels ve Shorts'a özgü kurgulanıyor; organik gönderi ya da reklam kreatifi olarak teslim edilebiliyor. Ham görüntü ve kullanım hakları mevcut.",
      "faq.q6": "Çift yaşam tarzı içeriği üretebilir misin?",
      "faq.a6": "Evet — çift, seyahat ve yaşam tarzı içeriği mevcut; seyahat, ağırlama ve yaşam tarzı markaları için ideal. Özel seyahat ve ağırlama kampanyaları için kardeş stüdyo <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a> da var.",
      "faq.q7": "Mobil uygulamalar için UGC üretebilir misin?",
      "faq.a7": "Evet. Güzellik, wellness ve yaşam tarzı uygulamalarına uygun, günlük hayatın içinden uygulama UGC'si — tanıtımlar, problem-çözüm ve entegrasyon içerikleri.",
      "faq.q8": "Markalar seninle nasıl iş birliği yapar?",
      "faq.a8": "Markayı, ürünü, zaman planını ve içerik ihtiyaçlarını aşağıdaki formdan, e-posta ile veya Instagram DM'den gönder. İçerik açıları, kapsam ve teslimata göre özel bir teklifle dönerim.",
      "faq.q9": "Her marka kategorisi için Canvas UGC sunuyor musunuz?",
      "faq.a9": "Evet. Güzellik, uygulama, yemek, seyahat, ağırlama, wellness, moda, eğitim, hizmet ve günlük tüketici ürünleri için marka veya ambassador hesaplarına düzenli Canvas UGC üretiyoruz. Brief, doğru üretici ve mekânla eşleştirilir.",

      "net.kicker": "Üretici ağı", "net.h": "Her kategori. Doğru lider üretici.",
      "net.p": "Üç üretici de geniş brief'leri ve Canvas UGC'yi üstlenir. Tek tip bir ekip sunmak yerine işe en uygun isimle başlarız.",
      "net.mine.tag": "Güzellik · Yaşam Tarzı · Seyahat", "net.mine.p": "Güzellik, gündelik ürünler, yaşam tarzı, seyahat ve tüketici uygulamaları için sıcak kadın üretici bakışı.",
      "net.onur.tag": "Teknoloji · SaaS · Uygulama", "net.onur.p": "Teknik ürünler için ürüne hâkim anlatım, demo ve founder-style UGC.",
      "net.movia.tag": "Çift Seyahati · Mekân", "net.movia.p": "Otel, kafe, restoran, destinasyon ve seyahat uygulamaları için çift seyahat ve mekân videoları.",
      "net.current": "Şu an buradasın", "net.visit": "Portfolyoya git →",

      "contact.kicker": "Birlikte çalışalım", "contact.h": "Neyi piyasaya sürdüğünü anlat.",
      "contact.sub": "Markayı, ürünü, zaman planını ve ihtiyacın olan içerik türünü paylaş. Genellikle 24 saat içinde açılar, kapsam ve fiyatla dönerim.",
      "contact.response": "İş birliklerine açık · 24 saat içinde yanıt",

      "form.name": "İsim", "form.name.ph": "Adın", "form.email": "E-posta <span class=\"req\">*</span>",
      "form.brand": "Marka", "form.brand.ph": "Marka adı", "form.niche": "Sektör <span class=\"req\">*</span>", "form.select": "Seç…",
      "form.n.beauty": "Güzellik / Cilt Bakımı", "form.n.fashion": "Moda / Giyim", "form.n.lifestyle": "Yaşam Tarzı", "form.n.travel": "Seyahat / Ağırlama", "form.n.hotel": "Otel / Kafe / Restoran", "form.n.wellness": "Wellness", "form.n.app": "Mobil uygulama", "form.n.food": "Yemek / İçecek", "form.n.consumer": "Tüketici ürünü / hizmet", "form.n.other": "Diğer",
      "form.need": "Neye ihtiyacın var?", "form.need.ads": "UGC reklam videoları", "form.need.organic": "Organik reels / TikTok", "form.need.photo": "Ürün fotoğrafçılığı", "form.need.shoot": "Bangkok mekân çekimi", "form.need.monthly": "Aylık içerik", "form.need.canvas": "Canvas UGC / marka hesabı",
      "form.msg": "Biraz anlat", "form.msg.ph": "Marka, ürün, zaman planı ve aradığın içerik türü.",
      "form.send": "Talep gönder <span class=\"arrow\">→</span>",
      "form.sending": "Gönderiliyor…", "form.ok": "Teşekkürler — ulaştı. 24 saat içinde yanıt vereceğim.", "form.err": "E-posta ve sektör alanlarını doldurup tekrar dene.",
      "form.fallback": "Otomatik gönderim geçici olarak kapalı. Doldurduğun brief e-posta taslağı olarak hazır:", "form.fallback.cta": "E-postayı aç",

      "footer.tag": "Ürünler, uygulamalar, mekânlar ve hizmetler için her kategoride beauty-first UGC ve düzenli Canvas UGC.",
      "footer.explore": "Keşfet", "footer.connect": "Bağlan", "footer.network": "Üretici ağı", "footer.email": "E-posta", "footer.made": "Bangkok, Tayland · Dünya geneli çalışıyor"
    },

    th: {
      "nav.portfolio": "ผลงาน", "nav.services": "บริการ", "nav.about": "เกี่ยวกับ", "nav.packages": "แพ็กเกจ", "nav.faq": "คำถาม", "nav.cta": "ร่วมงานกับฉัน",

      "hero.kicker": "กรุงเทพฯ · ครีเอเตอร์ UGC",
      "hero.h": "ครีเอเตอร์ UGC ในกรุงเทพฯ<br><em>สำหรับความงาม แฟชั่น &amp; ไลฟ์สไตล์</em>",
      "hero.sub": "ฉันสร้างวิดีโอสั้นที่ให้ความรู้สึกเหมือนคำแนะนำจากคนจริง ๆ ถ่ายทำในกรุงเทพฯ สำหรับแบรนด์ความงาม อาหาร ท่องเที่ยว และไลฟ์สไตล์",
      "hero.cta1": "เริ่มโปรเจกต์ <span class=\"arrow\">→</span>", "hero.cta2": "ดูผลงาน",
      "hero.chip1": "กรุงเทพฯ ประเทศไทย", "hero.chip2": "คอนเทนต์ EN / TR · รับบรีฟภาษาไทย", "hero.chip3": "@mineexplora",
      "hero.stamp": "เปิดรับโปรเจกต์ใหม่", "hero.caption": "ถ่ายทำที่ · คัช ตุรกี",

      "mq.beauty": "ความงาม", "mq.skincare": "สกินแคร์", "mq.fashion": "แฟชั่น", "mq.lifestyle": "ไลฟ์สไตล์", "mq.food": "อาหาร", "mq.travel": "ท่องเที่ยว", "mq.hotels": "โรงแรม & คาเฟ่", "mq.apps": "แอป",

      "pf.kicker": "ผลงานคัดสรร", "pf.h": "ผลงานล่าสุด<br><em>ที่เผยแพร่แล้ว</em>",
      "pf.p": "หกโพสต์ล่าสุดจาก @mineexplora เรียงจากใหม่ไปเก่า แตะการ์ดเพื่อฟังต้นฉบับ",
      "pf.kind.reel": "Reel", "pf.kind.photo": "ภาพถ่าย",
      "pf.c.beauty": "ความงาม", "pf.c.lifestyle": "ไลฟ์สไตล์", "pf.c.travel": "ท่องเที่ยว", "pf.c.food": "อาหาร", "pf.c.photo": "ภาพถ่าย", "pf.collab": "ร่วมงาน",
      "pf1.t": "ตี 3 ที่กรุงเทพฯ", "pf2.t": "ไชนาทาวน์ยามค่ำ", "pf3.t": "ICA Makeup Academy", "pf4.t": "ย้ายมาอยู่กรุงเทพฯ", "pf5.t": "Kiwamiya, Siam Paragon", "pf6.t": "คัช ตุรกี",
      "pf.more": "ดูฟีดทั้งหมดบน Instagram",

      "about.kicker": "เกี่ยวกับฉัน", "about.h": "ฐานที่กรุงเทพฯ<br><em>มุมมองระดับโลก</em>",
      "about.big": "ฉันคือ Mine — สร้างคอนเทนต์ความงาม แฟชั่น และไลฟ์สไตล์ที่ให้ความรู้สึกเหมือนคำแนะนำจากคนจริง ๆ",
      "about.p": "ฉันย้ายจากตุรกีมาอยู่กรุงเทพฯ และตอนนี้ถ่ายให้แบรนด์ที่ต้องการคอนเทนต์อบอุ่นและร่วมสมัยโดยไม่ต้องใช้ทีมโปรดักชันเต็มรูปแบบ ฉันคิดไอเดีย ถ่าย ตัดต่อ และส่งงานพร้อมโพสต์",
      "about.f1": "อยู่ที่กรุงเทพฯ", "about.f2": "คอนเทนต์ EN / TR · รับบรีฟภาษาไทย", "about.f3": "ความงาม แฟชั่น อาหาร & ท่องเที่ยว",
      "about.cta": "เริ่มโปรเจกต์", "about.caption": "กรุงเทพฯ 2026",

      "svc.kicker": "บริการ", "svc.h": "ฉันทำให้คุณได้อะไรบ้าง",
      "svc.p": "ครีเอเตอร์คนเดียว ตั้งแต่ไอเดียแรกถึงตัดต่อสุดท้าย เลือกหนึ่งรูปแบบหรือผสมกันได้",
      "svc1.t": "วิดีโอโฆษณา UGC", "svc1.d": "วิดีโอแนวตั้งที่เริ่มด้วยฮุกสำหรับ paid social — TikTok, Reels และ Meta",
      "svc2.t": "Reels & TikTok แบบออร์แกนิก", "svc2.d": "วิดีโอสั้นที่ดูเป็นธรรมชาติ ไม่เหมือนโฆษณา",
      "svc3.t": "ความงาม & สกินแคร์", "svc3.d": "รูทีน ภาพเนื้อสัมผัส เดโม และ before/after",
      "svc4.t": "แฟชั่น & ไลฟ์สไตล์", "svc4.d": "ลองเสื้อผ้า มิกซ์แอนด์แมตช์ และเล่าเรื่องชีวิตประจำวัน",
      "svc5.t": "อาหาร ท่องเที่ยว & โรงแรม", "svc5.d": "คาเฟ่ โรงแรม ร้านอาหาร และคอนเทนต์สถานที่",
      "svc6.t": "Canvas UGC", "svc6.d": "คอนเทนต์ต่อเนื่องสำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์",
      "svc.note": "ถ่ายภาพสินค้าและถ่ายทำสถานที่ในกรุงเทพฯ เป็นบริการเสริม",

      "why.kicker": "ทำไมต้องทำงานกับฉัน", "why.h": "คนจริง ๆ<br><em>ไม่ใช่โรงงานคอนเทนต์</em>",
      "why.p": "คนคนเดียววางแผน ถ่าย และตัดต่อคอนเทนต์ของคุณ — ไอเดียจึงไปถึงตัดต่อสุดท้ายได้ครบถ้วน",
      "why1.h": "ฉันถ่ายเอง", "why1.p": "คนเดียวกันทั้งตอนคิดคอนเซปต์ อยู่หน้ากล้อง และตัดต่อ",
      "why2.h": "กรุงเทพฯ ถ่ายในสถานที่จริง", "why2.p": "คาเฟ่ โรงแรม และถนนที่ไม่เหมือนสตูดิโอ",
      "why3.h": "เข้าใจบรีฟ", "why3.p": "ขอบเขตชัดเจน ตอบครั้งเดียว ไม่ต้องผ่านคนกลาง",
      "why4.h": "พร้อมใช้งาน", "why4.p": "แนวตั้ง มีคำบรรยาย และส่งมอบสำหรับออร์แกนิกหรือ paid",

      "proc.kicker": "กระบวนการ", "proc.h": "จาก DM ถึงส่งงาน",
      "step1.t": "บรีฟ", "step1.d": "ส่งสินค้า เป้าหมาย และเรฟเฟอเรนซ์มาให้ฉัน",
      "step2.t": "หาแองเกิล", "step2.d": "ฉันกลับมาพร้อมคอนเซปต์ ฮุก และช็อตลิสต์",
      "step3.t": "ถ่ายทำ", "step3.d": "ถ่ายในกรุงเทพฯ ในสถานที่จริงหรือที่บ้าน",
      "step4.t": "ส่งงาน", "step4.d": "ตัดต่อ ใส่คำบรรยาย พร้อมโพสต์หรือยิงแอด",

      "pkg.kicker": "วิธีร่วมงาน", "pkg.h": "เริ่มเล็ก<br><em>แล้วขยายสิ่งที่ได้ผล</em>",
      "pkg.p": "ทุกโปรเจกต์คิดราคาตามขอบเขตงาน แบรนด์ส่วนใหญ่เริ่มจากสามจุดนี้",
      "pkg1.t": "วิดีโอเดียว", "pkg1.d": "หนึ่งคอนเซปต์ หนึ่งวิดีโอแนวตั้ง เหมาะกับการทดสอบครั้งแรก",
      "pkg2.t": "ชุดคอนเทนต์", "pkg2.d": "สามวิดีโอคนละฮุก สำหรับทดสอบทั้งออร์แกนิกและ paid",
      "pkg3.t": "รายเดือน", "pkg3.d": "Canvas UGC ต่อเนื่องสำหรับบัญชีแบรนด์หรือแอมบาสเดอร์",
      "pkg.note": "บริการเสริม: ถ่ายภาพสินค้า ถ่ายทำสถานที่ในกรุงเทพฯ คอนเทนต์คู่รัก/ท่องเที่ยว",
      "pkg.cta": "ขอราคา",

      "faq.kicker": "คำถาม", "faq.h": "คำถามที่แบรนด์ถาม",
      "faq.q1": "จ้างครีเอเตอร์ UGC ในกรุงเทพฯ สำหรับแบรนด์ความงามได้ไหม",
      "faq.a1": "ได้ ฉันเป็นครีเอเตอร์ UGC หญิงที่อยู่กรุงเทพฯ เชี่ยวชาญคอนเทนต์ความงาม สกินแคร์ แฟชั่น และไลฟ์สไตล์ สร้างวิดีโอสั้นที่ดูจริงและสวยสำหรับโฆษณา Reels และ TikTok ทำงานทั้งกับธุรกิจในกรุงเทพฯ และแบรนด์ต่างประเทศที่ส่งสินค้าเข้ามาไทย",
      "faq.q2": "รับทำวิดีโอ UGC สำหรับแบรนด์แฟชั่นและไลฟ์สไตล์ไหม",
      "faq.a2": "รับ — การลองเสื้อผ้า คอนเทนต์ลุค เล่าเรื่องไลฟ์สไตล์ และการผสานสินค้าเป็นรูปแบบหลัก ถ่ายให้ดูธรรมชาติและปลอดภัยกับแบรนด์ ส่งมอบพร้อมโพสต์ออร์แกนิกหรือใช้เป็นโฆษณา",
      "faq.q3": "ถ่ายในคาเฟ่ โรงแรม หรือสถานที่ไลฟ์สไตล์ในกรุงเทพฯ ได้ไหม",
      "faq.a3": "ได้ คาเฟ่ โรงแรม และพื้นที่ไลฟ์สไตล์ของกรุงเทพฯ เป็นข้อได้เปรียบจริง ฉันถ่ายในสถานที่จริงสำหรับแคมเปญโรงแรม ท่องเที่ยว คาเฟ่ และไลฟ์สไตล์ ทำให้แบรนด์ได้ภาพใหม่ ๆ จากเอเชีย",
      "faq.q4": "แบรนด์ต่างประเทศส่งสินค้ามาที่กรุงเทพฯ เพื่อทำ UGC ได้ไหม",
      "faq.a4": "ได้ และเป็นวิธีที่ทำกันบ่อย เมื่อสินค้าถึง ฉันดูแลคอนเซปต์ การถ่าย และการส่งงานจากระยะไกล โดยตกลงสิทธิ์ใช้งานกันล่วงหน้า",
      "faq.q5": "ทำคอนเทนต์สำหรับ TikTok, Instagram Reels และโฆษณาไหม",
      "faq.a5": "ทำ คอนเทนต์ถูกออกแบบให้เข้ากับ TikTok, Reels และ Shorts โดยตรง ส่งมอบเป็นโพสต์ออร์แกนิกหรือครีเอทีฟโฆษณาได้ พร้อมไฟล์ดิบและสิทธิ์ใช้งาน",
      "faq.q6": "ทำคอนเทนต์ไลฟ์สไตล์คู่รักได้ไหม",
      "faq.a6": "ได้ — คอนเทนต์คู่รัก ท่องเที่ยว และไลฟ์สไตล์ เหมาะกับแบรนด์ท่องเที่ยว โรงแรม และไลฟ์สไตล์ สำหรับแคมเปญท่องเที่ยวและโรงแรมโดยเฉพาะ ยังมีสตูดิโอพี่น้อง <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a>",
      "faq.q7": "ทำ UGC สำหรับแอปมือถือได้ไหม",
      "faq.a7": "ได้ UGC แนวไลฟ์สไตล์สำหรับแอป — วอล์กทรู ปัญหา-ทางออก และการผสานการใช้งาน ในมุมที่เป็นธรรมชาติและเข้ากับชีวิตประจำวัน เหมาะกับแอปความงาม สุขภาพ และไลฟ์สไตล์",
      "faq.q8": "แบรนด์ร่วมงานกับคุณได้อย่างไร",
      "faq.a8": "ส่งแบรนด์ สินค้า ไทม์ไลน์ และความต้องการคอนเทนต์ผ่านแบบฟอร์มด้านล่าง อีเมล หรือ Instagram DM ฉันจะตอบกลับพร้อมไอเดีย ขอบเขตงาน และใบเสนอราคาตามงานที่ต้องการ",
      "faq.q9": "รับทำ Canvas UGC ทุกหมวดแบรนด์ไหม",
      "faq.a9": "รับ เราทำ Canvas UGC ต่อเนื่องสำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์ ครอบคลุมความงาม แอป อาหาร ท่องเที่ยว โรงแรม สุขภาพ แฟชั่น การศึกษา บริการ และสินค้าอุปโภคบริโภค โดยจับคู่บรีฟกับครีเอเตอร์และสถานที่ที่เหมาะสม",

      "net.kicker": "เครือข่ายครีเอเตอร์", "net.h": "ทุกหมวดหมู่ ครีเอเตอร์ที่ใช่",
      "net.p": "ครีเอเตอร์ทั้งสามคนรับบรีฟหลากหลายและทำ Canvas UGC ได้ เราเลือกคนที่เหมาะที่สุดกับงานของคุณ ไม่ใช่ยื่นทีมแบบเดียวกันให้ทุกแบรนด์",
      "net.mine.tag": "ความงาม · ไลฟ์สไตล์ · ท่องเที่ยว", "net.mine.p": "UGC โดยครีเอเตอร์หญิงสำหรับความงาม สินค้าในชีวิตประจำวัน ไลฟ์สไตล์ ท่องเที่ยว และแอปผู้บริโภค",
      "net.onur.tag": "เทค · SaaS · แอป", "net.onur.p": "วิดีโออธิบาย เดโม และ founder-style UGC สำหรับผลิตภัณฑ์เทค",
      "net.movia.tag": "คู่รักท่องเที่ยว · สถานที่", "net.movia.p": "วิดีโอคู่รักท่องเที่ยวและรีวิวสถานที่สำหรับโรงแรม คาเฟ่ ร้านอาหาร จุดหมาย และแอปท่องเที่ยว",
      "net.current": "คุณอยู่ที่นี่", "net.visit": "ดูพอร์ตโฟลิโอ →",

      "contact.kicker": "มาร่วมงานกัน", "contact.h": "เล่าให้ฟังว่าคุณกำลังเปิดตัวอะไร",
      "contact.sub": "แชร์แบรนด์ สินค้า ไทม์ไลน์ และประเภทคอนเทนต์ที่ต้องการ ฉันจะตอบกลับพร้อมไอเดีย ขอบเขตงาน และใบเสนอราคา โดยปกติภายใน 24 ชั่วโมง",
      "contact.response": "เปิดรับงานร่วมงาน · ตอบกลับภายใน 24 ชม.",

      "form.name": "ชื่อ", "form.name.ph": "ชื่อของคุณ", "form.email": "อีเมล <span class=\"req\">*</span>",
      "form.brand": "แบรนด์", "form.brand.ph": "ชื่อแบรนด์", "form.niche": "หมวดธุรกิจ <span class=\"req\">*</span>", "form.select": "เลือก…",
      "form.n.beauty": "ความงาม / สกินแคร์", "form.n.fashion": "แฟชั่น / เสื้อผ้า", "form.n.lifestyle": "ไลฟ์สไตล์", "form.n.travel": "ท่องเที่ยว / โรงแรม", "form.n.hotel": "โรงแรม / คาเฟ่ / ร้านอาหาร", "form.n.wellness": "สุขภาพและเวลเนส", "form.n.app": "แอปมือถือ", "form.n.food": "อาหาร / เครื่องดื่ม", "form.n.consumer": "สินค้าอุปโภคบริโภค / บริการ", "form.n.other": "อื่น ๆ",
      "form.need": "คุณต้องการอะไร", "form.need.ads": "วิดีโอโฆษณา UGC", "form.need.organic": "reels / TikTok แบบออร์แกนิก", "form.need.photo": "ถ่ายภาพสินค้า", "form.need.shoot": "ถ่ายทำสถานที่ในกรุงเทพฯ", "form.need.monthly": "คอนเทนต์รายเดือน", "form.need.canvas": "Canvas UGC / บัญชีแบรนด์",
      "form.msg": "เล่าให้ฟังหน่อย", "form.msg.ph": "แบรนด์ สินค้า ไทม์ไลน์ และคอนเทนต์ที่คุณต้องการ",
      "form.send": "ส่งข้อความ <span class=\"arrow\">→</span>",
      "form.sending": "กำลังส่ง…", "form.ok": "ขอบคุณ — ได้รับแล้ว ฉันจะตอบกลับภายใน 24 ชั่วโมง", "form.err": "กรอกอีเมลและหมวดธุรกิจ แล้วลองอีกครั้ง",
      "form.fallback": "ระบบส่งอัตโนมัติไม่พร้อมใช้งานชั่วคราว บรีฟของคุณถูกเตรียมเป็นอีเมลแล้ว:", "form.fallback.cta": "เปิดอีเมล",

      "footer.tag": "UGC สายความงามและ Canvas UGC ต่อเนื่อง สำหรับสินค้า แอป สถานที่ และบริการในทุกหมวดแบรนด์",
      "footer.explore": "สำรวจ", "footer.connect": "เชื่อมต่อ", "footer.network": "เครือข่ายครีเอเตอร์", "footer.email": "อีเมล", "footer.made": "กรุงเทพฯ ประเทศไทย · ทำงานทั่วโลก"
    }
  };

  var LS_KEY = "mine_lang";
  var heroTitle = document.getElementById("hero-title");

  function getStored() { try { return localStorage.getItem(LS_KEY); } catch (e) { return null; } }
  function setStored(lang) { try { localStorage.setItem(LS_KEY, lang); } catch (e) {} }

  function countLines(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var rects = range.getClientRects();
    var tops = [];
    for (var i = 0; i < rects.length; i++) {
      var r = rects[i];
      if (r.width < 1 && r.height < 1) continue;
      var top = Math.round(r.top);
      var seen = false;
      for (var j = 0; j < tops.length; j++) {
        if (Math.abs(tops[j] - top) < 2) { seen = true; break; }
      }
      if (!seen) tops.push(top);
    }
    return Math.max(1, tops.length);
  }

  function fitHeroTitle() {
    if (!heroTitle) return;
    var vw = window.innerWidth;
    var maxLines = vw <= 680 ? 5 : 4;
    var maxSize = vw <= 680 ? 46 : vw <= 960 ? 64 : vw <= 1200 ? 72 : 82;
    var minSize = vw <= 680 ? 28 : 36;
    var size = maxSize;
    heroTitle.style.fontSize = size + "px";
    while (size > minSize && countLines(heroTitle) > maxLines) {
      size -= 1;
      heroTitle.style.fontSize = size + "px";
    }
  }

  function applyLang(lang) {
    if (lang !== "tr" && lang !== "th") lang = "en";
    var dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (button) {
      var active = button.getAttribute("data-lang") === lang;
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.classList.toggle("active", active);
    });

    window.__lang = lang;
    fitHeroTitle();
    requestAnimationFrame(fitHeroTitle);
    setTimeout(fitHeroTitle, 250);
    setTimeout(fitHeroTitle, 700);
  }

  var stored = getStored();
  var browserLang = (navigator.language || "en").toLowerCase();
  var initial = stored || (browserLang.indexOf("tr") === 0 ? "tr" : browserLang.indexOf("th") === 0 ? "th" : "en");
  applyLang(initial);

  document.querySelectorAll(".lang-toggle button").forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang");
      setStored(lang);
      applyLang(lang);
    });
  });

  function trS(key) {
    var lang = window.__lang || "en";
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!burger || !menu) return;
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = !menu.classList.contains("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("open", open);
      document.body.classList.toggle("no-scroll", open);
    });
    menu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) closeMenu();
    }, { passive: true });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("in"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  var marquee = document.getElementById("marquee");
  if (marquee) {
    var marqueeContent = marquee.innerHTML;
    var copies = Math.ceil((window.innerWidth * 2) / Math.max(1, marquee.scrollWidth));
    copies = Math.max(2, copies);
    if (copies % 2) copies += 1;
    var repeated = "";
    for (var i = 0; i < copies; i += 1) repeated += marqueeContent;
    marquee.innerHTML = repeated;
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var LEAD_ENDPOINT = "https://bajrnvusqzllvsvipitr.supabase.co/functions/v1/ugc-lead";
  var LEAD_ANON = window.UGC_ANON || "";
  var ENTRY = (function () {
    var params = new URLSearchParams(location.search);
    var utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (key) {
      var value = params.get(key);
      if (value) utm[key] = value;
    });
    var referrer = document.referrer || "";
    var channel = "direct";
    if (Object.keys(utm).length) channel = utm.utm_source || "utm";
    else if (referrer) {
      if (/instagram/i.test(referrer)) channel = "instagram";
      else if (/tiktok/i.test(referrer)) channel = "tiktok";
      else if (/google/i.test(referrer)) channel = "google";
      else channel = "referral";
    }
    return { channel: channel, entry_referrer: referrer, utm: utm };
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
      link.href = href;
      link.textContent = trS("form.fallback.cta");
      link.style.textDecoration = "underline";
      status.appendChild(link);
      status.className = "form-status err";
      window.location.href = href;
    }

    leadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.getElementById("formStatus");
      var button = leadForm.querySelector("button[type=submit]");
      var fd = new FormData(leadForm);

      if (fd.get("website")) {
        status.textContent = trS("form.ok");
        status.className = "form-status ok";
        leadForm.reset();
        return;
      }

      var email = (fd.get("email") || "").trim();
      var product = (fd.get("product") || "").trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !product) {
        status.textContent = trS("form.err");
        status.className = "form-status err";
        if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          document.getElementById("f-email").focus();
        } else {
          document.getElementById("f-product").focus();
        }
        return;
      }

      button.disabled = true;
      status.textContent = trS("form.sending");
      status.className = "form-status";

      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: LEAD_ANON,
          Authorization: "Bearer " + LEAD_ANON
        },
        body: JSON.stringify({
          action: "submit",
          kind: "mine-booking",
          lang: window.__lang || "en",
          site: "ugc-mine",
          name: fd.get("name") || "",
          email: email,
          company: fd.get("company") || "",
          product: product,
          goal: fd.get("goal") || "",
          message: fd.get("message") || "",
          channel: ENTRY.channel,
          entry_referrer: ENTRY.entry_referrer,
          utm: ENTRY.utm
        })
      }).then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (json) {
          return { ok: response.ok, json: json };
        });
      }).then(function (result) {
        if (result.ok && result.json && result.json.ok) {
          status.textContent = trS("form.ok");
          status.className = "form-status ok";
          leadForm.reset();
        } else {
          mailFallback(status, fd);
        }
      }).catch(function () {
        mailFallback(status, fd);
      }).then(function () {
        button.disabled = false;
      });
    });
  }

  var resizeFrame;
  window.addEventListener("resize", function () {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(fitHeroTitle);
  }, { passive: true });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHeroTitle);
  window.addEventListener("load", fitHeroTitle);
})();
