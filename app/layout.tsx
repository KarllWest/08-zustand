import type { Metadata } from 'next'; 
import { Roboto } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import QueryProvider from '@/lib/providers/QueryProvider';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | NoteHub',
    default: 'NoteHub - Your Personal Notes',
  },
  description: 'Manage your notes efficiently with NoteHub.',
  openGraph: {
    title: 'NoteHub',
    description: 'The best place to keep your thoughts organized.',
    url: 'https://notehub.example.com', 
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body suppressHydrationWarning>
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {modal}
        </QueryProvider>
      </body>
    </html>
  );
}