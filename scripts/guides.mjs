// Turkish guide pages that answer real search questions with Mine's own process and prices.
// No market statistics are claimed: every number here is Mine's own rate card.
import { TRY, PRICES } from "./content.mjs";

export const GUIDES = [
  {
    slug: "ugc-nedir", alt: "/what-is-ugc/",
    title: "UGC nedir? Markalar için kısa ve net rehber (2026) · Mine Koçak",
    desc: "UGC (kullanıcı tarafından üretilen içerik) nedir, influencer paylaşımından farkı ne, markalar nerede kullanır ve nasıl brief verilir? Antalya'daki bir UGC içerik üreticisinden sade bir rehber.",
    kicker: "Rehber · UGC",
    h1: ["UGC nedir?", "Markalar için kısa rehber."],
    lede: "UGC, “user-generated content” yani kullanıcı tarafından üretilen içeriktir. Pratikte: gerçek bir kişinin telefonla çektiği, reklam gibi değil tavsiye gibi hissettiren kısa dikey videolar. Ben bu videoları güzellik ve yaşam tarzı markaları ile Antalya'daki mekânlar için çekiyorum; bu sayfada işin nasıl yürüdüğünü sade bir dille anlatıyorum.",
    sections: [
      ["UGC ile influencer paylaşımı arasındaki fark", [
        "Influencer işbirliğinde marka, içerik üreticisinin takipçilerine erişim için ödeme yapar; video onun hesabında yayınlanır ve başarı büyük ölçüde erişimle ölçülür.",
        "UGC'de marka içeriğin kendisi için ödeme yapar. Video markaya teslim edilir; marka onu kendi Instagram ve TikTok hesabında, web sitesinde ya da reklamlarında kullanır. İçerik üreticisinin takipçi sayısı burada belirleyici değildir.",
        "İkisi birleştirilebilir: videonun ayrıca içerik üreticisinin hesabında ortak paylaşım (collab) olarak yayınlanması ek bir kalemdir.",
      ]],
      ["Markalar UGC'yi nerede kullanır?", { list: [
        "Kendi sosyal medya hesaplarında organik paylaşım olarak",
        "Meta (Instagram, Facebook) ve TikTok reklamlarında; reklamda kullanım ayrıca lisanslanır",
        "Ürün sayfalarında ve web sitesinde",
        "Lansmanlarda: aynı ürün için farklı açılışlarla birden fazla versiyon test etmek için",
      ] }],
      ["En çok çekilen UGC formatları", { list: [
        "Kutu açılışı ve ilk deneme: ürünün geldiği an ve ilk kullanım",
        "Benimle hazırlan (Get Ready With Me): makyaj, saç ya da kombin rutini içinde ürün",
        "Demo ve kullanım: ürünün nasıl çalıştığı, 20 saniyenin altında",
        "Kameraya konuşma: bir arkadaşın anlatacağı gibi dürüst yorum",
        "Mekân tanıtımı: kafe, restoran, otel ya da beach club'ın misafir gözünden çekimi",
      ], link: ["/tr/#formats", "Bu formatların gerçek örneklerini izleyin"] }],
      ["İyi bir UGC brief'inde ne olmalı?", { list: [
        "Ürün ya da mekân ve tek cümlelik ana fayda",
        "Hedef kitle: kim izleyecek, neye önem veriyor",
        "Videonun nerede yayınlanacağı: organik mi, reklam mı, ikisi mi",
        "Mutlaka söylenmesi ya da söylenmemesi gerekenler",
        "Teslim tarihi ve kaç versiyon istendiği",
      ] }],
      ["Süreç nasıl işliyor?", [
        "Brief geldikten sonra 48 saat içinde açılış cümleleri ve çekim listesi gönderiyorum; onayınız gelmeden çekmiyorum. Ürün elime ulaştıktan sonra 5 iş günü içinde çekip kurguluyorum. Dikey (9:16) dosyalar altyazılı ve altyazısız teslim edilir, bir tur düzeltme dahildir.",
      ]],
    ],
    faq: [
      ["UGC içerik üreticisinin çok takipçisi olması gerekir mi?", "Hayır. UGC'de marka videonun kendisini satın alır ve kendi kanallarında kullanır. Önemli olan kameradaki doğallık, kurgu ve ürünü anlatma becerisidir."],
      ["UGC videoları reklamda kullanılabilir mi?", "Evet, ama reklam kullanımı ayrıca lisanslanır. Benim fiyat listemde 30 gün için +%30, 90 gün için +%50, 12 ay için +%100'dür."],
      ["UGC videosu ne kadar sürede teslim edilir?", "Benim sürecimde ürün elime ulaştıktan sonra 5 iş günü. 72 saatte acil teslim +%30'dur."],
    ],
    related: [["/tr/ugc-fiyatlari/", "UGC fiyatları 2026: neye göre değişir?"], ["/tr/antalya-mekan-tanitim-videosu/", "Antalya mekân tanıtım videosu"]],
  },
  {
    slug: "ugc-fiyatlari", alt: "/ugc-rates/",
    title: "UGC fiyatları 2026: video başına ne kadar, neye göre değişir? · Mine Koçak",
    desc: `UGC video fiyatları neye göre değişir? Süre, alternatif açılışlar, reklam kullanım hakkı, acil teslim ve münhasırlık. Antalya'daki bir UGC içerik üreticisinin açık fiyat listesi: ${TRY.single}'den başlayan paketler.`,
    kicker: "Rehber · Fiyatlar",
    h1: ["UGC fiyatları 2026.", "Neye göre değişir?"],
    lede: "UGC fiyatı tek bir sayı değildir; videonun uzunluğu, kaç versiyon istendiği ve videonun nerede, ne kadar süre kullanılacağı fiyatı belirler. Aşağıda kendi fiyat listemi ve her kalemin neden var olduğunu açıkça yazıyorum. Başka üreticilerin fiyatları farklı olabilir; bu sayfa bir piyasa ortalaması değil, benim gerçek listemdir.",
    sections: [
      ["Fiyatı belirleyen 5 şey", { list: [
        "Süre: 30 saniyeye kadar video ile 31–60 saniyelik video arasında çekim ve kurgu emeği farklıdır",
        "Versiyon sayısı: aynı videonun farklı ilk 3 saniyeleri (alternatif açılış) reklam testinde işe yarar",
        "Kullanım hakkı: kendi kanallarınızda organik kullanım dahildir; reklamda kullanım süreye göre ayrıca lisanslanır",
        "Hız: 72 saatte teslim, planlamayı değiştirdiği için ek ücretlidir",
        "Münhasırlık: belirli bir süre rakip markayla çalışmamak bir taahhüttür ve ayrıca fiyatlandırılır",
      ] }],
      ["Paket fiyatları", { table: [
        ["Tekli: 1 video, 30 saniyeye kadar", `${TRY.single} ($${PRICES.single})`],
        ["Üçlü: 3 video + 3 alternatif açılış", `${TRY.trio} ($${PRICES.trio})`],
        ["Aylık: 6 video + 6 açılış + 10 fotoğraf", `${TRY.monthly} ($${PRICES.monthly}) / ay`],
        ["Antalya mekân tanıtım videosu", `${TRY.venue} ($${PRICES.venue})`],
      ] }],
      ["Reklam kullanım hakları", { table: [
        ["Reklamda kullanım, 30 gün", "+%30"],
        ["Reklamda kullanım, 90 gün", "+%50"],
        ["Reklamda kullanım, 12 ay", "+%100"],
        ["Reklamın benim hesabımdan yayınlanması (Meta Partnership Ads), video başına 30 gün", "₺5.000 ($100)"],
      ] }],
      ["Fiyata neler dahil?", [
        "Her videoya altyazı, bir tur düzeltme ve markanızın kendi kanallarında 12 ay organik kullanım dahildir. Ödeme %50 peşin, %50 teslimde. Yapay zekâ eğitimi, ses klonlama ve videoların üçüncü taraflara devri hiçbir pakete dahil değildir.",
      ]],
    ],
    faq: [
      ["En uygun başlangıç hangisi?", `Ürününüzü nasıl sunduğumu görmek için Tekli paket (${TRY.single}). Reklamda test edecekseniz Üçlü paket, çünkü üç farklı açılışla hangisinin dikkat tuttuğunu ölçebilirsiniz.`],
      ["Fiyatlar neden TL ve USD olarak ayrı?", "Türkiye'deki markalar TL, yurt dışındaki markalar USD öder. TL fiyatlar 16.11.2026 kuruna göre belirlenmiştir."],
      ["Reklam hakkı almazsam videoyu reklamda kullanabilir miyim?", "Hayır. Organik kullanım dahildir; reklamda kullanım için süreye göre lisans gerekir."],
    ],
    related: [["/tr/ugc-nedir/", "UGC nedir? Markalar için kısa rehber"], ["/tr/antalya-otel-tanitim-videosu/", "Antalya otel tanıtım videosu"], ["/tr/#rates", "Tüm fiyat listesi ve paket seçimi"]],
  },
  {
    slug: "antalya-otel-tanitim-videosu", alt: "/antalya-hotel-video-content/",
    title: "Antalya otel tanıtım videosu · Lara, Belek, Kemer, Side · Mine Koçak UGC",
    desc: `Antalya'daki oteller için misafir gözünden dikey tanıtım videoları: oda, havuz, plaj, kahvaltı, spa ve gün batımı. Türkçe ve İngilizce, Instagram ve TikTok'a hazır. ${TRY.venue}'den başlar.`,
    kicker: "Antalya · Otel videoları",
    h1: ["Antalya otel tanıtım videosu.", "Misafir gözünden, telefonla."],
    lede: "Otel videosu reklam filmi gibi göründüğünde misafir kaydırıp geçiyor. Gerçek bir misafirin telefonuyla çektiği kısa dikey video ise “orada olsam nasıl olurdu” sorusuna cevap veriyor. Antalya'da yaşıyorum; otellerin, butik otellerin ve beach club'ların bu tür videolarını Türkçe ve İngilizce çekiyorum.",
    sections: [
      ["Bir otel videosunda neler olur?", { list: [
        "Varış ve ilk izlenim: lobi, karşılama, odaya giriş",
        "Oda turu: manzara, yatak, banyo, küçük detaylar",
        "Havuz, plaj ya da iskele; gün batımı saatinde",
        "Kahvaltı ya da akşam yemeği: imza tabak, masa düzeni",
        "Spa, hamam, aktivite ya da otel içinden bir hazırlanma (Get Ready With Me) sahnesi",
      ] }],
      ["Hangi bölgelerde çekiyorum?", [
        "Antalya merkez, Konyaaltı, Lara, Kaleiçi, Belek, Kemer ve Side. Antalya dışı çekimlerde yol ve konaklama teklife eklenir.",
      ]],
      ["Neden iki dil?", [
        "Antalya otellerinin misafirlerinin önemli bir kısmı yurt dışından geliyor. Aynı çekimden Türkçe ve İngilizce versiyon çıkarmak, iki kitleye de aynı videoyla ulaşmanızı sağlar. İkinci dil versiyonu ₺2.500 ($50).",
      ]],
      ["Fiyat ve teslim", { table: [
        ["Otel / mekân tanıtım videosu (tek video)", `${TRY.venue} ($${PRICES.venue})`],
        ["Üçlü paket: 3 video + 3 alternatif açılış", `${TRY.trio} ($${PRICES.trio})`],
        ["İkinci dil versiyonu", "+₺2.500 ($50)"],
        ["Reklamda kullanım, 90 gün", "+%50"],
      ] }],
      ["Süreç", [
        "Brief'ten sonra 48 saat içinde çekim listesi gönderiyorum. Çekim, misafirleri rahatsız etmeden otelin en sakin ve ışığın en iyi olduğu saatte yapılır. Çekimden sonra 5 iş günü içinde dikey (9:16), altyazılı ve altyazısız dosyalar teslim edilir; bir tur düzeltme dahildir.",
      ]],
    ],
    faq: [
      ["Önceki mekân videolarınızı nereden görebilirim?", "Sitemdeki işler bölümünde. Mekân örneği Bangkok'ta Siam Paragon'daki Kiwamiya restoranı için çektiğim ücretli işbirliği videosu; ada günü videosu da resort ortamında bir hazırlanma (Get Ready With Me) örneği."],
      ["Otelde konaklamam gerekiyor mu?", "Antalya merkez ve yakın bölgelerde günübirlik çekim yeterli. Gün batımı ve sabah sahnelerinin ikisi isteniyorsa bir gece konaklama planlanır."],
      ["Videoları otelin kendi hesabında paylaşabilir miyiz?", "Evet. Kendi kanallarınızda 12 ay organik kullanım fiyata dahildir; reklamda kullanım ayrıca lisanslanır."],
    ],
    related: [["/tr/antalya-mekan-tanitim-videosu/", "Antalya kafe ve restoran tanıtım videosu"], ["/tr/ugc-fiyatlari/", "UGC fiyatları 2026"], ["/tr/#work", "Yayınlanmış işler"]],
  },
  {
    lang: "en", slug: "what-is-ugc", path: "/what-is-ugc/", alt: "/tr/ugc-nedir/",
    title: "What is UGC? A short guide for brands (2026) · Mine Koçak",
    desc: "What UGC (user-generated content) is, how it differs from influencer posts, where brands use it and how to brief it. A plain guide from a UGC creator based in Antalya, Türkiye.",
    kicker: "Guide · UGC",
    h1: ["What is UGC?", "A short guide for brands."],
    lede: "UGC stands for user-generated content. In practice it means short vertical videos filmed by a real person on a phone, made to feel like a recommendation rather than an advert. I make them for beauty and lifestyle brands and for venues in Antalya; this page explains how the work actually runs.",
    sections: [
      ["UGC vs influencer posts", [
        "With an influencer deal, a brand pays for access to the creator's audience; the post lives on the creator's account and success is judged mostly by reach.",
        "With UGC, the brand pays for the content itself. The video is delivered to the brand, which uses it on its own Instagram and TikTok, website or ads. The creator's follower count is not the point.",
        "The two can be combined: a joint post on the creator's account is an optional extra.",
      ]],
      ["Where brands use UGC", { list: [
        "As organic posts on their own social accounts",
        "In Meta (Instagram, Facebook) and TikTok ads; paid use is licensed separately",
        "On product pages and websites",
        "In launches, testing several versions of one video with different openings",
      ] }],
      ["The most common formats", { list: [
        "Unboxing and first try",
        "Get Ready With Me: a makeup, hair or outfit routine built around the product",
        "Demo and how-to, under 20 seconds",
        "Talking to camera: an honest recommendation, the way a friend would give it",
        "Venue visit: a café, restaurant, hotel or beach club seen through a guest's eyes",
      ], link: ["/#formats", "Watch real examples of each format"] }],
      ["What a good brief includes", { list: [
        "The product or venue and its one main benefit",
        "Who the video is for and what they care about",
        "Where it will run: organic, ads, or both",
        "Anything that must or must not be said",
        "Deadline and number of versions",
      ] }],
    ],
    faq: [
      ["Does a UGC creator need a big following?", "No. The brand buys the video and runs it on its own channels. What matters is how natural the creator is on camera, the editing and how clearly the product is explained."],
      ["Can UGC videos be used in ads?", "Yes, with a paid-use licence. On my rate card that is +30% for 30 days, +50% for 90 days and +100% for 12 months."],
      ["How long does delivery take?", "In my process: within 5 working days of the product arriving. Rush delivery in 72 hours is +30%."],
    ],
    related: [["/ugc-rates/", "UGC rates 2026: what drives the price"], ["/antalya-hotel-video-content/", "Hotel video content in Antalya"]],
  },
  {
    lang: "en", slug: "ugc-rates", path: "/ugc-rates/", alt: "/tr/ugc-fiyatlari/",
    title: "UGC rates 2026: what a UGC video costs and why · Mine Koçak",
    desc: `What drives UGC pricing: length, alternative openings, paid-ad usage rights, rush delivery and exclusivity. The open rate card of a UGC creator in Antalya, from $${PRICES.single} per video.`,
    kicker: "Guide · Rates",
    h1: ["UGC rates 2026.", "What drives the price?"],
    lede: "A UGC price is not one number: video length, how many versions you need and where and for how long the video will run all change it. Below is my own rate card and the reason behind every line. Other creators charge differently; this is not a market average, it is my actual list.",
    sections: [
      ["Five things that set the price", { list: [
        "Length: a video up to 30 seconds and a 31–60 second video take different filming and editing time",
        "Versions: alternative first 3 seconds (openings) are what you test in ads",
        "Usage rights: organic use on your own channels is included; paid use is licensed by duration",
        "Speed: 72-hour delivery reshuffles the schedule, so it costs extra",
        "Exclusivity: not working with a competitor for a period is a commitment, priced separately",
      ] }],
      ["Packages", { table: [
        ["Single: 1 video up to 30 seconds", `$${PRICES.single}`],
        ["Trio: 3 videos + 3 alternative openings", `$${PRICES.trio}`],
        ["Monthly: 6 videos + 6 openings + 10 photos", `$${PRICES.monthly} / month`],
        ["Antalya venue or hotel video", `$${PRICES.venue}`],
      ] }],
      ["Paid-use licences", { table: [
        ["Paid ads, 30 days", "+30%"], ["Paid ads, 90 days", "+50%"], ["Paid ads, 12 months", "+100%"],
        ["Ads run from my Instagram account (Meta Partnership Ads), per video per 30 days", "$100"],
      ] }],
      ["What is included", [
        "Every video includes captions, one round of changes and 12 months of organic use on your own channels. 50% upfront, 50% on delivery. AI training, voice cloning and passing the videos to third parties are never included.",
      ]],
    ],
    faq: [
      ["Where should I start?", `The Single package ($${PRICES.single}) if you want to see how I present your product; the Trio if you will test in ads, because three openings show you which one holds attention.`],
      ["Do you invoice in TRY or USD?", "Brands in Türkiye pay in TRY, brands abroad in USD. TRY prices are on the Turkish version of this page."],
      ["Can I run the video in ads without a licence?", "No. Organic use is included; paid use needs a licence by duration."],
    ],
    related: [["/what-is-ugc/", "What is UGC? A short guide"], ["/#rates", "Full rate card and packages"]],
  },
  {
    lang: "en", slug: "antalya-hotel-video-content", path: "/antalya-hotel-video-content/", alt: "/tr/antalya-otel-tanitim-videosu/",
    title: "Hotel video content in Antalya · Lara, Belek, Kemer, Side · Mine Koçak UGC",
    desc: `Vertical guest-view videos for hotels, boutique stays and beach clubs in Antalya: rooms, pool, beach, breakfast, spa and sunset. English and Turkish, ready for Instagram and TikTok. From $${PRICES.venue}.`,
    kicker: "Antalya · Hotel videos",
    h1: ["Hotel video content in Antalya.", "Filmed like a guest, on a phone."],
    lede: "When a hotel video looks like a commercial, people scroll past. A short vertical video filmed by a real guest on a phone answers the only question that matters: what would it feel like to be there? I live in Antalya and film these videos for hotels, boutique stays and beach clubs, in English and Turkish.",
    sections: [
      ["What a hotel video covers", { list: [
        "Arrival and first impression: lobby, welcome, walking into the room",
        "Room tour: the view, the bed, the bathroom, the small details",
        "Pool, beach or pier, at sunset",
        "Breakfast or dinner: the signature dish and the table",
        "Spa, hammam, an activity, or a Get Ready With Me scene inside the hotel",
      ] }],
      ["Where I film", ["Antalya city, Konyaaltı, Lara, Kaleiçi, Belek, Kemer and Side. Outside Antalya, travel and accommodation are added to the quote."]],
      ["Why two languages", ["Many Antalya hotel guests come from abroad. One shoot can produce an English and a Turkish version, so the same video reaches both audiences. The second-language version is $50."]],
      ["Price and delivery", { table: [
        ["Hotel or venue video (single)", `$${PRICES.venue}`],
        ["Trio: 3 videos + 3 alternative openings", `$${PRICES.trio}`],
        ["Second-language version", "+$50"],
        ["Paid ads, 90 days", "+50%"],
      ] }],
      ["Process", ["A shot list within 48 hours of the brief. Filming happens at the hotel's calmest hour with the best light, without disturbing guests. Vertical (9:16) files with and without captions within 5 working days, one round of changes included."]],
    ],
    faq: [
      ["Where can I see previous venue videos?", "In the work section of my site. The venue example is a paid collaboration for Kiwamiya restaurant at Siam Paragon in Bangkok; the island-day video is a Get Ready With Me filmed at a resort."],
      ["Do I need to host you overnight?", "Not for Antalya city and nearby areas. If you want both sunset and morning scenes, one night is planned."],
      ["Can the hotel post the videos on its own accounts?", "Yes. Twelve months of organic use on your own channels is included; paid use is licensed separately."],
    ],
    related: [["/ugc-rates/", "UGC rates 2026"], ["/what-is-ugc/", "What is UGC?"], ["/#work", "Published work"]],
  },
];
