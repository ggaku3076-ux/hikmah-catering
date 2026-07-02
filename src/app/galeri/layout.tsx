import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri & Portfolio',
  description: 'Lihat koleksi foto hidangan, dekorasi, dan momen sukses dari berbagai acara yang telah kami layani.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
