"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-slate-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Link href="/blog" className="px-6 py-3 gradient-primary text-white rounded-xl font-semibold">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-slate-500 mb-8 animate-fade-in">
          <Link href="/" className="hover:text-primary-600">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 truncate">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12 animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 font-bold text-sm rounded-lg mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="text-slate-900">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Hero Image / Placeholder */}
        <div className="aspect-[21/9] w-full rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 mb-12 flex items-center justify-center shadow-soft relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <span className="text-primary-700/50 font-bold text-2xl tracking-widest uppercase">Gambar Artikel</span>
        </div>

        {/* Article Content - Simulated */}
        <article className="prose prose-lg prose-slate max-w-none animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p className="lead text-xl text-slate-600 mb-8">
            {post.excerpt}
          </p>
          <p className="mb-6">
            Merencanakan sebuah acara yang sukses membutuhkan persiapan yang matang, terutama dalam hal konsumsi. Makanan seringkali menjadi pusat perhatian dan bahan pembicaraan para tamu setelah acara selesai. Oleh karena itu, memilih layanan katering yang tepat dan menentukan menu yang pas adalah langkah krusial.
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Langkah Pertama yang Harus Diperhatikan</h3>
          <p className="mb-6">
            Sebelum memutuskan paket mana yang akan diambil, pastikan Anda sudah mengetahui jumlah perkiraan tamu undangan. Jangan lupa untuk menambahkan margin sekitar 10-20% untuk mengantisipasi tamu tak terduga. Di Hikmah Catering, kami selalu menyarankan klien untuk menggunakan fitur <strong>Kalkulator Simulasi Biaya</strong> kami agar estimasi anggaran lebih akurat.
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl my-8">
            <p className="text-primary-900 italic font-medium m-0">
              "Kunci dari acara yang sukses bukan hanya seberapa mewah dekorasinya, melainkan seberapa puas tamu menikmati hidangan yang disajikan."
            </p>
          </div>
          <p className="mb-6">
            Selain hidangan utama (buffet), kehadiran gubukan atau <em>live station</em> juga sangat penting. Gubukan memberikan variasi dan menghidupkan suasana acara karena tamu bisa memilih dan melihat langsung proses penyajian makanan favorit mereka, seperti Kambing Guling atau Sate Ayam.
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Kesimpulan</h3>
          <p className="mb-6">
            Jangan ragu untuk berkonsultasi dengan tim spesialis katering kami. Kami di Hikmah Catering siap membantu Anda merancang menu terbaik yang tidak hanya lezat dan Halal, tetapi juga sesuai dengan budget acara Anda.
          </p>
        </article>

        {/* Share & Tags */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">Tips</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">Catering</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
            <span>Bagikan:</span>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Artikel Terkait</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <Link 
              key={rel.id} 
              href={`/blog/${rel.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-soft card-hover flex flex-col group"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400 font-bold text-sm">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
                {rel.category}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{rel.title}</h4>
                <div className="mt-auto text-xs font-medium text-slate-500 flex items-center justify-between">
                  <span>{rel.date}</span>
                  <span className="text-primary-600">Baca →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
