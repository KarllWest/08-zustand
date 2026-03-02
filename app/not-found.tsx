import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | NoteHub',
  description: 'Sorry, the page you are looking for does not exist.',
  openGraph: {
    title: '404 - Page Not Found',
    description: 'The requested page was not found on NoteHub.',
    url: 'https://your-vercel-domain.vercel.app/404',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>We couldn't find the page you're looking for.</p>
      <Link 
        href="/" 
        style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}
      >
        Go back to Home
      </Link>
    </main>
  );
}