// Data global untuk aplikasi HTML

const COMPANY = {
  name: "Hikmah Catering",
  address: "Jl. Kebahagiaan No. 123, Jakarta Selatan",
  whatsapp: "6281234567890", // Tanpa + atau 0 di depan
  email: "halo@hikmahcatering.com",
  operationalHours: "Senin - Minggu\n08:00 - 20:00 WIB",
};

const SERVICES = [
  {
    id: "wedding",
    slug: "wedding",
    title: "Pernikahan & Resepsi",
    icon: "💍",
    description: "Paket lengkap untuk momen bahagia Anda dengan hidangan elegan dan dekorasi menawan.",
    longDescription: "Jadikan momen sekali seumur hidup Anda tidak terlupakan dengan hidangan premium dari Hikmah Catering. Kami menyediakan berbagai pilihan menu buffet, gubukan, hingga VIP set menu yang disesuaikan dengan tema pernikahan Anda.",
    features: ["Food Tasting Gratis", "Dekorasi Buffet Premium", "Pramusaji Berpengalaman", "Peralatan Makan VIP"],
  },
  {
    id: "corporate",
    slug: "corporate",
    title: "Acara Perusahaan",
    icon: "🏢",
    description: "Solusi konsumsi profesional untuk rapat, seminar, dan perayaan kantor.",
    longDescription: "Tingkatkan citra perusahaan Anda melalui sajian profesional dan berkualitas. Mulai dari coffee break seminar, lunch box meeting, hingga buffet makan malam perayaan ulang tahun perusahaan.",
    features: ["Ketepatan Waktu 100%", "Variasi Menu Nusantara & Western", "Menu Diet/Vegetarian (Opsional)", "Layanan Coffee Break"],
  },
  {
    id: "syukuran",
    slug: "syukuran",
    title: "Syukuran & Keluarga",
    icon: "👨‍👩‍👧‍👦",
    description: "Hidangan hangat bernuansa kekeluargaan untuk merayakan momen spesial.",
    longDescription: "Rayakan momen kelulusan, khitanan, rumah baru, atau arisan dengan aneka hidangan lezat rumahan yang diolah dengan standar kebersihan dan rasa bintang lima.",
    features: ["Cita Rasa Autentik", "Paket Tumpeng Premium", "Bisa Custom Menu", "Porsi Mengenyangkan"],
  },
  {
    id: "aqiqah",
    slug: "aqiqah",
    title: "Aqiqah",
    icon: "🐐",
    description: "Layanan aqiqah syar'i lengkap dengan pemotongan, masak, dan box premium.",
    longDescription: "Tunaikan ibadah aqiqah buah hati Anda tanpa repot. Kami memastikan kambing sehat, disembelih secara syar'i, dan dimasak tanpa bau prengus menjadi hidangan sate, gulai, atau tongseng yang lezat.",
    features: ["Sertifikat & Dokumentasi", "Kambing Bebas Pilih", "Rasa Tidak Prengus", "Box Premium Elegan"],
  },
];

const PACKAGES = [
  {
    id: "silver",
    name: "Silver",
    slug: "silver",
    type: ["wedding", "syukuran", "corporate"],
    basePrice: 50000,
    minPax: 100,
    popular: false,
    description: "Paket hemat dengan cita rasa premium. Cocok untuk acara keluarga dan syukuran dengan budget terjangkau.",
    menuItems: [
      { category: "Nasi", items: ["Nasi Putih Pulen", "Nasi Kuning"] },
      { category: "Lauk Utama", items: ["Ayam Goreng Kremes", "Rendang Daging"] },
      { category: "Lauk Pendamping", items: ["Perkedel Kentang", "Tempe Orek"] },
      { category: "Sayur", items: ["Sayur Asem", "Capcay"] },
      { category: "Pelengkap", items: ["Sambal", "Kerupuk Udang", "Buah Potong", "Air Mineral"] },
    ],
    included: ["Pramusaji", "Alat makan standar", "Meja prasmanan", "Pengiriman gratis radius 10 km"],
  },
  {
    id: "gold",
    name: "Gold",
    slug: "gold",
    type: ["wedding", "syukuran", "corporate", "aqiqah"],
    basePrice: 65000,
    minPax: 100,
    popular: true,
    description: "Pilihan terfavorit dengan variasi menu yang lebih kaya. Sangat direkomendasikan untuk resepsi pernikahan menengah.",
    menuItems: [
      { category: "Nasi", items: ["Nasi Putih", "Nasi Goreng Spesial"] },
      { category: "Lauk Daging", items: ["Sapi Lada Hitam", "Dendeng Balado"] },
      { category: "Lauk Ayam", items: ["Ayam Bakar Madu", "Ayam Suwir Bali"] },
      { category: "Lauk Ikan", items: ["Gurame Asam Manis"] },
      { category: "Pelengkap", items: ["Sop Kimlo", "Es Buah", "Pudding", "Kerupuk & Sambal"] },
    ],
    included: ["Pramusaji berseragam VIP", "Peralatan makan porselen", "Dekorasi buffet bunga segar", "Meja VIP (2 buah)"],
  },
  {
    id: "platinum",
    name: "Platinum",
    slug: "platinum",
    type: ["wedding", "corporate"],
    basePrice: 95000,
    minPax: 200,
    popular: false,
    description: "Pengalaman kuliner mewah yang memanjakan tamu VIP Anda dengan sajian berkelas dan pelayanan paripurna.",
    menuItems: [
      { category: "Nasi", items: ["Nasi Putih", "Nasi Kebuli / Biryani"] },
      { category: "Daging Premium", items: ["Rib Eye Steak Minis", "Kambing Guling (Porsi Buffet)"] },
      { category: "Seafood", items: ["Udang Mayonnaise", "Kakap Merah Saus Mangga"] },
      { category: "Ayam/Bebek", items: ["Bebek Panggang Hongkong"] },
      { category: "Pelengkap", items: ["Salad Bar", "Aneka Dessert & Cake", "Juice Station"] },
    ],
    included: ["Area Manager in-charge", "Dekorasi buffet & gubukan tematik eksklusif", "Free food tasting (6 orang)", "Peralatan makan VIP Gold/Silver"],
  },
];

const ADDONS = [
  { id: "kambing-guling", name: "Kambing Guling + Lontong", category: "gubukan", price: 3500000, unit: "/ ekor (50 pax)" },
  { id: "sate-ayam", name: "Sate Ayam Madura", category: "gubukan", price: 25000, unit: "/ pax (isi 5)" },
  { id: "dimsum", name: "Dimsum & Siomay", category: "gubukan", price: 20000, unit: "/ pax (isi 4)" },
  { id: "zuppa-soup", name: "Zuppa Soup", category: "gubukan", price: 30000, unit: "/ pax" },
  { id: "es-puter", name: "Es Puter / Es Krim", category: "gubukan", price: 15000, unit: "/ pax" },
  { id: "kursi-futura", name: "Kursi Futura + Cover", category: "logistik", price: 15000, unit: "/ buah" },
  { id: "tenda", name: "Tenda Plafon Putih", category: "logistik", price: 50000, unit: "/ meter" },
  { id: "misty-fan", name: "Kipas Blower (Misty Fan)", category: "logistik", price: 400000, unit: "/ unit" },
  { id: "dekor-mini", name: "Mini Garden Area Buffet", category: "dekorasi", price: 750000, unit: "/ set" },
  { id: "akustik", name: "Acoustic Band (3 Personil + Sound)", category: "entertainment", price: 3500000, unit: "/ event" },
  { id: "mc", name: "MC Profesional", category: "entertainment", price: 1500000, unit: "/ event" },
  { id: "waiter-extra", name: "Pramusaji Tambahan", category: "pelayanan", price: 250000, unit: "/ orang (8 jam)" },
];

const DELIVERY_ZONES = [
  { id: "z-selatan", name: "Jakarta Selatan", cost: 0 },
  { id: "z-pusat", name: "Jakarta Pusat", cost: 150000 },
  { id: "z-timur", name: "Jakarta Timur", cost: 200000 },
  { id: "z-barat", name: "Jakarta Barat", cost: 200000 },
  { id: "z-utara", name: "Jakarta Utara", cost: 250000 },
  { id: "z-depok", name: "Depok", cost: 150000 },
  { id: "z-tangsel", name: "Tangerang Selatan", cost: 150000 },
  { id: "z-bekasi", name: "Bekasi", cost: 300000 },
];

const EVENT_TYPES = [
  { value: "wedding", label: "Pernikahan (Wedding)" },
  { value: "corporate", label: "Kantor (Corporate)" },
  { value: "syukuran", label: "Syukuran / Keluarga" },
  { value: "aqiqah", label: "Aqiqah" },
];

const TESTIMONIALS = [
  {
    id: "1",
    name: "Ibu Anisa",
    event: "Resepsi Pernikahan",
    date: "12 Mei 2025",
    rating: 5,
    quote: "Luar biasa! Makanannya enak sekali terutama Kambing Gulingnya ludes dalam sekejap. Tamu-tamu pada memuji.",
  },
  {
    id: "2",
    name: "Bapak Budi (HR PT XYZ)",
    event: "Gathering Perusahaan",
    date: "28 April 2025",
    rating: 5,
    quote: "Sangat profesional. Datang tepat waktu, presentasi buffet rapi, dan rasanya konsisten enak. Pasti akan pesan lagi.",
  },
  {
    id: "3",
    name: "Keluarga dr. Rahman",
    event: "Aqiqah Anak",
    date: "10 Maret 2025",
    rating: 4,
    quote: "Gulai dan satenya sama sekali tidak bau prengus. Boxnya juga terlihat premium dan elegan saat dibagikan ke tetangga.",
  },
];

const FAQS = [
  {
    question: "Berapa minimal pemesanan (pax) di Hikmah Catering?",
    answer: "Minimal pemesanan bervariasi tergantung paket. Untuk paket Silver dan Gold minimal 100 pax, sedangkan Platinum minimal 200 pax. Kami juga menerima pesanan di bawah 100 pax dengan penyesuaian harga.",
  },
  {
    question: "Apakah bisa test food (mencicipi makanan) sebelum memesan?",
    answer: "Tentu bisa! Kami menyediakan sesi Food Tasting gratis untuk calon klien wedding (maksimal 4 orang) yang bisa dijadwalkan setiap akhir pekan di dapur kami.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Untuk mengunci tanggal, diperlukan Down Payment (DP) sebesar 30%. Sisa pelunasan sebesar 70% dibayarkan maksimal H-3 sebelum acara berlangsung.",
  },
  {
    question: "Apakah menu bisa di-custom / disesuaikan?",
    answer: "Sangat bisa. Anda dapat menukar lauk atau sayur dengan menu lain yang setara. Tim kami akan membantu menyesuaikan menu dengan selera dan tradisi keluarga Anda.",
  },
];

// Helper Function
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
}
