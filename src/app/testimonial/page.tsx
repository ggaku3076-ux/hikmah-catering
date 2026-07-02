"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { TestimonialCard } from "@/components/ui/SharedComponents";

export default function TestimonialPage() {
  const [sortBy, setSortBy] = useState<"terbaru" | "rating">("terbaru");

  const sortedTestimonials = [...TESTIMONIALS].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    // Simple mock sort by date (assuming id represents recency for this mock)
    return b.id.localeCompare(a.id);
  });

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero with Stats */}
      <section className="bg-slate-900 py-20 lg:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ulasan Pelanggan</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
              Lebih dari ribuan acara sukses ditangani. Berikut adalah cerita mereka bersama Hikmah Catering.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto -mb-32">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-extrabold text-primary-600 mb-2 flex items-center justify-center gap-2">
                4.9
                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-slate-500 font-medium">Rating Rata-rata</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-extrabold text-primary-600 mb-2">2500+</div>
              <div className="text-slate-500 font-medium">Acara Sukses</div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-6 shadow-xl border border-primary-400 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-extrabold mb-2">520+</div>
              <div className="text-primary-100 font-medium">Ulasan Positif</div>
            </div>
          </div>
        </div>
      </section>

      {/* spacer for floating cards */}
      <div className="h-24 sm:h-32 bg-slate-50"></div>

      {/* Content */}
      <section className="bg-slate-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Semua Ulasan</h2>
            <div className="flex bg-white rounded-xl shadow-sm border border-slate-200 p-1">
              <button
                onClick={() => setSortBy("terbaru")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === "terbaru" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Terbaru
              </button>
              <button
                onClick={() => setSortBy("rating")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === "rating" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Rating Tertinggi
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
