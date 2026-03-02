import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css'; 

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Your notes application',
  openGraph: {
    title: 'NoteHub',
    description: 'Manage your notes',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'], 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}