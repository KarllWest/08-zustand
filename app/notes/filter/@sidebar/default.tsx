import Link from "next/link";
import css from "./SidebarNotes.module.css";

const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function Default() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Link href="/notes/filter/all" className={css.link}>
          All notes
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag} className={css.item}>
          <Link href={`/notes/filter/${tag}`} className={css.link}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
