import { Metadata } from 'next';
import NoteForm from '@/components/NoteForm/NoteForm';

export const metadata: Metadata = {
  title: 'Create New Note | NoteHub',
  description: 'Create a new note to stay organized.',
  openGraph: {
    title: 'Create New Note | NoteHub',
    description: 'Create a new note to stay organized.',
    url: 'https://notehub-public.goit.study/notes/action/create', 
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'NoteHub Create Note',
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main>
      <h1>Create New Note</h1>
      <NoteForm />
    </main>
  );
}