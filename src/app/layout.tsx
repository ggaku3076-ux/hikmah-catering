import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hikmah Catering - Premium Catering & Wedding Services",
    template: "%s | Hikmah Catering",
  },
  description:
    "Layanan katering premium untuk pernikahan, acara kantor, dan kebutuhan spesial Anda. Hitung estimasi biaya dalam hitungan detik. Transparan, tanpa biaya tersembunyi.",
  keywords: [
    "catering bandung",
    "catering pernikahan",
    "catering kantor",
    "wedding catering",
    "nasi box",
    "prasmanan",
    "aqiqah",
    "catering murah",
    "catering premium",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Hikmah Catering",
    title: "Hikmah Catering - Premium Catering & Wedding Services",
    description:
      "Wujudkan acara impian tanpa khawatir over-budget. Hitung pasti biaya acaramu dalam hitungan detik.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans relative overflow-x-hidden bg-slate-50">
        
        {/* Abstract Rainbow Mesh Gradient Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-[-10%] left-[10%] w-[55%] h-[55%] bg-emerald-400/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-[10%] right-[20%] w-[40%] h-[40%] bg-amber-400/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '11s', animationDelay: '1.5s' }}></div>
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
