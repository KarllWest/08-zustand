'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SidebarNotes.module.css'; 

const VALID_TAGS = ['all', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menuList}>
          {VALID_TAGS.map((tag) => {
            const href = `/notes/filter/${tag}`;
            const isActive = pathname === href;

            return (
              <li key={tag} className={styles.menuItem}>
                <Link 
                  href={href} 
                  className={`${styles.menuLink} ${isActive ? styles.active : ''}`}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}