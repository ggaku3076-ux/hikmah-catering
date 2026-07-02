import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket Catering',
  description: 'Pilihan paket catering mulai dari Silver, Gold, hingga Platinum. Sesuai untuk segala jenis acara Anda.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
