import { fetchNoteById } from '@/lib/api'; 
import NoteDetails from './NoteDetails.client';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return { title: note.title };
}

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteDetails note={note} />;
}