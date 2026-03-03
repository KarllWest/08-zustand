import { Metadata } from 'next'; 
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = slug?.[0] || 'all';
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${capitalized} Notes`,
    description: `View all notes in ${category} category`,
    openGraph: {
      title: `${capitalized} Notes | NoteHub`,
      description: `Browse your ${category} notes collection.`,
      images: [{ url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg' }],
    },
  };
}

export default async function FilterPage({ params }: Props) {
  const { slug } = await params;
  const category = slug?.[0] || 'all';

  return <NotesClient category={category} />;
}