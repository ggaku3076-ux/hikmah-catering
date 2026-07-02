import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonial & Ulasan',
  description: 'Apa kata pelanggan tentang layanan Hikmah Catering? Baca pengalaman nyata mereka di sini.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
