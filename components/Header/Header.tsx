"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLink}>
        NoteHub
      </Link>

      <nav>
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link
              href="/"
              className={`${css.navigationLink} ${pathname === "/" ? css.active : ""}`}
            >
              Home
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link
              href="/notes/filter/all"
              className={`${css.navigationLink} ${pathname.startsWith("/notes") ? css.active : ""}`}
            >
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
