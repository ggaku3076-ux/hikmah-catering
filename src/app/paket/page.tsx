"use client";

import { useState } from "react";
import Link from "next/link";
import { PACKAGES, EVENT_TYPES } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";

export default function PaketPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeFilter === "all") return true;
    return pkg.type.includes(activeFilter as any);
  });

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero */}
      <section className="py-20 text-center animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Pilihan Paket Katering</h1>
          <p className="text-xl text-slate-600">
            Temukan paket yang paling sesuai dengan kebutuhan acara dan anggaran Anda.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "gradient-primary text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Semua
            </button>
            {EVENT_TYPES.map((type) => (
              <button
                key={type.value}
                onClick={() => setActiveFilter(type.value)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === type.value
                    ? "gradient-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Package Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {filteredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl p-8 border animate-fade-in-up ${
                  pkg.popular
                    ? "ring-2 ring-primary-500 shadow-elevated relative bg-gradient-to-b from-white to-primary-50/20"
                    : "border-slate-200 shadow-soft"
                } transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                    Paling Diminati
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm mb-6 h-10 line-clamp-2">
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {formatRupiah(pkg.basePrice)}
                  </span>
                  <span className="text-slate-500 font-medium"> / pax</span>
                  <div className="text-sm text-slate-400 mt-1">
                    Min. pemesanan: {pkg.minPax} pax
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 text-sm">
                  <div className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Menu Termasuk:</div>
                  
                  {/* Extracting categories to show briefly */}
                  {pkg.menuItems.slice(0, 3).map((menu, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600">
                      <span className="font-semibold text-slate-700 capitalize shrink-0 w-24">{menu.category}:</span>
                      <span className="line-clamp-1">{menu.items.join(", ")}</span>
                    </div>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <div className="font-semibold text-slate-900 mb-3">Fasilitas & Layanan:</div>
                    <ul className="space-y-3">
                      {pkg.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link
                  href={`/simulasi?paket=${pkg.id}`}
                  className={`block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all duration-200 mt-auto ${
                    pkg.popular
                      ? "gradient-primary text-white shadow-md hover:shadow-lg hover:scale-[1.02] btn-shine"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Simulasikan Harga
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ingin melihat perincian biaya lebih detail?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto relative z-10">
              Gunakan kalkulator pintar kami untuk mensimulasikan biaya lengkap dengan tambahan gubukan, pajak, dan ongkos kirim.
            </p>
            <Link
              href="/simulasi"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 hover:scale-105 transition-transform duration-300 shadow-lg relative z-10"
            >
              Coba Kalkulator Sekarang
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
