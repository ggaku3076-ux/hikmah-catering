// ============================================
// Hikmah Catering - Static Data & Configuration
// ============================================

export const COMPANY = {
  name: "Hikmah Catering",
  fullName: "Hikmah Catering & Wedding Services",
  tagline: "Wujudkan Acara Impian Tanpa Khawatir Over-Budget",
  description:
    "Layanan katering premium untuk pernikahan, acara kantor, dan berbagai kebutuhan spesial Anda. Transparan, tanpa biaya tersembunyi.",
  phone: "6281234567890",
  email: "info@hikmahcatering.com",
  address: "Jl. Mawar Indah No. 45, Kota Bandung, Jawa Barat 40115",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/hikmahcatering",
  facebook: "https://facebook.com/hikmahcatering",
  tiktok: "https://tiktok.com/@hikmahcatering",
  maps: "https://maps.google.com/?q=-6.9175,107.6191",
  operationalHours: "Senin - Sabtu: 08.00 - 17.00 WIB",
  yearFounded: 2015,
  eventsCompleted: 2500,
  happyClients: 1800,
  rating: 4.9,
  totalReviews: 520,
};

export type EventType =
  | "wedding"
  | "office"
  | "aqiqah"
  | "birthday"
  | "seminar"
  | "syukuran";

export interface Package {
  id: string;
  name: string;
  slug: string;
  type: EventType[];
  basePrice: number;
  minPax: number;
  description: string;
  image: string;
  popular?: boolean;
  menuItems: {
    category: string;
    items: string[];
  }[];
  included: string[];
}

export interface Addon {
  id: string;
  name: string;
  category: "gubukan" | "logistik" | "dekorasi" | "entertainment" | "pelayanan";
  price: number;
  unit: "per pax" | "per ekor" | "per set" | "per unit" | "per orang";
  image?: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  cost: number;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: number;
  text: string;
  image?: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  thumbnail: string;
  category: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "wedding" | "corporate" | "aqiqah" | "dekorasi" | "food";
  type: "image" | "video";
}

// ============================================
// PACKAGES DATA
// ============================================

export const PACKAGES: Package[] = [
  {
    id: "silver",
    name: "Silver",
    slug: "silver",
    type: ["wedding", "syukuran", "birthday"],
    basePrice: 45000,
    minPax: 100,
    description:
      "Paket hemat dengan cita rasa premium. Cocok untuk acara keluarga dan syukuran dengan budget terjangkau.",
    image: "/images/packages/silver.jpg",
    menuItems: [
      { category: "Nasi", items: ["Nasi Putih Pulen", "Nasi Kuning"] },
      {
        category: "Lauk Utama",
        items: ["Ayam Goreng Kremes", "Rendang Daging"],
      },
      { category: "Lauk Pendamping", items: ["Perkedel Kentang", "Tempe Orek"] },
      { category: "Sayur", items: ["Sayur Asem", "Capcay"] },
      { category: "Sambal", items: ["Sambal Terasi", "Sambal Matah"] },
      { category: "Kerupuk", items: ["Kerupuk Udang"] },
      { category: "Buah", items: ["Buah Potong Segar"] },
      { category: "Minuman", items: ["Air Mineral", "Es Teh Manis"] },
    ],
    included: [
      "Pramusaji (1 per 50 tamu)",
      "Alat makan standar (piring melamin)",
      "Meja prasmanan (2 set)",
      "Taplak meja putih",
      "Pengiriman gratis radius 10 km",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    slug: "gold",
    type: ["wedding", "syukuran", "birthday", "aqiqah"],
    basePrice: 65000,
    minPax: 100,
    description:
      "Paket terlaris kami dengan pilihan menu premium dan pelayanan terbaik untuk acara berkesan.",
    image: "/images/packages/gold.jpg",
    popular: true,
    menuItems: [
      {
        category: "Nasi",
        items: ["Nasi Putih Pulen", "Nasi Kuning", "Nasi Kebuli"],
      },
      {
        category: "Lauk Utama",
        items: [
          "Ayam Bakar Bumbu Rujak",
          "Rendang Daging Sapi",
          "Ikan Gurame Asam Manis",
        ],
      },
      {
        category: "Lauk Pendamping",
        items: [
          "Perkedel Kentang",
          "Tahu Isi",
          "Tempe Mendoan",
          "Telur Balado",
        ],
      },
      {
        category: "Sayur",
        items: ["Sayur Lodeh", "Capcay Spesial", "Acar Kuning"],
      },
      {
        category: "Sambal",
        items: ["Sambal Terasi", "Sambal Matah", "Sambal Dadak"],
      },
      { category: "Kerupuk", items: ["Kerupuk Udang", "Emping Melinjo"] },
      { category: "Buah", items: ["Buah Potong Premium"] },
      {
        category: "Minuman",
        items: ["Air Mineral", "Es Teh Manis", "Jus Buah Segar"],
      },
      { category: "Dessert", items: ["Puding Buah", "Kue Tradisional 3 Jenis"] },
    ],
    included: [
      "Pramusaji (1 per 30 tamu)",
      "Alat makan keramik premium",
      "Meja prasmanan (3 set)",
      "Taplak meja eksklusif",
      "Standing banner selamat datang",
      "Pengiriman gratis radius 15 km",
      "Ice carving sederhana",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    slug: "platinum",
    type: ["wedding"],
    basePrice: 95000,
    minPax: 200,
    description:
      "Paket mewah untuk pernikahan impian Anda. Pelayanan eksklusif dengan sentuhan elegan di setiap detail.",
    image: "/images/packages/platinum.jpg",
    menuItems: [
      {
        category: "Nasi",
        items: [
          "Nasi Putih Pulen",
          "Nasi Kuning Tumpeng Mini",
          "Nasi Kebuli Kambing",
          "Nasi Goreng Live Station",
        ],
      },
      {
        category: "Lauk Utama",
        items: [
          "Ayam Kodok",
          "Rendang Daging Premium",
          "Gurame Bakar Jimbaran",
          "Udang Saus Padang",
          "Sate Maranggi",
        ],
      },
      {
        category: "Lauk Pendamping",
        items: [
          "Perkedel Kentang",
          "Tahu Crispy",
          "Tempe Mendoan",
          "Telur Pindang",
          "Risoles Mayo",
        ],
      },
      {
        category: "Sayur",
        items: ["Sayur Lodeh Komplit", "Capcay Seafood", "Gado-gado Jakarta"],
      },
      {
        category: "Sambal",
        items: ["Sambal Terasi", "Sambal Matah", "Sambal Mangga", "Sambal Ijo"],
      },
      {
        category: "Kerupuk",
        items: ["Kerupuk Udang Premium", "Emping Melinjo", "Keripik Tempe"],
      },
      { category: "Buah", items: ["Buah Potong Premium", "Rujak Buah"] },
      {
        category: "Minuman",
        items: [
          "Air Mineral",
          "Es Teh Manis",
          "Aneka Jus Segar",
          "Infused Water",
          "Es Kelapa Muda",
        ],
      },
      {
        category: "Dessert",
        items: [
          "Puding Premium 3 Rasa",
          "Kue Tradisional 5 Jenis",
          "Chocolate Fountain",
          "Fruit Tartlet",
        ],
      },
    ],
    included: [
      "Pramusaji profesional (1 per 20 tamu)",
      "Alat makan keramik premium gold-rim",
      "Meja prasmanan premium (5 set)",
      "Taplak meja satin eksklusif",
      "Standing banner & signage dekorasi",
      "Pengiriman gratis radius 20 km",
      "Ice carving premium",
      "Live cooking station (2 jenis)",
      "Photo corner sederhana",
      "Bunga meja utama",
    ],
  },
  {
    id: "corporate-basic",
    name: "Corporate Basic",
    slug: "corporate-basic",
    type: ["office", "seminar"],
    basePrice: 35000,
    minPax: 50,
    description:
      "Solusi katering untuk meeting, seminar, dan acara kantor harian dengan harga efisien.",
    image: "/images/packages/corporate-basic.jpg",
    menuItems: [
      { category: "Nasi Box", items: ["Nasi Putih"] },
      { category: "Lauk Utama", items: ["Ayam Goreng / Ayam Bakar"] },
      { category: "Lauk Pendamping", items: ["Perkedel / Tahu Isi"] },
      { category: "Sayur", items: ["Capcay / Tumis Buncis"] },
      { category: "Pelengkap", items: ["Sambal", "Kerupuk", "Buah"] },
      { category: "Minuman", items: ["Air Mineral 600ml"] },
    ],
    included: [
      "Kemasan nasi box eksklusif",
      "Sendok garpu plastik premium",
      "Tissue basah",
      "Pengiriman gratis radius 10 km",
    ],
  },
  {
    id: "corporate-premium",
    name: "Corporate Premium",
    slug: "corporate-premium",
    type: ["office", "seminar"],
    basePrice: 55000,
    minPax: 50,
    description:
      "Paket prasmanan premium untuk acara korporat, gathering, dan seminar berskala besar.",
    image: "/images/packages/corporate-premium.jpg",
    menuItems: [
      { category: "Nasi", items: ["Nasi Putih", "Nasi Goreng Spesial"] },
      {
        category: "Lauk Utama",
        items: ["Ayam Bakar", "Rendang Sapi", "Ikan Dori Saus Asam Manis"],
      },
      {
        category: "Lauk Pendamping",
        items: ["Perkedel Kentang", "Tahu Crispy", "Tempe Orek"],
      },
      { category: "Sayur", items: ["Capcay Spesial", "Sop Buntut"] },
      {
        category: "Dessert & Buah",
        items: ["Puding", "Buah Potong", "Kue Basah 3 Jenis"],
      },
      {
        category: "Minuman",
        items: ["Air Mineral", "Jus Buah", "Teh / Kopi"],
      },
    ],
    included: [
      "Pramusaji profesional",
      "Alat makan keramik",
      "Meja prasmanan (2 set)",
      "Taplak meja rapi",
      "Pengiriman gratis radius 12 km",
    ],
  },
  {
    id: "snack-box",
    name: "Snack Box",
    slug: "snack-box",
    type: ["office", "seminar"],
    basePrice: 25000,
    minPax: 30,
    description:
      "Paket snack box untuk coffee break, rapat, dan seminar. Pilihan jajanan premium dikemas elegan.",
    image: "/images/packages/snack-box.jpg",
    menuItems: [
      {
        category: "Isi Snack Box (3 Jenis)",
        items: [
          "Risoles Mayo / Pastel Ayam",
          "Lemper Ayam / Kroket",
          "Brownies / Bolu Kukus",
        ],
      },
      {
        category: "Minuman",
        items: ["Teh Kotak / Jus Kotak"],
      },
    ],
    included: [
      "Kemasan box premium",
      "Tissue",
      "Pengiriman gratis radius 10 km",
    ],
  },
  {
    id: "aqiqah",
    name: "Aqiqah Premium",
    slug: "aqiqah-premium",
    type: ["aqiqah"],
    basePrice: 55000,
    minPax: 50,
    description:
      "Paket spesial aqiqah dengan kambing pilihan dan masakan tradisional yang lezat.",
    image: "/images/packages/aqiqah.jpg",
    menuItems: [
      { category: "Nasi", items: ["Nasi Kuning Tumpeng", "Nasi Kebuli"] },
      {
        category: "Lauk Utama",
        items: ["Sate Kambing", "Gulai Kambing", "Tongseng Kambing"],
      },
      {
        category: "Lauk Pendamping",
        items: ["Perkedel", "Telur Pindang", "Bihun Goreng"],
      },
      { category: "Sayur", items: ["Sayur Lodeh", "Urap Sayur"] },
      { category: "Pelengkap", items: ["Sambal", "Kerupuk", "Acar"] },
      { category: "Minuman", items: ["Air Mineral", "Es Teh Manis"] },
    ],
    included: [
      "1 Ekor Kambing (Aqiqah Laki-laki: 2 Ekor)",
      "Pramusaji",
      "Alat makan",
      "Meja prasmanan",
      "Pengiriman gratis radius 10 km",
      "Sertifikat Aqiqah",
    ],
  },
];

// ============================================
// ADD-ONS DATA
// ============================================

export const ADDONS: Addon[] = [
  // Gubukan / Food Stalls
  {
    id: "sate-ayam",
    name: "Stall Sate Ayam",
    category: "gubukan",
    price: 8000,
    unit: "per pax",
  },
  {
    id: "sate-kambing",
    name: "Stall Sate Kambing",
    category: "gubukan",
    price: 12000,
    unit: "per pax",
  },
  {
    id: "kambing-guling",
    name: "Kambing Guling Utuh",
    category: "gubukan",
    price: 3500000,
    unit: "per ekor",
  },
  {
    id: "zuppa-soup",
    name: "Stall Zuppa Soup",
    category: "gubukan",
    price: 7000,
    unit: "per pax",
  },
  {
    id: "es-krim",
    name: "Stall Es Krim",
    category: "gubukan",
    price: 5000,
    unit: "per pax",
  },
  {
    id: "martabak",
    name: "Stall Martabak",
    category: "gubukan",
    price: 8000,
    unit: "per pax",
  },
  {
    id: "mie-ayam",
    name: "Stall Mie Ayam / Bakso",
    category: "gubukan",
    price: 6000,
    unit: "per pax",
  },
  {
    id: "siomay",
    name: "Stall Siomay & Batagor",
    category: "gubukan",
    price: 5000,
    unit: "per pax",
  },
  // Logistik
  {
    id: "meja-extra",
    name: "Meja Bulat (Extra)",
    category: "logistik",
    price: 75000,
    unit: "per unit",
  },
  {
    id: "kursi-extra",
    name: "Kursi Lipat (Extra)",
    category: "logistik",
    price: 10000,
    unit: "per unit",
  },
  {
    id: "tenda",
    name: "Tenda Plafon 4x6m",
    category: "logistik",
    price: 1500000,
    unit: "per unit",
  },
  {
    id: "alat-makan-upgrade",
    name: "Upgrade Alat Makan Keramik",
    category: "logistik",
    price: 3000,
    unit: "per pax",
  },
  // Dekorasi
  {
    id: "dekorasi-basic",
    name: "Dekorasi Basic",
    category: "dekorasi",
    price: 3500000,
    unit: "per set",
  },
  {
    id: "dekorasi-premium",
    name: "Dekorasi Premium",
    category: "dekorasi",
    price: 7500000,
    unit: "per set",
  },
  {
    id: "dekorasi-custom",
    name: "Dekorasi Custom (Mewah)",
    category: "dekorasi",
    price: 15000000,
    unit: "per set",
  },
  {
    id: "bunga-meja",
    name: "Bunga Meja",
    category: "dekorasi",
    price: 150000,
    unit: "per unit",
  },
  // Entertainment
  {
    id: "sound-system",
    name: "Sound System + Mic Wireless",
    category: "entertainment",
    price: 2500000,
    unit: "per set",
  },
  {
    id: "mc-profesional",
    name: "MC Profesional",
    category: "entertainment",
    price: 3000000,
    unit: "per orang",
  },
  {
    id: "band-akustik",
    name: "Band Akustik (3 jam)",
    category: "entertainment",
    price: 5000000,
    unit: "per set",
  },
  // Pelayanan
  {
    id: "pramusaji-extra",
    name: "Pramusaji Tambahan",
    category: "pelayanan",
    price: 250000,
    unit: "per orang",
  },
  {
    id: "cleaning-crew",
    name: "Cleaning Crew (After Event)",
    category: "pelayanan",
    price: 500000,
    unit: "per set",
  },
];

// ============================================
// DELIVERY ZONES
// ============================================

export const DELIVERY_ZONES: DeliveryZone[] = [
  { id: "zone-0", name: "Radius 0-10 km (Gratis)", cost: 0 },
  { id: "zone-1", name: "Radius 10-20 km", cost: 500000 },
  { id: "zone-2", name: "Radius 20-30 km", cost: 1000000 },
  { id: "zone-3", name: "Radius 30-50 km", cost: 1500000 },
  { id: "zone-4", name: "Luar Kota (50+ km)", cost: 2500000 },
];

// ============================================
// CALCULATOR CONFIG
// ============================================

export const CALCULATOR_CONFIG = {
  taxRate: 0.11, // PPN 11%
  serviceChargeRate: 0.05, // Service Charge 5%
  dpPercentage: 0.3, // DP 30%
  enableTax: true,
  enableServiceCharge: true,
};

// ============================================
// TESTIMONIALS
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Citra & Budi Setiawan",
    event: "Wedding - 500 Tamu",
    rating: 5,
    text: "Alhamdulillah, pernikahan kami berjalan lancar berkat Hikmah Catering. Makanan enak, pelayanan ramah, dan yang paling penting, biaya sesuai dengan estimasi di website. Tidak ada biaya tersembunyi!",
    date: "2024-11-15",
  },
  {
    id: "t2",
    name: "Pak Andi Wijaya",
    event: "Seminar Perusahaan - 300 Pax",
    rating: 5,
    text: "Kami rutin menggunakan jasa Hikmah Catering untuk acara kantor. Kalkulator di website sangat membantu saya menyusun RAB tanpa harus menunggu balasan admin. Tinggal hitung, screenshot, kirim ke bos. Done!",
    date: "2024-10-22",
  },
  {
    id: "t3",
    name: "Rina Marlina",
    event: "Wedding Organizer Partner",
    rating: 5,
    text: "Sebagai wedding planner, saya sangat terbantu dengan kalkulator biaya Hikmah. Setiap kali klien berubah pikiran soal jumlah tamu, saya bisa langsung update estimasi. Tools yang sangat powerful!",
    date: "2024-09-08",
  },
  {
    id: "t4",
    name: "Keluarga Hasan",
    event: "Aqiqah - 200 Tamu",
    rating: 5,
    text: "Makanan untuk aqiqah anak kami sangat lezat. Kambing gulingnya juara! Sertifikat aqiqah juga sudah disediakan. Pelayanan komplit dan memuaskan.",
    date: "2024-12-01",
  },
  {
    id: "t5",
    name: "Dewi Anggraini",
    event: "Ulang Tahun Anak - 100 Tamu",
    rating: 4,
    text: "Paket Silver-nya sudah cukup lengkap untuk acara ulang tahun anak. Makanan enak, porsi pas, dan harga terjangkau. Pasti repeat order!",
    date: "2024-08-20",
  },
  {
    id: "t6",
    name: "PT. Global Mandiri",
    event: "Corporate Gathering - 800 Pax",
    rating: 5,
    text: "Profesional dari awal sampai akhir. Tim pramusaji terlatih, makanan disajikan tepat waktu, dan rasa konsisten meskipun untuk 800 porsi. Highly recommended untuk acara korporat.",
    date: "2025-01-10",
  },
];

// ============================================
// BLOG POSTS
// ============================================

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "7 Tips Memilih Catering Pernikahan yang Tepat Tanpa Over-Budget",
    slug: "tips-memilih-catering-pernikahan",
    excerpt:
      "Memilih catering pernikahan bisa jadi overwhelming. Berikut 7 tips praktis agar Anda mendapatkan catering terbaik sesuai budget.",
    content: "",
    author: "Tim Hikmah",
    date: "2025-01-15",
    thumbnail: "/images/blog/wedding-tips.jpg",
    category: "Tips Pernikahan",
    readTime: "5 menit",
  },
  {
    id: "b2",
    title: "Panduan Lengkap Menghitung Porsi Catering untuk Acara Anda",
    slug: "panduan-menghitung-porsi-catering",
    excerpt:
      "Bingung menentukan jumlah porsi? Pelajari rumus praktis menghitung kebutuhan porsi berdasarkan jumlah tamu undangan.",
    content: "",
    author: "Chef Ahmad",
    date: "2025-01-08",
    thumbnail: "/images/blog/porsi-guide.jpg",
    category: "Info Catering",
    readTime: "4 menit",
  },
  {
    id: "b3",
    title: "Tren Menu Pernikahan 2025: Dari Tradisional hingga Fusion",
    slug: "tren-menu-pernikahan-2025",
    excerpt:
      "Tahun 2025 menghadirkan tren baru dalam menu pernikahan. Simak menu-menu yang sedang hits dan digemari pasangan milenial.",
    content: "",
    author: "Tim Hikmah",
    date: "2024-12-20",
    thumbnail: "/images/blog/tren-menu.jpg",
    category: "Tips Pernikahan",
    readTime: "6 menit",
  },
  {
    id: "b4",
    title: "Coffee Break Kantor: Ide Menu yang Membuat Meeting Lebih Produktif",
    slug: "ide-menu-coffee-break-kantor",
    excerpt:
      "Coffee break bukan sekadar makan. Pemilihan menu yang tepat bisa meningkatkan mood dan produktivitas peserta meeting.",
    content: "",
    author: "Tim Hikmah",
    date: "2024-12-10",
    thumbnail: "/images/blog/coffee-break.jpg",
    category: "Info Catering",
    readTime: "3 menit",
  },
];

// ============================================
// SERVICES
// ============================================

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Wedding Catering",
    slug: "wedding",
    description:
      "Layanan katering pernikahan lengkap dengan prasmanan mewah, gubukan, dan dekorasi.",
    longDescription:
      "Wujudkan resepsi pernikahan impian Anda dengan layanan katering premium Hikmah. Kami menyediakan paket all-in-one mulai dari prasmanan mewah, aneka gubukan pilihan, hingga dekorasi elegan. Dengan pengalaman menangani ratusan resepsi, kami menjamin kualitas rasa dan pelayanan terbaik di hari spesial Anda.",
    image: "/images/services/icon_wedding.jpg",
    features: [
      "Prasmanan premium dengan 15+ pilihan menu",
      "Gubukan dan live cooking station",
      "Dekorasi meja dan pelaminan",
      "Pramusaji profesional berseragam",
      "Ice carving & chocolate fountain",
      "Free tasting session sebelum hari H",
    ],
  },
  {
    id: "s2",
    title: "Catering Kantor & Corporate",
    slug: "kantor",
    description:
      "Solusi katering untuk meeting, seminar, dan gathering perusahaan dengan harga kompetitif.",
    longDescription:
      "Hikmah Catering melayani kebutuhan katering korporat dengan standar profesional. Tersedia dalam format nasi box, prasmanan, atau buffet. Kami menyediakan invoice resmi dan struktur harga transparan yang memudahkan proses procurement perusahaan Anda.",
    image: "/images/services/icon_corporate.jpg",
    features: [
      "Nasi box premium & prasmanan",
      "Coffee break & snack box",
      "Invoice resmi & PPN",
      "Pengiriman tepat waktu",
      "Minimum order 30 pax",
      "Diskon untuk kontrak bulanan",
    ],
  },
  {
    id: "s3",
    title: "Aqiqah & Syukuran",
    slug: "aqiqah",
    description:
      "Paket aqiqah lengkap dengan kambing pilihan, masakan tradisional, dan sertifikat resmi.",
    longDescription:
      "Rayakan kelahiran buah hati Anda dengan paket aqiqah terlengkap dari Hikmah Catering. Kami menyediakan kambing pilihan berkualitas, diolah oleh chef berpengalaman menjadi aneka hidangan lezat. Dilengkapi sertifikat aqiqah resmi.",
    image: "/images/services/icon_aqiqah.jpg",
    features: [
      "Kambing pilihan berkualitas",
      "Sertifikat aqiqah resmi",
      "Masakan tradisional autentik",
      "Tumpeng nasi kuning/kebuli",
      "Paket hemat & premium tersedia",
      "Free sate kambing 100 tusuk",
    ],
  },
  {
    id: "s4",
    title: "Nasi Box & Snack Box",
    slug: "nasi-box",
    description:
      "Nasi box dan snack box berkualitas premium untuk berbagai acara dengan kemasan elegan.",
    longDescription:
      "Pilihan praktis untuk acara Anda. Nasi box premium Hikmah dikemas dalam box eksklusif dengan komposisi menu yang seimbang dan bergizi. Cocok untuk pengajian, arisan, meeting singkat, dan acara-acara formal.",
    image: "/images/services/icon_nasibox.jpg",
    features: [
      "Kemasan box premium & eksklusif",
      "4-5 jenis menu per box",
      "Minimum order 30 box",
      "Pengiriman tepat waktu",
      "Label nama custom (opsional)",
      "Harga mulai Rp 25.000/box",
    ],
  },
  {
    id: "s5",
    title: "Prasmanan & Buffet",
    slug: "prasmanan",
    description:
      "Prasmanan lengkap untuk acara besar dengan setup profesional dan menu bervariasi.",
    longDescription:
      "Layanan prasmanan Hikmah Catering hadir dengan setup profesional dan pilihan menu yang bervariasi. Cocok untuk resepsi, syukuran, ulang tahun, dan gathering. Dilengkapi dengan meja prasmanan, alat makan, dan pramusaji terlatih.",
    image: "/images/services/icon_syukuran.jpg",
    features: [
      "Setup prasmanan profesional",
      "10-20+ pilihan menu",
      "Alat makan keramik/melamin premium",
      "Pramusaji berseragam rapi",
      "Bebas refill selama acara",
      "Bersih-bersih after event",
    ],
  },
  {
    id: "s6",
    title: "Coffee Break",
    slug: "coffee-break",
    description:
      "Paket coffee break lengkap dengan kopi, teh, dan aneka kudapan untuk meeting profesional.",
    longDescription:
      "Tingkatkan produktivitas meeting Anda dengan paket coffee break premium. Tersedia aneka pastry, kue tradisional, dan minuman berkualitas. Setup rapi dan profesional yang mencerminkan citra perusahaan Anda.",
    image: "/images/services/icon_coffeebreak.jpg",
    features: [
      "Kopi & teh premium",
      "Aneka pastry & kue",
      "Setup meja coffee break",
      "Minimum order 30 pax",
      "2x coffee break (pagi & siang)",
      "Bisa dikombinasi dengan lunch",
    ],
  },
];

// ============================================
// FAQ
// ============================================

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Berapa minimal order untuk katering?",
    answer:
      "Minimal order bervariasi tergantung paket. Untuk paket Wedding dan prasmanan minimal 100 pax, nasi box minimal 30 box, dan snack box minimal 30 box. Silakan gunakan kalkulator kami untuk simulasi yang lebih detail.",
  },
  {
    question: "Apakah ada biaya tersembunyi?",
    answer:
      "Tidak ada biaya tersembunyi sama sekali. Semua biaya termasuk pajak, ongkir, dan service charge sudah bisa Anda lihat melalui kalkulator biaya kami. Harga yang tertera di kalkulator adalah harga final yang Anda bayar.",
  },
  {
    question: "Berapa DP (Down Payment) yang harus dibayar?",
    answer:
      "DP yang kami kenakan adalah 30% dari total estimasi biaya. Pelunasan dilakukan maksimal H-3 sebelum hari acara.",
  },
  {
    question: "Apakah bisa melakukan food tasting sebelum memesan?",
    answer:
      "Ya, kami menyediakan sesi food tasting gratis untuk pemesanan di atas 300 pax. Untuk pemesanan di bawah 300 pax, food tasting dikenakan biaya Rp 200.000 yang akan dipotong dari DP jika Anda jadi memesan.",
  },
  {
    question: "Wilayah mana saja yang dilayani?",
    answer:
      "Kami melayani area Bandung Raya dan sekitarnya. Untuk wilayah di luar Bandung (radius >50 km), kami tetap melayani dengan tambahan biaya pengiriman. Cek detail zona pengiriman di kalkulator biaya kami.",
  },
  {
    question: "Apakah makanan dijamin halal?",
    answer:
      "Ya, 100% halal. Kami telah tersertifikasi Halal MUI dan memiliki Sertifikat Laik Sehat dari Dinas Kesehatan. Seluruh bahan baku kami peroleh dari supplier terpercaya yang juga tersertifikasi halal.",
  },
  {
    question: "Bagaimana jika jumlah tamu berubah mendadak?",
    answer:
      "Perubahan jumlah tamu dapat dilakukan maksimal H-5 sebelum acara tanpa biaya tambahan. Untuk perubahan mendadak (H-3 atau kurang), akan ada biaya adjustment sebesar 10% dari selisih harga.",
  },
  {
    question: "Apakah tersedia untuk catering harian / bulanan?",
    answer:
      "Ya, kami juga melayani katering harian dan bulanan untuk kantor, pabrik, dan sekolah. Hubungi kami melalui WhatsApp untuk mendapatkan penawaran khusus kontrak bulanan dengan harga spesial.",
  },
];

// ============================================
// EVENT TYPES FOR CALCULATOR
// ============================================

export const EVENT_TYPES = [
  { value: "wedding", label: "Pernikahan / Resepsi" },
  { value: "office", label: "Acara Kantor / Corporate" },
  { value: "aqiqah", label: "Aqiqah" },
  { value: "birthday", label: "Ulang Tahun" },
  { value: "seminar", label: "Seminar / Workshop" },
  { value: "syukuran", label: "Syukuran / Pengajian" },
];

// ============================================
// NAVIGATION
// ============================================

export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Paket", href: "/paket" },
  { label: "Kalkulator", href: "/simulasi" },
  { label: "Galeri", href: "/galeri" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
];
