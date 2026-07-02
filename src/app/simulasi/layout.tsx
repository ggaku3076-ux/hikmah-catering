import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator Biaya Catering',
  description: 'Hitung estimasi biaya catering acara Anda secara real-time. Transparan, akurat, dan tanpa biaya tersembunyi.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
