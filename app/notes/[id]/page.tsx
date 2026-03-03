import { Metadata } from 'next';
import { fetchNoteById } from '@/lib/api';
import NoteDetails from './NoteDetails.client';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return {
    title: note.title,
    description: note.content.substring(0, 160),
    openGraph: {
      title: note.title,
      description: note.content.substring(0, 160),
      url: `/notes/${id}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        },
      ],
    },
  };
}

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return <NoteDetails note={note} />;
}