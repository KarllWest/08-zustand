import type { Metadata } from "next";
import CreateNoteClient from "./CreateNote.client";
import css from "./CreateNote.module.css";

export const metadata: Metadata = {
  title: "Create a new note in NoteHub.",
  description: "NoteHub — an application for creating and managing notes.",
  openGraph: {
    title: "Create a new note in NoteHub.",
    description: "NoteHub — an application for creating and managing notes.",
    url: "/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <CreateNoteClient />
      </div>
    </main>
  );
}
