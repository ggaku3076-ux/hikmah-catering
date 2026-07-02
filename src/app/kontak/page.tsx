"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/data";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Pertanyaan Umum",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Terima kasih ${formData.name}. Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.`);
    setFormData({ name: "", email: "", subject: "Pertanyaan Umum", message: "" });
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero */}
      <section className="py-20 text-center animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hubungi Kami</h1>
          <p className="text-xl text-slate-600">
            Tim layanan pelanggan kami siap membantu Anda merencanakan hidangan terbaik untuk momen spesial Anda.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                
                {/* Cards */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 card-hover flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Alamat Kantor & Dapur</h3>
                    <p className="text-sm text-slate-600">{COMPANY.address}</p>
                  </div>
                </div>

                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 card-hover flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">WhatsApp (Fast Response)</h3>
                    <p className="text-sm text-slate-600">+{COMPANY.whatsapp}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">Online</p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 card-hover flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-sm text-slate-600">{COMPANY.email}</p>
                  </div>
                </a>

                <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 card-hover flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Jam Operasional</h3>
                    <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{COMPANY.operationalHours}</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Form and Map (Right) */}
            <div className="lg:col-span-3 space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              
              {/* Form */}
              <div className="bg-white rounded-3xl p-8 shadow-elevated border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Masukkan nama"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="email@anda.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subjek</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option>Pertanyaan Umum</option>
                      <option>Pemesanan & Simulasi</option>
                      <option>Kerjasama Korporat</option>
                      <option>Komplain / Saran</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan Anda</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tuliskan detail pertanyaan atau kebutuhan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 gradient-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 btn-shine"
                  >
                    Kirim Pesan
                  </button>

                </form>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl p-4 shadow-soft border border-slate-100">
                <div className="aspect-video bg-slate-100 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                  <div className="text-4xl mb-2 relative z-10">📍</div>
                  <h3 className="font-bold text-slate-900 relative z-10">Google Maps</h3>
                  <p className="text-sm text-slate-500 mt-1 relative z-10 max-w-xs text-center">{COMPANY.address}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
