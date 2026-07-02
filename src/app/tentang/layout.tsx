import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Mengenal lebih dekat Hikmah Catering, penyedia layanan katering premium terpercaya di Indonesia.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
