import { Roboto } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import QueryProvider from '@/lib/providers/QueryProvider';

import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          <Header />
          <main>
            {children}
          </main>
          {modal}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}