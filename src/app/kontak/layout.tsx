import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi tim Hikmah Catering untuk konsultasi gratis, pemesanan, atau pertanyaan seputar layanan katering kami.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
