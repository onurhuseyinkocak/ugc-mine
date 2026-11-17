// Turkish guide pages that answer real search questions with Mine's own process and prices.
// No market statistics are claimed: every number here is Mine's own rate card.
import { TRY, PRICES } from "./content.mjs";

export const GUIDES = [
  {
    slug: "ugc-nedir",
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
    slug: "ugc-fiyatlari",
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
    related: [["/tr/ugc-nedir/", "UGC nedir? Markalar için kısa rehber"], ["/tr/#rates", "Tüm fiyat listesi ve paket seçimi"]],
  },
];
