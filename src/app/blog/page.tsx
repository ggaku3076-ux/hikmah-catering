"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";

const CATEGORIES = ["Semua", "Tips Pernikahan", "Info Catering", "Inspirasi Menu"];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredPosts = BLOG_POSTS.filter((post) => 
    activeTab === "Semua" ? true : post.category === activeTab
  );

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero */}
      <section className="py-20 text-center bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Artikel & Tips</h1>
          <p className="text-xl text-slate-600">
            Panduan lengkap persiapan acara, tips memilih menu, dan inspirasi hidangan terbaik.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
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

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft card-hover flex flex-col group animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Thumbnail Placeholder */}
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
                   <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-primary-700 text-sm shadow-sm relative z-10">
                     {post.category}
                   </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">{post.author}</span>
                    <span className="text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Tidak ada artikel dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
