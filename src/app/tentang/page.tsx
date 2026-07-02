"use client";

import { SectionHeader } from "@/components/ui/SharedComponents";

const TIMELINE = [
  { year: "2015", title: "Awal Mula", desc: "Didirikan dari dapur rumahan dengan passion memasak dan komitmen kualitas." },
  { year: "2017", title: "100 Acara Pertama", desc: "Mencapai milestone melayani 100 acara resepsi pertama dengan sukses." },
  { year: "2019", title: "Sertifikasi Halal", desc: "Mendapat sertifikat Halal MUI resmi untuk seluruh dapur dan operasional." },
  { year: "2021", title: "1000+ Acara", desc: "Dipercaya oleh lebih dari 1000 keluarga dan institusi." },
  { year: "2023", title: "Ekspansi Corporate", desc: "Memperluas layanan untuk klien korporat besar dan multinasional." },
  { year: "2025", title: "Transformasi Digital", desc: "Meluncurkan platform digital dengan kalkulator biaya real-time pertama." },
];

const CLIENTS = [
  "PT Bank XYZ", "Telkomsel", "Pertamina", "Unilever", 
  "Universitas Indonesia", "Kementerian Keuangan", "Gojek", "Tokopedia"
];

const TEAM = [
  { name: "Chef Ahmad", role: "Head Chef", initial: "A" },
  { name: "Ibu Sari", role: "Operations Manager", initial: "S" },
  { name: "Pak Dedi", role: "Logistics Head", initial: "D" },
];

export default function TentangPage() {
  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Tentang Hikmah Catering</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Berawal dari passion, berkembang menjadi kepercayaan ribuan keluarga Indonesia.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-4">Visi Kami</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-16">
            "Menjadi penyedia layanan katering terpercaya dan terdepan di Indonesia."
          </p>
          
          <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-8">Misi Kami</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 font-bold">1</div>
              <p className="text-slate-700 font-medium">Menyajikan hidangan berkualitas tinggi dengan bahan segar dan 100% Halal.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 font-bold">2</div>
              <p className="text-slate-700 font-medium">Memberikan pelayanan prima dan profesional di setiap kesempatan.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 font-bold">3</div>
              <p className="text-slate-700 font-medium">Terus berinovasi menghadirkan solusi katering yang efisien dan transparan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Perjalanan" title="Sejarah Kami" />
          
          <div className="relative border-l-2 border-primary-200 md:border-l-0 ml-4 md:ml-0">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {TIMELINE.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-50 z-10"></div>
                    
                    <div className="hidden md:block w-[45%]"></div>
                    
                    {/* Content */}
                    <div className="w-full md:w-[45%] pl-8 md:pl-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className={`bg-white p-6 rounded-2xl shadow-soft border border-slate-100 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 font-bold text-sm rounded-lg mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Legalitas" title="Sertifikasi Resmi" subtitle="Keamanan dan kehalalan hidangan Anda adalah jaminan kami." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📄", title: "NIB & Izin Usaha", no: "1234.5678.9012" },
              { icon: "☪️", title: "Halal MUI", no: "ID1234567890123" },
              { icon: "🏥", title: "Laik Sehat Dinkes", no: "440/123/Kesmas" }
            ].map((cert, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center flex flex-col items-center card-hover">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-lg text-slate-900">{cert.title}</h3>
                <p className="text-slate-500 mt-1 font-mono text-sm">{cert.no}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Klien Kami" title="Dipercaya Oleh" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {CLIENTS.map((client, i) => (
              <div key={i} className="h-24 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-4 text-center font-bold text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-primary-600 transition-all duration-300 shadow-sm">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Tim Kami" title="Di Balik Layar Hikmah" />
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl text-white font-bold mb-4 shadow-lg group-hover:scale-105 transition-transform">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
