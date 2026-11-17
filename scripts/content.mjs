// Single source of truth for every generated page. Edit here, then `node scripts/build.mjs`.
export const SITE = "https://ugc-mine.vibecodingturkey.com";
export const FX = { rate: 50.37, date: "16.11.2026" }; // USD→TRY used for the rounded ₺ figures on /tr/

export const PRICES = { single: 180, trio: 480, monthly: 900, venue: 220 };
export const TRY = { single: "₺9.000", trio: "₺24.000", monthly: "₺45.000", venue: "₺11.000" };

// Instagram posts. uploadDate = publish date on Instagram; duration = length of the cut hosted here.
export const WORK = [
  { slug: "wilder-rip-it-shake-it", file: "wilder-rip", brand: "Wilder", ig: "DfU2aZAIbnp", date: "2026-11-04", secs: 12, kind: "joint", handle: "insidewilder",
    en: { title: "“Rip it. Shake it.”", niche: "Wellness drink", fmt: "Demo", line: "Product in hand in the first second, the pour, one clean benefit line. Short enough to test as an ad.", label: "Joint post with @insidewilder" },
    tr: { title: "“Rip it. Shake it.”", niche: "Sağlıklı içecek", fmt: "Demo", line: "İlk saniyede ürün elde, döküş, tek net fayda cümlesi. Reklamda test edilecek kadar kısa.", label: "@insidewilder ile ortak paylaşım" } },
  { slug: "wilder-walk-to-the-gym", file: "wilder-gym", brand: "Wilder", ig: "DfZDstfIEZb", date: "2026-11-06", secs: 21, kind: "joint", handle: "insidewilder", where: "Bangkok",
    en: { title: "“The walk to the gym”", niche: "Wellness drink", fmt: "Day in the life", line: "A day-in-the-life story: the heat, a class to teach, the stick in my bag. The product earns its place in the routine.", label: "Joint post with @insidewilder" },
    tr: { title: "“Spora giden yol”", niche: "Sağlıklı içecek", fmt: "Bir günüm", line: "Bir gün hikâyesi: sıcak, verilecek bir ders, çantamdaki saşe. Ürün rutinin doğal parçası oluyor.", label: "@insidewilder ile ortak paylaşım" } },
  { slug: "ica-makeup-academy-transformation", file: "ica-makeup", brand: "ICA Makeup Academy", ig: "Db8WSa8g_ih", date: "2026-08-12", secs: 53, kind: "joint", handle: "icamakeupacademy", where: "Bangkok",
    en: { title: "“The transformation”", niche: "Beauty", fmt: "Before & after", line: "Bare face, the artist at work, the reveal. The academy and the artist are both credited on screen.", label: "Joint post with @icamakeupacademy" },
    tr: { title: "“Dönüşüm”", niche: "Güzellik", fmt: "Öncesi ve sonrası", line: "Makyajsız yüz, iş başındaki sanatçı, final. Akademi ve sanatçı ekranda anılıyor.", label: "@icamakeupacademy ile ortak paylaşım" } },
  { slug: "kiwamiya-siam-paragon-venue", file: "kiwamiya", brand: "Kiwamiya", ig: "DbFQbiuKlbz", date: "2026-07-22", secs: 60, kind: "venue", handle: "kiwamiya.thailand", where: "Bangkok",
    en: { title: "“Hot-stone hamburg”", niche: "Restaurant", fmt: "Venue visit", line: "Location pin, table-side cooking, an honest first bite. Everything a guest needs to decide on tonight's dinner.", label: "Venue feature, posted with @moviatravelhub" },
    tr: { title: "“Sıcak taşta hamburg”", niche: "Restoran", fmt: "Mekân tanıtımı", line: "Konum, masada pişirme, dürüst ilk lokma. Misafirin akşam yemeği kararını vermesi için gereken her şey.", label: "Mekân tanıtımı, @moviatravelhub ile paylaşıldı" } },
  { slug: "impress-press-on-nails", file: "impress-nails", brand: "Impress", ig: "DZIY-nBsuie", date: "2026-06-03", secs: 30, kind: "product", handle: "impressnails",
    en: { title: "“5 minutes, 20 days”", niche: "Nails", fmt: "Unboxing & first try", line: "Unboxing, application and a 20-day wear check on a styled flat-lay with real hands.", label: "Product feature · @impressnails" },
    tr: { title: "“5 dakika, 20 gün”", niche: "Tırnak", fmt: "Kutu açılışı ve ilk deneme", line: "Kutu açılışı, uygulama ve 20 günlük dayanıklılık kontrolü; şık bir zemin, gerçek eller.", label: "Ürün tanıtımı · @impressnails" } },
  { slug: "get-ready-with-me-island-day", file: "grwm-island", brand: "Get Ready With Me", ig: "DfAAcqugg93", date: "2026-10-27", secs: 29, kind: "own",
    en: { title: "Island day", niche: "Outfit", fmt: "Get Ready With Me", line: "Getting ready for the beach in one look. Made for resort wear, sun care and travel accessories.", label: "Original post on @mineexplora" },
    tr: { title: "Ada günü", niche: "Kombin", fmt: "Benimle hazırlan", line: "Plaja tek bir kombinle hazırlanmak. Resort giyim, güneş bakımı ve seyahat aksesuarları için ideal.", label: "@mineexplora'daki orijinal paylaşım" } },
  { slug: "get-ready-with-me-blue-eye-look", file: "grwm-makeup", brand: "Get Ready With Me", ig: "DY177k8Mpva", date: "2026-05-27", secs: 45, kind: "own",
    en: { title: "Blue eye look", niche: "Makeup", fmt: "Get Ready With Me", line: "A close-up eye look, hair and the full outfit, set to my own song. Products used: Babyliss, Sleek Makeup.", label: "Original post on @mineexplora" },
    tr: { title: "Mavi göz makyajı", niche: "Makyaj", fmt: "Benimle hazırlan", line: "Yakın plan göz makyajı, saç ve tüm kombin, kendi şarkımla. Kullanılan ürünler: Babyliss, Sleek Makeup.", label: "@mineexplora'daki orijinal paylaşım" } },
];

export const FORMATS = [
  { file: "unboxing", src: "Impress", t: "0:02–0:08",
    en: ["Unboxing & first try", "The moment it arrives, the first reaction, the first use."],
    tr: ["Kutu açılışı ve ilk deneme", "Ürünün geldiği an, ilk tepki, ilk kullanım."] },
  { file: "grwm", src: "Get Ready With Me", t: "0:15–0:21",
    en: ["Get Ready With Me", "A getting-ready routine (makeup, hair, outfit) filmed around your product."],
    tr: ["Benimle hazırlan", "Ürününüz etrafında çekilen bir hazırlanma rutini: makyaj, saç, kombin."] },
  { file: "demo", src: "Wilder", t: "0:10–0:16",
    en: ["Demo & how-to", "How it works, shown in under 20 seconds, without feeling scripted."],
    tr: ["Demo ve kullanım", "Nasıl çalıştığı, 20 saniyenin altında ve ezber hissi vermeden."] },
  { file: "talking", src: "@mineexplora", t: "0:30–0:34",
    en: ["Talking to camera", "I tell people about it the way a friend would."],
    tr: ["Kameraya konuşma", "Bir arkadaşın anlatacağı gibi anlatırım."] },
  { file: "venue", src: "Kiwamiya", t: "0:12–0:18",
    en: ["Venue visit", "Cafés, restaurants, hotels and beach clubs in Antalya. Travel shoots on request."],
    tr: ["Mekân tanıtımı", "Antalya'da kafe, restoran, otel ve beach club. Talep üzerine seyahat çekimleri."] },
];

export const BRANDS = [
  { name: "Wilder", img: "wilder.webp", w: 515, en: "joint posts", tr: "ortak paylaşımlar" },
  { name: "ICA Makeup Academy", text: true, en: "joint post", tr: "ortak paylaşım" },
  { name: "Kiwamiya", img: "kiwamiya.webp", w: 478, en: "venue feature", tr: "mekân tanıtımı" },
  { name: "Impress", img: "impress.webp", w: 647, en: "product feature", tr: "ürün tanıtımı" },
];
