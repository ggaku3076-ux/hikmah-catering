"use client";

import { useState } from "react";

// Mock data for gallery
const GALLERY_ITEMS = [
  { id: 1, title: "Resepsi Pernikahan Adat Jawa", category: "Wedding", color: "from-rose-400 to-rose-600", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Buffet Corporate Event", category: "Corporate", color: "from-blue-400 to-blue-600", span: "" },
  { id: 3, title: "Dekorasi VIP Table", category: "Dekorasi", color: "from-amber-400 to-amber-600", span: "" },
  { id: 4, title: "Nasi Tumpeng Kuning", category: "Food", color: "from-yellow-400 to-orange-500", span: "md:row-span-2" },
  { id: 5, title: "Aqiqah Box Premium", category: "Aqiqah", color: "from-emerald-400 to-emerald-600", span: "" },
  { id: 6, title: "Gubukan Kambing Guling", category: "Food", color: "from-orange-500 to-red-600", span: "md:col-span-2" },
  { id: 7, title: "Setup Meja Akad", category: "Dekorasi", color: "from-purple-400 to-purple-600", span: "" },
  { id: 8, title: "Coffee Break Session", category: "Corporate", color: "from-cyan-400 to-blue-500", span: "" },
  { id: 9, title: "Dessert Corner", category: "Food", color: "from-pink-400 to-rose-500", span: "" },
  { id: 10, title: "Rustic Wedding Decoration", category: "Wedding", color: "from-stone-500 to-stone-700", span: "md:col-span-2 md:row-span-2" },
  { id: 11, title: "Peralatan Prasmanan", category: "Dekorasi", color: "from-slate-400 to-slate-600", span: "" },
  { id: 12, title: "Nasi Kotak Event", category: "Corporate", color: "from-indigo-400 to-indigo-600", span: "" },
];

const CATEGORIES = ["Semua", "Wedding", "Corporate", "Aqiqah", "Dekorasi", "Food"];

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => 
    activeTab === "Semua" ? true : item.category === activeTab
  );

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero */}
      <section className="py-20 text-center animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Galeri & Portfolio</h1>
          <p className="text-xl text-slate-600">
            Koleksi momen indah dan hidangan lezat dari berbagai acara yang telah kami layani.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group animate-fade-in-up bg-gradient-to-br ${item.color} ${
                  activeTab === "Semua" ? item.span : "" // Only apply masonry spans if 'Semua' is active to prevent weird layouts
                }`}
                style={{ animationDelay: `${(idx % 10) * 50}ms` }}
              >
                {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white tracking-wide uppercase border border-white/30 z-10">
                  {item.category}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Tidak ada foto dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-4xl w-full">
            <div className={`w-full aspect-video md:aspect-[21/9] rounded-2xl bg-gradient-to-br ${selectedItem.color} relative overflow-hidden mb-6 flex items-center justify-center shadow-2xl`}>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="text-white/50 font-bold text-4xl">FOTO: {selectedItem.title}</div>
            </div>
            
            <div className="text-center text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                {selectedItem.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">{selectedItem.title}</h2>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
