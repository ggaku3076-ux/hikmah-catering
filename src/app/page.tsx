"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY, PACKAGES, SERVICES, TESTIMONIALS, FAQS } from "@/lib/data";
import {
  SectionHeader,
  TestimonialCard,
  FeatureIconBox,
  AccordionItem,
} from "@/components/ui/SharedComponents";
import { formatRupiah } from "@/lib/utils";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm mb-6 border border-primary-100 shadow-sm">
              ✨ Katering Premium & Terpercaya
            </span>
            <h1 className="text-display text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
              Wujudkan Acara Impian <br className="hidden sm:block" />
              <span className="gradient-text">Tanpa Khawatir Over-Budget</span>
            </h1>
            <p className="text-body-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Simulasikan biaya acara Anda secara transparan. Tidak ada biaya
              tersembunyi. Dapatkan estimasi instan hanya dalam hitungan detik.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/simulasi"
                className="w-full sm:w-auto gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 btn-shine"
              >
                Hitung Biaya Sekarang
              </Link>
              <Link
                href="/paket"
                className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:shadow-md transition-all duration-200"
              >
                Lihat Paket
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto stagger-children">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-soft border border-slate-100">
                <div className="text-3xl font-extrabold text-primary-600 mb-1">
                  2500+
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Acara Sukses
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-soft border border-slate-100">
                <div className="text-3xl font-extrabold text-primary-600 mb-1">
                  1800+
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Klien Bahagia
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-soft border border-slate-100 col-span-2 md:col-span-1">
                <div className="text-3xl font-extrabold text-primary-600 mb-1 flex justify-center items-center gap-1">
                  4.9
                  <svg
                    className="w-6 h-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-slate-500">
                  Rating Rata-rata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Layanan Kami"
            title="Satu Solusi Untuk Semua Acara"
            subtitle="Apapun jenis acara Anda, Hikmah Catering siap menyajikan hidangan lezat dengan pelayanan profesional."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/layanan#${service.slug}`}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-soft card-hover border border-slate-100 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-transform relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 line-clamp-2">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Paket Pilihan"
            title="Penawaran Terbaik Kami"
            subtitle="Pilih paket dasar, lalu sesuaikan dengan kebutuhan dan budget acara Anda di kalkulator kami."
          />
          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {PACKAGES.filter((p) => ["silver", "gold", "platinum"].includes(p.id)).map(
              (pkg, idx) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-3xl p-8 border ${
                    pkg.popular
                      ? "ring-2 ring-primary-500 shadow-elevated relative lg:-mt-4 lg:mb-4 bg-gradient-to-b from-white to-primary-50/30"
                      : "border-slate-200 shadow-soft"
                  } transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                      Paling Diminati
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 h-10">
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {formatRupiah(pkg.basePrice)}
                    </span>
                    <span className="text-slate-500 font-medium"> / pax</span>
                    <div className="text-sm text-slate-400 mt-1">
                      Min. {pkg.minPax} pax
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.included.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <svg
                          className="w-5 h-5 text-primary-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/simulasi?paket=${pkg.id}`}
                    className={`block w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all duration-200 ${
                      pkg.popular
                        ? "gradient-primary text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                        : "bg-primary-50 text-primary-700 hover:bg-primary-100"
                    }`}
                  >
                    Gunakan di Kalkulator
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                badge="Mengapa Kami"
                title="Kualitas Terbaik untuk Momen Terbaik"
                subtitle="Kami memahami betapa pentingnya acara Anda. Itulah mengapa kami tidak pernah berkompromi soal kualitas dan rasa."
                center={false}
                light
              />
              <div className="space-y-4">
                <FeatureIconBox
                  icon="🥬"
                  title="Bahan Baku Segar Pilihan"
                  description="Kami menggunakan bahan-bahan segar setiap hari, disuplai oleh mitra terpercaya untuk menjaga kualitas dan cita rasa autentik."
                />
                <FeatureIconBox
                  icon="👨‍🍳"
                  title="Chef Berpengalaman"
                  description="Tim dapur kami dipimpin oleh Executive Chef yang telah berpengalaman puluhan tahun di industri hospitality dan hotel bintang lima."
                />
                <FeatureIconBox
                  icon="☪️"
                  title="100% Halal Bersertifikat"
                  description="Seluruh proses dan bahan masakan kami telah mendapatkan sertifikat Halal resmi dari MUI. Kebersihan terjamin."
                />
                <FeatureIconBox
                  icon="⏰"
                  title="Tepat Waktu & Profesional"
                  description="Manajemen waktu yang ketat memastikan hidangan siap tepat waktu. Tim pramusaji kami melayani dengan senyuman."
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-800 to-slate-800 p-8 flex flex-col justify-center relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                 <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center leading-tight">
                    "Hidangan Lezat Adalah Kunci Kesuksesan Sebuah Acara"
                 </h3>
                 <p className="text-primary-200 text-center text-lg max-w-sm mx-auto">
                    Biarkan kami mengurus konsumsinya, agar Anda bisa fokus menikmati momen bahagia bersama tamu undangan.
                 </p>
                 <div className="mt-12 flex justify-center">
                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium border border-white/20">
                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                     Siap Melayani Acara Anda
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 lg:py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Cara Kerja"
            title="Pesan Katering Tanpa Ribet"
            subtitle="Hanya 4 langkah mudah untuk mewujudkan hidangan impian di acara Anda."
          />
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-100 via-primary-400 to-primary-100 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {[
                { step: 1, title: "Pilih Paket", desc: "Jelajahi opsi paket yang sesuai jenis acara", icon: "📦" },
                { step: 2, title: "Hitung Estimasi", desc: "Gunakan kalkulator pintar kami untuk rincian biaya", icon: "🧮" },
                { step: 3, title: "Pesan via WA", desc: "Kirim hasil simulasi langsung ke admin kami", icon: "💬" },
                { step: 4, title: "Acara Sukses", desc: "Duduk manis dan nikmati hidangan lezat", icon: "🎉" }
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white shadow-soft border border-slate-100 flex items-center justify-center text-4xl mb-6 relative group">
                    {item.icon}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/simulasi"
              className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Mulai Langkah Pertama
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Apa Kata Mereka"
            title="Ribuan Klien Telah Membuktikan"
            subtitle="Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka bersama Hikmah Catering."
          />
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/testimonial"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Lihat Semua Ulasan →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Pertanyaan Umum"
          />
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
