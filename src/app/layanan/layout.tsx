import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Layanan katering komprehensif untuk pernikahan, acara kantor, aqiqah, dan berbagai kebutuhan spesifik Anda.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
