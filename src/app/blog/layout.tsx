import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Tips',
  description: 'Artikel, tips persiapan pernikahan, dan informasi seputar katering.'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
