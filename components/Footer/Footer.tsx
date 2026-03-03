import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <span>© 2026 NoteHub</span>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}