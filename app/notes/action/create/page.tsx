import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create New Note',
  description: 'Add a new note to your collection',
  openGraph: {
    title: 'Create New Note | NoteHub',
    description: 'Add a new note to your collection', 
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg', 
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}